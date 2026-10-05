import subprocess
import os

SCENES = [
    ("video_assets/scenes/scene_1.jpg", 6.3),
    ("video_assets/scenes/scene_2.jpg", 8.5),
    ("video_assets/scenes/scene_3a.jpg", 3.4),
    ("video_assets/scenes/scene_3b.jpg", 3.3),
    ("video_assets/scenes/scene_3c.jpg", 3.3),
    ("video_assets/scenes/scene_4.jpg", 13.9),
    ("video_assets/scenes/scene_5.jpg", 8.4),
    ("video_assets/scenes/scene_6.jpg", 12.1),
]

CLIPS_DIR = "video_assets/clips"
os.makedirs(CLIPS_DIR, exist_ok=True)

# 1. Generar clips individuales estilo diapositiva PPTX nítida con transición suave
concat_list_path = "video_assets/concat_list.txt"
with open(concat_list_path, "w") as f:
    for idx, (img_path, duration) in enumerate(SCENES):
        clip_path = f"{CLIPS_DIR}/clip_{idx}.mp4"

        # Transición suave estilo diapositiva (0.25s fade in / fade out) para máxima legibilidad
        filter_str = f"fade=t=in:st=0:d=0.25,fade=t=out:st={duration - 0.25:.2f}:d=0.25"

        cmd = [
            "ffmpeg", "-y",
            "-loop", "1",
            "-i", img_path,
            "-vf", filter_str,
            "-t", str(duration),
            "-c:v", "libx264",
            "-pix_fmt", "yuv420p",
            "-r", "30",
            clip_path
        ]
        print(f"Renderizando diapositiva {idx+1}/{len(SCENES)}: {clip_path} ({duration}s)...")
        subprocess.run(cmd, check=True)
        f.write(f"file '{os.path.abspath(clip_path)}'\n")

print("Concatenando diapositivas con pista de audio y música de fondo...")

# 2. Mezclar locución (100% volumen) + música de fondo (12% volumen con fade out)
merged_video_raw = "video_assets/video_raw.mp4"
subprocess.run([
    "ffmpeg", "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", concat_list_path,
    "-c", "copy",
    merged_video_raw
], check=True)

output_final = "public/video_kotai_oficial.mp4"
audio_filter = "[1:a]volume=1.0[vocal];[2:a]volume=0.12,afade=t=out:st=56.0:d=3.0[music];[vocal][music]amix=inputs=2:duration=first:dropout_transition=2[aout]"

cmd_final = [
    "ffmpeg", "-y",
    "-i", merged_video_raw,
    "-i", "video_assets/locucion.mp3",
    "-i", "video_assets/musica_fondo.ogg",
    "-filter_complex", audio_filter,
    "-map", "0:v",
    "-map", "[aout]",
    "-c:v", "libx264",
    "-preset", "medium",
    "-crf", "18",
    "-c:a", "aac",
    "-b:a", "192k",
    "-movflags", "+faststart",
    "-t", "59.2",
    output_final
]

print("Renderizando video final:", output_final)
subprocess.run(cmd_final, check=True)
print("¡VIDEO PRESENTACIÓN ACTUALIZADO EXITOSAMENTE EN:", output_final)

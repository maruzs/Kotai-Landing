"""Decode the whole export, check technical properties, and sample the final MP4."""
from pathlib import Path
import json
import re
import subprocess
import sys
from PIL import Image, ImageDraw, ImageOps
import imageio_ffmpeg

HERE = Path(__file__).resolve().parent
OUTPUT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else HERE / 'renders/Kotai-Mejorando-juntos-1080p.mp4'
FF = imageio_ffmpeg.get_ffmpeg_exe()
review = HERE / 'review'
review.mkdir(exist_ok=True)
result = subprocess.run([
    FF, '-hide_banner', '-i', str(OUTPUT), '-vf', 'blackdetect=d=0.4:pix_th=0.04',
    '-af', 'volumedetect', '-f', 'null', '-'
], capture_output=True, encoding='utf-8', errors='replace', check=True)
log = result.stderr
(review / 'decode.log').write_text(log, encoding='utf-8')
frames = int(re.findall(r'frame=\s*(\d+)', log)[-1])
peak = float(re.search(r'max_volume: ([\-\d.]+) dB', log).group(1))
assert frames == 3564, f'Expected 3564 frames, found {frames}'
assert '1920x1080' in log and '30 fps' in log, 'Unexpected dimensions or fps'
assert 'Video: h264' in log and 'Audio: aac' in log, 'Expected H264 + AAC'
assert not re.search(r'black_start:', log), 'Unexpected sustained black frame'
assert -30 < peak <= 0, f'Unexpected audio peak: {peak}'

seconds = [1.8, 7, 13, 20, 28, 35.5, 43, 50, 55.7, 60.5, 67, 73.5, 78.7, 84, 91.5, 97, 103, 112]
subprocess.run([FF, '-y', '-hide_banner', '-loglevel', 'error', '-ss', '3.4', '-i', str(OUTPUT),
                '-frames:v', '1', str(HERE / 'renders/portada.jpg')], check=True)
sheet = Image.new('RGB', (1440, 1800), '#e5e1dc')
draw = ImageDraw.Draw(sheet)
for i, second in enumerate(seconds):
    still = review / f'final-{i+1:02d}.jpg'
    subprocess.run([FF, '-y', '-hide_banner', '-loglevel', 'error', '-ss', str(second),
                    '-i', str(OUTPUT), '-frames:v', '1', '-vf', 'scale=960:540', str(still)], check=True)
    sheet.paste(ImageOps.contain(Image.open(still), (480, 270)), ((i % 3)*480, (i//3)*300))
    draw.text(((i % 3)*480+12, (i//3)*300+278), f'{i+1:02d} / {second:.1f} s', fill='#18181b')
sheet.save(HERE / 'renders/vista-general.jpg', quality=93)
report = dict(duration_seconds=118.8, frames=frames, resolution='1920x1080', fps=30,
              video_codec='h264', audio_codec='aac', audio_peak_db=peak,
              full_decode='passed', sustained_black_frames=False,
              size_mb=round(OUTPUT.stat().st_size/1_000_000, 2), final_mp4_samples=len(seconds))
(HERE / 'renders/verificacion.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps(report, indent=2))

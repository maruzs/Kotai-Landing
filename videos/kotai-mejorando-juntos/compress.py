"""Create the lightweight Full HD delivery from the high-quality master."""
from pathlib import Path
import json
import subprocess
import imageio_ffmpeg

here = Path(__file__).resolve().parent
source = here / 'renders/Kotai-Mejorando-juntos-1080p.mp4'
target = here / 'renders/Kotai-Mejorando-juntos-1080p-liviano.mp4'
subprocess.run([
    imageio_ffmpeg.get_ffmpeg_exe(), '-y', '-hide_banner', '-loglevel', 'error',
    '-i', str(source), '-map', '0:v:0', '-map', '0:a:0',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '26',
    '-maxrate', '1200k', '-bufsize', '2400k', '-threads', '4',
    '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '96k',
    '-movflags', '+faststart', str(target)
], check=True)
assert target.stat().st_size < 25_000_000, 'Lightweight export exceeds 25 MB'
report = dict(master_mb=round(source.stat().st_size / 1_000_000, 2),
              delivery_mb=round(target.stat().st_size / 1_000_000, 2),
              reduction_percent=round(100 * (1-target.stat().st_size/source.stat().st_size), 1),
              resolution='1920x1080', duration_seconds=118.8)
(here / 'renders/compresion.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps(report, indent=2))

"""Stage only repository media and locally cache the brand's Google Font."""
from pathlib import Path
import re
import shutil
import subprocess
import requests
import imageio_ffmpeg

HERE = Path(__file__).resolve().parent
REPO = HERE.parents[1]
PUBLIC = HERE / 'public'
PUBLIC.mkdir(exist_ok=True)

sources = {
    'logo.png': 'public/kotai-logo-clean.png',
    'home.jpg': 'Images/siding_Casa.jpg',
    'window.jpg': 'Images/Termopanel5.jpg',
    'window-detail.jpg': 'Images/Termopanel9.jpg',
    'solar.jpg': 'Images/PuertaYPanel2.jpg',
    'door.jpg': 'Images/Puerta_Entrada.jpg',
    'roof.jpg': 'public/images/pda/techumbre_terminada.png',
    'insulation.jpg': 'public/images/pda/techumbre_aislacion.jpg',
    'finished.jpg': 'public/images/pda/vivienda_obra_terminada.png',
    'before.jpg': 'Images/antes.jpg',
    'after.jpg': 'Images/despues.jpg',
    'team-1.jpg': 'Images/newContent/WhatsApp Image 2026-10-21 at 17.25.08 (1).jpeg',
    'team-2.jpg': 'Images/newContent/WhatsApp Image 2026-10-21 at 17.25.08 (2).jpeg',
    'team-3.jpg': 'Images/newContent/WhatsApp Image 2026-10-21 at 17.25.08 (3).jpeg',
    'team-4.jpg': 'Images/newContent/WhatsApp Image 2026-10-21 at 17.25.08.jpeg',
    'office-1.jpg': 'Images/newContent/WhatsApp Image 2026-10-21 at 17.25.09 (1).jpeg',
    'office-2.jpg': 'Images/newContent/WhatsApp Image 2026-10-21 at 17.25.10 (1).jpeg',
    'office-3.jpg': 'Images/newContent/WhatsApp Image 2026-10-21 at 17.25.10.jpeg',
    'team-5.jpg': 'Images/newContent/WhatsApp Image 2026-10-21 at 17.25.09.jpeg',
    'office-tour.mp4': 'Images/newContent/WhatsApp Video 2026-10-21 at 17.25.10.mp4',
    'office-short.mp4': 'Images/newContent/WhatsApp Video 2026-10-21 at 17.25.09.mp4',
}
for name, source in sources.items():
    shutil.copy2(REPO / source, PUBLIC / name)

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
subprocess.run([ffmpeg, '-y', '-hide_banner', '-loglevel', 'error', '-i',
                str(next((REPO / 'Images/newContent').glob('*.mpeg'))),
                '-vn', '-c:a', 'copy', '-map_metadata', '-1', str(PUBLIC / 'music.mp3')], check=True)

for weight in [500, 600, 700, 800]:
    path = PUBLIC / f'jakarta-{weight}.ttf'
    if not path.exists():
        css = requests.get(f'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@{weight}', timeout=30)
        css.raise_for_status()
        url = re.search(r'url\((https://[^)]+)\)', css.text).group(1)
        font = requests.get(url, timeout=30)
        font.raise_for_status()
        path.write_bytes(font.content)

(HERE / 'renders').mkdir(exist_ok=True)
assert all((PUBLIC / name).is_file() for name in sources)
print(f'{len(sources)} media files staged; original song preserved, fonts cached.')

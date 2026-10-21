"""Create the six optimized gallery images from the supplied original photos."""
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
sources = {
    'equipo-kotai': 'WhatsApp Image 2026-10-21 at 17.25.08 (1).jpeg',
    'coordinacion-kotai': 'WhatsApp Image 2026-10-21 at 17.25.08 (2).jpeg',
    'orientacion-kotai': 'WhatsApp Image 2026-10-21 at 17.25.08 (3).jpeg',
    'compromiso-kotai': 'WhatsApp Image 2026-10-21 at 17.25.08.jpeg',
    'acompanamiento-kotai': 'WhatsApp Image 2026-10-21 at 17.25.09.jpeg',
    'oficinas-kotai': 'WhatsApp Image 2026-10-21 at 17.25.10.jpeg',
}
for name, original in sources.items():
    target = root / 'public/images/equipo' / f'{name}.webp'
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(root / 'Images/newContent' / original) as image:
        photo = ImageOps.exif_transpose(image).convert('RGB')
        photo.save(target, 'WEBP', quality=84, method=6)
        assert photo.size == (1280, 720), f'Unexpected dimensions: {original}'
    print(f'{target.name}: {target.stat().st_size:,} bytes')

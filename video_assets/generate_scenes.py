import os
import subprocess
from PIL import Image, ImageDraw, ImageFont, ImageFilter

WIDTH, HEIGHT = 1920, 1080
FPS = 30
OUTPUT_DIR = "video_assets/scenes"
os.makedirs(OUTPUT_DIR, exist_ok=True)

FONT_BLACK = "/usr/share/fonts/Fira_Sans/FiraSans-ExtraBold.ttf"
FONT_BOLD = "/usr/share/fonts/Fira_Sans/FiraSans-Bold.ttf"
FONT_SEMI = "/usr/share/fonts/Fira_Sans/FiraSans-SemiBold.ttf"
FONT_REGULAR = "/usr/share/fonts/Fira_Sans/FiraSans-Regular.ttf"

def get_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()

def draw_rounded_rect(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)

def draw_pill(draw, x, y, text, font, bg_color, text_color, pad_x=24, pad_y=10):
    bbox = font.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    box = [x, y, x + tw + pad_x * 2, y + th + pad_y * 2]
    draw_rounded_rect(draw, box, radius=(th + pad_y * 2) // 2, fill=bg_color)
    draw.text((x + pad_x, y + pad_y - bbox[1]), text, font=font, fill=text_color)
    return box

def load_and_cover(img_path, target_w=WIDTH, target_h=HEIGHT):
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    scale = max(target_w / w, target_h / h)
    new_w = int(w * scale)
    new_h = int(h * scale)
    img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - target_w) // 2
    top = (new_h - target_h) // 2
    return img.crop((left, top, left + target_w, top + target_h))

def add_dark_scrim(img, alpha_top=140, alpha_bottom=220):
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for y in range(HEIGHT):
        ratio = y / HEIGHT
        alpha = int(alpha_top + (alpha_bottom - alpha_top) * ratio)
        draw.line([(0, y), (WIDTH, y)], fill=(15, 18, 25, alpha))
    return Image.alpha_composite(img, overlay)

# ----------------- ESCENA 1: INTRO Y PREGUNTA CLAVE -----------------
def create_scene_1():
    base = load_and_cover("public/images/siding_Casa.jpg")
    base = add_dark_scrim(base, alpha_top=160, alpha_bottom=230)
    draw = ImageDraw.Draw(base)

    # Top Brand Strip
    draw_pill(draw, 100, 80, "MINVU · SERVIU · GOBIERNO DE CHILE", get_font(FONT_BOLD, 22), (180, 20, 35, 230), (255, 255, 255))
    draw_pill(draw, 620, 80, "SUBSIDIO HABITACIONAL TÉRMICO", get_font(FONT_BOLD, 22), (255, 255, 255, 30), (230, 230, 230))

    # Big Headline
    font_hl = get_font(FONT_BLACK, 68)
    draw.text((100, 260), "¿CASA FRÍA EN INVIERNO", font=font_hl, fill=(255, 255, 255))
    draw.text((100, 345), "O MUY CALUROSA EN VERANO?", font=font_hl, fill=(245, 195, 35))

    # Subtitle
    font_sub = get_font(FONT_SEMI, 34)
    draw.text((100, 480), "El Estado financia el aislamiento térmico y recambio de ventanas", font=font_sub, fill=(230, 235, 245))
    draw.text((100, 530), "para que tu hogar sea confortable y ahorres en calefacción.", font=font_sub, fill=(200, 205, 215))

    # Feature badges
    draw_rounded_rect(draw, [100, 640, 560, 770], radius=24, fill=(25, 30, 42, 210), outline=(255, 255, 255, 40), width=2)
    draw.text((130, 665), "Aporte Familiar Mínimo", font=get_font(FONT_BOLD, 22), fill=(160, 170, 190))
    draw.text((130, 700), "Desde 1 UF (~$41.500)", font=get_font(FONT_BLACK, 38), fill=(255, 255, 255))

    draw_rounded_rect(draw, [590, 640, 1080, 770], radius=24, fill=(25, 30, 42, 210), outline=(255, 255, 255, 40), width=2)
    draw.text((620, 665), "Registro Social de Hogares", font=get_font(FONT_BOLD, 22), fill=(160, 170, 190))
    draw.text((620, 700), "Hasta el 60% RSH", font=get_font(FONT_BLACK, 38), fill=(50, 215, 120))

    draw_rounded_rect(draw, [1110, 640, 1600, 770], radius=24, fill=(25, 30, 42, 210), outline=(255, 255, 255, 40), width=2)
    draw.text((1140, 665), "Asesoría y Postulación", font=get_font(FONT_BOLD, 22), fill=(160, 170, 190))
    draw.text((1140, 700), "100% Gratuita", font=get_font(FONT_BLACK, 38), fill=(245, 195, 35))

    # Minvu & Kotai Watermark bottom right
    kotai_logo = Image.open("public/Kotai_NoBG.png").convert("RGBA")
    kotai_logo = kotai_logo.resize((int(kotai_logo.width * 0.38), int(kotai_logo.height * 0.38)), Image.Resampling.LANCZOS)
    base.alpha_composite(kotai_logo, (WIDTH - kotai_logo.width - 100, HEIGHT - kotai_logo.height - 80))

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_1.jpg", quality=95)

# ----------------- ESCENA 2: CONSTRUCTORA KOTAI + G5 -----------------
def create_scene_2():
    base = load_and_cover("public/images/despues.jpg")
    base = add_dark_scrim(base, alpha_top=170, alpha_bottom=240)
    draw = ImageDraw.Draw(base)

    draw_pill(draw, 100, 80, "ENTIDAD PATROCINANTE & CONSTRUCTORA", get_font(FONT_BOLD, 22), (180, 20, 35, 230), (255, 255, 255))

    # Brand Title
    draw.text((100, 220), "CONSTRUCTORA KOTAI", font=get_font(FONT_BLACK, 70), fill=(255, 255, 255))
    draw.text((100, 310), "Parte de Grupo Alianza G5", font=get_font(FONT_BOLD, 36), fill=(245, 195, 35))

    # Main text block
    font_desc = get_font(FONT_REGULAR, 32)
    draw.text((100, 420), "Te acompañamos en todo el proceso de postulación ante el Serviu y Minvu.", font=font_desc, fill=(240, 240, 245))
    draw.text((100, 470), "Nos encargamos del diagnóstico técnico, armado de carpeta, tramitación", font=font_desc, fill=(210, 215, 225))
    draw.text((100, 520), "y ejecución de obra con materiales bajo norma chilena.", font=font_desc, fill=(210, 215, 225))

    # Feature List
    features = [
        "✓ Postulación individual o colectiva (Comités y Juntas Vecinales)",
        "✓ Visita técnica a terreno sin ningún costo para los vecinos",
        "✓ Ejecución profesional garantizada por Grupo Alianza G5"
    ]
    y_pos = 640
    for feat in features:
        draw_rounded_rect(draw, [100, y_pos, 1300, y_pos + 60], radius=16, fill=(255, 255, 255, 22), outline=(255, 255, 255, 35), width=1)
        draw.text((130, y_pos + 14), feat, font=get_font(FONT_BOLD, 26), fill=(255, 255, 255))
        y_pos += 80

    # Logos on the right
    minvu = Image.open("video_assets/minvu_logo.png").convert("RGBA")
    minvu_ratio = 160 / minvu.height
    minvu = minvu.resize((int(minvu.width * minvu_ratio), 160), Image.Resampling.LANCZOS)
    base.alpha_composite(minvu, (WIDTH - minvu.width - 120, 220))

    kotai_logo = Image.open("public/Kotai_NoBG.png").convert("RGBA")
    k_ratio = 120 / kotai_logo.height
    kotai_logo = kotai_logo.resize((int(kotai_logo.width * k_ratio), 120), Image.Resampling.LANCZOS)
    base.alpha_composite(kotai_logo, (WIDTH - kotai_logo.width - 120, 430))

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_2.jpg", quality=95)

# ----------------- ESCENA 3A: TERMOPANEL -----------------
def create_scene_3a():
    base = load_and_cover("public/images/Termopanel3.jpg")
    base = add_dark_scrim(base, alpha_top=130, alpha_bottom=230)
    draw = ImageDraw.Draw(base)

    draw_pill(draw, 100, 80, "¿QUÉ INCLUYE EL PROYECTO?", get_font(FONT_BOLD, 22), (255, 255, 255, 30), (255, 255, 255))
    draw_pill(draw, 420, 80, "MEJORAMIENTO 1 DE 3", get_font(FONT_BOLD, 22), (180, 20, 35, 230), (255, 255, 255))

    draw.text((100, 220), "VENTANAS TERMOPANEL", font=get_font(FONT_BLACK, 66), fill=(255, 255, 255))
    draw.text((100, 300), "Doble Vidrio Hermético Certificado", font=get_font(FONT_BOLD, 36), fill=(245, 195, 35))

    draw_rounded_rect(draw, [100, 420, 850, 780], radius=24, fill=(15, 20, 30, 220), outline=(255, 255, 255, 40), width=2)
    bullets = [
        ("•", "Corta el frío en invierno y el calor en verano"),
        ("•", "Reduce drásticamente el ruido de la calle"),
        ("•", "Elimina la transpiración y humedad en vidrios"),
        ("•", "Perfiles de PVC herméticos y alta durabilidad")
    ]
    by = 460
    for bullet, text in bullets:
        draw.text((130, by), bullet, font=get_font(FONT_BLACK, 32), fill=(50, 215, 120))
        draw.text((160, by), text, font=get_font(FONT_SEMI, 26), fill=(240, 240, 245))
        by += 72

    draw_pill(draw, 100, 820, "FOTO REAL INSTALADA POR KOTAI", get_font(FONT_BOLD, 20), (50, 215, 120, 230), (10, 30, 20))

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_3a.jpg", quality=95)

# ----------------- ESCENA 3B: AISLACIÓN MUROS -----------------
def create_scene_3b():
    base = load_and_cover("public/images/siding_Casa.jpg")
    base = add_dark_scrim(base, alpha_top=130, alpha_bottom=230)
    draw = ImageDraw.Draw(base)

    draw_pill(draw, 100, 80, "¿QUÉ INCLUYE EL PROYECTO?", get_font(FONT_BOLD, 22), (255, 255, 255, 30), (255, 255, 255))
    draw_pill(draw, 420, 80, "MEJORAMIENTO 2 DE 3", get_font(FONT_BOLD, 22), (180, 20, 35, 230), (255, 255, 255))

    draw.text((100, 220), "AISLAMIENTO TÉRMICO EN MUROS", font=get_font(FONT_BLACK, 64), fill=(255, 255, 255))
    draw.text((100, 300), "Revestimiento EIFS y Siding Exterior", font=get_font(FONT_BOLD, 36), fill=(245, 195, 35))

    draw_rounded_rect(draw, [100, 420, 850, 780], radius=24, fill=(15, 20, 30, 220), outline=(255, 255, 255, 40), width=2)
    bullets = [
        ("•", "Envoltura térmica completa en todo el perímetro"),
        ("•", "Evita fugas de calor y hongos por condensación"),
        ("•", "Renueva completamente la fachada de tu casa"),
        ("•", "Material ignífugo y resistente a la intemperie")
    ]
    by = 460
    for bullet, text in bullets:
        draw.text((130, by), bullet, font=get_font(FONT_BLACK, 32), fill=(50, 215, 120))
        draw.text((160, by), text, font=get_font(FONT_SEMI, 26), fill=(240, 240, 245))
        by += 72

    draw_pill(draw, 100, 820, "FACHADA Y AISLACIÓN REAL KOTAI", get_font(FONT_BOLD, 20), (50, 215, 120, 230), (10, 30, 20))

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_3b.jpg", quality=95)

# ----------------- ESCENA 3C: PUERTAS Y PANELES SOLARES -----------------
def create_scene_3c():
    base = load_and_cover("public/images/PuertaYPanel3.jpg")
    base = add_dark_scrim(base, alpha_top=130, alpha_bottom=230)
    draw = ImageDraw.Draw(base)

    draw_pill(draw, 100, 80, "¿QUÉ INCLUYE EL PROYECTO?", get_font(FONT_BOLD, 22), (255, 255, 255, 30), (255, 255, 255))
    draw_pill(draw, 420, 80, "MEJORAMIENTO 3 DE 3", get_font(FONT_BOLD, 22), (180, 20, 35, 230), (255, 255, 255))

    draw.text((100, 220), "PUERTAS Y AGUA CALIENTE SOLAR", font=get_font(FONT_BLACK, 62), fill=(255, 255, 255))
    draw.text((100, 300), "Puertas Reforzadas y Colectores Solares Térmicos", font=get_font(FONT_BOLD, 36), fill=(245, 195, 35))

    draw_rounded_rect(draw, [100, 420, 880, 780], radius=24, fill=(15, 20, 30, 220), outline=(255, 255, 255, 40), width=2)
    bullets = [
        ("•", "Puertas de acceso macizas con sello perimetral"),
        ("•", "Colector solar térmico para calentar agua con el sol"),
        ("•", "Hasta un 80% de ahorro directo en la cuenta de gas"),
        ("•", "Instalación certificada bajo norma chilena")
    ]
    by = 460
    for bullet, text in bullets:
        draw.text((130, by), bullet, font=get_font(FONT_BLACK, 32), fill=(50, 215, 120))
        draw.text((160, by), text, font=get_font(FONT_SEMI, 26), fill=(240, 240, 245))
        by += 72

    draw_pill(draw, 100, 820, "INSTALACIÓN CERTIFICADA KOTAI", get_font(FONT_BOLD, 20), (50, 215, 120, 230), (10, 30, 20))

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_3c.jpg", quality=95)

# ----------------- ESCENA 4: REQUISITOS CLAROS -----------------
def create_scene_4():
    base = load_and_cover("public/images/Termopanel5.jpg")
    base = add_dark_scrim(base, alpha_top=180, alpha_bottom=245)
    draw = ImageDraw.Draw(base)

    draw_pill(draw, 100, 70, "CONDICIONES OFICIALES SERVIU", get_font(FONT_BOLD, 22), (180, 20, 35, 230), (255, 255, 255))

    draw.text((100, 160), "¿CUÁLES SON LOS REQUISITOS?", font=get_font(FONT_BLACK, 68), fill=(255, 255, 255))
    draw.text((100, 245), "Tres condiciones principales para calificar al subsidio", font=get_font(FONT_BOLD, 32), fill=(245, 195, 35))

    # 3 Cards
    cards = [
        ("1", "REGISTRO SOCIAL", "Hasta el 60%", "Estar en el tramo de hasta el 60% en tu cartola RSH. (Adultos mayores tienen puntaje preferencial).", (50, 215, 120)),
        ("2", "AHORRO PREVIO", "Desde 1 UF", "Contar con libreta de ahorro para la vivienda con aporte desde 1 UF (~$41.500) según tu tramo.", (245, 195, 35)),
        ("3", "TENENCIA CASA", "Propietario/a", "Ser dueño/a o heredero/a legal de la vivienda (casa regularizada o en proceso de regularización).", (90, 175, 255))
    ]

    card_w = 530
    start_x = 100
    y_top = 350
    for num, title, tag, desc, color in cards:
        draw_rounded_rect(draw, [start_x, y_top, start_x + card_w, y_top + 480], radius=24, fill=(20, 25, 35, 230), outline=(255, 255, 255, 45), width=2)
        # Number circle
        draw.ellipse([start_x + 35, y_top + 35, start_x + 105, y_top + 105], fill=color)
        draw.text((start_x + 56, y_top + 45), num, font=get_font(FONT_BLACK, 44), fill=(15, 20, 30))

        draw.text((start_x + 125, y_top + 40), title, font=get_font(FONT_BOLD, 26), fill=(200, 210, 225))
        draw.text((start_x + 125, y_top + 75), tag, font=get_font(FONT_BLACK, 32), fill=color)

        draw_rounded_rect(draw, [start_x + 35, y_top + 130, start_x + card_w - 35, y_top + 132], radius=1, fill=(255, 255, 255, 30))

        # Multi-line description
        font_d = get_font(FONT_REGULAR, 24)
        words = desc.split(" ")
        lines = []
        cur = []
        for w in words:
            cur.append(w)
            if len(" ".join(cur)) > 30:
                lines.append(" ".join(cur[:-1]))
                cur = [w]
        if cur:
            lines.append(" ".join(cur))

        ly = y_top + 160
        for l in lines:
            draw.text((start_x + 35, ly), l, font=font_d, fill=(235, 240, 248))
            ly += 38

        start_x += card_w + 35

    # Bottom helper
    draw_rounded_rect(draw, [100, 870, WIDTH - 100, 960], radius=20, fill=(180, 20, 35, 220))
    draw.text((140, 895), "¡Si cumples estos 3 requisitos, el subsidio del Estado cubre el resto del valor de las obras!", font=get_font(FONT_BOLD, 28), fill=(255, 255, 255))

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_4.jpg", quality=95)

# ----------------- ESCENA 5: ASESORÍA GRATUITA Y ANTES/DESPUÉS -----------------
def create_scene_5():
    # Split view before/after
    img_antes = load_and_cover("public/images/antes.jpg", WIDTH // 2, HEIGHT)
    img_desp = load_and_cover("public/images/despues.jpg", WIDTH // 2, HEIGHT)

    base = Image.new("RGBA", (WIDTH, HEIGHT))
    base.paste(img_antes, (0, 0))
    base.paste(img_desp, (WIDTH // 2, 0))

    base = add_dark_scrim(base, alpha_top=150, alpha_bottom=230)
    draw = ImageDraw.Draw(base)

    # Divider line
    draw.line([(WIDTH // 2, 0), (WIDTH // 2, HEIGHT)], fill=(255, 255, 255, 180), width=4)

    # Badges for before / after
    draw_pill(draw, 100, 160, "ANTES (CASA SIN AISLAR)", get_font(FONT_BOLD, 22), (200, 40, 40, 230), (255, 255, 255))
    draw_pill(draw, WIDTH // 2 + 100, 160, "DESPUÉS (OBRA KOTAI ENTREGADA)", get_font(FONT_BOLD, 22), (30, 160, 80, 230), (255, 255, 255))

    # Top Banner
    draw_rounded_rect(draw, [100, 50, WIDTH - 100, 130], radius=20, fill=(245, 195, 35, 230))
    draw.text((150, 70), "ASESORÍA Y ACOMPAÑAMIENTO 100% GRATUITO PARA FAMILIAS Y COMITÉS", font=get_font(FONT_BLACK, 28), fill=(15, 20, 30))

    # Bottom Summary Box
    draw_rounded_rect(draw, [150, 680, WIDTH - 150, 940], radius=24, fill=(15, 20, 30, 230), outline=(255, 255, 255, 45), width=2)
    draw.text((200, 720), "¡No dejes pasar esta oportunidad de mejorar tu casa!", font=get_font(FONT_BLACK, 44), fill=(255, 255, 255))
    draw.text((200, 790), "• Cero costo de visita técnica en terreno y evaluación de factibilidad", font=get_font(FONT_BOLD, 26), fill=(230, 235, 245))
    draw.text((200, 840), "• Ayudamos a comités de vivienda y juntas de vecinos a postular juntos", font=get_font(FONT_BOLD, 26), fill=(230, 235, 245))
    draw.text((200, 890), "• Revisamos tu Registro Social de Hogares de forma inmediata", font=get_font(FONT_BOLD, 26), fill=(50, 215, 120))

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_5.jpg", quality=95)

# ----------------- ESCENA 6: CIERRE & CALL TO ACTION (CONTACTO) -----------------
def create_scene_6():
    base = load_and_cover("public/images/despues.jpg")
    base = add_dark_scrim(base, alpha_top=210, alpha_bottom=245)
    draw = ImageDraw.Draw(base)

    # Logo Center Top
    kotai_logo = Image.open("public/Kotai_NoBG.png").convert("RGBA")
    k_ratio = 160 / kotai_logo.height
    kotai_logo = kotai_logo.resize((int(kotai_logo.width * k_ratio), 160), Image.Resampling.LANCZOS)
    base.alpha_composite(kotai_logo, ((WIDTH - kotai_logo.width) // 2, 70))

    # Big CTA Title
    draw.text(((WIDTH - 960) // 2, 260), "¡POSTULACIONES ABIERTAS!", font=get_font(FONT_BLACK, 66), fill=(245, 195, 35))
    draw.text(((WIDTH - 900) // 2, 345), "Contáctanos hoy mismo y postula a tu subsidio", font=get_font(FONT_BOLD, 36), fill=(255, 255, 255))

    # Big WhatsApp & Phone Box
    draw_rounded_rect(draw, [250, 430, WIDTH - 250, 760], radius=28, fill=(20, 25, 38, 235), outline=(50, 215, 120, 180), width=3)

    # WhatsApp line
    draw_pill(draw, 320, 470, "WHATSAPP OFICIAL", get_font(FONT_BOLD, 22), (37, 211, 102), (255, 255, 255))
    draw.text((320, 530), "+56 9 5050 1231", font=get_font(FONT_BLACK, 64), fill=(255, 255, 255))
    draw.text((320, 610), "Teléfono Coordinación: +56 9 7576 2347", font=get_font(FONT_SEMI, 32), fill=(200, 210, 225))
    draw.text((320, 670), "Sitio Web Oficial: www.kotaiconstructora.cl", font=get_font(FONT_BOLD, 32), fill=(245, 195, 35))

    # Bottom Tagline
    draw.text(((WIDTH - 840) // 2, 850), "KOTAI · Tu hogar más abrigado, cómodo y eficiente", font=get_font(FONT_BLACK, 36), fill=(255, 255, 255))
    draw.text(((WIDTH - 760) // 2, 910), "Entidad Patrocinante y Constructora · Grupo Alianza G5", font=get_font(FONT_REGULAR, 26), fill=(180, 190, 205))

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_6.jpg", quality=95)

if __name__ == "__main__":
    print("Generando imágenes de alta definición...")
    create_scene_1()
    create_scene_2()
    create_scene_3a()
    create_scene_3b()
    create_scene_3c()
    create_scene_4()
    create_scene_5()
    create_scene_6()
    print("Todas las escenas generadas exitosamente en", OUTPUT_DIR)

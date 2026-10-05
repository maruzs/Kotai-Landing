import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

WIDTH, HEIGHT = 1920, 1080
OUTPUT_DIR = "video_assets/scenes"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Paleta Estricta Kotai
COLOR_KOTAI_RED = (139, 11, 29)      # #8B0B1D - Primario oficial
COLOR_KOTAI_DARK = (115, 12, 26)     # #730C1A - Rojo oscuro
COLOR_KOTAI_LIGHT = (253, 242, 244)  # #FDF2F4 - Fondo sutil
COLOR_TEXT_MAIN = (24, 24, 27)       # #18181B - Texto principal oscuro
COLOR_TEXT_MUTED = (82, 82, 91)      # #52525B - Texto secundario gris
COLOR_BORDER = (228, 228, 231)       # #E4E4E7 - Borde sutil
COLOR_WHITE = (255, 255, 255)

FONT_BLACK = "/usr/share/fonts/Fira_Sans/FiraSans-ExtraBold.ttf"
FONT_BOLD = "/usr/share/fonts/Fira_Sans/FiraSans-Bold.ttf"
FONT_SEMI = "/usr/share/fonts/Fira_Sans/FiraSans-SemiBold.ttf"
FONT_REGULAR = "/usr/share/fonts/Fira_Sans/FiraSans-Regular.ttf"

def get_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()

def create_base_slide(header_tag, title, subtitle):
    # Cargar fondo arquitectónico claro
    base = Image.open("video_assets/slide_bg.jpg").convert("RGBA")
    if base.size != (WIDTH, HEIGHT):
        base = base.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
    
    draw = ImageDraw.Draw(base)

    # Barra superior de la diapositiva
    draw.rectangle([0, 0, WIDTH, 12], fill=COLOR_KOTAI_RED)

    # Logo Minvu esquina superior izquierda
    if os.path.exists("video_assets/minvu_logo.png"):
        minvu = Image.open("video_assets/minvu_logo.png").convert("RGBA")
        m_h = 75
        m_w = int(minvu.width * (m_h / minvu.height))
        minvu = minvu.resize((m_w, m_h), Image.Resampling.LANCZOS)
        base.alpha_composite(minvu, (80, 35))

    # Logo Kotai esquina superior derecha
    if os.path.exists("public/Kotai_NoBG.png"):
        kotai = Image.open("public/Kotai_NoBG.png").convert("RGBA")
        k_h = 75
        k_w = int(kotai.width * (k_h / kotai.height))
        kotai = kotai.resize((k_w, k_h), Image.Resampling.LANCZOS)
        base.alpha_composite(kotai, (WIDTH - k_w - 80, 35))

    # Header Tag (Pill en Rojo Kotai)
    tag_font = get_font(FONT_BOLD, 18)
    t_box = tag_font.getbbox(header_tag)
    tw = t_box[2] - t_box[0]
    th = t_box[3] - t_box[1]
    px, py = 20, 8
    pill_box = [80, 135, 80 + tw + px*2, 135 + th + py*2]
    draw.rounded_rectangle(pill_box, radius=6, fill=COLOR_KOTAI_RED)
    draw.text((80 + px, 135 + py - t_box[1]), header_tag, font=tag_font, fill=COLOR_WHITE)

    # Título Principal (Grande, Rojo Kotai o Charcoal)
    draw.text((80, 185), title, font=get_font(FONT_BLACK, 54), fill=COLOR_TEXT_MAIN)

    # Subtítulo (Gris oscuro profesional)
    draw.text((80, 250), subtitle, font=get_font(FONT_SEMI, 26), fill=COLOR_TEXT_MUTED)

    # Línea divisoria elegante
    draw.line([(80, 295), (WIDTH - 80, 295)], fill=COLOR_BORDER, width=2)
    draw.line([(80, 295), (320, 295)], fill=COLOR_KOTAI_RED, width=4)

    return base, draw

def place_framed_photo(base, img_path, box, caption=""):
    x, y, w, h = box
    img = Image.open(img_path).convert("RGBA")
    
    # Crop to cover box
    scale = max(w / img.width, h / img.height)
    nw, nh = int(img.width * scale), int(img.height * scale)
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = (nh - h) // 2
    img = img.crop((left, top, left + w, top + h))

    # Borde y sombra en la diapositiva
    draw = ImageDraw.Draw(base)
    # Marco blanco con borde sutil
    draw.rounded_rectangle([x - 8, y - 8, x + w + 8, y + h + 8], radius=12, fill=COLOR_WHITE, outline=COLOR_BORDER, width=2)
    base.paste(img, (x, y))

    # Caption inferior
    if caption:
        cap_h = 44
        draw.rectangle([x, y + h - cap_h, x + w, y + h], fill=(139, 11, 29, 235))
        draw.text((x + 20, y + h - cap_h + 10), caption, font=get_font(FONT_BOLD, 20), fill=COLOR_WHITE)

# ----------------- DIAPOSITIVA 1: INTRO Y PREGUNTA CLAVE -----------------
def create_slide_1():
    base, draw = create_base_slide(
        "MINVU · SERVIU · GOBIERNO DE CHILE",
        "¿Tu casa es muy fría en invierno o calurosa en verano?",
        "Subsidio Estatal de Acondicionamiento Térmico (PDA y Mejoramiento de Vivienda)"
    )

    # Columna Izquierda: Puntos clave de la presentación
    bullets = [
        ("Subsidio Habitacional del Estado", "El MINVU financia el aislamiento térmico y recambio de ventanas."),
        ("Aporte Mínimo desde 1 UF (~$41.500)", "Ahorro previo accesible según tu tramo de vulnerabilidad."),
        ("Tramo hasta el 60% en el RSH", "Enfocado en familias y personas mayores que requieren abrigo en su hogar."),
        ("Acompañamiento Profesional", "Constructora Kotai y Grupo Alianza G5 te acompañan en todo el proceso.")
    ]

    by = 350
    for idx, (head, desc) in enumerate(bullets, 1):
        # Número estilizado en rojo Kotai
        draw.rounded_rectangle([80, by, 125, by + 45], radius=8, fill=COLOR_KOTAI_RED)
        draw.text((95, by + 7), str(idx), font=get_font(FONT_BLACK, 26), fill=COLOR_WHITE)

        draw.text((145, by), head, font=get_font(FONT_BLACK, 28), fill=COLOR_KOTAI_RED)
        draw.text((145, by + 36), desc, font=get_font(FONT_REGULAR, 24), fill=COLOR_TEXT_MAIN)
        by += 105

    # Columna Derecha: Foto Real de la Obra
    place_framed_photo(base, "public/images/siding_Casa.jpg", [1020, 340, 820, 640], "Obra Real de Acondicionamiento Térmico Kotai")

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_1.jpg", quality=95)

# ----------------- DIAPOSITIVA 2: CONSTRUCTORA KOTAI + G5 -----------------
def create_slide_2():
    base, draw = create_base_slide(
        "ENTIDAD PATROCINANTE Y CONSTRUCTORA",
        "Constructora Kotai · Grupo Alianza G5",
        "Especialistas en postulación y ejecución de subsidios habitacionales Serviu"
    )

    bullets = [
        ("Gestión y Acompañamiento Completo", "Elaboramos el proyecto de ingeniería y armamos la carpeta de postulación."),
        ("Postulación Colectiva o Individual", "Trabajamos con Comités de Vivienda, Juntas Vecinales y familias."),
        ("Evaluación Técnica en Terreno", "Revisamos tu vivienda para asegurar el cumplimiento de condiciones."),
        ("Materiales Bajo Norma Chilena", "Obras garantizadas con certificación de resistencia térmica y durabilidad.")
    ]

    by = 350
    for idx, (head, desc) in enumerate(bullets, 1):
        draw.rounded_rectangle([80, by, 125, by + 45], radius=8, fill=COLOR_KOTAI_RED)
        draw.text((95, by + 7), str(idx), font=get_font(FONT_BLACK, 26), fill=COLOR_WHITE)

        draw.text((145, by), head, font=get_font(FONT_BLACK, 28), fill=COLOR_KOTAI_RED)
        draw.text((145, by + 36), desc, font=get_font(FONT_REGULAR, 24), fill=COLOR_TEXT_MAIN)
        by += 105

    place_framed_photo(base, "public/images/despues.jpg", [1020, 340, 820, 640], "Transformación Real de Hogar · Entregada por Kotai")

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_2.jpg", quality=95)

# ----------------- DIAPOSITIVA 3A: VENTANAS TERMOPANEL -----------------
def create_slide_3a():
    base, draw = create_base_slide(
        "ALCANCE DE LAS OBRAS · PARTE 1 DE 3",
        "Recambio por Ventanas Termopanel Herméticas",
        "Mayor confort térmico, menos ruido de la calle y cero condensación"
    )

    bullets = [
        ("Doble Vidrio Hermético Certificado", "Corta la entrada de frío en invierno y el exceso de calor en verano."),
        ("Perfiles de PVC Reforzados", "Sellado hermético perimetral que evita filtraciones de aire y polvo."),
        ("Eliminación de la Humedad", "Previene que los vidrios 'transpiren' y la formación de hongos."),
        ("Aislación Acústica Notoria", "Disminuye fuertemente el ruido molesto exterior de vehículos y calle.")
    ]

    by = 350
    for idx, (head, desc) in enumerate(bullets, 1):
        draw.rounded_rectangle([80, by, 125, by + 45], radius=8, fill=COLOR_KOTAI_RED)
        draw.text((95, by + 7), str(idx), font=get_font(FONT_BLACK, 26), fill=COLOR_WHITE)

        draw.text((145, by), head, font=get_font(FONT_BLACK, 28), fill=COLOR_KOTAI_RED)
        draw.text((145, by + 36), desc, font=get_font(FONT_REGULAR, 24), fill=COLOR_TEXT_MAIN)
        by += 105

    place_framed_photo(base, "public/images/Termopanel3.jpg", [1020, 340, 820, 640], "Ventana Termopanel Instalada en Vivienda Beneficiaria")

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_3a.jpg", quality=95)

# ----------------- DIAPOSITIVA 3B: AISLAMIENTO MUROS -----------------
def create_slide_3b():
    base, draw = create_base_slide(
        "ALCANCE DE LAS OBRAS · PARTE 2 DE 3",
        "Aislamiento Térmico de Muros y Techumbre",
        "Revestimiento EIFS y Siding exterior para envolver tu casa en calor"
    )

    bullets = [
        ("Envolvente Térmica Continua", "Recubrimiento exterior que impide que el calor de la estufa se escape."),
        ("Revestimiento Siding o EIFS", "Material resistente a la lluvia, viento, rayos UV y con propiedades ignífugas."),
        ("Ahorro Directo en Calefacción", "Tu hogar conserva la temperatura, gastando mucho menos en gas o leña."),
        ("Renovación Total de Fachada", "Moderniza el aspecto exterior de tu casa aumentando su valor comercial.")
    ]

    by = 350
    for idx, (head, desc) in enumerate(bullets, 1):
        draw.rounded_rectangle([80, by, 125, by + 45], radius=8, fill=COLOR_KOTAI_RED)
        draw.text((95, by + 7), str(idx), font=get_font(FONT_BLACK, 26), fill=COLOR_WHITE)

        draw.text((145, by), head, font=get_font(FONT_BLACK, 28), fill=COLOR_KOTAI_RED)
        draw.text((145, by + 36), desc, font=get_font(FONT_REGULAR, 24), fill=COLOR_TEXT_MAIN)
        by += 105

    place_framed_photo(base, "public/images/siding_Casa.jpg", [1020, 340, 820, 640], "Aislamiento Perimetral con Siding Exterior Kotai")

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_3b.jpg", quality=95)

# ----------------- DIAPOSITIVA 3C: PUERTAS Y COLECTOR SOLAR -----------------
def create_slide_3c():
    base, draw = create_base_slide(
        "ALCANCE DE LAS OBRAS · PARTE 3 DE 3",
        "Puertas Térmicas y Agua Caliente Solar",
        "Energía limpia y seguridad para reducir los gastos básicos mensuales"
    )

    bullets = [
        ("Puertas Exteriores Reforzadas", "Madera maciza con sellos perimetrales térmicos para evitar filtraciones."),
        ("Colectores Solares Térmicos", "Paneles en techumbre para calentar agua sanitaria usando la energía del sol."),
        ("Hasta un 80% de Ahorro en Gas", "Disminuye drásticamente el consumo de balones o cañería de gas."),
        ("Instalación Certificada SEC", "Cumplimiento de estándares de seguridad y entrega de proyecto garantizada.")
    ]

    by = 350
    for idx, (head, desc) in enumerate(bullets, 1):
        draw.rounded_rectangle([80, by, 125, by + 45], radius=8, fill=COLOR_KOTAI_RED)
        draw.text((95, by + 7), str(idx), font=get_font(FONT_BLACK, 26), fill=COLOR_WHITE)

        draw.text((145, by), head, font=get_font(FONT_BLACK, 28), fill=COLOR_KOTAI_RED)
        draw.text((145, by + 36), desc, font=get_font(FONT_REGULAR, 24), fill=COLOR_TEXT_MAIN)
        by += 105

    place_framed_photo(base, "public/images/PuertaYPanel3.jpg", [1020, 340, 820, 640], "Instalación de Puerta Aislante y Termotanque Solar")

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_3c.jpg", quality=95)

# ----------------- DIAPOSITIVA 4: REQUISITOS CLAROS (PPTX GRID) -----------------
def create_slide_4():
    base, draw = create_base_slide(
        "REQUISITOS OFICIALES SERVIU · MINVU",
        "¿Cuáles son los 3 Requisitos Principales?",
        "Condiciones indispensables para postular al subsidio habitacional"
    )

    # 3 Filas horizontales claras y contrastadas estilo presentación
    reqs = [
        ("1", "REGISTRO SOCIAL DE HOGARES", "Hasta el 60% RSH", "Debes contar con tu cartola del Registro Social de Hogares con un porcentaje de hasta el 60%. Los adultos mayores tienen puntaje preferencial de postulación."),
        ("2", "LIBRETA DE AHORRO PARA LA VIVIENDA", "Aporte desde 1 UF (~$41.500)", "Tener libreta de ahorro de vivienda a nombre del postulante con el monto mínimo requerido según tu tramo (entre 1 UF y 3 UF según RSH)."),
        ("3", "PROPIEDAD DE LA VIVIENDA", "Propietario o Heredero", "Ser dueño/a o heredero/a legal de la casa habitación. La vivienda debe ser social o tener permiso de edificación (te orientamos si está en proceso).")
    ]

    ry = 340
    for num, title, badge, text in reqs:
        # Fila contenedora blanca con borde gris sutil
        draw.rounded_rectangle([80, ry, WIDTH - 80, ry + 160], radius=12, fill=COLOR_WHITE, outline=COLOR_BORDER, width=2)
        
        # Bloque del número en rojo Kotai
        draw.rounded_rectangle([105, ry + 25, 175, ry + 95], radius=10, fill=COLOR_KOTAI_RED)
        draw.text((125, ry + 32), num, font=get_font(FONT_BLACK, 46), fill=COLOR_WHITE)

        # Título y Badge
        draw.text((205, ry + 25), title, font=get_font(FONT_BLACK, 28), fill=COLOR_TEXT_MAIN)
        draw.rounded_rectangle([680, ry + 22, 1040, ry + 62], radius=6, fill=COLOR_KOTAI_LIGHT, outline=COLOR_KOTAI_RED, width=1)
        draw.text((695, ry + 28), badge, font=get_font(FONT_BLACK, 22), fill=COLOR_KOTAI_RED)

        # Explicación
        draw.text((205, ry + 75), text, font=get_font(FONT_REGULAR, 23), fill=COLOR_TEXT_MUTED)

        ry += 185

    # Franja de confirmación en la parte inferior
    draw.rounded_rectangle([80, 925, WIDTH - 80, 995], radius=10, fill=COLOR_KOTAI_RED)
    draw.text((120, 945), "✓ Cumpliendo estos tres requisitos, el subsidio del Estado cubre el resto del valor total de la obra.", font=get_font(FONT_BOLD, 26), fill=COLOR_WHITE)

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_4.jpg", quality=95)

# ----------------- DIAPOSITIVA 5: ANTES Y DESPUÉS + ACOMPAÑAMIENTO KOTAI -----------------
def create_slide_5():
    base, draw = create_base_slide(
        "EVIDENCIA Y COMPROMISO CON LA COMUNIDAD",
        "Antes y Después · Transformación Real",
        "Comprueba la diferencia y postula con el respaldo de Constructora Kotai"
    )

    # Dos fotos lado a lado: Antes y Después
    place_framed_photo(base, "public/images/antes.jpg", [80, 330, 850, 480], "ANTES: Casa sin aislamiento térmico")
    place_framed_photo(base, "public/images/despues.jpg", [990, 330, 850, 480], "DESPUÉS: Casa aislada y renovada por Kotai")

    # Banner informativo inferior de postulación
    draw.rounded_rectangle([80, 840, WIDTH - 80, 990], radius=12, fill=COLOR_WHITE, outline=COLOR_KOTAI_RED, width=3)
    
    draw.rounded_rectangle([80, 840, 520, 990], radius=12, fill=COLOR_KOTAI_RED)
    draw.text((115, 875), "POSTULACIÓN", font=get_font(FONT_BLACK, 36), fill=COLOR_WHITE)
    draw.text((115, 925), "CON KOTAI", font=get_font(FONT_BLACK, 36), fill=COLOR_WHITE)

    draw.text((550, 865), "• Visita técnica a terreno y evaluación arquitectónica de tu vivienda", font=get_font(FONT_BOLD, 25), fill=COLOR_TEXT_MAIN)
    draw.text((550, 905), "• Acompañamos a comités de vivienda y juntas de vecinos paso a paso", font=get_font(FONT_BOLD, 25), fill=COLOR_TEXT_MAIN)
    draw.text((550, 945), "• Revisamos tu cartola RSH para informarte el tramo al que perteneces", font=get_font(FONT_BOLD, 25), fill=COLOR_KOTAI_RED)

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_5.jpg", quality=95)

# ----------------- DIAPOSITIVA 6: CONTACTO Y CIERRE PPTX -----------------
def create_slide_6():
    base, draw = create_base_slide(
        "POSTULACIONES ABIERTAS · SERVIU MINVU",
        "¡Inicia tu Postulación con Constructora Kotai!",
        "Contáctanos hoy mismo por llamada o mensaje para orientarte"
    )

    # Bloque de Contacto Central Estilo Presentación Corporativa
    draw.rounded_rectangle([80, 330, WIDTH - 80, 840], radius=16, fill=COLOR_WHITE, outline=COLOR_BORDER, width=2)
    draw.rectangle([80, 330, WIDTH - 80, 345], fill=COLOR_KOTAI_RED)

    # Título interno
    draw.text((140, 380), "CANALES OFICIALES DE ATENCIÓN Y POSTULACIÓN", font=get_font(FONT_BLACK, 32), fill=COLOR_KOTAI_RED)

    # 3 Columnas claras de contacto
    # Col 1: WhatsApp
    draw.rounded_rectangle([140, 440, 650, 680], radius=12, fill=COLOR_KOTAI_LIGHT, outline=COLOR_KOTAI_RED, width=2)
    draw.text((170, 470), "WHATSAPP OFICIAL", font=get_font(FONT_BLACK, 24), fill=COLOR_KOTAI_RED)
    draw.text((170, 520), "+56 9 5050 1231", font=get_font(FONT_BLACK, 44), fill=COLOR_TEXT_MAIN)
    draw.text((170, 595), "Mensajes directos para consultar", font=get_font(FONT_REGULAR, 22), fill=COLOR_TEXT_MUTED)
    draw.text((170, 625), "si tu casa califica al subsidio.", font=get_font(FONT_REGULAR, 22), fill=COLOR_TEXT_MUTED)

    # Col 2: Teléfono Coordinación
    draw.rounded_rectangle([690, 440, 1200, 680], radius=12, fill=COLOR_WHITE, outline=COLOR_BORDER, width=2)
    draw.text((720, 470), "TELÉFONO COORDINACIÓN", font=get_font(FONT_BLACK, 24), fill=COLOR_TEXT_MAIN)
    draw.text((720, 520), "+56 9 7576 2347", font=get_font(FONT_BLACK, 44), fill=COLOR_TEXT_MAIN)
    draw.text((720, 595), "Llamadas de dirigentes vecinales", font=get_font(FONT_REGULAR, 22), fill=COLOR_TEXT_MUTED)
    draw.text((720, 625), "y coordinación de postulantes.", font=get_font(FONT_REGULAR, 22), fill=COLOR_TEXT_MUTED)

    # Col 3: Web Oficial
    draw.rounded_rectangle([1240, 440, 1780, 680], radius=12, fill=COLOR_WHITE, outline=COLOR_BORDER, width=2)
    draw.text((1270, 470), "SITIO WEB OFICIAL", font=get_font(FONT_BLACK, 24), fill=COLOR_TEXT_MAIN)
    draw.text((1270, 530), "www.kotaiconstructora.cl", font=get_font(FONT_BLACK, 34), fill=COLOR_KOTAI_RED)
    draw.text((1270, 595), "Formulario en línea para postular", font=get_font(FONT_REGULAR, 22), fill=COLOR_TEXT_MUTED)
    draw.text((1270, 625), "desde cualquier computador o celular.", font=get_font(FONT_REGULAR, 22), fill=COLOR_TEXT_MUTED)

    # Franja de confianza inferior
    draw.text((140, 720), "Constructora Kotai · Miembro de Grupo Alianza G5 · Entidad Patrocinante Autorizada", font=get_font(FONT_BOLD, 24), fill=COLOR_TEXT_MUTED)
    draw.text((140, 760), "Horario de Atención: Lunes a Viernes de 08:30 a 18:30 hrs", font=get_font(FONT_SEMI, 22), fill=COLOR_TEXT_MUTED)

    # Franja roja final
    draw.rounded_rectangle([80, 875, WIDTH - 80, 975], radius=12, fill=COLOR_KOTAI_RED)
    draw.text((WIDTH // 2 - 380, 905), "KOTAI · Tu hogar más abrigado, cómodo y eficiente", font=get_font(FONT_BLACK, 36), fill=COLOR_WHITE)

    base.convert("RGB").save(f"{OUTPUT_DIR}/scene_6.jpg", quality=95)

if __name__ == "__main__":
    print("Generando diapositivas PPTX en alta definición...")
    create_slide_1()
    create_slide_2()
    create_slide_3a()
    create_slide_3b()
    create_slide_3c()
    create_slide_4()
    create_slide_5()
    create_slide_6()
    print("Todas las diapositivas generadas exitosamente.")

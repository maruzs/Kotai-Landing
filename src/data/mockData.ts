export interface Project {
  id: string;
  title: string;
  category: 'Vivienda' | 'Montaje' | 'Ampliación' | 'Social';
  description: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  highlights: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  badge: string;
  description: string;
  image: string;
}

export interface Ally {
  name: string;
  type: string;
  logoText: string;
  description: string;
}

export interface HoldingCompany {
  name: string;
  category: string;
  tagline: string;
  isMain?: boolean;
  color: string;
}

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Construimos con Confianza, Montamos con Precisión",
    subtitle: "Soluciones seguras en obras civiles, viviendas y montaje estructural para familias y empresas en Chile.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1600&q=80",
    tag: "Constructora & Montaje",
    ctaPrimary: "Ver Proyectos Realizados",
    ctaSecondary: "Cotizar por WhatsApp",
  },
  {
    id: 2,
    title: "Viviendas Dignas y Ampliaciones que Transforman Vidas",
    subtitle: "Acompañamos a comités de vivienda y familias con asesoría clara, presupuestos transparentes y sin letras chicas.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    tag: "Compromiso Social & Serviu",
    ctaPrimary: "Conoce el Antes y Después",
    ctaSecondary: "Llámanos Gratis",
  },
  {
    id: 3,
    title: "Estructuras Metálicas y Montaje Industrial Garantizado",
    subtitle: "Galpones, cubiertas y estructuras sólidas ejecutadas por profesionales expertos del Grupo Alianza G5.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    tag: "Ingeniería y Seguridad",
    ctaPrimary: "Explorar Montajes",
    ctaSecondary: "Hablar con un Asesor",
  }
];

export const BEFORE_AFTER_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Ampliación y Renovación Habitacional",
    category: "Ampliación",
    location: "Sector Sur, Región Metropolitana",
    description: "Transformación de casa básica con refuerzo estructural de segundo nivel, aislamientos térmicos y techumbre nueva.",
    beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    highlights: ["Estructura sismo-resistente", "Aislación térmica invierno/verano", "Entrega en 45 días"],
  },
  {
    id: "proj-2",
    title: "Montaje Estructural de Galpón y Cubierta",
    category: "Montaje",
    location: "Zona Industrial Central",
    description: "Fabricación e instalación de marcos rígidos de acero, cerchas reforzadas y canaletas de alto drenaje pluvial.",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    highlights: ["Certificación de soldaduras", "Cero accidentes laborales", "Pintura anticorrosiva industrial"],
  },
  {
    id: "proj-3",
    title: "Mejoramiento Comunitario y Fachadas",
    category: "Social",
    location: "Villa Los Copihues",
    description: "Recuperación de techumbres, bajadas de agua, estucos y pintura exterior en conjunto habitacional con subsidio Serviu.",
    beforeImage: "https://images.unsplash.com/photo-1584463699042-3e75e921d723?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    highlights: ["100% aprobado por inspectores", "Materiales certificados", "Asesoría paso a paso al comité"],
  },
  {
    id: "proj-4",
    title: "Construcción de Vivienda Familiar Sólida",
    category: "Vivienda",
    location: "Melipilla, Región Metropolitana",
    description: "Desde radier y cimientos hasta llaves en mano con finas terminaciones en albañilería confinada y madera nativa tratada.",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    highlights: ["Llave en mano", "Garantía post-entrega de 5 años", "Presupuesto cerrado sin sorpresas"],
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Don Carlos Morales",
    role: "Jefe de Maestros y Obras",
    badge: "22 años de oficio",
    description: "Experto en obra gruesa, cimientos y terminaciones. Es quien está en terreno todos los días cuidando que cada detalle quede firme y bien hecho.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ing. Rodrigo Palma",
    role: "Ingeniero Calculista y Montaje",
    badge: "Cálculo & Seguridad",
    description: "Revisa los planos, las cargas de viento y peso sísmico para que tu casa o galpón soporte cualquier terremoto con total tranquilidad.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Valeria Contreras",
    role: "Coordinadora de Familias y Subsidios",
    badge: "Atención Cercana",
    description: "Explica todo en palabras sencillas, acompaña a las familias en las dudas de Serviu y mantiene informados a los clientes sin enredos.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  }
];

export const STRATEGIC_ALLIES: Ally[] = [
  {
    name: "Aceros del Pacífico",
    type: "Proveedor de Fierro & Acero",
    logoText: "ACEROS",
    description: "Materiales certificados bajo norma chilena NCh203 para sismos.",
  },
  {
    name: "Hormigones Biobío",
    type: "Cimientos y Radieres",
    logoText: "HORMIGÓN",
    description: "Mezclas de resistencia H25 y H30 con ensayo de compresión en laboratorio.",
  },
  {
    name: "Ferreterías Construmart & MTS",
    type: "Red de Abastecimiento",
    logoText: "RED MTS",
    description: "Stock inmediato de maderas, techumbres y aislantes certificados.",
  },
  {
    name: "Inspectores Técnicos ITO",
    type: "Control de Calidad Independiente",
    logoText: "ITO AUDIT",
    description: "Revisión rigurosa de cada hito constructivo antes de la recepción.",
  }
];

export const HOLDING_COMPANIES: HoldingCompany[] = [
  {
    name: "Kotai",
    category: "Constructora y Montaje",
    tagline: "El motor de edificación, montaje de estructuras pesadas y vivienda.",
    isMain: true,
    color: "from-kotai-800 to-kotai-900",
  },
  {
    name: "Secuoia",
    category: "Ingeniería y Construcción",
    tagline: "Estudios geotécnicos, cálculos estructurales y gestión técnica de obras.",
    color: "from-stone-800 to-stone-900",
  },
  {
    name: "Paulina",
    category: "Comercializadora, Ingeniería y Construcción",
    tagline: "Distribución de insumos, gestión comercial y suministro de obras.",
    color: "from-stone-700 to-stone-800",
  },
  {
    name: "RF",
    category: "Construcción de Vivienda",
    tagline: "Especialistas en desarrollo de soluciones habitacionales residenciales.",
    color: "from-stone-800 to-stone-900",
  },
  {
    name: "Los Aromos",
    category: "Constructora",
    tagline: "Desarrollo de urbanizaciones y proyectos de infraestructura comunitaria.",
    color: "from-stone-700 to-stone-800",
  }
];

export const SIMPLE_STEPS = [
  {
    step: "1",
    title: "Nos llamas o mandas un WhatsApp",
    desc: "Nos cuentas qué necesitas: ¿construir tu casa, ampliar, techar o montar un galpón? Te atendemos con calma y paciencia.",
    icon: "phone"
  },
  {
    step: "2",
    title: "Visitamos tu terreno o casa",
    desc: "Un maestro o ingeniero va a tu terreno a medir y revisar todo. Te explicamos en persona qué se puede hacer.",
    icon: "map"
  },
  {
    step: "3",
    title: "Presupuesto claro y por escrito",
    desc: "Te entregamos un presupuesto detallado: cuánto cuesta el material y la mano de obra. Sin costos ocultos.",
    icon: "file"
  },
  {
    step: "4",
    title: "Construimos con garantía",
    desc: "Comenzamos en la fecha acordada y te acompañamos hasta que recibas tu obra 100% terminada y garantizada.",
    icon: "shield"
  }
];

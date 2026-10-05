export interface ProjectSlide {
  id: string;
  title: string;
  category: 'Acondicionamiento Térmico' | 'Sistema Solar Térmico' | 'Mejoramiento Eléctrico' | 'Techumbre & Ventilación';
  location: string;
  description: string;
  image: string;
  specs: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  specialty: string;
}

export interface StrategicAlly {
  name: string;
  category: string;
  description: string;
  norma: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
}

// Slides para el Hero principal (auto-carrusel con fotos reales de Kotai)
export const HERO_CAROUSEL_SLIDES = [
  {
    id: 'hero-1',
    tag: 'Subsidios de Mejoramiento Serviu · Minvu',
    title: 'Acondicionamiento Térmico y Aislamiento de Hogares',
    description: 'Postula con nosotros a los subsidios del Estado para aislar tu casa del frío y calor. El subsidio cubre la mayor parte de la obra.',
    image: '/images/siding_Casa.jpg',
    stat: 'Desde 1 UF',
    statLabel: 'Aporte mínimo en libreta (~$41.500 según RSH)',
  },
  {
    id: 'hero-2',
    tag: 'Energía Solar y Ahorro',
    title: 'Agua Caliente Solar y Puertas Aislantes',
    description: 'Instalación de paneles solares térmicos y puertas herméticas para reducir drásticamente el gasto de gas en tu hogar.',
    image: '/images/PuertaYPanel3.jpg',
    stat: 'Hasta 80%',
    statLabel: 'Ahorro en cuenta de gas',
  },
  {
    id: 'hero-3',
    tag: 'Ventanas Termopanel Certificadas',
    title: 'Más Confort, Menos Ruido y Cero Humedad',
    description: 'Instalamos ventanas de doble vidrio hermético (termopanel) que cortan el frío del invierno y el calor del verano.',
    image: '/images/Termopanel3.jpg',
    stat: '100% Serviu',
    statLabel: 'Postulaciones y gestión completa',
  }
];

// Obras de aislamiento y acondicionamiento térmico con fotos reales de Kotai
export const PROJECTS_GALLERY: ProjectSlide[] = [
  {
    id: 'proj-1',
    title: 'Aislamiento Térmico Exterior con Siding y EIFS',
    category: 'Acondicionamiento Térmico',
    location: 'Comité Habitacional, Región Metropolitana',
    description: 'Revestimiento exterior continuo con placas aislantes y siding de alta durabilidad. Elimina filtraciones y conserva la temperatura interior.',
    image: '/images/siding_Casa.jpg',
    specs: ['Elimina puentes térmicos', 'Evita hongos y humedad en muros', 'Aprobado Serviu'],
  },
  {
    id: 'proj-2',
    title: 'Instalación de Ventanas Termopanel en Dormitorios y Living',
    category: 'Acondicionamiento Térmico',
    location: 'Población Los Copihues, San Bernardo',
    description: 'Reemplazo de ventanas antiguas por ventanas de aluminio y PVC con doble vidrio hermético. Aislación acústica y térmica inmediata.',
    image: '/images/Termopanel4.jpg',
    specs: ['Doble vidrio hermético', 'Cierre perimetral hermético', 'Menor ruido exterior'],
  },
  {
    id: 'proj-3',
    title: 'Panel Solar Térmico para Agua Caliente Sanitaria',
    category: 'Sistema Solar Térmico',
    location: 'Villa El Sol, Melipilla',
    description: 'Colector solar instalado en cubierta con estanque acumulador térmico. Agua caliente con energía solar y ahorro de hasta 80% en gas.',
    image: '/images/PuertaYPanel2.jpg',
    specs: ['Ahorro de hasta 80% en gas', 'Válvula termostática de seguridad', 'Certificación SEC'],
  },
  {
    id: 'proj-4',
    title: 'Cambio de Puertas de Acceso Herméticas',
    category: 'Acondicionamiento Térmico',
    location: 'Sector Sur, Santiago',
    description: 'Puertas reforzadas con sellos perimetrales de estanqueidad para evitar corrientes de aire frío y polvo exterior.',
    image: '/images/Puerta_Entrada.jpg',
    specs: ['Burletes de alta estanqueidad', 'Cerraduras de seguridad', 'Aislación termoacústica'],
  },
  {
    id: 'proj-5',
    title: 'Renovación de Ventanales Termopanel en Fachada',
    category: 'Acondicionamiento Térmico',
    location: 'Conjunto Residencial Cordillera',
    description: 'Ventanas termopanel instaladas a medida con sellado perimetral de poliuretano y terminación limpia sin dañar los muros interiores.',
    image: '/images/Termopanel7.jpg',
    specs: ['Aislamiento térmico invernal', 'Vidrios certificados NCh', 'Fácil apertura y limpieza'],
  },
  {
    id: 'proj-6',
    title: 'Acondicionamiento Térmico Integral de Vivienda Social',
    category: 'Acondicionamiento Térmico',
    location: 'Obra Entregada por Kotai',
    description: 'Transformación total de la envolvente de la casa con aislamiento exterior, techumbre y termopaneles.',
    image: '/images/despues.jpg',
    specs: ['Subsidio estatal Minvu', 'Inspección técnica ITO', 'Garantía por escrito'],
  }
];

// Galería fotográfica de obras y detalles en terreno
export const REAL_WORKS_GALLERY: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Termopanel Doble Vidrio Hermético',
    tag: 'Ventanas',
    image: '/images/Termopanel2.jpg',
    description: 'Corte efectivo del frío y la humedad con marcos herméticos.'
  },
  {
    id: 'gal-2',
    title: 'Siding Aislante y Puerta Principal',
    tag: 'Muros & Accesos',
    image: '/images/PuertaYPanel.jpg',
    description: 'Instalación coordinada de aislamiento de muros y nueva puerta de acceso.'
  },
  {
    id: 'gal-3',
    title: 'Ventana Termopanel en Segundo Nivel',
    tag: 'Ventanas',
    image: '/images/Termopanel5.jpg',
    description: 'Aislación en dormitorios superiores para evitar condensación nocturna.'
  },
  {
    id: 'gal-4',
    title: 'Puerta Exterior con Burletes',
    tag: 'Puertas',
    image: '/images/Puerta_Entrada2.jpg',
    description: 'Cierre hermético que bloquea corrientes de viento frío.'
  },
  {
    id: 'gal-5',
    title: 'Termopanel de Cocina y Comedor',
    tag: 'Ventanas',
    image: '/images/Termopanel8.jpg',
    description: 'Eliminación del vaho y gotas de agua en los vidrios en invierno.'
  },
  {
    id: 'gal-6',
    title: 'Sistema Solar y Panel Térmico',
    tag: 'Energía Solar',
    image: '/images/PuertaYPanel3.jpg',
    description: 'Conexión de colector solar directo a la red de agua sanitaria del hogar.'
  },
  {
    id: 'gal-7',
    title: 'Ventanales Amplios Herméticos',
    tag: 'Ventanas',
    image: '/images/Termopanel9.jpg',
    description: 'Luz natural con máxima retención del calor de la estufa.'
  },
  {
    id: 'gal-8',
    title: 'Termopanel Dormitorio Principal',
    tag: 'Ventanas',
    image: '/images/termopanel10.jpg',
    description: 'Dormitorios cálidos y protegidos del ruido de la calle.'
  }
];

// Caso real del Antes y Después (NO carrusel, fotos reales antes.jpg y despues.jpg)
export const REAL_BEFORE_AFTER: BeforeAfterItem = {
  id: 'ba-real-1',
  title: 'Acondicionamiento Térmico Integral en Vivienda',
  category: 'Subsidio Serviu de Mejoramiento',
  location: 'Obra Ejecutada por Kotai',
  description: 'Vivienda antes de la intervención presentaba filtraciones de frío, desprendimiento de pintura y problemas severos de condensación invernal. Kotai ejecutó la aislación térmica exterior con sistema EIFS y siding, cambio a ventanas termopanel y techumbre hermética.',
  beforeImage: '/images/antes.jpg',
  afterImage: '/images/despues.jpg',
  beforeLabel: 'Antes (Pérdida de calor, filtraciones y humedad)',
  afterLabel: 'Después (Aislada térmicamente por Kotai)',
  features: [
    'Aislación térmica continua en muros (Sistema EIFS y Siding)',
    'Termopaneles y puertas aislantes para evitar corrientes de aire',
    'Techumbre hermética y ventilación que evita moho y condensación',
    'Aporte familiar mínimo desde 1 UF cubierto en su mayoría por subsidio estatal'
  ]
};

// Requisitos y Documentos según flyers oficiales de Kotai
export const SUBSIDY_REQUIREMENTS = [
  'Estar dentro del tramo de HASTA el 60% más vulnerable según el Registro Social de Hogares (RSH)',
  'Ser propietario(a) o cónyuge de la vivienda que se postula',
  'No tener otra propiedad habitacional inscrita a su nombre',
  'Contar con el ahorro mínimo requerido en la Libreta de Ahorro para la Vivienda (desde 1 UF a 3 UF según RSH)'
];

export const REQUIRED_DOCUMENTS = [
  {
    doc: 'Registro Social de Hogares (RSH)',
    detail: 'Cartola vigente en el tramo de HASTA el 60% de vulnerabilidad.'
  },
  {
    doc: 'Fotocopia Cédula de Identidad',
    detail: 'Por ambos lados y vigente del propietario o postulante.'
  },
  {
    doc: 'Cuenta de Ahorro para la Vivienda',
    detail: 'Cartola con saldo de ahorro previo (desde 1 UF a 3 UF según tramo RSH).'
  },
  {
    doc: 'Certificado de Avalúo Fiscal Detallado',
    detail: 'Emitido por el Servicio de Impuestos Internos (SII).'
  },
  {
    doc: 'Certificado de Vivienda Social (D.O.M.)',
    detail: 'Emitido por la Dirección de Obras Municipales correspondiente.'
  }
];

// Integrantes del equipo humano Kotai
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Carlos Morales S.',
    role: 'Jefe de Obras & Terreno',
    experience: '22 años de oficio en terreno',
    bio: 'Lidera la ejecución diaria de aislaciones térmicas EIFS, montaje de termopaneles y cuadrillas en obra. Cuida que cada casa quede abrigada e impecable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specialty: 'Aislamiento EIFS y Obra'
  },
  {
    id: 'team-2',
    name: 'Ing. Rodrigo Palma V.',
    role: 'Ingeniero de Proyectos Serviu',
    experience: '16 años en cálculo y eficiencia',
    bio: 'Formula las memorias técnicas de acondicionamiento térmico y especificaciones de ahorro para las postulaciones públicas ante Serviu y Minvu.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specialty: 'Proyectos Serviu & Normativa'
  },
  {
    id: 'team-3',
    name: 'Valeria Contreras M.',
    role: 'Coordinadora de Familias y Postulaciones',
    experience: '10 años en gestión habitacional',
    bio: 'Acompaña a las familias y comités con paciencia y cariño en la reunión de los 5 documentos y aclara todas las dudas del Registro Social de Hogares.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    specialty: 'Atención a Familias & RSH'
  }
];

// Aliados estratégicos
export const STRATEGIC_ALLIES: StrategicAlly[] = [
  {
    name: 'Sistemas EIFS & Revestimientos',
    category: 'Aislación Térmica Continua',
    description: 'Poliestireno de alta densidad EPS y morteros elastoméricos antihumedad bajo norma NCh853.',
    norma: 'Aislación Certificada Serviu'
  },
  {
    name: 'Ventanas Termopanel & PVC',
    category: 'Vidrios Doble Hermético',
    description: 'Perfiles herméticos y vidrios con cámara de aire deshidratado para cortar el frío exterior.',
    norma: 'Norma de Hermeticidad NCh'
  },
  {
    name: 'Colectores Solares Certificados',
    category: 'Energía Solar Térmica',
    description: 'Paneles solares y depósitos acumuladores de agua sanitaria con sellos de aprobación SEC.',
    norma: 'Aprobación SEC Chile'
  },
  {
    name: 'Inspectores Técnicos ITO',
    category: 'Control de Calidad Independiente',
    description: 'Inspección técnica externa de cada hito antes de la recepción y aprobación del subsidio Serviu.',
    norma: 'Validación Técnica Minvu'
  }
];

// Holding Grupo Alianza G5
export const HOLDING_COMPANIES = [
  {
    id: 'kotai',
    name: 'Kotai',
    category: 'Constructora y Acondicionamiento',
    tagline: 'Especialistas en licitaciones y ejecución de subsidios de acondicionamiento térmico Serviu y obras de mejoramiento.',
    isMain: true,
  },
  {
    id: 'secuoia',
    name: 'Secuoia',
    category: 'Ingeniería y Construcción',
    tagline: 'Estudios geotécnicos de suelo, cálculo estructural avanzado y dirección técnica.',
    isMain: false,
  },
  {
    id: 'paulina',
    name: 'Paulina',
    category: 'Comercializadora, Ingeniería y Construcción',
    tagline: 'Suministro de insumos especializados y gestión comercial de proyectos.',
    isMain: false,
  },
  {
    id: 'rf',
    name: 'RF',
    category: 'Construcción de Vivienda',
    tagline: 'Desarrollo de proyectos habitacionales y soluciones para familias.',
    isMain: false,
  },
  {
    id: 'los-aromos',
    name: 'Los Aromos',
    category: 'Constructora',
    tagline: 'Desarrollo de obras de infraestructura, urbanizaciones y espacios comunitarios.',
    isMain: false,
  }
];

// Pasos simples para acceder al subsidio
export const SIMPLE_STEPS = [
  {
    number: '01',
    title: 'Revisamos tu Registro Social (RSH)',
    desc: 'Verificamos que estés dentro del tramo de HASTA el 60% más vulnerable para postular al subsidio Serviu.',
  },
  {
    number: '02',
    title: 'Visita Técnica a tu Hogar',
    desc: 'Un profesional de Kotai va a tu casa a medir muros, ventanas y techumbre para formular el proyecto térmico.',
  },
  {
    number: '03',
    title: 'Postulación y Documentación',
    desc: 'Te ayudamos a reunir los 5 documentos necesarios y armamos el expediente para postular formalmente ante el Serviu.',
  },
  {
    number: '04',
    title: 'Ejecución y Aislamiento Garantizado',
    desc: 'Ganada la postulación, Kotai aísla tu casa con materiales certificados, garantizando que tu hogar quede abrigado y seco.',
  }
];

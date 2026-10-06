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
  department: string;
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

// Datos de Contacto y Representación Oficial (Presentación PDA 2026 y Oficina)
export const COMPANY_INFO = {
  name: 'Constructora Kotai SpA',
  rut: '78.117.748-2',
  representative: 'Claudio García Pereira',
  address: 'José Joaquín Prieto N° 269, Comuna de Chillán, Región de Ñuble',
  commune: 'Chillán',
  regions: 'Región de Ñuble y Región del Biobío',
  phone: '+56 9 3101 8612',
  phoneClean: '56931018612',
  email: 'cgarcia@constructorakotai.cl',
  website: 'https://constructorakotai.cl',
  rshUrl: 'https://registrosocial.gob.cl/',
  norma: 'D.S. N° 27 de 2016 (CS27) - MINVU / SERVIU',
  programName: 'Programa de Mejoramiento de Viviendas y Barrios (Eficiencia Energética e Hídrica / PDA)',
};

// Slides para el Hero principal (auto-carrusel con fotos reales de Kotai)
export const HERO_CAROUSEL_SLIDES = [
  {
    id: 'hero-1',
    tag: 'Norma D.S. N° 27 de 2016 · SERVIU MINVU',
    title: 'Acondicionamiento Térmico y Aislamiento de Hogares',
    description: 'Postula con Kotai al subsidio de eficiencia energética D.S. 27 en las regiones de Ñuble y Biobío. Asesoría 100% gratuita para el beneficiario.',
    image: '/images/siding_Casa.jpg',
    stat: 'Asesoría $0',
    statLabel: 'El beneficiario no paga nada por postular ni gestionar',
  },
  {
    id: 'hero-2',
    tag: 'Ventanas Termopanel Certificadas DVH',
    title: 'Más Confort, Menos Ruido y Cero Humedad',
    description: 'Recambio integral a ventanas de Doble Vidriado Hermético con doble sello Butilo. Cortan el frío del invierno, el calor y eliminan la condensación.',
    image: '/images/Termopanel3.jpg',
    stat: 'Norma CS27',
    statLabel: 'Estándar térmico oficial Serviu / Minvu',
  },
  {
    id: 'hero-3',
    tag: 'Eficiencia Térmica e Hídrica · PDA',
    title: 'Ahorro Real en Calefacción y Gas para tu Familia',
    description: 'Aislación continua en muros (EIFS y siding), cambio de puertas herméticas, ventilación pasiva y colectores solares autorizados SEC.',
    image: '/images/PuertaYPanel3.jpg',
    stat: 'Ñuble y Biobío',
    statLabel: 'Sede en Chillán y cobertura regional',
  }
];

// Obras de aislamiento y acondicionamiento térmico en Ñuble y Biobío
export const PROJECTS_GALLERY: ProjectSlide[] = [
  {
    id: 'proj-1',
    title: 'Aislamiento Térmico Exterior con Siding y EIFS',
    category: 'Acondicionamiento Térmico',
    location: 'Comité Habitacional, Comuna de Chillán (Región de Ñuble)',
    description: 'Revestimiento exterior continuo con placas aislantes de alta densidad y siding. Elimina puentes térmicos y conserva la temperatura interior bajo norma D.S. 27.',
    image: '/images/siding_Casa.jpg',
    specs: ['Elimina puentes térmicos', 'Evita hongos y humedad en muros', 'Norma D.S. 27 Serviu'],
  },
  {
    id: 'proj-2',
    title: 'Instalación de Ventanas Termopanel en Dormitorios y Living',
    category: 'Acondicionamiento Térmico',
    location: 'Sector Ultraestación, Chillán Viejo (Región de Ñuble)',
    description: 'Reemplazo integral por ventanas de PVC y aluminio con Doble Vidriado Hermético (DVH) y doble sello Butilo. Aislación termoacústica inmediata.',
    image: '/images/Termopanel4.jpg',
    specs: ['Doble vidrio hermético (DVH)', 'Cierre perimetral estanco', 'Menor ruido y cero condensación'],
  },
  {
    id: 'proj-3',
    title: 'Panel Solar Térmico para Agua Caliente Sanitaria',
    category: 'Sistema Solar Térmico',
    location: 'Villa Los Volcanes, San Carlos (Región de Ñuble)',
    description: 'Colector solar sobre cubierta con estanque acumulador térmico. Agua caliente con energía solar y ahorro de hasta 80% en consumo de gas.',
    image: '/images/PuertaYPanel2.jpg',
    specs: ['Ahorro de hasta 80% en gas', 'Válvula termostática de seguridad', 'Certificación SEC'],
  },
  {
    id: 'proj-4',
    title: 'Cambio de Puertas de Acceso Herméticas',
    category: 'Acondicionamiento Térmico',
    location: 'Barrio Norte, Concepción (Región del Biobío)',
    description: 'Puertas reforzadas con sellos perimetrales de estanqueidad para evitar filtraciones de corrientes frías, polvo y humedad exterior.',
    image: '/images/Puerta_Entrada.jpg',
    specs: ['Burletes de alta estanqueidad', 'Cerraduras de seguridad', 'Aislación termoacústica'],
  },
  {
    id: 'proj-5',
    title: 'Renovación de Ventanales Termopanel en Fachada',
    category: 'Acondicionamiento Térmico',
    location: 'Sector Paillihue, Los Ángeles (Región del Biobío)',
    description: 'Ventanas termopanel a medida con sellado perimetral de poliuretano y terminación limpia sin alterar la estructura interior.',
    image: '/images/Termopanel7.jpg',
    specs: ['Aislamiento térmico invernal', 'Vidrios certificados NCh', 'Fácil apertura y limpieza'],
  },
  {
    id: 'proj-6',
    title: 'Acondicionamiento Térmico Integral D.S. 27',
    category: 'Acondicionamiento Térmico',
    location: 'Obra Entregada por Kotai, Chillán',
    description: 'Transformación total de la envolvente de la casa con aislación de muros EIFS, techumbre con lana de vidrio, ventanas termopanel y ventilación.',
    image: '/images/despues.jpg',
    specs: ['Norma D.S. N° 27 de 2016', 'Inspección técnica ITO', 'Garantía por escrito'],
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

// Caso real del Antes y Después (fotos reales antes.jpg y despues.jpg)
export const REAL_BEFORE_AFTER: BeforeAfterItem = {
  id: 'ba-real-1',
  title: 'Acondicionamiento Térmico Integral bajo Norma D.S. N° 27',
  category: 'Subsidio Serviu de Mejoramiento D.S. 27',
  location: 'Obra Ejecutada por Kotai, Chillán',
  description: 'Vivienda previa a la intervención presentaba graves filtraciones de frío, desprendimiento de revestimiento y severa condensación invernal. Kotai ejecutó la aislación exterior continua con sistema EIFS y siding, recambio integral a ventanas termopanel DVH, extractores, aireadores y techumbre hermética.',
  beforeImage: '/images/antes.jpg',
  afterImage: '/images/despues.jpg',
  beforeLabel: 'Antes (Pérdida de calor, filtraciones y humedad)',
  afterLabel: 'Después (Aislada térmicamente por Kotai bajo D.S. 27)',
  features: [
    'Aislación térmica continua en muros (Sistema EIFS en albañilería / Siding en madera y fibrocemento)',
    'Termopaneles DVH con doble sello de Butilo y puertas exteriores herméticas',
    'Techumbre aislada con lana de vidrio y ventilación pasiva/activa contra moho',
    'Asesoría 100% gratuita de Kotai: el beneficiario solo aporta el ahorro reglamentario en su libreta'
  ]
};

// Requisitos oficiales según presentación oficial D.S. N° 27 de 2016 (PDA 2026)
export const SUBSIDY_REQUIREMENTS = [
  'Ser mayor de 18 años de edad.',
  'Acreditar una vivienda que cuente con permiso de edificación y recepción definitiva hasta el año 2009.',
  'Viviendas cuyo avalúo fiscal sea inferior a 1.375 UF.',
  'Contar con Registro Social de Hogares (RSH) con la misma dirección (donde postula y donde reside) hasta el 70%.',
  'Tener libreta de ahorro para la vivienda en BancoEstado con el ahorro mínimo exigido por SERVIU (3 UF para tramo 40%-60%, 5 UF para tramo 70%).',
  'Que la vivienda no exceda los 90 m² (previa evaluación en visita técnica).'
];

// Ahorro reglamentario según tramo RSH (Presentación PDA 2026)
export const AHORRO_RSH_TABLE = [
  {
    tramo: 'Familias entre 40% y 60% RSH',
    ahorroUF: '3 UF',
    ahorroPesos: '~$120.000 Aprox.',
    descripcion: 'Ahorro depositado en su propia libreta de ahorro para la vivienda de BancoEstado.'
  },
  {
    tramo: 'Familias en el 70% RSH',
    ahorroUF: '5 UF',
    ahorroPesos: '~$194.000 Aprox.',
    descripcion: 'Ahorro depositado en su propia libreta de ahorro para la vivienda de BancoEstado.'
  }
];

// 7 Documentos Oficiales para Postular (Presentación PDA 2026)
export const REQUIRED_DOCUMENTS = [
  {
    doc: 'Fotocopia Cédula de Identidad',
    detail: 'De él o la postulante por ambos lados y vigente.'
  },
  {
    doc: 'Credencial de Discapacidad',
    detail: 'Certificado o credencial según corresponda (si aplica en el hogar).'
  },
  {
    doc: 'Cartola Cuenta de Ahorro para la Vivienda',
    detail: 'Emitida por BancoEstado con el saldo del ahorro mínimo exigido.'
  },
  {
    doc: 'Certificado de Vivienda Social',
    detail: 'Emitido por la Dirección de Obras Municipales (DOM) respectiva.'
  },
  {
    doc: 'Certificado de Avalúo Fiscal Detallado',
    detail: 'Emitido por el SII (con ClaveÚnica en sii.cl) o en la Dirección de Obras Municipales.'
  },
  {
    doc: 'Cartola Registro Social de Hogares (RSH)',
    detail: 'Hasta el 70% de vulnerabilidad. Descargable en registrosocial.gob.cl con ClaveÚnica o en DIDECO.'
  },
  {
    doc: 'Escritura de la Vivienda o Terreno',
    detail: 'Fotocopia completa de la escritura o copia de inscripción en el Conservador de Bienes Raíces (CBR).'
  }
];

// Mejoras a las que acceden las familias bajo D.S. N° 27 (Presentación PDA 2026)
export const MEJORAS_PDA_DS27 = [
  {
    title: 'Regularización Parcial',
    desc: 'Sin costo adicional para las familias postulantes.',
    tag: 'Gratuito'
  },
  {
    title: 'Aislación Térmica de Muros',
    desc: 'Cambio de revestimiento exterior con poliestireno expandido de alta densidad, fibrocemento, OSB, fieltro asfáltico, siding en madera o sistema EIFS en albañilería.',
    tag: 'Envolvente'
  },
  {
    title: 'Ventanas Termopanel (DVH)',
    desc: 'Cambio de todas las ventanas por Doble Vidriado Hermético con doble sello de Butilo (corta frío, calor y ruidos molestos).',
    tag: 'Ventanas'
  },
  {
    title: 'Cambio de Puertas Exteriores',
    desc: 'Puertas herméticas con sellos perimetrales que cortan corrientes de aire frío.',
    tag: 'Accesos'
  },
  {
    title: 'Extractores de Aire',
    desc: 'Instalación de extractores mecánicos de humedad en baño y cocina para evitar moho.',
    tag: 'Ventilación'
  },
  {
    title: 'Aireadores y Celosías Pasivas',
    desc: 'Instalación de aireadores pasivos en Living, Comedor y Dormitorios para circulación de aire puro sin pérdida de calor.',
    tag: 'Calidad de Aire'
  },
  {
    title: 'Aislación de Techumbre',
    desc: 'Instalación de lana de vidrio de alta densidad y recambio de cubierta si se encuentra en malas condiciones.',
    tag: 'Cubierta'
  },
  {
    title: 'Piso Ventilado',
    desc: 'Cambio de piso si lo amerita técnicamente en viviendas con piso ventilado.',
    tag: 'Estructura'
  }
];

// Integrantes del equipo humano y departamentos (Presentación Oficina Alianza G5)
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Don Claudio García Pereira',
    role: 'Gerente General & Representante Legal',
    department: 'Gerencia',
    experience: 'Liderazgo y Gestión de Holding',
    bio: 'Supervigila el funcionamiento de todos los departamentos y representa a Constructora Kotai y empresas de Alianza G5 ante el SERVIU y entidades públicas.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specialty: 'Dirección General & SERVIU'
  },
  {
    id: 'team-2',
    name: 'Don José Prieto & Equipo Técnico',
    role: 'Jefatura de Departamento Técnico',
    department: 'Departamento Técnico',
    experience: 'Cálculo, Planimetría y Normativa CS27',
    bio: 'Equipo conformado por Don José Prieto, Srta. Monserrat Parra y Don David Fierro. Realizan visitas técnicas, confección de planos, presupuestos y presentación del proyecto ante SERVIU.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specialty: 'Planimetría & Proyectos SERVIU'
  },
  {
    id: 'team-3',
    name: 'Señora Sandra & Área Social',
    role: 'Coordinación con la Comunidad',
    department: 'Departamento Social',
    experience: 'Vínculo Directo con Beneficiarios',
    bio: 'Integrado por Señora Sandra, Sebastián y Srta. Monserrat. Encargados de captación, digitalización, administración de bases de datos y acompañamiento humano a dirigentes y vecinos.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    specialty: 'Atención a Familias & RSH'
  },
  {
    id: 'team-4',
    name: 'Don Jorge Rosales',
    role: 'Jefe de Operaciones y Cuadrillas',
    department: 'Departamento de Operaciones',
    experience: 'Supervisión en Terreno',
    bio: 'Lidera cotizaciones, adquisición de materiales, reclutamiento de cuadrillas de terreno (maestros), cubicación y supervigilancia de la ejecución de cada proyecto SERVIU.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    specialty: 'Operaciones y Faenas'
  }
];

// Aliados estratégicos y normas técnicas
export const STRATEGIC_ALLIES: StrategicAlly[] = [
  {
    name: 'Sistemas EIFS & Revestimientos',
    category: 'Aislación Térmica Continua',
    description: 'Poliestireno expandido de alta densidad, fibra de vidrio y morteros elastoméricos bajo norma NCh853 y D.S. 27.',
    norma: 'Aislación Certificada Serviu'
  },
  {
    name: 'Ventanas Termopanel Doble Sello',
    category: 'Vidrios Doble Hermético (DVH)',
    description: 'Cámara de aire seco encapsulada y doble sello perimetral con Butilo para máxima resistencia térmica y acústica.',
    norma: 'Norma de Hermeticidad NCh'
  },
  {
    name: 'Colectores Solares Certificados',
    category: 'Energía Solar Térmica',
    description: 'Paneles solares y acumuladores térmicos para agua caliente con sellos de aprobación SEC.',
    norma: 'Aprobación SEC Chile'
  },
  {
    name: 'Inspectores Técnicos ITO',
    category: 'Control de Calidad Independiente',
    description: 'Inspección técnica externa de cada hito antes de la recepción y aprobación del subsidio Serviu.',
    norma: 'Validación Técnica Minvu'
  }
];

// Empresas del Grupo Empresarial "ALIANZA G5" (Presentación Oficial de Oficina)
export const HOLDING_COMPANIES = [
  {
    id: 'kotai',
    name: 'Constructora Kotai SpA',
    rut: '78.117.748-2',
    category: 'Constructora y Acondicionamiento Térmico',
    tagline: 'Especialistas en licitaciones y ejecución de proyectos de acondicionamiento térmico Serviu D.S. 27 y obras de mejoramiento habitacional.',
    isMain: true,
  },
  {
    id: 'los-aromos',
    name: 'Constructora Los Aromos SpA',
    rut: '77.755.654-1',
    category: 'Constructora',
    tagline: 'Desarrollo de obras de infraestructura, urbanizaciones y espacios habitacionales comunitarios.',
    isMain: false,
  },
  {
    id: 'paulina',
    name: 'Ingeniería, Construcción y Comercializadora Paulina SpA',
    rut: '78.407.167-7',
    category: 'Comercializadora, Ingeniería y Construcción',
    tagline: 'Suministro especializado de insumos, materiales de construcción y gestión comercial.',
    isMain: false,
  },
  {
    id: 'sequoia',
    name: 'Ingeniería y Construcción Sequoia SpA',
    rut: '78.410.187-8',
    category: 'Ingeniería y Construcción',
    tagline: 'Estudios de suelo, cálculo estructural avanzado y dirección técnica de proyectos.',
    isMain: false,
  },
  {
    id: 'rf',
    name: 'Constructora RF SpA',
    rut: '78.301.452-1',
    category: 'Construcción de Vivienda',
    tagline: 'Desarrollo de proyectos habitacionales y soluciones integrales para comités de vivienda.',
    isMain: false,
  }
];

// Departamentos oficiales de la organización Alianza G5
export const HOLDING_DEPARTMENTS = [
  {
    name: 'Departamento Social',
    functions: ['Captación de beneficiarios', 'Digitalización de antecedentes', 'Administración de base de datos', 'Vínculo con beneficiarios y dirigentes']
  },
  {
    name: 'Departamento Técnico',
    functions: ['Visitas técnicas y planimetría', 'Confección de planos', 'Presupuesto detallado', 'Presentación del proyecto ante SERVIU']
  },
  {
    name: 'Departamento Administrativo',
    functions: ['Recursos Humanos', 'Planificación financiera y contabilidad', 'Costos de operaciones', 'Gestión de estados de pago SERVIU']
  },
  {
    name: 'Departamento de Operaciones',
    functions: ['Cotizaciones y compra de materiales', 'Reclutamiento de cuadrillas de terreno', 'Cubicación y uso de materiales', 'Supervigilancia de ejecución de obras']
  },
  {
    name: 'Departamento de Licitaciones',
    functions: ['Mercado Público y Sector Privado', 'Apoyo continuo al área social', 'Formulación y presentación de postulaciones']
  },
  {
    name: 'Gerencia General',
    functions: ['Supervigilancia integral de todos los departamentos', 'Representación corporativa ante SERVIU y entidades públicas']
  }
];

// Pasos simples para acceder al subsidio
export const SIMPLE_STEPS = [
  {
    number: '01',
    title: 'Revisamos tu Registro Social (RSH)',
    desc: 'Verificamos que tu hogar cuente con RSH vigente hasta el 70% en Ñuble o Biobío. Te ayudamos a consultar tu cartola en registrosocial.gob.cl.',
  },
  {
    number: '02',
    title: 'Visita Técnica Gratuita a tu Casa',
    desc: 'El equipo técnico de Kotai acude a tu domicilio en Chillán o comunas aledañas para planimetría, medición de muros y ventanas sin costo alguno.',
  },
  {
    number: '03',
    title: 'Reunión de los 7 Documentos y Postulación',
    desc: 'Te acompañamos a reunir los 7 documentos oficiales y presentamos la carpeta técnica ante el SERVIU bajo la norma D.S. N° 27 (CS27).',
  },
  {
    number: '04',
    title: 'Ejecución y Aislamiento Garantizado',
    desc: 'Ganada la postulación, Kotai aísla tu vivienda con termopaneles, EIFS, ventilación y techumbre. Tu único aporte es el ahorro previo en tu libreta.',
  }
];


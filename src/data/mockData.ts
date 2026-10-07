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
  logo?: string;
  badge?: string;
  highlight?: boolean;
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
  phone: '+56 9 5050 1231',
  phoneClean: '56950501231',
  email: 'contacto@constructorakotai.cl',
  schedule: 'Lunes a Viernes de 8:30 a 17:30 hrs',
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
  },
  {
    id: 'gal-9',
    title: 'Aislación y Renovación de Techumbre (PDA)',
    tag: 'Techumbre',
    image: '/images/pda/techumbre_terminada.png',
    description: 'Instalación de aislante de alta densidad en techumbre y cubierta nueva, cortando hasta el 40% de fugas de calor.'
  },
  {
    id: 'gal-10',
    title: 'Vivienda Aislada Térmicamente Entregada',
    tag: 'Envolvente Térmica',
    image: '/images/pda/vivienda_obra_terminada.png',
    description: 'Envolvente continua completa con sistema EIFS y siding bajo estándar D.S. N° 27 de 2016.'
  },
  {
    id: 'gal-11',
    title: 'Ventana Termopanel DVH en Obra Real',
    tag: 'Ventanas',
    image: '/images/pda/termopanel_obra.png',
    description: 'Doble vidriado hermético con perfilería estanca y sellado perimetral contra viento y condensación.'
  },
  {
    id: 'gal-12',
    title: 'Puerta Exterior Hermética de Alta Eficiencia',
    tag: 'Puertas',
    image: '/images/pda/puerta_despues.jpg',
    description: 'Puerta exterior reforzada con burletes de estanqueidad perimetral que bloquean el paso de aire frío.'
  },
  {
    id: 'gal-13',
    title: 'Extractor Mecánico en Zona Húmeda',
    tag: 'Ventilación',
    image: '/images/pda/extractor_aire.jpg',
    description: 'Extracción de vapor y humedad en baños y cocinas para evitar proliferación de hongos y moho.'
  },
  {
    id: 'gal-14',
    title: 'Celosías y Aireadores Pasivos Reglamentarios',
    tag: 'Ventilación Pasiva',
    image: '/images/pda/celosia_ventilacion.jpg',
    description: 'Renovación constante de aire interior sin pérdida de calefacción, exigida por el Plan de Descontaminación.'
  },
  {
    id: 'gal-15',
    title: 'Faena de Aislación de Techumbre en Ejecución',
    tag: 'Techumbre',
    image: '/images/pda/techumbre_proceso.jpg',
    description: 'Colocación en entretecho de material aislante con espesor certificado bajo especificaciones SERVIU CS27.'
  },
  {
    id: 'gal-16',
    title: 'Barrera Térmica Continua en Muros Exteriores',
    tag: 'Muros',
    image: '/images/pda/material_aislacion.png',
    description: 'Fijación de paneles térmicos continuos para suprimir completamente los puentes térmicos estructurales.'
  },
  {
    id: 'gal-17',
    title: 'Puertas Herméticas con Termopanel en Madera Noble',
    tag: 'Puertas & Ventanas',
    image: '/images/proveedor/valey_puertas_termopanel_nogal.jpg',
    description: 'Puertas exteriores de alta eficiencia con doble vidriado hermético y terminación premium tipo nogal fabricadas a medida.'
  },
  {
    id: 'gal-18',
    title: 'Despacho de Ventanas Termopanel Certificadas DVH',
    tag: 'Logística & Taller',
    image: '/images/proveedor/valey_camion_despacho_ventanas.jpg',
    description: 'Transporte técnico en camión con caballete para asegurar la integridad de los termopaneles antes de su montaje.'
  },
  {
    id: 'gal-19',
    title: 'Puerta Corredera Hermética y Ventanales Interiores',
    tag: 'Terminación Final',
    image: '/images/proveedor/valey_puerta_corredera_instalada.jpg',
    description: 'Instalación y terminación estanca de correderas y ventanales sin filtraciones de aire ni ruidos exteriores.'
  },
  {
    id: 'gal-20',
    title: 'Ventanales Termopanel DVH en Caballete de Taller',
    tag: 'Fábrica de Ventanas',
    image: '/images/proveedor/valey_ventanas_certificadas_dvh.jpg',
    description: 'Ventanas con doble vidrio y sellos térmicos ensambladas en planta bajo certificación Serviu D.S. 27.'
  }
];

// Casos de Antes y Después (Fotos reales de obra y presentación oficial PDA 2026)
export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: 'ba-vivienda',
    title: 'Acondicionamiento Térmico Integral bajo Norma D.S. N° 27',
    category: 'Vivienda Completa',
    location: 'Chillán, Región de Ñuble',
    description: 'Vivienda previa presentaba severas fugas de calor, desprendimiento de revestimiento y humedad. Kotai ejecutó la aislación exterior continua con sistema EIFS y siding, recambio a termopaneles DVH, extractores, aireadores y techumbre hermética.',
    beforeImage: '/images/antes.jpg',
    afterImage: '/images/despues.jpg',
    beforeLabel: 'Antes (Pérdida de calor, filtraciones y humedad)',
    afterLabel: 'Después (Aislada por Kotai bajo D.S. 27)',
    features: [
      'Aislación térmica continua en muros (Sistema EIFS y Siding)',
      'Termopaneles DVH con doble sello de Butilo y puertas herméticas',
      'Techumbre aislada con lana de vidrio y ventilación pasiva/activa contra moho',
      'Asesoría 100% gratuita de Kotai: el beneficiario solo aporta el ahorro en su libreta'
    ]
  },
  {
    id: 'ba-muros',
    title: 'Renovación de Muros y Revestimiento Térmico EIFS / Siding',
    category: 'Muros y Envolvente',
    location: 'Chillán Viejo, Región de Ñuble',
    description: 'Recambio de fachada deteriorada por revestimiento con placas aislantes de alta densidad, fibrocemento y terminación sellada contra viento y lluvia.',
    beforeImage: '/images/pda/revestimiento_antes.png',
    afterImage: '/images/pda/revestimiento_despues.png',
    beforeLabel: 'Antes (Muro sin aislación con deterioro exterior)',
    afterLabel: 'Después (Fachada renovada y aislada térmicamente)',
    features: [
      'Barrera térmica exterior continua que corta puentes térmicos',
      'Materiales certificados que protegen contra la lluvia y humedad',
      'Mayor durabilidad, resistencia mecánica y terminación moderna',
      'Cumplimiento con estándar de transmitancia térmica SERVIU CS27'
    ]
  },
  {
    id: 'ba-puertas',
    title: 'Recambio de Puerta de Acceso a Puerta Hermética de Alta Eficiencia',
    category: 'Puertas y Accesos',
    location: 'Concepción, Región del Biobío',
    description: 'Sustitución de puerta antigua permeable al viento y polvo por puerta reforzada con sellos perimetrales y burletes de estanqueidad.',
    beforeImage: '/images/pda/puerta_antes.jpg',
    afterImage: '/images/pda/puerta_despues.jpg',
    beforeLabel: 'Antes (Puerta desajustada con filtración de corrientes)',
    afterLabel: 'Después (Puerta hermética con sellos perimetrales)',
    features: [
      'Sellado perimetral estanco que elimina corrientes de aire helado',
      'Cerradura de seguridad y mayor aislamiento acústico',
      'Material resistente al clima sureño sin deformaciones',
      'Reglamentaria bajo estándar de eficiencia energética D.S. 27'
    ]
  }
];

// Caso real por defecto para retrocompatibilidad
export const REAL_BEFORE_AFTER: BeforeAfterItem = BEFORE_AFTER_CASES[0];

// Requisitos oficiales según presentación oficial D.S. N° 27 de 2016 (PDA 2026)
export const SUBSIDY_REQUIREMENTS = [
  'Ser mayor de 18 años de edad.',
  'Acreditar una vivienda que cuente con permiso de edificación y recepción definitiva hasta el año 2009.',
  'Viviendas cuyo avalúo fiscal sea inferior a 1.375 UF.',
  'Contar con Registro Social de Hogares (RSH) con la misma dirección (donde postula y donde reside) hasta el 70%.',
  'Tener libreta de ahorro para la vivienda en BancoEstado con el ahorro reglamentario exigido por SERVIU (monto a confirmar con Kotai).',
  'Que la vivienda no exceda los 90 m² (previa evaluación en visita técnica).'
];

// Ahorro reglamentario según tramo RSH generalizado (D.S. N° 27 / PDA 2026)
export const AHORRO_RSH_TABLE = [
  {
    tramo: 'Familias hasta el 70% RSH',
    ahorroUF: 'Por confirmar',
    ahorroPesos: 'Consulta con Kotai',
    descripcion: 'Ahorro reglamentario depositado en su propia libreta para la vivienda en BancoEstado. Califican todas las familias con RSH vigente hasta el 70%.'
  },
  {
    tramo: 'Asesoría y Postulación Kotai',
    ahorroUF: '$0',
    ahorroPesos: '100% Gratuito',
    descripcion: 'Ni la constructora ni la entidad patrocinante cobran honorarios al beneficiario. La postulación y asesoría técnica son totalmente gratuitas.'
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

export const MEJORAS_PDA_DS27 = [
  {
    title: 'Regularización Parcial',
    desc: 'Sin costo adicional para las familias postulantes dentro del proceso de subsidio.',
    tag: 'Gratuito',
    image: '/images/despues.jpg'
  },
  {
    title: 'Aislación Térmica de Muros',
    desc: 'Cambio de revestimiento con poliestireno expandido de alta densidad, fibrocemento, OSB, siding o sistema EIFS.',
    tag: 'Envolvente',
    image: '/images/pda/revestimiento_despues.png'
  },
  {
    title: 'Ventanas Termopanel (DVH)',
    desc: 'Cambio integral a Doble Vidriado Hermético con doble sello de Butilo (corta frío, calor y ruidos molestos).',
    tag: 'Ventanas',
    image: '/images/pda/termopanel_obra.png'
  },
  {
    title: 'Cambio de Puertas Exteriores',
    desc: 'Puertas herméticas con sellos perimetrales y burletes de estanqueidad contra corrientes frías.',
    tag: 'Accesos',
    image: '/images/pda/puerta_despues.jpg'
  },
  {
    title: 'Extractores de Aire',
    desc: 'Instalación de extractores mecánicos de humedad en baño y cocina para evitar moho y condensación.',
    tag: 'Ventilación',
    image: '/images/pda/extractor_aire.jpg'
  },
  {
    title: 'Aireadores y Celosías Pasivas',
    desc: 'Aireadores pasivos en dormitorios y living para ventilación continua y aire puro sin fuga de calor.',
    tag: 'Calidad de Aire',
    image: '/images/pda/celosia_ventilacion.jpg'
  },
  {
    title: 'Aislación de Techumbre',
    desc: 'Instalación de lana de vidrio de alta densidad y recambio de cubierta si se encuentra deteriorada.',
    tag: 'Techumbre',
    image: '/images/pda/techumbre_terminada.png'
  },
  {
    title: 'Piso Ventilado y Estructura',
    desc: 'Aislación y mejoramiento técnico en viviendas que cuentan con piso ventilado.',
    tag: 'Estructura',
    image: '/images/pda/material_aislacion.png'
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
    name: 'Vidriería Valey',
    category: 'Fábrica Oficial de Ventanas Termopanel',
    description: 'Fábrica de ventanas altamente recomendada para todas las constructoras del sector. Ventanas 100% certificadas Serviu, doble vidriado hermético (DVH), doble sello de Butilo y perfiles de PVC Winhouse y aluminio reforzado.',
    norma: 'Ventanas Certificadas Serviu D.S. 27',
    logo: '/images/valey/logo_vidrieria_valey.png',
    badge: 'Fábrica Altamente Recomendada',
    highlight: true,
  },
  {
    name: 'Ferretería Valey (Grupo Valey)',
    category: 'Proveedor Principal de Materiales',
    description: 'Proveedor principal altamente recomendado para todas las empresas constructoras de la región. Abastecimiento continuo de aislantes térmicos EIFS, lana de vidrio, fibrocemento, siding y perfilería estructural.',
    norma: 'Proveedor Líder del Sector',
    logo: '/images/valey/logo_ferreteria_valey.png',
    badge: 'Proveedor Principal Recomendado',
    highlight: true,
  },
  {
    name: 'Sistemas EIFS & Revestimientos',
    category: 'Aislación Térmica Continua',
    description: 'Poliestireno expandido de alta densidad, fibra de vidrio y morteros elastoméricos bajo norma NCh853 y D.S. 27.',
    norma: 'Aislación Certificada Serviu',
  },
  {
    name: 'Colectores Solares Certificados SEC',
    category: 'Energía Solar Térmica',
    description: 'Paneles solares y acumuladores térmicos para agua caliente con sellos de aprobación y certificación SEC Chile.',
    norma: 'Aprobación SEC Chile',
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

// Videos oficiales de Vidriería y Ferretería Valey (Proveedor Principal & Fábrica de Ventanas)
export interface ProviderVideoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  badge: string;
  tag: string;
}

export const PROVIDER_VIDEOS: ProviderVideoItem[] = [
  {
    id: 'vid-proceso',
    title: 'Fabricación Integral de Ventanas Termopanel',
    subtitle: 'Desde la medición milimétrica hasta la instalación final en terreno',
    description: 'En Vidriería Valey llevamos cada proyecto desde la toma de medidas en terreno, corte computarizado de perfiles, armado estanco con sellado de Butilo, hasta la instalación y terminación final en obra.',
    videoSrc: '/videos/valey_proceso_integral.mp4',
    posterSrc: '/videos/posters/valey_proceso_integral.jpg',
    badge: 'Proceso Certificado',
    tag: 'Fábrica de Ventanas',
  },
  {
    id: 'vid-tripleriel',
    title: 'Correderas Triple Riel Termopanel',
    subtitle: 'Ingeniería hermética para grandes aperturas y luz natural',
    description: 'Línea de ventanales correderos con triple riel y cristales DVH con control acústico y térmico, ideal para hogares que buscan confort sin filtraciones de viento ni ruido.',
    videoSrc: '/videos/valey_correderas_tripleriel.mp4',
    posterSrc: '/videos/posters/valey_correderas_tripleriel.jpg',
    badge: 'Alta Hermeticidad',
    tag: 'Vidriería Valey',
  },
  {
    id: 'vid-winhouse',
    title: 'Ventanales PVC con Perfilería Winhouse',
    subtitle: 'Perfiles europeos de PVC certificados con doble vidriado hermético',
    description: 'Instalación de ventanales termo-acústicos con perfilería Winhouse y doble vidrio sellado. Máxima eficiencia energética bajo estándares de habitabilidad y clima del sur de Chile.',
    videoSrc: '/videos/valey_ventanales_winhouse.mp4',
    posterSrc: '/videos/posters/valey_ventanales_winhouse.jpg',
    badge: 'PVC Certificado',
    tag: 'Termopanel Winhouse',
  },
  {
    id: 'vid-ferreteria',
    title: 'Ferretería Valey: Materiales y Abastecimiento Integral',
    subtitle: 'El proveedor principal de las empresas constructoras de Ñuble y Biobío',
    description: 'Todo para la construcción en un solo lugar: aislantes térmicos EIFS, lanas de vidrio, planchas, perfiles y herramientas técnicas para responder a las exigencias de licitaciones Serviu.',
    videoSrc: '/videos/valey_ferreteria_materiales.mp4',
    posterSrc: '/videos/posters/valey_ferreteria_materiales.jpg',
    badge: 'Proveedor Principal',
    tag: 'Ferretería Técnica',
  },
  {
    id: 'vid-fachada',
    title: 'Fachadas y Cerramientos Herméticos Terminados',
    subtitle: 'Obras ejecutadas con estanqueidad de alta durabilidad',
    description: 'Muestra de ventanales y accesos de alta durabilidad instalados en obra, listos para resistir intemperie y cambios climáticos extremos.',
    videoSrc: '/videos/valey_obra_fachada.mp4',
    posterSrc: '/videos/posters/valey_obra_fachada.jpg',
    badge: 'Obra Terminada',
    tag: 'Envolvente Estanca',
  },
  {
    id: 'vid-oficinas',
    title: 'Espacios y Cerramientos Vidriados de Alta Gama',
    subtitle: 'Terminaciones de cristal templado y arquitectura moderna',
    description: 'Soluciones arquitectónicas de precisión con cristal y perfilería estructural para oficinas y divisiones acústicas de alto rendimiento.',
    videoSrc: '/videos/valey_oficinas_corporativas.mp4',
    posterSrc: '/videos/posters/valey_oficinas_corporativas.jpg',
    badge: 'Línea Arquitectónica',
    tag: 'Grupo Valey',
  },
];

// Fotos oficiales de taller, logística y entrega de Vidriería & Ferretería Valey
export const PROVIDER_PHOTOS = [
  {
    id: 'p-1',
    title: 'Planta de Ferretería & Vidriería Valey',
    description: 'Instalaciones principales y flota logística para despacho a obras de acondicionamiento térmico.',
    image: '/images/proveedor/valey_fachada_ferreteria.jpg',
    tag: 'Planta & Flota'
  },
  {
    id: 'p-2',
    title: 'Despacho de Ventanas Termopanel',
    description: 'Camión acondicionado con caballete técnico para transporte seguro de cristales DVH directamente a la vivienda.',
    image: '/images/proveedor/valey_camion_despacho_ventanas.jpg',
    tag: 'Logística Segura'
  },
  {
    id: 'p-3',
    title: 'Ventanas Termopanel DVH Certificadas',
    description: 'Marcos y hojas de aluminio y PVC con doble sello y protección para montaje en obra.',
    image: '/images/proveedor/valey_ventanas_certificadas_dvh.jpg',
    tag: 'Certificación DVH'
  },
  {
    id: 'p-4',
    title: 'Puertas Herméticas con Termopanel Madera',
    description: 'Puertas exteriores de alta aislación térmica con cristales dobles y terminación tipo nogal.',
    image: '/images/proveedor/valey_puertas_termopanel_nogal.jpg',
    tag: 'Puertas Térmicas'
  },
  {
    id: 'p-5',
    title: 'Instalación de Puerta Corredera y Ventanales',
    description: 'Terminación interior limpia y ajuste hermético sin filtraciones de aire.',
    image: '/images/proveedor/valey_puerta_corredera_instalada.jpg',
    tag: 'Instalación Final'
  },
  {
    id: 'p-6',
    title: 'Despacho en Terreno a Comités y Viviendas',
    description: 'Entregas puntuales en terreno en las regiones de Ñuble y Biobío para obras D.S. 27.',
    image: '/images/proveedor/valey_camion_despacho_terreno.jpg',
    tag: 'Entrega en Obra'
  }
];

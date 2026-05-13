// ═══════════════════════════════════════════════════
//   DATA — PROFILES
// ═══════════════════════════════════════════════════

const profiles = [
  {
    "id": "marketing",
    "emoji": "📈",
    "name": "Marketing Digital",
    "area": "Estrategia & Contenido",
    "desc": "Crea campañas, gestiona redes, analiza audiencias y automatiza tu marketing con IA.",
    "tags": [
      "Redes Sociales",
      "Contenido",
      "Automatización"
    ],
    "welcome": "Bienvenido al mundo del marketing inteligente. Aquí encontrarás todo para crear estrategias de contenido, gestionar campañas y analizar resultados usando inteligencia artificial.",
    "tools": [
      {
        "icon": "🤖",
        "name": "ChatGPT",
        "badge": "free",
        "desc": "Crea copies, estrategias de contenido, respuestas automáticas y análisis de audiencia. El más versátil para marketing.",
        "tags": [
          "Copies",
          "Estrategia",
          "Email"
        ]
      },
      {
        "icon": "🎨",
        "name": "Canva AI",
        "badge": "premium",
        "desc": "Diseña publicaciones, stories y piezas visuales con generación IA integrada. Magic Design y fondo automático.",
        "tags": [
          "Diseño",
          "Social",
          "Visual"
        ]
      },
      {
        "icon": "📱",
        "name": "Meta Business Suite",
        "badge": "free",
        "desc": "Gestiona Facebook e Instagram, programa publicaciones, analiza métricas y crea anuncios desde un solo lugar.",
        "tags": [
          "Facebook",
          "Instagram",
          "Ads"
        ]
      },
      {
        "icon": "🎬",
        "name": "CapCut",
        "badge": "free",
        "desc": "Edita videos para Reels y TikTok con IA: subtítulos automáticos, música, efectos y templates virales.",
        "tags": [
          "Video",
          "Reels",
          "TikTok"
        ]
      },
      {
        "icon": "📋",
        "name": "Notion AI",
        "badge": "premium",
        "desc": "Organiza tu estrategia de contenido, calendarios editoriales y reportes con asistente IA integrado.",
        "tags": [
          "Organización",
          "Calendario",
          "Reportes"
        ]
      },
      {
        "icon": "🔍",
        "name": "SEMrush",
        "badge": "premium",
        "desc": "Analiza keywords, competidores y posicionamiento SEO. Esencial para marketing de contenidos.",
        "tags": [
          "SEO",
          "Keywords",
          "Análisis"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Estrategia",
        "level": "Básico",
        "title": "Estrategia de Instagram",
        "body": "Actúa como experto en marketing digital. Crea una estrategia de contenido para Instagram de [nombre de marca] que vende [producto/servicio]. El objetivo es aumentar el engagement en un 40% en 3 meses. Incluye: tipos de contenido, frecuencia de publicación, horarios óptimos y 5 ideas de posts para empezar."
      },
      {
        "cat": "Copies",
        "level": "Intermedio",
        "title": "Copy para anuncio de Facebook",
        "body": "Eres copywriter especializado en conversión. Escribe 3 variantes de anuncio para Facebook Ads para [producto] dirigido a [audiencia]. Cada variante debe tener: titular llamativo (máx 40 caracteres), descripción persuasiva (máx 125 caracteres) y call to action claro. Tono: [profesional/casual/urgente]."
      },
      {
        "cat": "Email",
        "level": "Básico",
        "title": "Secuencia de email marketing",
        "body": "Diseña una secuencia de 5 emails de bienvenida para nuevos suscriptores de [marca que vende X]. Incluye: asunto del email, estructura del contenido, llamado a la acción y objetivo de cada email. La secuencia debe construir confianza y guiar hacia la primera compra."
      },
      {
        "cat": "Análisis",
        "level": "Avanzado",
        "title": "Análisis de competidores",
        "body": "Actúa como analista de marketing. Analiza la estrategia digital de [competidor] en [industria]. Evalúa: presencia en redes sociales, tipo de contenido, frecuencia, engagement aparente, puntos débiles y oportunidades para diferenciarnos. Dame 5 acciones concretas para superar su estrategia."
      }
    ],
    "resources": [
      {
        "icon": "🎓",
        "type": "Curso",
        "name": "Meta Blueprint",
        "desc": "Certificaciones oficiales de Facebook e Instagram para publicidad y gestión de páginas. Gratis."
      },
      {
        "icon": "📺",
        "type": "Canal YouTube",
        "name": "Neil Patel",
        "desc": "El canal de marketing digital más completo en español e inglés. SEO, contenido y estrategia."
      },
      {
        "icon": "📱",
        "type": "Comunidad",
        "name": "Marketing Digital Latinoamérica",
        "desc": "Grupo de Facebook con +200K profesionales. Comparten casos reales, tendencias y oportunidades."
      },
      {
        "icon": "📊",
        "type": "Herramienta",
        "name": "Google Analytics 4",
        "desc": "Aprende a interpretar datos de tu web y campañas. Gratis con certificación de Google."
      },
      {
        "icon": "🎙️",
        "type": "Podcast",
        "name": "Ando en Marketing",
        "desc": "Podcast latinoamericano con casos de éxito, entrevistas y tendencias del marketing digital."
      },
      {
        "icon": "📖",
        "type": "Newsletter",
        "name": "Marketing Brew",
        "desc": "Newsletter semanal con tendencias, noticias y análisis del mundo del marketing digital."
      }
    ],
    "apps": [
      {
        "title": "Automatizar respuestas en Instagram",
        "desc": "Configura respuestas automáticas para mensajes directos usando ManyChat + ChatGPT, sin perder el toque personal.",
        "example": "Ejemplo: “Hola, gracias por escribirnos. ¿Te interesa nuestro producto X? Escribe SÍ y te contamos más.“"
      },
      {
        "title": "Generar 30 ideas de contenido en 5 min",
        "desc": "Usa ChatGPT para generar un mes completo de ideas de posts según tu nicho, audiencia y objetivos.",
        "example": "Usa el prompt de estrategia y especifica tu sector: moda, comida, tecnología, servicios."
      },
      {
        "title": "Analizar el rendimiento de tu competencia",
        "desc": "Con SEMrush o SimilarWeb analiza qué keywords usan tus competidores y qué contenido les funciona mejor.",
        "example": "Descubre qué posts virales tiene tu competencia y adapta el formato a tu marca."
      },
      {
        "title": "Crear un calendario editorial mensual",
        "desc": "Con Notion AI genera tu calendario editorial completo: temas, formatos, plataformas y fechas.",
        "example": "Calendario de octubre: Lunes (educativo), Miércoles (behind scenes), Viernes (oferta)."
      }
    ],
    "tips": [
      {
        "text": "<strong>Empieza con ChatGPT</strong> para crear tus primeros contenidos. No necesitas ser experto: describe tu negocio y pide ideas."
      },
      {
        "text": "<strong>Publica consistentemente</strong> antes que perfectamente. 3 posts semanales constantes superan a 10 posts en una semana."
      },
      {
        "text": "<strong>Analiza tus métricas</strong> cada semana. Instagram Insights y Meta Business Suite son gratis y te dicen qué funciona."
      },
      {
        "text": "<strong>Reutiliza tu contenido</strong>: un artículo de blog → 5 posts → 3 stories → 1 video. La IA te ayuda a adaptar formatos."
      },
      {
        "text": "<strong>Certifícate</strong> en Meta Blueprint y Google Analytics. Son gratis y añaden credibilidad profesional."
      }
    ]
  },
  {
    "id": "cosmetica",
    "emoji": "💄",
    "name": "Cosmética & Belleza",
    "area": "Emprendimiento & Lifestyle",
    "desc": "Impulsa tu emprendimiento de belleza con IA: catálogos, atención al cliente y marketing visual.",
    "tags": [
      "Emprendimiento",
      "Belleza",
      "E-commerce"
    ],
    "welcome": "Transforma tu emprendimiento de belleza con herramientas inteligentes. Desde crear catálogos visuales hasta automatizar tu atención al cliente y gestionar pedidos.",
    "tools": [
      {
        "icon": "🎨",
        "name": "Canva AI",
        "badge": "free",
        "desc": "Crea catálogos, flyers, stories y tarjetas de presentación profesionales para tu marca de belleza.",
        "tags": [
          "Catálogo",
          "Diseño",
          "Branding"
        ]
      },
      {
        "icon": "🛒",
        "name": "Tienda Nube",
        "badge": "premium",
        "desc": "Crea tu tienda online para vender productos de belleza con pagos integrados y gestión de inventario.",
        "tags": [
          "E-commerce",
          "Ventas",
          "Pagos"
        ]
      },
      {
        "icon": "💬",
        "name": "WhatsApp Business",
        "badge": "free",
        "desc": "Gestiona pedidos, envía catálogos, crea respuestas automáticas y organiza tus clientes.",
        "tags": [
          "Atención",
          "Pedidos",
          "Clientes"
        ]
      },
      {
        "icon": "📸",
        "name": "Remove.bg",
        "badge": "free",
        "desc": "Elimina el fondo de fotos de tus productos en segundos. Ideal para crear fotos de catálogo profesionales.",
        "tags": [
          "Fotos",
          "Productos",
          "Edición"
        ]
      },
      {
        "icon": "🤖",
        "name": "ChatGPT",
        "badge": "free",
        "desc": "Redacta descripciones de productos, responde consultas, crea estrategias de ventas y genera contenido.",
        "tags": [
          "Copies",
          "Productos",
          "Estrategia"
        ]
      },
      {
        "icon": "📊",
        "name": "Metricool",
        "badge": "free",
        "desc": "Programa y analiza tus publicaciones en Instagram, Facebook y TikTok desde un solo lugar.",
        "tags": [
          "Redes",
          "Programación",
          "Métricas"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Ventas",
        "level": "Básico",
        "title": "Descripción de producto",
        "body": "Actúa como copywriter de belleza y lifestyle. Escribe una descripción persuasiva para [nombre del producto: ej. sérum vitamina C 30ml]. Incluye: beneficios principales, ingredientes clave, cómo usarlo y por qué diferencia de la competencia. Tono cálido, cercano y confiable. Ideal para publicación en Instagram y catálogo."
      },
      {
        "cat": "Atención",
        "level": "Básico",
        "title": "Respuestas frecuentes para WhatsApp",
        "body": "Crea 10 respuestas rápidas para WhatsApp Business para mi emprendimiento de [tipo de productos de belleza]. Incluye respuestas para: consulta de precio, disponibilidad, envíos, tiempo de entrega, cómo hacer pedido y seguimiento. Tono amigable y profesional."
      },
      {
        "cat": "Contenido",
        "level": "Intermedio",
        "title": "Guión para video de tutorial",
        "body": "Escribe un guión de 60 segundos para un Reel de Instagram sobre cómo usar [producto]. Incluye: hook inicial llamativo (5 segundos), pasos claros del tutorial, resultado final y llamado a la acción. El tono debe ser cercano, como si fuera una amiga dando consejos."
      },
      {
        "cat": "Branding",
        "level": "Avanzado",
        "title": "Estrategia de marca personal",
        "body": "Ayúdame a construir mi marca personal como emprendedora de belleza. Mi especialidad es [área]. Define: propuesta de valor única, tono de comunicación, pilares de contenido, palabras clave de mi marca y cómo diferenciarme en Instagram. Dame un plan de acción para 30 días."
      }
    ],
    "resources": [
      {
        "icon": "🎓",
        "type": "Curso",
        "name": "Capacitarte.com",
        "desc": "Cursos de marketing digital para emprendedores en español. Muchos son gratuitos o de muy bajo costo."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Shopify en Español",
        "desc": "Canal con tutoriales sobre cómo vender online, crear tiendas y crecer tu emprendimiento."
      },
      {
        "icon": "📱",
        "type": "App",
        "name": "Factura Móvil",
        "desc": "Genera facturas y recibos profesionales desde el celular. Esencial para formalizar tu negocio."
      },
      {
        "icon": "🌸",
        "type": "Comunidad",
        "name": "Emprendedoras Latinas",
        "desc": "Comunidad de mujeres emprendedoras en Latinoamérica que comparten experiencias y apoyo."
      },
      {
        "icon": "📖",
        "type": "Blog",
        "name": "Beautypack.es",
        "desc": "Blog especializado en tendencias de cosmética, packaging e innovación en belleza."
      },
      {
        "icon": "🎙️",
        "type": "Podcast",
        "name": "Emprende Sin Límites",
        "desc": "Podcast para emprendedoras latinas con casos reales, finanzas y crecimiento de marca."
      }
    ],
    "apps": [
      {
        "title": "Crear catálogo digital profesional",
        "desc": "Con Canva AI diseña un catálogo de productos de belleza con fotos, precios y descripciones elegantes para compartir por WhatsApp.",
        "example": "Catálogo en PDF de 12 páginas con tus productos, precios y forma de contacto."
      },
      {
        "title": "Automatizar pedidos por WhatsApp",
        "desc": "Configura WhatsApp Business con catálogo, respuestas automáticas y etiquetas para organizar clientes (Nuevo, Pedido, Enviado).",
        "example": "“Hola! Vi tu producto X, ¿tiene disponible?“ → Respuesta automática con precio y botón de pedido."
      },
      {
        "title": "Fotografía de productos profesional",
        "desc": "Usa buena luz natural, un fondo neutro y Remove.bg para editar. ChatGPT te da guías de fotografía para cada producto.",
        "example": "Sérum sobre superficie de mármol blanco, luz lateral suave, sombra leve = foto de revista."
      },
      {
        "title": "Gestionar inventario y finanzas",
        "desc": "Usa Google Sheets + fórmulas simples (o Notion) para trackear tu inventario, ganancias y gastos mensuales.",
        "example": "Columnas: Producto | Stock | Precio | Vendido | Ganancia | Fecha"
      }
    ],
    "tips": [
      {
        "text": "<strong>WhatsApp Business</strong> es tu herramienta #1. Configura tu catálogo y respuestas rápidas esta semana."
      },
      {
        "text": "<strong>Fotografía bien tus productos</strong>: buena foto = más ventas. Luz natural + fondo simple es suficiente para empezar."
      },
      {
        "text": "<strong>Usa ChatGPT</strong> para redactar descripciones de cada producto. Solo descríbelo y pídele que lo haga atractivo."
      },
      {
        "text": "<strong>Pide reseñas</strong> a tus primeras clientas. Una captura de pantalla de un testimonio real vale más que cualquier anuncio."
      },
      {
        "text": "<strong>Define tu precio correctamente</strong>: costo × 2.5 como mínimo. Incluye empaque, envío y tu tiempo."
      }
    ]
  },
  {
    "id": "historia",
    "emoji": "🏛️",
    "name": "Historia & Mitos Urbanos",
    "area": "Narrativa & Cultura",
    "desc": "Herramientas de storytelling, narrativa histórica e investigación cultural para exploradores del pasado.",
    "tags": [
      "Storytelling",
      "Cultura",
      "Investigación"
    ],
    "welcome": "Explora el cruce entre la historia, los mitos y la tecnología. Herramientas para narrar, investigar y crear experiencias culturales inmersivas usando inteligencia artificial.",
    "tools": [
      {
        "icon": "🤖",
        "name": "Claude AI",
        "badge": "free",
        "desc": "El mejor para análisis histórico, narrativa profunda y consultas complejas sobre historia, mitos y cultura.",
        "tags": [
          "Narrativa",
          "Investigación",
          "Análisis"
        ]
      },
      {
        "icon": "🗺️",
        "name": "Google Arts & Culture",
        "badge": "free",
        "desc": "Accede a museos del mundo, arte histórico, visitas virtuales y archivos culturales digitalizados.",
        "tags": [
          "Museos",
          "Arte",
          "Virtual"
        ]
      },
      {
        "icon": "🎙️",
        "name": "ElevenLabs",
        "badge": "premium",
        "desc": "Genera narración con voz realista para audios guiados, podcasts históricos y tours de audio.",
        "tags": [
          "Voz",
          "Audio",
          "Narración"
        ]
      },
      {
        "icon": "🖼️",
        "name": "Midjourney",
        "badge": "premium",
        "desc": "Genera imágenes históricas, recreaciones de épocas pasadas y visualizaciones de mitos para contenido.",
        "tags": [
          "Imágenes",
          "Visual",
          "Arte"
        ]
      },
      {
        "icon": "📚",
        "name": "Internet Archive",
        "badge": "free",
        "desc": "Accede a millones de libros, documentos históricos, fotografías antiguas y archivos digitalizados.",
        "tags": [
          "Archivos",
          "Libros",
          "Historia"
        ]
      },
      {
        "icon": "🎬",
        "name": "CapCut",
        "badge": "free",
        "desc": "Crea videos narrativos sobre historia y mitos con efectos cinematográficos, música ambiental y subtítulos.",
        "tags": [
          "Video",
          "Contenido",
          "Narrativa"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Narrativa",
        "level": "Intermedio",
        "title": "Historia para tour nocturno",
        "body": "Actúa como narrador experto en historia urbana y leyendas locales. Crea una narrativa inmersiva de 5 minutos para un recorrido histórico nocturno por [ciudad/barrio]. Incluye: ambiente descriptivo, personajes históricos reales, leyenda urbana relacionada, dato curioso verificable y cierre que invite a reflexionar. Tono: cinematográfico, misterioso pero educativo."
      },
      {
        "cat": "Investigación",
        "level": "Básico",
        "title": "Investigar una leyenda urbana",
        "body": "Investiga el origen y variantes de la leyenda urbana de [nombre de la leyenda] en [país/región]. Explora: origen histórico posible, versiones registradas, contexto cultural, análisis simbólico y por qué esta leyenda persiste en la cultura popular. Diferencia claramente entre hechos verificables y elementos míticos."
      },
      {
        "cat": "Contenido",
        "level": "Básico",
        "title": "Post educativo sobre historia",
        "body": "Escribe un hilo de Twitter/X sobre [evento histórico o personaje]. Debe ser: educativo pero entretenido, con 8-10 tweets, incluya datos sorprendentes que la gente no conoce, conecte con el presente y tenga un gancho inicial irresistible. Estilo: como si lo contara un profesor apasionado, no un libro de texto."
      },
      {
        "cat": "Podcast",
        "level": "Avanzado",
        "title": "Guión de episodio de podcast",
        "body": "Escribe el guión de un episodio de 20 minutos de podcast sobre [mito/leyenda/evento histórico]. Estructura: introducción intrigante, contexto histórico, desarrollo del mito con fuentes, análisis cultural, conexión actual y cierre reflexivo. Incluye pausas dramáticas, transiciones musicales sugeridas y fragmentos para destacar como quote."
      }
    ],
    "resources": [
      {
        "icon": "📖",
        "type": "Archivo",
        "name": "Internet Archive",
        "desc": "La biblioteca digital más grande del mundo. Acceso gratuito a libros, documentos y fotos históricas."
      },
      {
        "icon": "🎓",
        "type": "Plataforma",
        "name": "Khan Academy Historia",
        "desc": "Cursos gratuitos de historia mundial, arte e historia de la ciencia con videos explicativos."
      },
      {
        "icon": "🎙️",
        "type": "Podcast",
        "name": "Cosas de la Historia",
        "desc": "Podcast en español sobre historias curiosas, personajes olvidados y eventos fascinantes de la historia."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "El Mapa de Tálib",
        "desc": "Canal de divulgación histórica en español con videos de alta calidad sobre historia mundial."
      },
      {
        "icon": "🗺️",
        "type": "Plataforma",
        "name": "Google Arts & Culture",
        "desc": "Museos virtuales, tours 360°, archivos fotográficos y colecciones culturales de todo el mundo."
      },
      {
        "icon": "📚",
        "type": "Base de datos",
        "name": "JSTOR",
        "desc": "Acceso a artículos académicos sobre historia, antropología y ciencias sociales. Parcialmente gratis."
      }
    ],
    "apps": [
      {
        "title": "Tours culturales con narración IA",
        "desc": "Graba guiones con Claude AI, convierte a voz con ElevenLabs y crea una app de audio-guía para recorridos históricos locales.",
        "example": "Tour nocturno de leyendas urbanas de tu ciudad: 8 paradas, 3 minutos de narración cada una."
      },
      {
        "title": "Recreaciones históricas visuales",
        "desc": "Usa Midjourney para crear imágenes de cómo lucía un lugar hace 100 o 200 años y compáralas con fotos actuales.",
        "example": "“Recreación de la Plaza Mayor de Madrid en 1850 con estilo fotográfico de época“"
      },
      {
        "title": "Podcast de historia local",
        "desc": "Con Claude redacta los guiones, ElevenLabs genera la voz y Anchor.fm distribuye gratis a Spotify y Apple Podcasts.",
        "example": "Serie: “Los 10 mitos más extraños de [tu ciudad]“ — 10 episodios, 15 min cada uno."
      },
      {
        "title": "Investigación con IA",
        "desc": "Usa Claude para analizar fuentes, contrastar versiones de eventos históricos y generar síntesis de investigación compleja.",
        "example": "Consulta: “Compara 3 versiones históricas del origen de [leyenda] y evalúa cuál tiene más sustento.“"
      }
    ],
    "tips": [
      {
        "text": "<strong>Usa Claude para investigación compleja</strong>: pídele que analice fuentes, compare versiones y detecte inconsistencias históricas."
      },
      {
        "text": "<strong>Diferencia mito de historia</strong> en tu contenido. Tu audiencia valora la honestidad intelectual más que el sensacionalismo."
      },
      {
        "text": "<strong>Documenta tu investigación</strong>: usa Notion para organizar fuentes, citas y referencias antes de crear contenido."
      },
      {
        "text": "<strong>El audio es tu aliado</strong>: la narración en voz tiene un impacto emocional mucho mayor que el texto para historias y mitos."
      },
      {
        "text": "<strong>Conecta el pasado con el presente</strong>: ¿qué enseña esta historia hoy? Ese vínculo es lo que hace que el contenido se comparta."
      }
    ]
  },
  {
    "id": "teologia",
    "emoji": "✝️",
    "name": "Teología",
    "area": "Estudio & Reflexión",
    "desc": "Herramientas de estudio bíblico, investigación teológica y creación de contenido de fe.",
    "tags": [
      "Estudio Bíblico",
      "Predicación",
      "Reflexión"
    ],
    "welcome": "Explora cómo la tecnología puede potenciar tu estudio teológico, preparación de sermones y creación de contenido de fe profundo y auténtico.",
    "tools": [
      {
        "icon": "📖",
        "name": "Bible Gateway",
        "badge": "free",
        "desc": "Accede a más de 200 versiones de la Biblia en 70 idiomas, concordancias, comentarios y estudios.",
        "tags": [
          "Biblia",
          "Versiones",
          "Estudio"
        ]
      },
      {
        "icon": "🤖",
        "name": "Claude AI",
        "badge": "free",
        "desc": "Análisis bíblico profundo, contextualización histórica de textos, comparación de interpretaciones teológicas.",
        "tags": [
          "Análisis",
          "Teología",
          "Interpretación"
        ]
      },
      {
        "icon": "🎨",
        "name": "Canva",
        "badge": "free",
        "desc": "Crea devocionales visuales, presentaciones de sermón, versículos ilustrados y material para ministerios.",
        "tags": [
          "Diseño",
          "Visual",
          "Ministerio"
        ]
      },
      {
        "icon": "📚",
        "name": "Logos Bible Software",
        "badge": "premium",
        "desc": "Software profesional de estudio bíblico con comentarios, diccionarios griegos/hebreos y análisis textual.",
        "tags": [
          "Profesional",
          "Griego",
          "Hebreo"
        ]
      },
      {
        "icon": "🎙️",
        "name": "Descript",
        "badge": "premium",
        "desc": "Edita y produce tu podcast o sermón de audio con transcripción automática y edición con IA.",
        "tags": [
          "Audio",
          "Podcast",
          "Sermones"
        ]
      },
      {
        "icon": "📝",
        "name": "Notion",
        "badge": "free",
        "desc": "Organiza tus estudios bíblicos, notas de sermones, biblioteca teológica y planificación del ministerio.",
        "tags": [
          "Organización",
          "Notas",
          "Biblioteca"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Estudio",
        "level": "Básico",
        "title": "Análisis bíblico profundo",
        "body": "Actúa como teólogo académico. Analiza el pasaje de [libro capítulo:versículo]. Incluye: contexto histórico y cultural, análisis del texto griego o hebreo (términos clave), diferentes interpretaciones teológicas (perspectiva reformada, católica, pentecostal), aplicación práctica para hoy y referencias cruzadas relevantes. Sé equilibrado y académico."
      },
      {
        "cat": "Predicación",
        "level": "Intermedio",
        "title": "Estructura de sermón",
        "body": "Ayúdame a estructurar un sermón sobre [tema o texto bíblico] para una congregación de [tipo: jóvenes/adultos/mixta]. Incluye: título impactante, texto base, tres puntos principales con sub-puntos, ilustraciones prácticas, aplicaciones concretas para la vida cotidiana y conclusión con llamado. Duración: 30-40 minutos."
      },
      {
        "cat": "Devocional",
        "level": "Básico",
        "title": "Devocional diario",
        "body": "Escribe un devocional de 5 minutos de lectura basado en [versículo o tema]. Incluye: reflexión inicial, explicación del texto, conexión con la vida cotidiana, pregunta de reflexión personal y oración de cierre. Tono: cálido, profundo pero accesible para cualquier creyente."
      },
      {
        "cat": "Investigación",
        "level": "Avanzado",
        "title": "Comparar perspectivas teológicas",
        "body": "Compara la posición de tres tradiciones teológicas distintas (elige según el tema: Católica, Protestante reformada, Pentecostal, Ortodoxa, Anabaptista) sobre el tema de [tema teológico: libre albedrío, predestinación, sacramentos, etc.]. Incluye argumentos bíblicos de cada tradición, puntos de acuerdo y desacuerdo, y contexto histórico de cada posición."
      }
    ],
    "resources": [
      {
        "icon": "📖",
        "type": "Plataforma",
        "name": "Bible Gateway",
        "desc": "La plataforma bíblica más completa. 200+ versiones, concordancias, comentarios y planes de lectura."
      },
      {
        "icon": "🎓",
        "type": "Estudio",
        "name": "Biblia.com (YouVersion)",
        "desc": "App y web con planes de lectura, versículos del día, notas y lectura en audio. Completamente gratis."
      },
      {
        "icon": "📚",
        "type": "Biblioteca",
        "name": "Christian Classics Ethereal Library",
        "desc": "Biblioteca digital gratuita con obras clásicas de teología de Agustín, Calvino, Lutero y más."
      },
      {
        "icon": "🎙️",
        "type": "Podcast",
        "name": "Reforma 21",
        "desc": "Podcast de teología reformada con conferencias, sermones y debates teológicos en español."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Coalición por el Evangelio",
        "desc": "Recursos teológicos en español: artículos, videos, sermones y formación ministerial sólida."
      },
      {
        "icon": "🏛️",
        "type": "Academia",
        "name": "Seminario Virtual",
        "desc": "Cursos de teología en línea, muchos gratuitos o de bajo costo, con certificación ministerial."
      }
    ],
    "apps": [
      {
        "title": "Preparar sermones con asistencia IA",
        "desc": "Usa Claude para hacer análisis textual profundo, luego estructura tu sermón en Notion y diseña las diapositivas en Canva.",
        "example": "Proceso: Texto → Análisis con IA → Estructura → Diapositivas → Predicación"
      },
      {
        "title": "Podcast o canal de devocionales",
        "desc": "Graba tus devocionales, usa Descript para editar con IA (elimina silencios y errores) y publica en Spotify gratis con Anchor.",
        "example": "Serie: “365 devocionales“ — 5 minutos por episodio, publicado cada mañana."
      },
      {
        "title": "Material visual para ministerio",
        "desc": "Con Canva crea: versículos ilustrados, boletines de iglesia, presentaciones de sermón y material de escuela dominical.",
        "example": "Pack semanal: 1 portada de sermón + 5 versículos para redes + 1 boletín PDF."
      },
      {
        "title": "Estudio bíblico grupal digitalizado",
        "desc": "Organiza tus estudios grupales en Notion: pasaje, preguntas de reflexión, recursos y seguimiento de asistentes.",
        "example": "Plantilla: Título | Texto | Contexto | 5 preguntas | Aplicación | Oración"
      }
    ],
    "tips": [
      {
        "text": "<strong>No reemplaces el Espíritu con la IA</strong>. Úsala como herramienta de investigación y organización, no como fuente de revelación."
      },
      {
        "text": "<strong>Bible Gateway</strong> es tu punto de partida para cualquier estudio. Consulta siempre el texto en su idioma original."
      },
      {
        "text": "<strong>Documenta tus estudios en Notion</strong>: en 5 años tendrás una biblioteca teológica personal invaluable."
      },
      {
        "text": "<strong>Usa Claude para contextualizar</strong>: el contexto histórico-cultural es clave para interpretar bien cualquier texto bíblico."
      },
      {
        "text": "<strong>El sermón mejor preparado</strong> es el que honra el texto, conecta con la gente y llama a la transformación."
      }
    ]
  },
  {
    "id": "profesores",
    "emoji": "🍎",
    "name": "Profesores",
    "area": "Educación & Pedagogía",
    "desc": "Planificación de clases, materiales didácticos, evaluaciones y herramientas para el aula del siglo XXI.",
    "tags": [
      "Planificación",
      "Evaluación",
      "Didáctica"
    ],
    "welcome": "Bienvenido al futuro del aula. Aquí encontrarás herramientas y estrategias para transformar tu práctica docente, crear materiales increíbles y personalizar el aprendizaje de tus estudiantes.",
    "tools": [
      {
        "icon": "🤖",
        "name": "ChatGPT / Claude",
        "badge": "free",
        "desc": "Genera rubricas, planificaciones, actividades diferenciadas, explicaciones alternativas y feedback personalizado.",
        "tags": [
          "Planificación",
          "Evaluación",
          "Diferenciación"
        ]
      },
      {
        "icon": "🎮",
        "name": "Kahoot!",
        "badge": "free",
        "desc": "Crea cuestionarios gamificados para repasar contenidos, evaluar de forma divertida y aumentar el engagement.",
        "tags": [
          "Gamificación",
          "Evaluación",
          "Repaso"
        ]
      },
      {
        "icon": "📊",
        "name": "Canva for Education",
        "badge": "free",
        "desc": "Diseña presentaciones, infografías, materiales didácticos y recursos visuales de forma profesional. Gratis para docentes.",
        "tags": [
          "Materiales",
          "Presentaciones",
          "Visual"
        ]
      },
      {
        "icon": "🎬",
        "name": "Loom",
        "badge": "free",
        "desc": "Graba y comparte videos explicativos para tus estudiantes. Ideal para clase invertida y material complementario.",
        "tags": [
          "Video",
          "Clase invertida",
          "Explicaciones"
        ]
      },
      {
        "icon": "📝",
        "name": "Google Workspace Edu",
        "badge": "free",
        "desc": "Suite completa para educación: Docs, Slides, Forms para exámenes, Classroom y Meet para clases virtuales.",
        "tags": [
          "Colaboración",
          "Exámenes",
          "Virtual"
        ]
      },
      {
        "icon": "🧩",
        "name": "Padlet",
        "badge": "free",
        "desc": "Tablero colaborativo virtual donde los estudiantes publican ideas, trabajos y reflexiones en tiempo real.",
        "tags": [
          "Colaboración",
          "Participación",
          "Creativo"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Planificación",
        "level": "Básico",
        "title": "Plan de clase completo",
        "body": "Actúa como experto en diseño instruccional. Crea un plan de clase detallado para [asignatura] sobre [tema], dirigido a estudiantes de [nivel/grado/edad]. Incluye: objetivo de aprendizaje (con verbo de Bloom), materiales necesarios, activación de conocimientos previos (10 min), desarrollo (25 min con actividad principal), cierre reflexivo (5 min) y evaluación formativa. Duración total: 45 minutos."
      },
      {
        "cat": "Evaluación",
        "level": "Intermedio",
        "title": "Rúbrica de evaluación",
        "body": "Diseña una rúbrica analítica para evaluar [tarea o proyecto] en [asignatura] para [nivel educativo]. La rúbrica debe tener 4-5 criterios de evaluación con 4 niveles de desempeño (Excelente, Satisfactorio, En desarrollo, Insuficiente). Incluye descriptores claros y específicos para cada nivel. Formato de tabla."
      },
      {
        "cat": "Diferenciación",
        "level": "Avanzado",
        "title": "Actividades diferenciadas",
        "body": "Tengo un grupo diverso en [asignatura, nivel] con diferentes niveles de aprendizaje. El tema es [tema]. Diseña 3 versiones de la misma actividad: una para estudiantes que van adelante (enriquecimiento), una para el nivel estándar y una de apoyo para quienes tienen dificultades. Mantén el mismo objetivo pero adapta complejidad, soporte y extensión."
      },
      {
        "cat": "Feedback",
        "level": "Básico",
        "title": "Comentarios de retroalimentación",
        "body": "Soy docente y necesito escribir comentarios de retroalimentación para trabajos estudiantiles. Escríbelos en tono positivo, específico y que oriente la mejora. El trabajo es sobre [tema], el estudiante [descripción del desempeño general]. Dame 5 estilos de comentario: motivador, técnico, reflexivo, orientado a metas y para estudiante con dificultades."
      }
    ],
    "resources": [
      {
        "icon": "🎓",
        "type": "Plataforma",
        "name": "Coursera for Campus",
        "desc": "Miles de cursos universitarios de actualización docente. Muchas instituciones ofrecen acceso gratuito."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Educación 3.0",
        "desc": "Canal sobre innovación educativa, tecnología en el aula y metodologías activas en español."
      },
      {
        "icon": "🎙️",
        "type": "Podcast",
        "name": "Docentes en Acción",
        "desc": "Podcast latinoamericano con experiencias reales de docentes innovadores de todos los niveles."
      },
      {
        "icon": "🧩",
        "type": "Herramienta",
        "name": "Genially",
        "desc": "Crea presentaciones interactivas, infografías animadas y materiales didácticos que van más allá del PowerPoint."
      },
      {
        "icon": "📖",
        "type": "Blog",
        "name": "Edutopia",
        "desc": "El referente mundial en educación innovadora. Artículos, videos y recursos basados en evidencia."
      },
      {
        "icon": "🌐",
        "type": "Red",
        "name": "Red de Maestros",
        "desc": "Comunidad iberoamericana de docentes que comparten recursos, experiencias y proyectos colaborativos."
      }
    ],
    "apps": [
      {
        "title": "Planificar un mes de clases en 1 hora",
        "desc": "Usa ChatGPT para generar el esquema de todas tus clases del mes: objetivos, actividades, recursos y evaluaciones.",
        "example": "Prompt: “Crea el esquema de 16 clases de Matemática para 7° grado sobre fracciones, con actividad principal por clase.“"
      },
      {
        "title": "Crear evaluaciones anti-copia con IA",
        "desc": "Diseña evaluaciones con preguntas abiertas, análisis de casos y reflexión personal que son difíciles de copiar y más auténticas.",
        "example": "En vez de “¿Cuánto es 2+2?“ → “Explica con tus palabras cómo usarías la suma en un negocio real.“"
      },
      {
        "title": "Videos explicativos con Loom",
        "desc": "Graba explicaciones breves (5-10 min) para que los estudiantes las vean antes o después de clase. Clase invertida en práctica.",
        "example": "Graba la explicación teórica en casa. En clase, usa el tiempo para práctica y discusión."
      },
      {
        "title": "Kahoot para repasar antes del examen",
        "desc": "Crea un Kahoot con los conceptos clave de la unidad. Los estudiantes repasan jugando, tú ves en tiempo real qué no entendieron.",
        "example": "20 preguntas, 30 segundos c/u. El top 3 recibe puntos adicionales."
      }
    ],
    "tips": [
      {
        "text": "<strong>Empieza pequeño</strong>: integra UNA herramienta nueva por mes. Kahoot esta semana. Loom el próximo mes. No todo a la vez."
      },
      {
        "text": "<strong>Usa ChatGPT para diferenciación</strong>: pídele versiones más simples o más complejas de cualquier actividad según tu grupo."
      },
      {
        "text": "<strong>Canva for Education es gratis</strong> para docentes. Solicita tu cuenta Pro gratuita con tu email institucional."
      },
      {
        "text": "<strong>La retroalimentación específica</strong> vale más que una nota. “Tu argumento en el párrafo 2 necesita más evidencia“ > “Regular.“"
      },
      {
        "text": "<strong>Conecta los contenidos con el mundo real</strong>. “¿Dónde ves esto en tu vida?“ transforma el aprendizaje pasivo en activo."
      }
    ]
  },
  {
    "id": "adultos",
    "emoji": "👴",
    "name": "Adultos Mayores",
    "area": "Vida Cotidiana & Tecnología",
    "desc": "Tecnología accesible y amigable para mejorar la calidad de vida, mantenerse conectado y aprender a tu ritmo.",
    "tags": [
      "Accesibilidad",
      "Simple",
      "Bienestar"
    ],
    "welcome": "La tecnología no tiene edad. Aquí aprenderás a usar las herramientas más útiles de forma clara y sencilla, para estar más conectado, seguro y activo.",
    "tools": [
      {
        "icon": "📱",
        "name": "WhatsApp",
        "badge": "free",
        "desc": "Envía mensajes, fotos, videos y haz videollamadas con familia y amigos. La app más usada para mantenerse conectado.",
        "tags": [
          "Mensajes",
          "Video",
          "Familia"
        ]
      },
      {
        "icon": "🔍",
        "name": "Google Search",
        "badge": "free",
        "desc": "Encuentra cualquier información con voz: recetas, noticias, clima, horarios, direcciones y mucho más.",
        "tags": [
          "Información",
          "Voz",
          "Búsqueda"
        ]
      },
      {
        "icon": "🤖",
        "name": "ChatGPT",
        "badge": "free",
        "desc": "Conversa en texto natural: hace preguntas, explica cosas con palabras simples, ayuda con cartas y trámites.",
        "tags": [
          "Conversación",
          "Ayuda",
          "Simple"
        ]
      },
      {
        "icon": "📺",
        "name": "YouTube",
        "badge": "free",
        "desc": "Ve tutoriales, ejercicios, recetas, documentales y entretenimiento. Con subtítulos y pantalla en grande.",
        "tags": [
          "Video",
          "Aprendizaje",
          "Entretenimiento"
        ]
      },
      {
        "icon": "💊",
        "name": "Medisafe",
        "badge": "free",
        "desc": "Recuerda cuándo tomar tus medicamentos con alarmas claras. Muy útil para quienes toman varios remedios.",
        "tags": [
          "Salud",
          "Medicamentos",
          "Alarmas"
        ]
      },
      {
        "icon": "🧭",
        "name": "Google Maps",
        "badge": "free",
        "desc": "Navega con indicaciones de voz paso a paso. Nunca más perderse. Busca farmacias, bancos y hospitales cercanos.",
        "tags": [
          "Navegación",
          "Voz",
          "Lugares"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Comunicación",
        "level": "Básico",
        "title": "Redactar carta o mensaje",
        "body": "Necesito escribir [una carta/un mensaje] para [destinatario: mi médico, mi banco, mi hijo, etc.] explicando que [situación]. Escríbelo en español claro y respetuoso. Que sea corto, directo y fácil de entender."
      },
      {
        "cat": "Información",
        "level": "Básico",
        "title": "Explicación simple de algo",
        "body": "Explícame qué es [término o concepto] en palabras muy sencillas, como si tuvieras que explicárselo a alguien de 70 años que nunca usó tecnología. Usa ejemplos de la vida cotidiana y evita términos técnicos."
      },
      {
        "cat": "Salud",
        "level": "Básico",
        "title": "Entender información médica",
        "body": "Mi médico me dijo que tengo [diagnóstico] y debo tomar [medicamento]. Explícame en palabras simples: qué significa este diagnóstico, para qué sirve este medicamento, qué cuidados debo tener y qué preguntas puedo hacer en mi próxima consulta."
      },
      {
        "cat": "Ocio",
        "level": "Básico",
        "title": "Sugerencias de actividades",
        "body": "Soy una persona de [edad] años, me gusta [actividades que ya hace]. Sugíereme 5 actividades nuevas que puedo hacer desde casa o en mi barrio para mantenerme activo, aprender algo nuevo y relacionarme con otras personas. Que sean accesibles y gratuitas o de bajo costo."
      }
    ],
    "resources": [
      {
        "icon": "📱",
        "type": "App",
        "name": "Medisafe",
        "desc": "App de recordatorio de medicamentos con alarmas claras. Conecta con familiar para supervisión remota."
      },
      {
        "icon": "🎓",
        "type": "Cursos",
        "name": "Aprender Digital (Google)",
        "desc": "Programa gratuito de Google para aprender lo básico de internet, búsquedas y herramientas digitales."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Abuelos Digitales",
        "desc": "Canal en español con tutoriales muy claros sobre tecnología para adultos mayores. Paso a paso."
      },
      {
        "icon": "🌐",
        "type": "Portal",
        "name": "Sénior Planet",
        "desc": "Comunidad y recursos de tecnología específicamente diseñados para adultos mayores activos."
      },
      {
        "icon": "💬",
        "type": "Comunidad",
        "name": "Club de Lectura Digital",
        "desc": "Grupos virtuales de lectura, discusión de libros y conversación. Ideal para socializar desde casa."
      },
      {
        "icon": "🏥",
        "type": "Salud",
        "name": "Telemedicina (Tu país)",
        "desc": "Muchos sistemas de salud ofrecen consultas por video. Consulta con tu médico cómo acceder."
      }
    ],
    "apps": [
      {
        "title": "Videollamadas con la familia",
        "desc": "WhatsApp es la mejor opción. Con un toque puedes hacer videollamada, y con otro enviar una foto de tu jardín.",
        "example": "Consejo: Aumenta el tamaño de texto en Configuración > Accesibilidad > Tamaño de texto."
      },
      {
        "title": "Nunca olvidar los medicamentos",
        "desc": "Medisafe te recuerda cada medicamento con su nombre, foto y hora exacta. Puedes vincular a un familiar.",
        "example": "La app te muestra: “8:00 AM — Losartán 50mg — 1 pastilla con el desayuno.“"
      },
      {
        "title": "Buscar información por voz",
        "desc": "En Google o WhatsApp puedes presionar el micrófono y hablar en vez de escribir. “Clima hoy en [ciudad].“",
        "example": "Presiona el ícono del micrófono y di: “Receta de sopa de lentejas“ o “Horario del banco cercano“."
      },
      {
        "title": "Ver ejercicios adaptados en YouTube",
        "desc": "Busca “ejercicios para adultos mayores“ en YouTube. Hay miles de videos de 10-20 minutos gratis y muy claros.",
        "example": "Busca: “Yoga suave para mayores de 60“ o “Ejercicios sentado para articulaciones“"
      }
    ],
    "tips": [
      {
        "text": "<strong>No hay prisa</strong>. Aprende una cosa por semana. La tecnología es una herramienta, no una carrera."
      },
      {
        "text": "<strong>Pide ayuda</strong> a familiares o amigos para configurar tu teléfono. Una buena configuración inicial lo hace todo más fácil."
      },
      {
        "text": "<strong>Aumenta el tamaño de letra</strong> en tu teléfono. Configuración → Accesibilidad → Tamaño de texto. Pon el más grande."
      },
      {
        "text": "<strong>Cuidado con mensajes extraños</strong>: si alguien te pide dinero o contraseñas por WhatsApp o correo, consulta con un familiar antes de responder."
      },
      {
        "text": "<strong>ChatGPT habla contigo</strong> de cualquier tema. Puedes preguntarle lo que quieras en español simple y te responde con paciencia."
      }
    ]
  },
  {
    "id": "datascience",
    "emoji": "📊",
    "name": "Data Science",
    "area": "Ciencia de Datos & ML",
    "desc": "Python, Machine Learning, visualización de datos y herramientas profesionales para científicos de datos.",
    "tags": [
      "Python",
      "ML",
      "Visualización"
    ],
    "welcome": "El ecosistema de Data Science evoluciona rápidamente. Aquí encontrarás las herramientas más relevantes, prompts técnicos precisos y recursos para mantenerte al día.",
    "tools": [
      {
        "icon": "🐍",
        "name": "Python + Pandas",
        "badge": "free",
        "desc": "El lenguaje y librería estándar para análisis de datos. Limpieza, transformación y exploración de datasets.",
        "tags": [
          "Python",
          "EDA",
          "Análisis"
        ]
      },
      {
        "icon": "📓",
        "name": "Jupyter / Colab",
        "badge": "free",
        "desc": "Entorno interactivo para análisis de datos. Google Colab ofrece GPUs gratuitas para proyectos de ML.",
        "tags": [
          "Notebooks",
          "GPU",
          "Colaborativo"
        ]
      },
      {
        "icon": "📈",
        "name": "Power BI",
        "badge": "premium",
        "desc": "Crea dashboards interactivos y reportes ejecutivos. Conéctalo a SQL, Excel, Python y más fuentes.",
        "tags": [
          "Dashboards",
          "BI",
          "Reportes"
        ]
      },
      {
        "icon": "🧠",
        "name": "Hugging Face",
        "badge": "free",
        "desc": "Accede a miles de modelos de ML preentrenados para NLP, visión, audio y más. La mayor comunidad de IA.",
        "tags": [
          "ML",
          "NLP",
          "Modelos"
        ]
      },
      {
        "icon": "🏆",
        "name": "Kaggle",
        "badge": "free",
        "desc": "Compite, aprende y encuentra datasets. La plataforma más grande de data science con notebooks gratuitos.",
        "tags": [
          "Competencias",
          "Datasets",
          "Aprendizaje"
        ]
      },
      {
        "icon": "⚡",
        "name": "DuckDB",
        "badge": "free",
        "desc": "Motor SQL analítico ultrarrápido que corre en local. Procesa CSV, Parquet y JSON directamente.",
        "tags": [
          "SQL",
          "Analytics",
          "Performance"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Python",
        "level": "Básico",
        "title": "Limpieza de dataset",
        "body": "Tengo un dataset CSV con las siguientes columnas: [lista de columnas]. Los problemas que encuentro son: [valores nulos, duplicados, tipos incorrectos, outliers]. Escribe el código Python con pandas para: detectar y visualizar valores nulos, eliminar duplicados, convertir tipos de datos, tratar outliers con IQR y exportar el dataset limpio. Incluye comentarios explicativos en el código."
      },
      {
        "cat": "Machine Learning",
        "level": "Intermedio",
        "title": "Pipeline de clasificación",
        "body": "Crea un pipeline completo de Machine Learning con scikit-learn para un problema de clasificación binaria. El dataset tiene [N] filas y [features]. Incluye: preprocesamiento (StandardScaler, OneHotEncoder), selección de features (correlación + importancia), comparación de 3 modelos (Logistic Regression, Random Forest, XGBoost), evaluación con cross-validation y métricas (accuracy, F1, ROC-AUC) y reporte final."
      },
      {
        "cat": "SQL",
        "level": "Básico",
        "title": "Query de análisis exploratorio",
        "body": "Tengo una tabla [nombre_tabla] con las columnas: [columnas]. Escribe consultas SQL para: distribución de valores de [columna categórica], estadísticas descriptivas de [columna numérica], top 10 valores más frecuentes, tendencia temporal por [columna_fecha] y detección de posibles duplicados. Optimiza para performance con índices sugeridos."
      },
      {
        "cat": "Visualización",
        "level": "Intermedio",
        "title": "Dashboard con Python",
        "body": "Crea un dashboard interactivo con Plotly y Dash en Python para visualizar [tipo de datos: ventas/usuarios/sensores]. Incluye: KPI cards en la parte superior, gráfico de tendencia temporal (line chart), distribución (histogram o boxplot), top categorías (bar chart horizontal) y filtros por fecha y categoría. Código completo y listo para ejecutar."
      }
    ],
    "resources": [
      {
        "icon": "📓",
        "type": "Plataforma",
        "name": "Kaggle Learn",
        "desc": "Cursos gratuitos de Python, ML, SQL, visualización y feature engineering. Con certificados y notebooks."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Dot CSV",
        "desc": "El mejor canal de Data Science e IA en español. Papers explicados, tutoriales y tendencias."
      },
      {
        "icon": "🎓",
        "type": "Curso",
        "name": "fast.ai",
        "desc": "Cursos prácticos de Deep Learning y ML. Filosofía top-down: primero el resultado, luego la teoría."
      },
      {
        "icon": "📖",
        "type": "Libro",
        "name": "Python for Data Analysis (O'Reilly)",
        "desc": "El libro de referencia de Wes McKinney, creador de Pandas. Disponible gratis en Jupyter Notebook."
      },
      {
        "icon": "🌐",
        "type": "Comunidad",
        "name": "Towards Data Science",
        "desc": "La publicación más leída de Data Science en Medium. Miles de artículos técnicos de calidad."
      },
      {
        "icon": "🔬",
        "type": "Herramienta",
        "name": "MLflow",
        "desc": "Gestiona experimentos de ML, versiona modelos y despliega en producción. Open source."
      }
    ],
    "apps": [
      {
        "title": "EDA automático con ProfileReport",
        "desc": "Genera un informe completo de análisis exploratorio con una sola línea usando ydata-profiling (ex pandas-profiling).",
        "example": "from ydata_profiling import ProfileReport\nreport = ProfileReport(df)\nreport.to_file(“eda.html“)"
      },
      {
        "title": "Fine-tuning de LLM en Colab",
        "desc": "Google Colab ofrece GPUs gratuitas. Usa Hugging Face + PEFT para hacer fine-tuning de modelos de lenguaje con LoRA.",
        "example": "Modelos viables en Colab gratuito: phi-2, mistral-7b-qlora, gemma-2b"
      },
      {
        "title": "Dashboard ejecutivo automático",
        "desc": "Con Python + Plotly Dash crea dashboards interactivos que se actualizan con los datos más recientes al abrir el navegador.",
        "example": "Conecta a SQL → Transforma con pandas → Visualiza con Plotly → Despliega en Render (gratis)"
      },
      {
        "title": "Detección de anomalías en producción",
        "desc": "Implementa Isolation Forest o DBSCAN para detectar outliers en tiempo real en streams de datos de sensores o transacciones.",
        "example": "sklearn.ensemble.IsolationForest(contamination=0.05).fit_predict(X)"
      }
    ],
    "tips": [
      {
        "text": "<strong>Domina pandas antes que cualquier ML</strong>. El 80% del trabajo de un Data Scientist es preparar datos, no entrenar modelos."
      },
      {
        "text": "<strong>Kaggle es tu portafolio</strong>. Completa 5 notebooks públicos de calidad y tienes más valor que un CV tradicional."
      },
      {
        "text": "<strong>Lee papers en arXiv</strong>. Usa Claude o ChatGPT para que te expliquen los conceptos técnicos complejos."
      },
      {
        "text": "<strong>Versiona tu código con Git</strong> desde el día uno. Cada experimento en una branch, con logs claros."
      },
      {
        "text": "<strong>MLflow para experimentos</strong>: nunca más perder qué hiperparámetros usaste en el modelo que funcionó."
      }
    ]
  },
  {
    "id": "emprendedores",
    "emoji": "💼",
    "name": "Emprendedores",
    "area": "Negocios & Startups",
    "desc": "Valida tu idea, lanza tu producto y escala tu negocio con herramientas de IA y estrategia digital.",
    "tags": [
      "Startup",
      "Validación",
      "Crecimiento"
    ],
    "welcome": "Emprender en la era de la IA es una ventaja competitiva enorme. Aquí encontrarás las herramientas para validar tu idea, construir tu producto y crecer con menos recursos.",
    "tools": [
      {
        "icon": "🤖",
        "name": "ChatGPT/Claude",
        "badge": "free",
        "desc": "Tu co-fundador de IA: analiza mercados, valida ideas, redacta propuestas, crea planes de negocio y responde consultas.",
        "tags": [
          "Estrategia",
          "Análisis",
          "Plan"
        ]
      },
      {
        "icon": "📊",
        "name": "Notion",
        "badge": "free",
        "desc": "Tu sistema operativo del negocio: OKRs, gestión de proyectos, wikis, CRM básico y documentación.",
        "tags": [
          "Gestión",
          "CRM",
          "Documentación"
        ]
      },
      {
        "icon": "💰",
        "name": "Stripe",
        "badge": "premium",
        "desc": "Acepta pagos online de todo el mundo en minutos. Subscripciones, pagos únicos y facturación automática.",
        "tags": [
          "Pagos",
          "Subscripciones",
          "Global"
        ]
      },
      {
        "icon": "🎨",
        "name": "Framer / Webflow",
        "badge": "premium",
        "desc": "Crea landing pages profesionales y sitios web sin código. Ideales para validar ideas rápido.",
        "tags": [
          "Web",
          "Sin código",
          "Landing"
        ]
      },
      {
        "icon": "📧",
        "name": "Brevo (SendinBlue)",
        "badge": "free",
        "desc": "Email marketing, automatizaciones y CRM. Plan gratuito robusto para emprendedores en etapa inicial.",
        "tags": [
          "Email",
          "CRM",
          "Automatización"
        ]
      },
      {
        "icon": "📱",
        "name": "Typeform",
        "badge": "premium",
        "desc": "Crea encuestas hermosas para validar tu idea, conocer a tu cliente y recolectar feedback.",
        "tags": [
          "Encuestas",
          "Validación",
          "Feedback"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Validación",
        "level": "Básico",
        "title": "Analizar idea de negocio",
        "body": "Actúa como mentor de startups con experiencia en Latinoamérica. Quiero lanzar [descripción de tu idea] dirigido a [segmento de clientes]. Evalúa: problema real que resuelve, tamaño de mercado estimado, 3 competidores principales y cómo diferenciarse, riesgos principales, modelo de negocio viable y los 3 primeros pasos para validar sin invertir dinero."
      },
      {
        "cat": "Marketing",
        "level": "Intermedio",
        "title": "Estrategia de lanzamiento",
        "body": "Soy fundador de [startup/negocio] que ofrece [producto/servicio] a [cliente objetivo]. Necesito una estrategia de lanzamiento con presupuesto cero (o muy bajo). Diseña: propuesta de valor clara, canales de adquisición gratuitos prioritarios, mensaje de lanzamiento para redes sociales, plan de las primeras 4 semanas y métricas para medir si va bien."
      },
      {
        "cat": "Finanzas",
        "level": "Intermedio",
        "title": "Modelo financiero básico",
        "body": "Ayúdame a construir un modelo financiero simple para [tipo de negocio]. Incluye: estructura de ingresos (precio × volumen), costos variables y fijos, punto de equilibrio, proyección de 12 meses (mes 1-3: 0, mes 4-6: crecimiento inicial, mes 7-12: estabilización) y cuánto capital necesito para los primeros 6 meses. Dame fórmulas para Google Sheets."
      },
      {
        "cat": "Ventas",
        "level": "Básico",
        "title": "Pitch de 60 segundos",
        "body": "Escribe un elevator pitch de 60 segundos para [mi startup] que resuelve [problema] para [cliente]. El pitch debe incluir: gancho inicial (el problema en 1 frase), solución (qué hacemos), diferenciación (por qué somos distintos), tracción (si la hay) y llamado a la acción. Tono: confiado, claro y sin jerga técnica."
      }
    ],
    "resources": [
      {
        "icon": "📖",
        "type": "Libro",
        "name": "The Lean Startup (E. Ries)",
        "desc": "El libro fundacional del emprendimiento moderno. Valida antes de construir. PDF disponible online."
      },
      {
        "icon": "🎙️",
        "type": "Podcast",
        "name": "Y Combinator Startup School",
        "desc": "El programa de aceleración más influyente del mundo tiene videos gratuitos sobre todos los aspectos del emprendimiento."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Platzi Business",
        "desc": "Contenido en español sobre negocios digitales, marketing y crecimiento de startups latinoamericanas."
      },
      {
        "icon": "🌐",
        "type": "Comunidad",
        "name": "StartupLatam",
        "desc": "Red de emprendedores latinoamericanos con eventos, recursos y conexiones de inversión."
      },
      {
        "icon": "🏆",
        "type": "Programa",
        "name": "Google for Startups",
        "desc": "Recursos, créditos de Google Cloud y mentoría para startups en etapas tempranas. Aplica gratis."
      },
      {
        "icon": "💡",
        "type": "Herramienta",
        "name": "Product Hunt",
        "desc": "Lanza tu producto y consigue tus primeros usuarios. La plataforma de lanzamiento más reconocida del mundo tech."
      }
    ],
    "apps": [
      {
        "title": "Validar idea en 48 horas",
        "desc": "Lunes: define problema y solución con IA. Martes: crea landing con Framer. Miércoles: publica en redes. Jueves: mide clicks. Viernes: entrevista a 5 potenciales clientes.",
        "example": "Landing mínima: Título + Descripción + Email de espera + Botón. Nada más."
      },
      {
        "title": "CRM gratuito con Notion",
        "desc": "Crea una base de datos en Notion para gestionar leads, clientes, conversaciones y seguimientos. Sin pagar HubSpot.",
        "example": "Tabla: Nombre | Email | Estado (Lead/Propuesta/Cliente) | Última interacción | Notas"
      },
      {
        "title": "Automatizar emails con Brevo",
        "desc": "Configura una secuencia de bienvenida automática para quien se registre en tu lista: día 1, día 3, día 7.",
        "example": "Email 1: Bienvenida + valor gratuito. Email 3: Caso de éxito. Email 7: Oferta especial."
      },
      {
        "title": "Analizar a tu competencia con IA",
        "desc": "Pide a Claude o ChatGPT que analice las páginas web, reseñas y redes de tus 3 competidores principales.",
        "example": "Prompt: “Analiza [URL competidor] y extrae: propuesta de valor, precios, puntos débiles en reseñas y oportunidades.“"
      }
    ],
    "tips": [
      {
        "text": "<strong>Vende antes de construir</strong>. Si alguien no te da su email o pre-paga, probablemente no pagará después tampoco."
      },
      {
        "text": "<strong>Tu primer cliente</strong> vale más que tu mejor pitch. Enfócate en conseguir 10 clientes felices antes de escalar."
      },
      {
        "text": "<strong>Usa IA para hacer de todo</strong>: redactar, analizar, diseñar, planificar. Eres un equipo de uno, la IA es el resto del equipo."
      },
      {
        "text": "<strong>El feedback duele pero salva</strong>. Muéstrale tu producto a 10 personas de tu mercado objetivo y escucha honestamente."
      },
      {
        "text": "<strong>Mide una sola métrica norte</strong>: usuarios activos, ingresos recurrentes o retención. No todo a la vez."
      }
    ]
  },
  {
    "id": "plomeria",
    "emoji": "🔧",
    "name": "Plomería & Oficios",
    "area": "Oficios & Técnico",
    "desc": "Digitaliza tu negocio de oficios: gestiona clientes, presupuestos, redes sociales y aprende con IA.",
    "tags": [
      "Gestión",
      "Presupuestos",
      "Clientes"
    ],
    "welcome": "Los oficios son negocios serios y merecen herramientas serias. Aquí aprenderás a organizar tu trabajo, conseguir más clientes y profesionalizar tu servicio usando tecnología simple.",
    "tools": [
      {
        "icon": "💬",
        "name": "WhatsApp Business",
        "badge": "free",
        "desc": "Gestiona todos tus clientes, envía presupuestos, fotos del trabajo y organiza tu agenda desde el celular.",
        "tags": [
          "Clientes",
          "Presupuestos",
          "Organización"
        ]
      },
      {
        "icon": "📋",
        "name": "Google Forms",
        "badge": "free",
        "desc": "Crea formularios para que los clientes soliciten tu servicio, incluyendo dirección, tipo de problema y fotos.",
        "tags": [
          "Solicitudes",
          "Formularios",
          "Datos"
        ]
      },
      {
        "icon": "🤖",
        "name": "ChatGPT",
        "badge": "free",
        "desc": "Redacta presupuestos profesionales, responde mensajes difíciles, crea listas de materiales y busca soluciones técnicas.",
        "tags": [
          "Presupuestos",
          "Técnico",
          "Comunicación"
        ]
      },
      {
        "icon": "📸",
        "name": "Google Fotos",
        "badge": "free",
        "desc": "Documenta antes y después de cada trabajo. Crea un portafolio visual de tus mejores trabajos.",
        "tags": [
          "Portafolio",
          "Antes/Después",
          "Evidencia"
        ]
      },
      {
        "icon": "💰",
        "name": "Factura Móvil",
        "badge": "free",
        "desc": "Genera facturas y recibos profesionales desde el celular. Dale seriedad a tu negocio.",
        "tags": [
          "Facturas",
          "Formal",
          "Profesional"
        ]
      },
      {
        "icon": "📍",
        "name": "Google Business",
        "badge": "free",
        "desc": "Aparece en Google Maps cuando alguien busca “plomero cerca de mí“. Gratis y muy efectivo para conseguir clientes.",
        "tags": [
          "Google Maps",
          "Clientes",
          "Local"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Presupuesto",
        "level": "Básico",
        "title": "Redactar presupuesto profesional",
        "body": "Ayúdame a redactar un presupuesto profesional para un trabajo de [tipo de trabajo: ej. cambio de cañería, instalación de ducha]. El cliente es [descripción]. Materiales necesarios: [lista]. Mano de obra: [días/horas]. Incluye: descripción clara del trabajo, detalle de materiales con precios, costo de mano de obra, garantía ofrecida, forma de pago y datos de contacto. Tono profesional y confiable."
      },
      {
        "cat": "Clientes",
        "level": "Básico",
        "title": "Responder queja de cliente",
        "body": "Un cliente se quejó porque [describe el problema o queja]. Escríbeme una respuesta profesional por WhatsApp que: reconozca el inconveniente sin admitir culpa inmediata, muestre disposición a resolver, proponga una solución concreta y mantenga la relación. Tono: calmado, profesional y empático."
      },
      {
        "cat": "Marketing",
        "level": "Básico",
        "title": "Post para redes sociales",
        "body": "Escribe 3 posts para Instagram/Facebook de mi negocio de [oficio]. Cada uno debe mostrar: un trabajo realizado (antes y después), el problema que resolví y por qué llamarme a mí. Tono cercano, como si lo escribiera el propio plomero/técnico/electricista. Incluye hashtags relevantes para que me encuentren localmente."
      },
      {
        "cat": "Técnico",
        "level": "Intermedio",
        "title": "Lista de materiales para trabajo",
        "body": "Necesito la lista completa de materiales para [describir el trabajo técnico específico]. Incluye: cantidad de cada material, tipo y especificaciones técnicas, herramientas necesarias y orden en que se realizaría el trabajo. También dime posibles problemas que pueden surgir y cómo prevenirlos."
      }
    ],
    "resources": [
      {
        "icon": "🎓",
        "type": "YouTube",
        "name": "Tutoriales de Plomería",
        "desc": "Busca en YouTube “plomería paso a paso“ para encontrar miles de tutoriales gratuitos en español."
      },
      {
        "icon": "📱",
        "type": "App",
        "name": "Google Business Profile",
        "desc": "Configura tu perfil de negocio en Google Maps. Gratis. Clientes te encuentran cuando buscan localmente."
      },
      {
        "icon": "💰",
        "type": "App",
        "name": "Factura Móvil / Contador",
        "desc": "Apps gratuitas para emitir facturas desde el celular y llevar registro de ingresos y gastos."
      },
      {
        "icon": "🌐",
        "type": "Plataforma",
        "name": "Workana / GetNinjas",
        "desc": "Plataformas donde personas buscan técnicos y profesionales de oficios para trabajos específicos."
      },
      {
        "icon": "📸",
        "type": "Red Social",
        "name": "Instagram para Oficios",
        "desc": "Muchos técnicos consiguen clientes mostrando su trabajo con fotos de antes/después en Instagram."
      },
      {
        "icon": "📋",
        "type": "Herramienta",
        "name": "Trello",
        "desc": "Tablero simple para organizar tus trabajos pendientes, en proceso y completados. Gratis."
      }
    ],
    "apps": [
      {
        "title": "Aparecer en Google Maps",
        "desc": "Registra tu negocio en Google Business Profile. Cuando alguien busque “plomero en [tu ciudad]“, apareces tú.",
        "example": "Proceso: maps.google.com → Agregar negocio → Nombre, dirección, teléfono, fotos → Verificar."
      },
      {
        "title": "Portafolio de trabajos en Instagram",
        "desc": "Fotografía cada trabajo (antes y después). Publica con descripción del problema resuelto. Los clientes ven tu experiencia.",
        "example": "“Problema: goteras en baño. Solución: sellado y cambio de mesada. ¿Tienes el mismo problema? Escríbeme.“"
      },
      {
        "title": "Presupuestos en WhatsApp Business",
        "desc": "Configura mensajes automáticos y usa los mensajes rápidos para enviar tu presupuesto tipo en segundos.",
        "example": "Presupuesto básico guardado: “Para el trabajo de X, el costo estimado es $Y. Incluye materiales y mano de obra.“"
      },
      {
        "title": "Conseguir clientes en plataformas",
        "desc": "Regístrate en GetNinjas, Workana o similares de tu país. Son plataformas donde personas buscan técnicos de confianza.",
        "example": "Perfil completo + foto profesional + reseñas de clientes anteriores = más trabajos."
      }
    ],
    "tips": [
      {
        "text": "<strong>Google Maps es tu mejor vitrina</strong>. Un perfil completo y con fotos puede darte 10-20 clientes extra por mes sin gastar."
      },
      {
        "text": "<strong>Pide reseñas siempre</strong>. Al terminar un buen trabajo, pide al cliente que deje una reseña en Google. Vale oro."
      },
      {
        "text": "<strong>Fotos antes y después</strong>: tu portafolio visual es tu curriculum. Un cliente ve tus fotos y ya sabe que eres profesional."
      },
      {
        "text": "<strong>Sé puntual y comunicativo</strong>: la puntualidad y responder rápido diferencia a los buenos técnicos de los mediocres."
      },
      {
        "text": "<strong>WhatsApp Business</strong> es tu oficina en el bolsillo. Configurado bien, funciona como un sistema de gestión de clientes."
      }
    ]
  },
  {
    "id": "contenido",
    "emoji": "🎬",
    "name": "Creadores de Contenido",
    "area": "Creación & Redes Sociales",
    "desc": "Escala tu producción de contenido con IA: ideas, guiones, edición, monetización y crecimiento.",
    "tags": [
      "YouTube",
      "TikTok",
      "Monetización"
    ],
    "welcome": "La IA ha democratizado la producción de contenido de calidad. Aquí encontrarás las herramientas para crear más rápido, crecer más inteligente y monetizar tu audiencia.",
    "tools": [
      {
        "icon": "🎬",
        "name": "CapCut",
        "badge": "free",
        "desc": "La mejor app de edición para móvil y desktop. Templates virales, subtítulos automáticos, efectos IA.",
        "tags": [
          "Edición",
          "Reels",
          "TikTok"
        ]
      },
      {
        "icon": "🤖",
        "name": "ChatGPT",
        "badge": "free",
        "desc": "Ideas de contenido, guiones completos, titles con SEO, descripciones, respuestas a comentarios.",
        "tags": [
          "Ideas",
          "Guiones",
          "SEO"
        ]
      },
      {
        "icon": "🎙️",
        "name": "ElevenLabs",
        "badge": "premium",
        "desc": "Voz en off realista con IA para videos. Clona tu voz o usa voces predefinidas para narración.",
        "tags": [
          "Voz",
          "Narración",
          "IA"
        ]
      },
      {
        "icon": "🖼️",
        "name": "Adobe Firefly",
        "badge": "premium",
        "desc": "Genera thumbnails, imágenes para posts y arte visual con IA de forma comercialmente segura.",
        "tags": [
          "Thumbnails",
          "Arte",
          "Visual"
        ]
      },
      {
        "icon": "📊",
        "name": "TubeBuddy",
        "badge": "premium",
        "desc": "Herramienta de SEO para YouTube: keywords, análisis de competencia, tags y optimización de título.",
        "tags": [
          "SEO",
          "YouTube",
          "Keywords"
        ]
      },
      {
        "icon": "📱",
        "name": "Later / Buffer",
        "badge": "premium",
        "desc": "Programa tus publicaciones en todas las redes. Análisis de mejores horarios y métricas de crecimiento.",
        "tags": [
          "Programación",
          "Redes",
          "Análisis"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Ideas",
        "level": "Básico",
        "title": "20 ideas de contenido",
        "body": "Soy creador de contenido en [nicho: tecnología/cocina/fitness/finanzas] con [N] seguidores en [plataforma]. Mi audiencia es [descripción]. Dame 20 ideas de videos o posts: 5 educativos, 5 de entretenimiento, 5 de tendencia actual y 5 de “detrás de cámaras“. Para cada idea: título llamativo, ángulo único y por qué funcionaría con mi audiencia."
      },
      {
        "cat": "Guiones",
        "level": "Intermedio",
        "title": "Guión de video YouTube",
        "body": "Escribe un guión completo para un video de YouTube de 8-10 minutos sobre [tema] dirigido a [audiencia]. Incluye: hook inicial (primeros 30 segundos que enganchen), contexto y por qué importa el tema, desarrollo en 3 partes con transiciones, llamada a la acción a los 2 minutos (suscripción), cierre memorable y descripción optimizada para SEO con timestamps."
      },
      {
        "cat": "SEO",
        "level": "Intermedio",
        "title": "Optimizar para YouTube SEO",
        "body": "Quiero publicar un video de YouTube sobre [tema]. Optimiza: 5 opciones de título con keyword principal (máx 60 caracteres), descripción de 250 palabras con keyword en los primeros 2 párrafos, 15 tags relevantes, capítulos con timestamps sugeridos y miniatura textual recomendada. Usa las mejores prácticas de SEO de YouTube para 2024."
      },
      {
        "cat": "Monetización",
        "level": "Avanzado",
        "title": "Estrategia de monetización",
        "body": "Tengo [N] seguidores en [plataforma] y [N] visitas promedio. Mi nicho es [nicho]. Diseña mi estrategia de monetización para los próximos 6 meses con: canales de ingresos por orden de prioridad (ads, patrocinios, productos propios, afiliados, membresías), cómo llegar a cada uno, expectativas realistas de ingresos por canal y hoja de ruta con hitos mensuales."
      }
    ],
    "resources": [
      {
        "icon": "🎓",
        "type": "Curso",
        "name": "Think Media (YouTube)",
        "desc": "El mejor canal en inglés para crecer en YouTube. Estrategia, equipo, monetización y crecimiento."
      },
      {
        "icon": "📊",
        "type": "Herramienta",
        "name": "vidIQ",
        "desc": "Alternativa a TubeBuddy para SEO de YouTube. Plan gratuito con análisis básico de keywords."
      },
      {
        "icon": "🎙️",
        "type": "Podcast",
        "name": "Creator Economy Podcast",
        "desc": "Tendencias, monetización y estrategias para creadores de contenido independientes."
      },
      {
        "icon": "📱",
        "type": "Comunidad",
        "name": "Creator IQ / Collabstr",
        "desc": "Plataformas donde marcas buscan creadores para colaboraciones pagas. Regístrate aunque tengas pocos seguidores."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Nico Elegante",
        "desc": "Canal latinoamericano sobre crecimiento en redes sociales, monetización y creación de marca personal."
      },
      {
        "icon": "🌐",
        "type": "Newsletter",
        "name": "The Creator Economy",
        "desc": "Newsletter semanal con tendencias, oportunidades de ingresos y análisis del ecosistema de creadores."
      }
    ],
    "apps": [
      {
        "title": "Producir 30 piezas de contenido por semana",
        "desc": "Crea un “content pillar“: 1 video largo → extraes clips para TikTok/Reels → los guiones se convierten en posts → las ideas en stories.",
        "example": "1 video YouTube (10 min) → 5 Reels → 10 tweets → 3 posts → 1 newsletter"
      },
      {
        "title": "Thumbnails que aumentan el CTR",
        "desc": "Estudia los videos de más éxito en tu nicho en YouTube Studio. Adobe Firefly o Canva para crear variaciones y prueba A/B.",
        "example": "Fórmula ganadora: Cara con emoción clara + Número o pregunta + Colores contrastantes"
      },
      {
        "title": "Monetizar con membresías",
        "desc": "Crea un nivel de Patreon o YouTube Memberships con contenido exclusivo. Incluso con 1,000 fans fieles puedes generar ingresos.",
        "example": "1,000 fans × $5/mes = $5,000/mes. El “1,000 true fans“ de Kevin Kelly es real."
      },
      {
        "title": "Automatizar ideas con IA",
        "desc": "Una vez por semana, pasa 20 minutos con ChatGPT generando ideas para el mes completo. Nunca más quedarte sin qué publicar.",
        "example": "Prompt: “Dame 60 ideas de contenido para [nicho] para publicar en [plataforma] durante junio.“"
      }
    ],
    "tips": [
      {
        "text": "<strong>Consistencia > perfección</strong>. Publica aunque no sea perfecto. El algoritmo premia la constancia."
      },
      {
        "text": "<strong>Los primeros 3 segundos</strong> son todo. Si no enganchas en 3 segundos, el resto del video no importa."
      },
      {
        "text": "<strong>Estudia tu analítica</strong> cada semana. Mira dónde la gente se va de tu video. Ahí está el problema."
      },
      {
        "text": "<strong>La reutilización de contenido</strong> es tu mayor palanca. Un buen video puede vivir como 10 piezas diferentes."
      },
      {
        "text": "<strong>Conéctate con tu comunidad</strong>. Responde comentarios las primeras horas. El engagement temprano impulsa el algoritmo."
      }
    ]
  },
  {
    "id": "ventas",
    "emoji": "💰",
    "name": "Ventas & Redes Sociales",
    "area": "Ventas & Social Selling",
    "desc": "Convierte seguidores en clientes con social selling, automatizaciones y estrategias de cierre con IA.",
    "tags": [
      "Social Selling",
      "Cierre",
      "CRM"
    ],
    "welcome": "Vender en la era digital es una habilidad que se aprende. Aquí encontrarás las herramientas y técnicas para convertir redes sociales en máquinas de generar clientes y cerrar ventas.",
    "tools": [
      {
        "icon": "💬",
        "name": "WhatsApp Business",
        "badge": "free",
        "desc": "Tu canal de ventas #1. Catálogo, respuestas rápidas, etiquetas de clientes y broadcasts a listas.",
        "tags": [
          "Ventas",
          "Clientes",
          "Mensajes"
        ]
      },
      {
        "icon": "🤖",
        "name": "ManyChat",
        "badge": "premium",
        "desc": "Automatiza respuestas en Instagram y Facebook. Captura leads, envía catálogos y crea flujos de venta automáticos.",
        "tags": [
          "Automatización",
          "Instagram",
          "Leads"
        ]
      },
      {
        "icon": "📊",
        "name": "HubSpot CRM",
        "badge": "free",
        "desc": "CRM gratuito para gestionar tu pipeline de ventas, contactos y seguimiento de oportunidades.",
        "tags": [
          "CRM",
          "Pipeline",
          "Seguimiento"
        ]
      },
      {
        "icon": "🎯",
        "name": "LinkedIn Sales Navigator",
        "badge": "premium",
        "desc": "La herramienta de prospección B2B más potente. Encuentra tomadores de decisión y gestiona outreach.",
        "tags": [
          "B2B",
          "Prospección",
          "LinkedIn"
        ]
      },
      {
        "icon": "📧",
        "name": "Lemlist",
        "badge": "premium",
        "desc": "Automatiza tu outreach por email con personalización IA. Secuencias de follow-up y análisis de apertura.",
        "tags": [
          "Email",
          "Outreach",
          "Follow-up"
        ]
      },
      {
        "icon": "📈",
        "name": "Pipedrive",
        "badge": "premium",
        "desc": "CRM visual con pipeline en kanban. Gestiona tus oportunidades de venta de forma visual e intuitiva.",
        "tags": [
          "Pipeline",
          "Visual",
          "Ventas"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Prospectos",
        "level": "Básico",
        "title": "Mensaje de primer contacto",
        "body": "Escribe un mensaje de primer contacto para [plataforma: LinkedIn/Instagram/WhatsApp] para prospectar a [tipo de cliente: dueño de restaurante/gerente de RRHH/empresario de retail]. Mi producto/servicio es [descripción]. El mensaje debe: ser personalizado (no genérico), mencionar algo específico de su negocio, plantear el problema que resuelvo (sin vender todavía) y terminar con una pregunta abierta. Máximo 5 líneas."
      },
      {
        "cat": "Cierre",
        "level": "Intermedio",
        "title": "Manejar objeciones de precio",
        "body": "Un prospecto dice “[objeción de precio: es muy caro / no tengo presupuesto ahora / lo necesito pero...“. Escríbeme 3 respuestas diferentes para manejar esta objeción: una que reencuadre el valor, una que ofrezca alternativas y una que cree urgencia genuina. Tono: empático, profesional y sin presión excesiva."
      },
      {
        "cat": "Follow-up",
        "level": "Básico",
        "title": "Secuencia de seguimiento",
        "body": "Diseña una secuencia de 5 mensajes de seguimiento para un prospecto que mostró interés en [producto/servicio] pero no ha respondido hace [N] días. Mensajes para días: 2, 5, 10, 20 y 30. Cada mensaje diferente: primero de valor, luego de caso de éxito, luego pregunta directa, luego urgencia y último de cierre de ciclo. Nada agresivo."
      },
      {
        "cat": "Social Selling",
        "level": "Avanzado",
        "title": "Estrategia de contenido que vende",
        "body": "Diseña mi estrategia de contenido en [Instagram/LinkedIn] para generar ventas orgánicas de [producto/servicio] para [cliente ideal]. Incluye: 4 pilares de contenido, proporción de contenido educativo vs. venta, ejemplos de posts para cada pilar, cómo pasar de seguidor a prospecto a cliente con llamadas a la acción naturales y cómo medir si el contenido está generando ventas."
      }
    ],
    "resources": [
      {
        "icon": "📖",
        "type": "Libro",
        "name": "SPIN Selling (Neil Rackham)",
        "desc": "El método de ventas consultivas más probado del mundo. Basado en 12 años de investigación."
      },
      {
        "icon": "🎙️",
        "type": "Podcast",
        "name": "Sell or Die (Gitomer)",
        "desc": "El podcast de ventas más popular del mundo con técnicas modernas y mindset de vendedor."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Alex Hormozi",
        "desc": "El referente en estrategia de ventas y negocios modernos. Contenido gratuito y de altísima calidad."
      },
      {
        "icon": "🎓",
        "type": "Curso",
        "name": "HubSpot Sales Academy",
        "desc": "Certificaciones gratuitas en ventas inbound, CRM y social selling. Con certificado descargable."
      },
      {
        "icon": "🌐",
        "type": "Comunidad",
        "name": "Sales Hacker",
        "desc": "Comunidad global de profesionales de ventas con recursos, playbooks y debates técnicos."
      },
      {
        "icon": "📊",
        "type": "Herramienta",
        "name": "Apollo.io",
        "desc": "Plataforma de prospección B2B con datos de contacto verificados y automatización de outreach."
      }
    ],
    "apps": [
      {
        "title": "Pipeline de ventas en HubSpot",
        "desc": "Crea tu pipeline gratis en HubSpot: Lead → Contacto → Propuesta → Negociación → Cerrado. Nunca pierdas un prospecto.",
        "example": "Cada prospecto tiene: nombre, empresa, valor estimado, próximo paso y fecha de seguimiento."
      },
      {
        "title": "Automatizar DMs de Instagram",
        "desc": "Con ManyChat configura: cuando alguien comenta “INFO“ en tu post, recibe automáticamente tu catálogo por DM.",
        "example": "Post: “Comenta PRECIO y te mando los detalles.“ → ManyChat envía catálogo automáticamente."
      },
      {
        "title": "Prospectar en LinkedIn gratis",
        "desc": "Busca tu cliente ideal con filtros (cargo, industria, empresa), mira su perfil, comenta su contenido y luego conecta.",
        "example": "Secuencia: Ver perfil → Comentar post → Conectar con nota personalizada → Mensaje de valor → Pitch."
      },
      {
        "title": "Secuencias de follow-up automáticas",
        "desc": "Con Lemlist o incluso Gmail crea plantillas con seguimientos programados para que ningún lead se enfríe solo.",
        "example": "Día 1: Propuesta. Día 3: Case study. Día 7: Pregunta de bloqueo. Día 14: Cierre de ciclo."
      }
    ],
    "tips": [
      {
        "text": "<strong>Vende el resultado, no el producto</strong>. “Más clientes en 30 días“ vende más que “marketing digital para empresas“."
      },
      {
        "text": "<strong>El seguimiento es donde se gana el dinero</strong>. El 80% de las ventas ocurren entre el 5° y 12° contacto."
      },
      {
        "text": "<strong>Escucha más de lo que hablas</strong>. Un buen vendedor hace preguntas y el cliente se convence solo."
      },
      {
        "text": "<strong>Usa testimonios y casos de éxito</strong>. La prueba social es el argumento de venta más poderoso que existe."
      },
      {
        "text": "<strong>Trata las objeciones como preguntas</strong>. “Es muy caro“ significa “no veo suficiente valor todavía“."
      }
    ]
  },
  {
    "id": "bigdata",
    "emoji": "🌐",
    "name": "Big Data",
    "area": "Infraestructura & Analytics",
    "desc": "Arquitecturas de datos distribuidas, procesamiento en escala y ecosistema moderno de Big Data.",
    "tags": [
      "Spark",
      "Cloud",
      "ETL"
    ],
    "welcome": "Big Data en 2024 es el stack moderno: cloud-native, serverless y con IA integrada. Aquí encontrarás las herramientas del stack actual y cómo aplicarlas.",
    "tools": [
      {
        "icon": "⚡",
        "name": "Apache Spark",
        "badge": "free",
        "desc": "Motor de procesamiento distribuido. Procesa petabytes con DataFrames, Spark SQL y MLlib para ML en escala.",
        "tags": [
          "Distributed",
          "SQL",
          "ML"
        ]
      },
      {
        "icon": "☁️",
        "name": "Snowflake",
        "badge": "premium",
        "desc": "Data Warehouse cloud moderno. Separa almacenamiento de cómputo, escala automáticamente y soporta IA nativa.",
        "tags": [
          "Data Warehouse",
          "Cloud",
          "SQL"
        ]
      },
      {
        "icon": "🔄",
        "name": "dbt (data build tool)",
        "badge": "free",
        "desc": "Transforma datos en tu warehouse con SQL. Versionado con Git, testing automático y documentación.",
        "tags": [
          "ELT",
          "SQL",
          "Testing"
        ]
      },
      {
        "icon": "🌊",
        "name": "Apache Kafka",
        "badge": "free",
        "desc": "Plataforma de streaming distribuido. Procesa millones de eventos por segundo con latencia mínima.",
        "tags": [
          "Streaming",
          "Real-time",
          "Eventos"
        ]
      },
      {
        "icon": "🗄️",
        "name": "Delta Lake",
        "badge": "free",
        "desc": "Formato de tabla abierto con ACID transactions para data lakes. Compatible con Spark y Databricks.",
        "tags": [
          "Data Lake",
          "ACID",
          "Open"
        ]
      },
      {
        "icon": "📊",
        "name": "Databricks",
        "badge": "premium",
        "desc": "La plataforma unificada de datos e IA basada en Spark. Notebooks colaborativos, MLflow y data lakehouse.",
        "tags": [
          "Lakehouse",
          "ML",
          "Colaborativo"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Spark",
        "level": "Intermedio",
        "title": "Pipeline de procesamiento",
        "body": "Escribe un pipeline de Spark en PySpark que: lee un dataset de Parquet de S3 (o ADLS), aplica transformaciones (filtro, agregación por ventana temporal, join con tabla de dimensiones), maneja datos nulos y duplicados, escribe el resultado particionado por fecha en formato Delta y registra métricas de calidad (recuento antes/después, nulos por columna). Incluye manejo de errores y logging."
      },
      {
        "cat": "dbt",
        "level": "Intermedio",
        "title": "Modelo dbt con testing",
        "body": "Crea un modelo dbt completo para transformar datos crudos de [tabla_fuente] en una tabla analítica limpia. Incluye: SQL del modelo con CTEs organizadas, schema.yml con tests (not_null, unique, accepted_values, relationships), documentación de columnas, macro de limpieza reutilizable y configuración de materialización (tabla incremental con merge_strategy). Usa best practices de dbt."
      },
      {
        "cat": "Kafka",
        "level": "Avanzado",
        "title": "Consumer de Kafka en Python",
        "body": "Escribe un consumer de Kafka en Python con confluent-kafka que: consume de topic [topic_name], procesa eventos en batches de 1,000 mensajes, aplica transformaciones con schema validation (usando Avro o JSON Schema), maneja errores con dead-letter queue, registra métricas de lag y throughput y garantiza exactly-once semantics. Listo para producción."
      },
      {
        "cat": "Arquitectura",
        "level": "Avanzado",
        "title": "Diseño de data lakehouse",
        "body": "Diseña la arquitectura de un data lakehouse moderno para una empresa con [N] TB de datos y [tipo de casos de uso: analytics + ML + real-time]. Incluye: capas (Bronze/Silver/Gold o medallion), stack tecnológico recomendado (cloud + herramientas), flujo de datos end-to-end, estrategia de gobernanza y catálogo, consideraciones de costo y cómo migrar desde el estado actual."
      }
    ],
    "resources": [
      {
        "icon": "🎓",
        "type": "Plataforma",
        "name": "Databricks Academy",
        "desc": "Cursos oficiales de Apache Spark, Delta Lake y ML en Databricks. Muchos son gratuitos."
      },
      {
        "icon": "📖",
        "type": "Libro",
        "name": "Fundamentals of Data Engineering (O'Reilly)",
        "desc": "El libro de referencia del stack moderno de data engineering. Muy recomendado para 2024."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Seattle Data Guy",
        "desc": "Canal sobre data engineering, dbt, Snowflake y el stack moderno de datos. Muy práctico."
      },
      {
        "icon": "🌐",
        "type": "Comunidad",
        "name": "dbt Community Slack",
        "desc": "La comunidad más activa de data engineering. Más de 50,000 profesionales resolviendo problemas."
      },
      {
        "icon": "📰",
        "type": "Newsletter",
        "name": "Data Engineering Weekly",
        "desc": "Newsletter semanal con las últimas noticias, papers y herramientas del ecosistema de datos."
      },
      {
        "icon": "☁️",
        "type": "Sandbox",
        "name": "AWS/GCP/Azure Free Tier",
        "desc": "Todos los clouds ofrecen tier gratuito. Práctica con S3, BigQuery o Synapse Analytics sin costo."
      }
    ],
    "apps": [
      {
        "title": "Data Lakehouse con Delta Lake + Spark",
        "desc": "Implementa la arquitectura medallion: Bronze (raw), Silver (limpio), Gold (agregado) usando Delta Lake en Databricks o localmente.",
        "example": "Bronze: datos crudos del S3 → Silver: con dbt → Gold: tablas analíticas para BI"
      },
      {
        "title": "Streaming con Kafka + Spark Structured Streaming",
        "desc": "Pipeline de tiempo real: Kafka ingesta eventos → Spark Structured Streaming procesa → Delta Lake almacena → Dashboard actualizado.",
        "example": "Caso: Fraud detection en transacciones bancarias con ventana de 1 minuto."
      },
      {
        "title": "ELT moderno con dbt + Snowflake",
        "desc": "Carga datos con Fivetran/Airbyte → modela con dbt → documenta automáticamente → despliega con CI/CD.",
        "example": "dbt test --select +modelo → 0 errores → dbt run → tabla lista en Snowflake."
      },
      {
        "title": "Data Quality automático",
        "desc": "Implementa Great Expectations o Soda para validar automáticamente la calidad de tus datos en cada pipeline.",
        "example": "Expectativas: not_null(id), unique(id), between(age, 0, 120), regex(email)."
      }
    ],
    "tips": [
      {
        "text": "<strong>Empieza con el medallion architecture</strong>: Bronze/Silver/Gold. Es el patrón más adoptado en la industria hoy."
      },
      {
        "text": "<strong>dbt es no negociable</strong> en 2024. Si transformas datos en SQL sin dbt, estás perdiendo versionado, tests y documentación."
      },
      {
        "text": "<strong>El costo de la nube</strong> puede explotar si no monitorizas. Usa presupuestos y alertas desde el día uno en AWS/GCP/Azure."
      },
      {
        "text": "<strong>Data contracts</strong>: define esquemas acordados entre productores y consumidores de datos. Evita el caos a escala."
      },
      {
        "text": "<strong>Observabilidad de datos</strong> con Monte Carlo o Elementary: sabes en tiempo real si tus datos están rotos."
      }
    ]
  },
  {
    "id": "cotidiano",
    "emoji": "🏠",
    "name": "Vida Cotidiana",
    "area": "Productividad Personal",
    "desc": "IA para organizar tu vida diaria: finanzas personales, salud, hogar, familia y aprendizaje continuo.",
    "tags": [
      "Organización",
      "Finanzas",
      "Bienestar"
    ],
    "welcome": "La IA no es solo para empresas o técnicos. Es para tu vida de todos los días: organizar el hogar, cuidar tu salud, manejar tus finanzas y aprender cosas nuevas sin esfuerzo.",
    "tools": [
      {
        "icon": "🤖",
        "name": "ChatGPT",
        "badge": "free",
        "desc": "Pregúntale cualquier cosa: recetas, consejos de salud, ayuda con documentos, planes de ahorro y mucho más.",
        "tags": [
          "Consultas",
          "Recetas",
          "Consejos"
        ]
      },
      {
        "icon": "📝",
        "name": "Notion / Google Keep",
        "badge": "free",
        "desc": "Organiza listas de compras, tareas del hogar, calendario familiar y notas importantes en un solo lugar.",
        "tags": [
          "Organización",
          "Listas",
          "Hogar"
        ]
      },
      {
        "icon": "💰",
        "name": "Fintual / Finerio",
        "badge": "free",
        "desc": "Controla tus gastos, ahorra automáticamente y gestiona tus finanzas personales con facilidad.",
        "tags": [
          "Finanzas",
          "Ahorro",
          "Gastos"
        ]
      },
      {
        "icon": "🍳",
        "name": "Yummly / ChefIQ",
        "badge": "free",
        "desc": "Recetas personalizadas según lo que tienes en el refrigerador, tus gustos y restricciones alimentarias.",
        "tags": [
          "Recetas",
          "Alimentación",
          "Salud"
        ]
      },
      {
        "icon": "🏃",
        "name": "Nike Training Club",
        "badge": "free",
        "desc": "Rutinas de ejercicio para todos los niveles desde casa. Videos con instrucción y planes progresivos.",
        "tags": [
          "Ejercicio",
          "Salud",
          "Rutinas"
        ]
      },
      {
        "icon": "🧘",
        "name": "Calm / Headspace",
        "badge": "premium",
        "desc": "Meditación guiada, sonidos para dormir y técnicas de mindfulness para el bienestar mental.",
        "tags": [
          "Bienestar",
          "Meditación",
          "Sueño"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Finanzas",
        "level": "Básico",
        "title": "Plan de ahorro mensual",
        "body": "Gano [ingreso mensual] y mis gastos fijos son: [lista de gastos]. Ayúdame a crear un presupuesto mensual que: cubra todos mis gastos esenciales, destine dinero al ahorro (al menos 10%), incluya algo para entretenimiento y me ayude a ahorrar para [meta: vacaciones/emergencia/compra]. Dame un plan concreto en tabla con categorías y montos."
      },
      {
        "cat": "Alimentación",
        "level": "Básico",
        "title": "Plan de comidas saludable",
        "body": "Crea un plan de comidas saludable para [N] personas para una semana. Tengo disponible: [ingredientes principales que tengo]. Preferencias: [gustos o restricciones: sin gluten/vegetariano/bajo en sodio]. Presupuesto semanal: [monto]. Incluye: desayuno, almuerzo y cena, lista de compras organizada y preparación que no tome más de 30-40 minutos por comida."
      },
      {
        "cat": "Organización",
        "level": "Básico",
        "title": "Rutina semanal del hogar",
        "body": "Ayúdame a crear una rutina semanal para el hogar que incluya: limpieza y orden (distribuyendo tareas por día para que no sea agobiante), compras y cocina (planificación eficiente), administración (pago de cuentas, documentos, trámites) y tiempo personal (ejercicio, descanso, familia). Somos [N] personas en el hogar. Dame un plan realista y fácil de seguir."
      },
      {
        "cat": "Aprendizaje",
        "level": "Básico",
        "title": "Plan de aprendizaje personal",
        "body": "Quiero aprender [tema o habilidad] en [tiempo disponible: 30 minutos al día / fines de semana]. Crea un plan de aprendizaje de [N] semanas con: recursos gratuitos (videos, artículos, apps), progresión lógica de lo básico a lo avanzado, ejercicios prácticos para aplicar lo aprendido y cómo medir mi progreso. Que sea realista para alguien con vida ocupada."
      }
    ],
    "resources": [
      {
        "icon": "💰",
        "type": "App",
        "name": "Wallet by BudgetBakers",
        "desc": "La mejor app de finanzas personales: controla gastos, budgets y estadísticas visuales. Gratis."
      },
      {
        "icon": "🍳",
        "type": "App",
        "name": "Yummly",
        "desc": "Recetas personalizadas según tus ingredientes, preferencias y tiempo disponible para cocinar."
      },
      {
        "icon": "🏃",
        "type": "App",
        "name": "Nike Training Club",
        "desc": "Rutinas de ejercicio gratuitas en video para hacer en casa, parque o gym. Todos los niveles."
      },
      {
        "icon": "📚",
        "type": "Plataforma",
        "name": "Duolingo",
        "desc": "Aprende idiomas gratis en solo 15 minutos al día. El método más efectivo y gamificado."
      },
      {
        "icon": "🧘",
        "type": "App",
        "name": "Insight Timer",
        "desc": "Meditación y mindfulness 100% gratis. Miles de meditaciones guiadas en español."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "YouTube Premium",
        "desc": "Descarga videos sin conexión, sin anuncios. Para ver tutoriales en el transporte o gym."
      }
    ],
    "apps": [
      {
        "title": "Planificar comidas de la semana",
        "desc": "Cada domingo usa ChatGPT para planificar las comidas de la semana según lo que tienes y tu presupuesto.",
        "example": "Prompt: “Tengo pollo, arroz, lentejas, tomate y zanahoria. Crea 5 cenas distintas saludables.“"
      },
      {
        "title": "Control de gastos sin complicaciones",
        "desc": "Usa Google Sheets o Wallet App para registrar cada gasto. Una semana de datos revela dónde puedes ahorrar.",
        "example": "Categorías simples: Comida | Transporte | Entretenimiento | Ropa | Salud | Otros"
      },
      {
        "title": "Aprender algo nuevo en 30 min/día",
        "desc": "Duolingo para idiomas, YouTube para habilidades, Podcast para información. 30 minutos diarios = un libro por mes.",
        "example": "Lunes/Miércoles/Viernes: 15 min Duolingo. Martes/Jueves: 15 min podcast de [tema]."
      },
      {
        "title": "Rutina de hogar sin agobio",
        "desc": "Distribuye las tareas del hogar en los 7 días. Lunes: baños. Martes: cocina. Miércoles: pisos... Nunca todo en un día.",
        "example": "Tarea diaria de 20-30 min + organización de 10 min = hogar siempre presentable."
      }
    ],
    "tips": [
      {
        "text": "<strong>ChatGPT puede ser tu asistente personal</strong>. Úsalo para hacer preguntas que no sabes a quién hacerle: salud, trámites, recetas."
      },
      {
        "text": "<strong>El presupuesto no es una restricción</strong>, es un plan. Saber a dónde va tu dinero te da control y tranquilidad."
      },
      {
        "text": "<strong>30 minutos de ejercicio</strong> tres veces por semana cambian tu energía, humor y salud más que cualquier suplemento."
      },
      {
        "text": "<strong>Cocinar en batch</strong>: los domingos cocina para 3-4 días. Ahorra tiempo, dinero y evitas comer mal en los días ocupados."
      },
      {
        "text": "<strong>Aprende un idioma</strong> con Duolingo. 15 minutos al día y en 1 año tendrás nivel básico-intermedio real."
      }
    ]
  },
  {
    "id": "costura",
    "emoji": "🧵",
    "name": "Corte, Confección & Diseño de Indumentaria",
    "area": "Moda & Emprendimiento Textil",
    "desc": "Digitaliza tu taller, crea patrones con IA, construye tu marca de moda y llega a más clientes.",
    "tags": [
      "Patronaje",
      "Moda",
      "Emprendimiento"
    ],
    "welcome": "El mundo de la moda y la confección está siendo transformado por la tecnología. Aquí encontrarás herramientas para diseñar, patronar, vender y construir una marca textil profesional usando inteligencia artificial.",
    "tools": [
      {
        "icon": "✂️",
        "name": "CLO 3D / Marvelous Designer",
        "badge": "premium",
        "desc": "Software de diseño y simulación de prendas en 3D. Crea patronajes digitales, simula telas y presenta colecciones sin coser una muestra física.",
        "tags": [
          "Patronaje 3D",
          "Simulación",
          "Diseño"
        ]
      },
      {
        "icon": "🎨",
        "name": "Adobe Illustrator",
        "badge": "premium",
        "desc": "El estándar de la industria para diseño de indumentaria: fichas técnicas, planos, prints y presentaciones de colección profesionales.",
        "tags": [
          "Fichas técnicas",
          "Diseño",
          "Planos"
        ]
      },
      {
        "icon": "🤖",
        "name": "ChatGPT / Claude",
        "badge": "free",
        "desc": "Genera fichas técnicas, descripciones de productos, estrategias de venta, presupuestos para clientas y contenido para redes sociales.",
        "tags": [
          "Fichas",
          "Contenido",
          "Estrategia"
        ]
      },
      {
        "icon": "🖼️",
        "name": "Midjourney / Adobe Firefly",
        "badge": "premium",
        "desc": "Genera moodboards, visualizaciones de prendas, estampados originales y referencias de colección usando inteligencia artificial generativa.",
        "tags": [
          "Moodboard",
          "Estampados",
          "Visual"
        ]
      },
      {
        "icon": "📸",
        "name": "Canva",
        "badge": "free",
        "desc": "Crea fichas de producto, lookbooks, catálogos de temporada y contenido para Instagram de manera rápida y profesional.",
        "tags": [
          "Catálogo",
          "Lookbook",
          "Redes"
        ]
      },
      {
        "icon": "🛒",
        "name": "Tienda Nube / Shopify",
        "badge": "premium",
        "desc": "Vende tus prendas online con tienda propia: gestión de stock, tallas, colores, pagos y envíos integrados.",
        "tags": [
          "E-commerce",
          "Ventas",
          "Online"
        ]
      }
    ],
    "prompts": [
      {
        "cat": "Ficha técnica",
        "level": "Básico",
        "title": "Generar ficha técnica de prenda",
        "body": "Actúa como técnico en indumentaria. Crea una ficha técnica completa para [nombre de la prenda: ej. blazer recto, vestido envolvente, pantalón cargo]. Incluye: descripción de la prenda, materiales y composición de tela recomendada, avíos necesarios (botones, cierres, entretelas), instrucciones de confección resumidas, tabla de tallas (S/M/L/XL en cm de busto, cintura, cadera y largo), cuidado del tejido y precio de venta sugerido según mercado latinoamericano."
      },
      {
        "cat": "Ventas",
        "level": "Básico",
        "title": "Descripción de prenda para tienda online",
        "body": "Soy diseñadora/confeccionista y quiero publicar [descripción de la prenda] en mi tienda online. Escribe una descripción de producto atractiva y completa que incluya: nombre creativo de la prenda, descripción sensorial del tejido y la caída, cómo combinarla y para qué ocasiones, tabla de medidas resumida y cuidados del textil. Tono: elegante pero accesible, como una marca de moda indie latinoamericana."
      },
      {
        "cat": "Diseño",
        "level": "Intermedio",
        "title": "Concepto de colección cápsula",
        "body": "Ayúdame a desarrollar el concepto de una colección cápsula de [N] prendas para [temporada: verano/invierno/otoño] con el concepto inspirador de [tema: ej. arquitectura brutalista / naturaleza patagónica / años 70 latinoamericanos]. Incluye: nombre de la colección, paleta de colores (con códigos HEX), tejidos sugeridos, siluetas clave, 5-7 prendas que componen la cápsula y cómo se combinan entre sí. Que sea coherente y comercializable."
      },
      {
        "cat": "Marketing",
        "level": "Intermedio",
        "title": "Estrategia de redes para marca de moda",
        "body": "Tengo una marca de indumentaria llamada [nombre] que produce [tipo de prendas] para [cliente ideal: ej. mujeres de 25-40 años, estilo minimalista]. Diseña mi estrategia de Instagram para el próximo mes. Incluye: 4 pilares de contenido, tipos de post por pilar, frecuencia de publicación, ideas concretas de 8 posts (con descripción de imagen y texto), hashtags por categoría y cómo mostrar el proceso creativo para diferenciarse."
      }
    ],
    "resources": [
      {
        "icon": "🎓",
        "type": "Plataforma",
        "name": "Domestika — Moda",
        "desc": "Cursos de diseño de indumentaria, patronaje, ilustración de moda y construcción de marca. Precios accesibles en español."
      },
      {
        "icon": "📺",
        "type": "YouTube",
        "name": "Costura Fácil / Mango Moda",
        "desc": "Canales en español con tutoriales de patronaje, confección y técnicas de costura para todos los niveles."
      },
      {
        "icon": "📖",
        "type": "Libro",
        "name": "Diseño de Moda (Davies, Rebecca)",
        "desc": "Referencia esencial para diseñadores: proceso creativo, fichas técnicas, moodboards y presentación de colecciones."
      },
      {
        "icon": "🌐",
        "type": "Comunidad",
        "name": "WGSN Trend Community",
        "desc": "Plataforma de tendencias de moda mundial. La versión gratuita ofrece informes y tendencias de temporada."
      },
      {
        "icon": "📱",
        "type": "App",
        "name": "Pinterest",
        "desc": "La herramienta de moodboard más usada en diseño de moda. Crea tableros de inspiración, paletas y referencias de colección."
      },
      {
        "icon": "🧶",
        "type": "Comunidad",
        "name": "Grupos de Costureras en Facebook",
        "desc": "Comunidades de costureras y diseñadoras latinoamericanas donde se comparten patrones, consejos y se consiguen clientas."
      }
    ],
    "apps": [
      {
        "title": "Crear un lookbook digital en Canva",
        "desc": "Fotografía tus prendas con buena luz, usa Canva para componer páginas de lookbook con la paleta de tu marca y compártelo por WhatsApp o Instagram.",
        "example": "Lookbook verano 2025: 8 páginas, fondo blanco, tipografía minimalista, precio y talla en cada prenda."
      },
      {
        "title": "Generar estampados con IA",
        "desc": "Usa Midjourney o Adobe Firefly para crear estampados originales describiendo el patrón, la paleta y el estilo. Luego aplícalos en tus telas digitales.",
        "example": "Prompt: “Geometric floral print, earthy tones, 1970s Latin American style, seamless pattern, textile design.“"
      },
      {
        "title": "Ficha técnica digital para clientas",
        "desc": "Con ChatGPT genera fichas técnicas profesionales para cada encargo. Incluye medidas, tela, avíos y precio. Envíala por WhatsApp en PDF desde Canva.",
        "example": "Ficha de encargo: Nombre cliente | Prenda | Tela | Medidas | Fecha entrega | Seña | Saldo."
      },
      {
        "title": "Vender por Instagram sin tienda propia",
        "desc": "Publica tus prendas en stories y feed, activa el catálogo de Instagram Shopping y usa el link de Linktree para centralizar tus medios de contacto y pago.",
        "example": "Post: foto prenda + precio + tallas disponibles + “Escribime para reservar 🧵“ + sticker de DM."
      }
    ],
    "tips": [
      {
        "text": "<strong>Fotografía tus prendas siempre sobre modelo o maniquí</strong>. La ropa en percha vende mucho menos que la ropa puesta con buena luz natural."
      },
      {
        "text": "<strong>Usa ChatGPT para redactar tus fichas técnicas y presupuestos</strong>. Describe la prenda y te genera el documento en segundos."
      },
      {
        "text": "<strong>Crea una paleta de colores de temporada</strong> y aplícala en toda tu comunicación: redes, catálogo y empaque. La coherencia visual construye marca."
      },
      {
        "text": "<strong>Ofrece tallajes reales</strong>: mide bien y publica la tabla de medidas. Eso reduce las devoluciones y genera más confianza que una talla S/M/L genérica."
      },
      {
        "text": "<strong>Documenta tu proceso</strong>: el detrás de escena de la costura genera mucho engagement. Trazado, corte, costura, terminación = contenido auténtico que diferencia."
      }
    ]
  }
];
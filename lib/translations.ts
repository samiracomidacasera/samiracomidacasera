export type UIKeys =
  | "nav_home"
  | "nav_menu"
  | "nav_gallery"
  | "nav_about"
  | "nav_reviews"
  | "nav_contact"
  | "nav_call"
  | "hero_badge"
  | "hero_title_1"
  | "hero_title_2"
  | "hero_title_3"
  | "hero_desc"
  | "hero_hours"
  | "hero_address"
  | "hero_btn_menu"
  | "hero_btn_call"
  | "hero_btn_uber"
  | "hero_btn_map"
  | "hero_btn_reserve"
  | "why_badge"
  | "why_title"
  | "why_title_accent"
  | "why_desc"
  | "why_f1_title"
  | "why_f1_desc"
  | "why_f2_title"
  | "why_f2_desc"
  | "why_f3_title"
  | "why_f3_desc"
  | "why_f4_title"
  | "why_f4_desc"
  | "why_stat_rating"
  | "why_stat_reviews"
  | "why_stat_tradition"
  | "why_stat_specs"
  | "feat_badge"
  | "feat_title"
  | "feat_title_accent"
  | "feat_desc"
  | "feat_btn"
  | "menu_badge"
  | "menu_title"
  | "menu_title_accent"
  | "menu_desc"
  | "menu_call_banner"
  | "menu_disclaimer"
  | "menu_btn_whatsapp"
  | "menu_btn_uber"
  | "about_badge"
  | "about_title"
  | "about_title_accent"
  | "about_title_loc"
  | "about_p1"
  | "about_p2"
  | "about_p3"
  | "about_v1"
  | "about_v2"
  | "about_v3"
  | "about_v4"
  | "about_v5"
  | "about_v6"
  | "about_services"
  | "service_dine"
  | "service_take"
  | "service_uber"
  | "service_special"
  | "service_catering"
  | "service_family"
  | "rev_badge"
  | "rev_title"
  | "rev_title_accent"
  | "rev_based_on"
  | "rev_verified"
  | "rev_write"
  | "gal_badge"
  | "gal_title"
  | "gal_title_accent"
  | "gal_desc"
  | "order_badge"
  | "order_title"
  | "order_title_accent"
  | "order_desc"
  | "order_call_text"
  | "order_phone_add"
  | "order_wsp_title"
  | "order_wsp_sub"
  | "order_wsp_desc"
  | "order_uber_title"
  | "order_uber_sub"
  | "order_uber_desc"
  | "order_call_title"
  | "order_call_sub"
  | "order_call_desc"
  | "map_badge"
  | "map_title"
  | "map_title_accent"
  | "map_desc"
  | "map_address_title"
  | "map_address_link"
  | "map_hours_title"
  | "map_hours_days"
  | "map_hours_open"
  | "map_hours_closed"
  | "map_phones_title"
  | "map_services_title"
  | "map_btn_google"
  | "foot_desc"
  | "foot_col_links"
  | "foot_col_contact"
  | "foot_col_hours"
  | "foot_hours_open"
  | "foot_hours_closed"
  | "foot_hours_desc"
  | "foot_rights"
  | "foot_made_in"
  | "breadcrumb_home"
  | "breadcrumb_about"
  | "breadcrumb_contact"
  | "about_hero_badge"
  | "about_hero_title"
  | "about_hero_subtitle"
  | "about_stat_exp"
  | "about_stat_exp_sub"
  | "about_stat_halal"
  | "about_stat_halal_sub"
  | "about_stat_recipes"
  | "about_stat_recipes_sub"
  | "about_stat_love"
  | "about_stat_love_sub"
  | "about_founder_badge"
  | "about_founder_title"
  | "about_founder_p1"
  | "about_founder_p2"
  | "about_founder_quote"
  | "about_pillars_badge"
  | "about_pillars_title"
  | "about_pillar1_title"
  | "about_pillar1_desc"
  | "about_pillar2_title"
  | "about_pillar2_desc"
  | "about_pillar3_title"
  | "about_pillar3_desc"
  | "about_pillar4_title"
  | "about_pillar4_desc"
  | "about_timeline_badge"
  | "about_timeline_title"
  | "about_t1_year"
  | "about_t1_title"
  | "about_t1_desc"
  | "about_t2_year"
  | "about_t2_title"
  | "about_t2_desc"
  | "about_t3_year"
  | "about_t3_title"
  | "about_t3_desc"
  | "about_t4_year"
  | "about_t4_title"
  | "about_t4_desc"
  | "about_catering_badge"
  | "about_catering_title"
  | "about_catering_desc"
  | "about_catering_cta"
  | "about_cta_title"
  | "about_cta_desc"
  | "about_cta_btn_menu"
  | "about_cta_btn_contact"
  | "contact_hero_badge"
  | "contact_hero_title"
  | "contact_hero_subtitle"
  | "contact_card_wsp_badge"
  | "contact_card_wsp_title"
  | "contact_card_wsp_desc"
  | "contact_card_wsp_btn"
  | "contact_card_call_badge"
  | "contact_card_call_title"
  | "contact_card_call_desc"
  | "contact_card_call_btn1"
  | "contact_card_call_btn2"
  | "contact_card_uber_badge"
  | "contact_card_uber_title"
  | "contact_card_uber_desc"
  | "contact_card_uber_btn"
  | "contact_form_badge"
  | "contact_form_title"
  | "contact_form_desc"
  | "contact_form_name"
  | "contact_form_name_ph"
  | "contact_form_phone"
  | "contact_form_phone_ph"
  | "contact_form_email"
  | "contact_form_email_ph"
  | "contact_form_type"
  | "contact_form_type_take"
  | "contact_form_type_special"
  | "contact_form_type_catering"
  | "contact_form_type_other"
  | "contact_form_message"
  | "contact_form_message_ph"
  | "contact_form_btn_submit"
  | "contact_form_btn_wsp"
  | "contact_form_success"
  | "contact_loc_badge"
  | "contact_loc_title"
  | "contact_loc_address"
  | "contact_loc_train_title"
  | "contact_loc_train_desc"
  | "contact_loc_bus_title"
  | "contact_loc_bus_desc"
  | "contact_loc_car_title"
  | "contact_loc_car_desc"
  | "contact_hours_status_open"
  | "contact_hours_status_closed"
  | "contact_hours_detail"
  | "contact_faq_badge"
  | "contact_faq_title"
  | "contact_faq_q1"
  | "contact_faq_a1"
  | "contact_faq_q2"
  | "contact_faq_a2"
  | "contact_faq_q3"
  | "contact_faq_a3"
  | "contact_faq_q4"
  | "contact_faq_a4"
  | "contact_faq_q5"
  | "contact_faq_a5"
  | "res_badge"
  | "res_title"
  | "res_title_accent"
  | "res_desc"
  | "res_form_name"
  | "res_form_name_ph"
  | "res_form_phone"
  | "res_form_phone_ph"
  | "res_form_guests"
  | "res_form_guests_unit"
  | "res_form_date"
  | "res_form_time"
  | "res_form_notes"
  | "res_form_notes_ph"
  | "res_btn_wsp"
  | "res_btn_call"
  | "res_feat_confirm"
  | "res_feat_halal"
  | "res_feat_fresh"
  | "res_feat_hours";

export const translations: Record<string, Record<UIKeys, string>> = {
  es: {
    nav_home: "Inicio",
    nav_menu: "Menú",
    nav_gallery: "Galería",
    nav_about: "Nosotros",
    nav_reviews: "Opiniones",
    nav_contact: "Contacto",
    nav_call: "Llamar Ahora",
    hero_badge: "4.6★ · 337+ Reseñas · Torremolinos",
    hero_title_1: "Auténtica",
    hero_title_2: "Comida Marroquí",
    hero_title_3: "en Torremolinos",
    hero_desc: "Comida casera tradicional preparada fresca a diario con los condimentos y sabores originales de Marruecos.",
    hero_hours: "Todos los días · 10:00 – 21:00",
    hero_address: "C. Río Aranda, 11 · Málaga",
    hero_btn_menu: "Ver Menú",
    hero_btn_call: "Llamar",
    hero_btn_uber: "Uber Eats",
    hero_btn_map: "Mapa",
    hero_btn_reserve: "Reservar Mesa",
    why_badge: "Por Qué Elegirnos",
    why_title: "La Experiencia",
    why_title_accent: "Samira",
    why_desc: "Traemos el corazón, los condimentos y el alma de la cocina tradicional marroquí a la Costa del Sol.",
    why_f1_title: "Recetas de Familia",
    why_f1_desc: "Recetas tradicionales heredadas de generación en generación, preservando la esencia del sabor marroquí.",
    why_f2_title: "Ingredientes Frescos",
    why_f2_desc: "Ingredientes de la mejor calidad y especias originales importadas directamente de los mercados de Marruecos.",
    why_f3_title: "Negocio Familiar",
    why_f3_desc: "Cercanía y hospitalidad cálida. Nos preocupamos por que cada cliente se sienta como en casa.",
    why_f4_title: "Comida Para Llevar",
    why_f4_desc: "Servicio rápido y cómodo. Haz tu pedido por teléfono o WhatsApp y recógelo recién hecho.",
    why_stat_rating: "Puntuación Google",
    why_stat_reviews: "Reseñas de Clientes",
    why_stat_tradition: "Años de Tradición",
    why_stat_specs: "Especialidades",
    feat_badge: "Platos Estrella",
    feat_title: "Especialidades",
    feat_title_accent: "Destacadas",
    feat_desc: "Platos tradicionales cocinados lentamente, con ingredientes frescos e impregnados de aromas orientales auténticos.",
    feat_btn: "Ver Carta Completa",
    menu_badge: "Nuestra Carta",
    menu_title: "Cocina Marroquí",
    menu_title_accent: "Auténtica",
    menu_desc: "Desde tradicionales tajines a fuego lento y cuscús esponjoso hasta repostería artesanal. Todos los platos se preparan al momento.",
    menu_call_banner: "📞 Pide ahora por Teléfono o WhatsApp",
    menu_disclaimer: "* Los precios son orientativos. Llama para consultar pedidos grandes o servicios de catering.",
    menu_btn_whatsapp: "Pedir por WhatsApp",
    menu_btn_uber: "Pedir en Uber Eats",
    about_badge: "Nuestra Historia",
    about_title: "El Sabor de",
    about_title_accent: "Marruecos",
    about_title_loc: "en Torremolinos",
    about_p1: "Nuestra historia comenzó con un profundo amor por la auténtica cocina marroquí — la que se transmite de abuela a madre, de madre a hija. Samira, nuestra fundadora, trajo esas preciadas recetas familiares desde su hogar en Marruecos hasta el corazón de Torremolinos.",
    about_p2: "Cada plato que servimos es un reflejo de ese amor — tajines cocinados a fuego lento, cuscús esponjoso, bastillas crujientes y sopas de harira ricas, todo elaborado desde cero cada día con los mejores ingredientes.",
    about_p3: "Creemos que la comida es más que nutrición — es una celebración de cultura, familia y conexión. Por eso ponemos el corazón en cada plato.",
    about_v1: "Recetas familiares tradicionales de Marruecos",
    about_v2: "Ingredientes frescos de origen diario",
    about_v3: "Especias marroquíes auténticas",
    about_v4: "Hecho en casa con amor cada día",
    about_v5: "Ambiente familiar cálido y acogedor",
    about_v6: "Más de 10 años de pasión culinaria",
    about_services: "Nuestros Servicios",
    service_dine: "Comer en Local",
    service_take: "Para Llevar",
    service_uber: "Uber Eats",
    service_special: "Pedidos Especiales",
    service_catering: "Catering",
    service_family: "Menú Familiar",
    rev_badge: "Opiniones",
    rev_title: "Qué Dicen",
    rev_title_accent: "Nuestros Clientes",
    rev_based_on: "Basado en 337+ reseñas",
    rev_verified: "Reseña Verificada",
    rev_write: "Escribir Reseña",
    gal_badge: "Galería",
    gal_title: "Nuestra",
    gal_title_accent: "Historia Visual",
    gal_desc: "Un recorrido fotográfico por las delicias tradicionales marroquíes y la cocina artesanal de nuestro local.",
    order_badge: "Pedir Ahora",
    order_title: "Cómo Hacer",
    order_title_accent: "Tu Pedido",
    order_desc: "Elige el canal de tu preferencia para disfrutar de nuestras deliciosas recetas caseras marroquíes.",
    order_call_text: "Pedir por Teléfono",
    order_phone_add: "Teléfono adicional",
    order_wsp_title: "WhatsApp",
    order_wsp_sub: "Pedido por mensaje",
    order_wsp_desc: "Envíanos un mensaje con tu pedido y lo preparamos al momento para recoger.",
    order_uber_title: "Uber Eats",
    order_uber_sub: "A Domicilio",
    order_uber_desc: "Pide a través de Uber Eats para recibir la comida cómodamente en tu domicilio.",
    order_call_title: "Llamar",
    order_call_sub: "Pedido por teléfono",
    order_call_desc: "Llama de forma directa para reservar tu comida o consultar nuestras sugerencias.",
    map_badge: "Ubicación",
    map_title: "Dónde",
    map_title_accent: "Encontrarnos",
    map_desc: "Estamos en Torremolinos, Málaga. Ven a recoger tu comida recién hecha o contacta con nosotros.",
    map_address_title: "Dirección",
    map_address_link: "Cómo llegar",
    map_hours_title: "Horario",
    map_hours_days: "Lunes a Domingo",
    map_hours_open: "Abierto",
    map_hours_closed: "Cerrado",
    map_phones_title: "Teléfonos",
    map_services_title: "Servicios disponibles",
    map_btn_google: "Abrir en Google Maps",
    foot_desc: "Auténtica cocina casera tradicional de Marruecos preparada fresca a diario en Torremolinos, Málaga.",
    foot_col_links: "Enlaces",
    foot_col_contact: "Contacto",
    foot_col_hours: "Horario comercial",
    foot_hours_open: "Abierto ahora",
    foot_hours_closed: "Cerrado ahora",
    foot_hours_desc: "Recomendamos encargar platos especiales con 24h de antelación.",
    foot_rights: "Todos los derechos reservados.",
    foot_made_in: "en Torremolinos",
    breadcrumb_home: "Inicio",
    breadcrumb_about: "Nosotros",
    breadcrumb_contact: "Contacto",
    about_hero_badge: "Tradición · Pasión · Sabor Casero",
    about_hero_title: "El Alma y Sabor de Marruecos",
    about_hero_subtitle: "Desde las raíces culinarias de Marruecos hasta la Costa del Sol. Una historia de amor familiar, especias puras y recetas centenarias.",
    about_stat_exp: "10+ Años",
    about_stat_exp_sub: "De Tradición Familiar",
    about_stat_halal: "100% Halal",
    about_stat_halal_sub: "Carnes Certificadas",
    about_stat_recipes: "35+ Platos",
    about_stat_recipes_sub: "Elaborados a Diario",
    about_stat_love: "4.6★ Google",
    about_stat_love_sub: "+337 Reseñas Reales",
    about_founder_badge: "Nuestra Fundadora",
    about_founder_title: "La Pasión de Samira",
    about_founder_p1: "Samira creció entre los aromas envolventes del comino fresco, el azafrán puro y el agua de azahar en Marruecos. Aprendió de su abuela y de su madre que la verdadera cocina no admite atajos: cada tajine necesita su tiempo, cada cuscús debe esponjarse al vapor con paciencia y cada pastela requiere una dedicación minuciosa.",
    about_founder_p2: "Al establecerse en Torremolinos, su sueño fue claro: abrir las puertas de un rincón donde cualquier persona pudiera saborear la auténtica comida marroquí, tal como se come en los hogares más acogedores del norte de África.",
    about_founder_quote: "Cocinar para nuestros clientes es recibirlos en nuestra propia casa con el corazón abierto y los mejores sabores.",
    about_pillars_badge: "Nuestra Filosofía",
    about_pillars_title: "Los 4 Pilares de Nuestra Cocina",
    about_pillar1_title: "Cocción Lenta en Barro",
    about_pillar1_desc: "Nuestros tajines se cocinan a fuego pausado en ollas de barro tradicionales, permitiendo que la carne quede tierna y los aromas se concentren profundamente.",
    about_pillar2_title: "Especias Puras & Frescura",
    about_pillar2_desc: "Seleccionamos verduras frescas cada mañana y especias auténticas de Marruecos: ras el hanout artesanal, canela en rama, jengibre y azafrán de primera calidad.",
    about_pillar3_title: "100% Halal Certificado",
    about_pillar3_desc: "Todas nuestras carnes (pollo, ternera, cordero) son estrictamente Halal y provienen de proveedores certificados de total confianza.",
    about_pillar4_title: "Hospitalidad Marroquí",
    about_pillar4_desc: "La generosidad y el trato cercano son la esencia de nuestra cultura. Queremos que cada pedido sea un motivo de felicidad y satisfacción.",
    about_timeline_badge: "Nuestra Trayectoria",
    about_timeline_title: "El Camino de Samira",
    about_t1_year: "2014",
    about_t1_title: "El Comienzo del Sueño",
    about_t1_desc: "Llegada a España trayendo consigo los cuadernos de recetas familiares y el deseo de compartir la gastronomía marroquí.",
    about_t2_year: "2018",
    about_t2_title: "Apertura en Torremolinos",
    about_t2_desc: "Apertura de Samira Comida Para Llevar en C. Río Aranda 11, convirtiéndose rápidamente en un referente local.",
    about_t3_year: "2022",
    about_t3_title: "Catering y Celebraciones",
    about_t3_desc: "Ampliación de servicios para banquetes familiares, encargos especiales y eventos en la Costa del Sol.",
    about_t4_year: "Hoy",
    about_t4_title: "Referente Gastronómico",
    about_t4_desc: "Más de 330 opiniones con 4.6 estrellas y una clientela fiel que confía en nuestra comida casera a diario.",
    about_catering_badge: "Eventos & Encargos Especiales",
    about_catering_title: "Llevamos la Fiesta a Tu Mesa",
    about_catering_desc: "¿Tienes una celebración, cumpleaños o reunión familiar? Preparamos bandejas gigantes de pastela, cuscús para grupos, bandejas de cordero asado y surtidos de dulces árabes por kilo con 24 horas de antelación.",
    about_catering_cta: "Consultar Menú para Eventos",
    about_cta_title: "¿Listo para Probar la Auténtica Comida Marroquí?",
    about_cta_desc: "Pide tu comida recién hecha para recoger o encarga tus platos favoritos por WhatsApp.",
    about_cta_btn_menu: "Explorar Nuestra Carta",
    about_cta_btn_contact: "Hablar con Nosotros",
    contact_hero_badge: "Atención Directa y Cercana",
    contact_hero_title: "Contacta con Nosotros",
    contact_hero_subtitle: "Estamos en Torremolinos, Málaga. Llámanos para pedidos directos, escríbenos por WhatsApp o déjanos un mensaje para encargos especiales y catering.",
    contact_card_wsp_badge: "Más Rápido",
    contact_card_wsp_title: "WhatsApp Inmediato",
    contact_card_wsp_desc: "Haz tu pedido por mensaje o resuelve cualquier duda al instante con nuestro equipo.",
    contact_card_wsp_btn: "Abrir WhatsApp",
    contact_card_call_badge: "Línea Directa",
    contact_card_call_title: "Llamada Telefónica",
    contact_card_call_desc: "Atendemos llamadas todos los días de 10:00 a 21:00 para pedidos telefónicos.",
    contact_card_call_btn1: "Llamar Tel 1",
    contact_card_call_btn2: "Llamar Tel 2",
    contact_card_uber_badge: "A Domicilio",
    contact_card_uber_title: "Uber Eats Torremolinos",
    contact_card_uber_desc: "Recibe nuestros deliciosos platos calientes directamente en la puerta de tu casa.",
    contact_card_uber_btn: "Pedir en Uber Eats",
    contact_form_badge: "Envíanos un Mensaje",
    contact_form_title: "Formulario de Contacto & Encargos",
    contact_form_desc: "Rellena este formulario para consultar encargos especiales, catering o cualquier duda. También puedes enviarlo directamente por WhatsApp con un solo clic.",
    contact_form_name: "Nombre Completo",
    contact_form_name_ph: "Ej. Carlos Gómez",
    contact_form_phone: "Teléfono / WhatsApp",
    contact_form_phone_ph: "Ej. +34 600 000 000",
    contact_form_email: "Correo Electrónico (Opcional)",
    contact_form_email_ph: "Ej. carlos@example.com",
    contact_form_type: "Tipo de Consulta",
    contact_form_type_take: "Pedido para Llevar (Hoy)",
    contact_form_type_special: "Encargo Especial (Pastela grande, Cordero, etc.)",
    contact_form_type_catering: "Servicio de Catering / Eventos",
    contact_form_type_other: "Otra Consulta General",
    contact_form_message: "Tu Mensaje o Pedido",
    contact_form_message_ph: "Cuéntanos qué necesitas, para cuántas personas o qué fecha...",
    contact_form_btn_submit: "Enviar Mensaje",
    contact_form_btn_wsp: "Enviar por WhatsApp Directo",
    contact_form_success: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo lo antes posible.",
    contact_loc_badge: "Ubicación y Acceso",
    contact_loc_title: "Cómo Encontrarnos",
    contact_loc_address: "C. Río Aranda, 11, Local 2, 29620 Torremolinos, Málaga",
    contact_loc_train_title: "En Tren Cercanías",
    contact_loc_train_desc: "Línea C1 (Málaga - Fuengirola), estación Torremolinos o El Pinillo, a pocos minutos a pie.",
    contact_loc_bus_title: "En Autobús",
    contact_loc_bus_desc: "Líneas locales urbanas e interurbanas con paradas en las avenidas principales cercanas.",
    contact_loc_car_title: "En Coche y Parking",
    contact_loc_car_desc: "Fácil acceso desde la N-340 / A-7, con zonas de aparcamiento público en las inmediaciones.",
    contact_hours_status_open: "Abierto Ahora",
    contact_hours_status_closed: "Cerrado Ahora",
    contact_hours_detail: "Lunes a Domingo · 10:00 – 21:00 ininterrumpidamente",
    contact_faq_badge: "Preguntas Frecuentes",
    contact_faq_title: "Resolvemos tus Dudas",
    contact_faq_q1: "¿Toda la comida es 100% Halal?",
    contact_faq_a1: "Sí, absolutamente. Todas nuestras carnes de pollo, ternera y cordero cuentan con certificación Halal estricta y se preparan según los preceptos tradicionales.",
    contact_faq_q2: "¿Con cuánta antelación debo pedir los platos especiales?",
    contact_faq_a2: "Para platos especiales como Pastela Grande Familiar, Cordero al Horno entero, Rfissa casera o Seffa tradicional, recomendamos encargar con al menos 24 horas de antelación.",
    contact_faq_q3: "¿Hacéis reparto a domicilio?",
    contact_faq_a3: "Para entrega a domicilio directa operamos a través de la plataforma Uber Eats. También puedes hacer tu pedido por teléfono o WhatsApp y pasar a recogerlo en nuestro local sin esperas.",
    contact_faq_q4: "¿Tenéis opciones vegetarianas y veganas?",
    contact_faq_a4: "Sí, disponemos de una amplia variedad: Tajine de verduras, Cuscús de verduras, Pastela de verduras, Ensaladas marroquíes, Zaalouk de berenjena, Taktouka, Sopa Harira vegetal y cremas caseras.",
    contact_faq_q5: "¿Ofrecéis servicio de catering para bodas o cumpleaños?",
    contact_faq_a5: "Sí, preparamos menús completos para eventos, cumpleaños, bautizos y reuniones de empresa. Escríbenos por WhatsApp o a través del formulario para darte un presupuesto a medida.",
    res_badge: "Reserva tu Mesa",
    res_title: "Come en Nuestro Local",
    res_title_accent: "Auténtico Sabor Marroquí",
    res_desc: "Reserva tu mesa para comer en nuestro acogedor restaurante en Torremolinos. Disfruta de la mejor cocina marroquí casera recién salida de los fogones con confirmación instantánea por WhatsApp.",
    res_form_name: "Nombre Completo",
    res_form_name_ph: "Ej. Mohamed Alami",
    res_form_phone: "Teléfono / WhatsApp",
    res_form_phone_ph: "Ej. +34 600 000 000",
    res_form_guests: "Número de Comensales",
    res_form_guests_unit: "personas",
    res_form_date: "Fecha de la Reserva",
    res_form_time: "Hora Deseada",
    res_form_notes: "Notas o Platos a Reservar (Opcional)",
    res_form_notes_ph: "Ej. Mesa en terraza si es posible, o reservar con antelación un Tajine de Cordero...",
    res_btn_wsp: "Enviar Reserva por WhatsApp",
    res_btn_call: "Llamar para Reservar",
    res_feat_confirm: "Confirmación Rápida por WhatsApp",
    res_feat_halal: "Comida 100% Halal Certificada",
    res_feat_fresh: "Platos Caseros Recién Servidos",
    res_feat_hours: "Mesas disponibles 10:00 – 21:00",
  },
  en: {
    nav_home: "Home",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_about: "About",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    nav_call: "Call Now",
    hero_badge: "4.6★ · 337+ Reviews · Torremolinos",
    hero_title_1: "Authentic",
    hero_title_2: "Moroccan Food",
    hero_title_3: "in Torremolinos",
    hero_desc: "Traditional homemade food prepared fresh daily with the original spices and flavors of Morocco.",
    hero_hours: "Every day · 10:00 AM – 9:00 PM",
    hero_address: "C. Río Aranda, 11 · Malaga",
    hero_btn_menu: "View Menu",
    hero_btn_call: "Call",
    hero_btn_uber: "Uber Eats",
    hero_btn_map: "Map",
    hero_btn_reserve: "Book a Table",
    why_badge: "Why Choose Us",
    why_title: "The",
    why_title_accent: "Samira Experience",
    why_desc: "We bring the heart, spices and soul of traditional Moroccan cuisine to the Costa del Sol.",
    why_f1_title: "Family Recipes",
    why_f1_desc: "Traditional recipes handed down from generation to generation, preserving the essence of Moroccan flavor.",
    why_f2_title: "Fresh Ingredients",
    why_f2_desc: "Top quality ingredients and original spices imported directly from the markets of Morocco.",
    why_f3_title: "Family Business",
    why_f3_desc: "Closeness and warm hospitality. We care about making every customer feel at home.",
    why_f4_title: "Take Away Service",
    why_f4_desc: "Quick and convenient service. Place your order by phone or WhatsApp and pick it up freshly made.",
    why_stat_rating: "Google Rating",
    why_stat_reviews: "Customer Reviews",
    why_stat_tradition: "Years of Tradition",
    why_stat_specs: "Specialities",
    feat_badge: "Featured Dishes",
    feat_title: "Our Featured",
    feat_title_accent: "Specialities",
    feat_desc: "Traditional slow-cooked dishes, made with fresh ingredients and infused with authentic oriental aromas.",
    feat_btn: "View Full Menu",
    menu_badge: "Our Menu",
    menu_title: "Authentic Moroccan",
    menu_title_accent: "Cuisine",
    menu_desc: "From traditional slow-cooked tajines and fluffy couscous to handmade pastries. All dishes are prepared fresh to order.",
    menu_call_banner: "📞 Order now by Phone or WhatsApp",
    menu_disclaimer: "* Prices are indicative. Call to consult for large orders or catering services.",
    menu_btn_whatsapp: "Order via WhatsApp",
    menu_btn_uber: "Order on Uber Eats",
    about_badge: "Our Story",
    about_title: "The Taste of",
    about_title_accent: "Morocco",
    about_title_loc: "in Torremolinos",
    about_p1: "Our story began with a deep love for authentic Moroccan cuisine — the kind passed down from grandmother to mother, from mother to daughter. Samira, our founder, brought these cherished family recipes from her home in Morocco to the heart of Torremolinos.",
    about_p2: "Every dish we serve is a reflection of that love — slow-cooked tajines, fluffy couscous, crispy pastillas and rich harira soups, all crafted from scratch daily using the finest ingredients.",
    about_p3: "We believe food is more than just nourishment — it is a celebration of culture, family and connection. That is why we put our heart into every plate.",
    about_v1: "Traditional family recipes from Morocco",
    about_v2: "Fresh daily sourced ingredients",
    about_v3: "Authentic Moroccan spices",
    about_v4: "Homemade with love every day",
    about_v5: "Warm and welcoming family environment",
    about_v6: "Over 10 years of culinary passion",
    about_services: "Our Services",
    service_dine: "Dine In",
    service_take: "Take Away",
    service_uber: "Uber Eats",
    service_special: "Special Orders",
    service_catering: "Catering",
    service_family: "Family Menu",
    rev_badge: "Reviews",
    rev_title: "What",
    rev_title_accent: "Our Customers Say",
    rev_based_on: "Based on 337+ reviews",
    rev_verified: "Verified Review",
    rev_write: "Write a Review",
    gal_badge: "Gallery",
    gal_title: "Our",
    gal_title_accent: "Visual Story",
    gal_desc: "A photographic journey through our traditional Moroccan delicacies and the artisan cuisine of our venue.",
    order_badge: "Order Now",
    order_title: "How to Place",
    order_title_accent: "Your Order",
    order_desc: "Choose your preferred channel to enjoy our delicious homemade Moroccan recipes.",
    order_call_text: "Order by Phone",
    order_phone_add: "Additional phone",
    order_wsp_title: "WhatsApp",
    order_wsp_sub: "Message Order",
    order_wsp_desc: "Send us a message with your order, and we'll prepare it fresh for you to collect.",
    order_uber_title: "Uber Eats",
    order_uber_sub: "Home Delivery",
    order_uber_desc: "Order through Uber Eats to have our food delivered straight to your doorstep.",
    order_call_title: "Call Direct",
    order_call_sub: "Phone Order",
    order_call_desc: "Call us directly to reserve your meal or ask about our daily specials.",
    map_badge: "Location",
    map_title: "Where to",
    map_title_accent: "Find Us",
    map_desc: "We are located in Torremolinos, Malaga. Come collect your freshly made food or get in touch.",
    map_address_title: "Address",
    map_address_link: "Get directions",
    map_hours_title: "Opening Hours",
    map_hours_days: "Monday to Sunday",
    map_hours_open: "Open",
    map_hours_closed: "Closed",
    map_phones_title: "Phones",
    map_services_title: "Available services",
    map_btn_google: "Open in Google Maps",
    foot_desc: "Authentic traditional homemade Moroccan cuisine prepared fresh daily in Torremolinos, Malaga.",
    foot_col_links: "Quick Links",
    foot_col_contact: "Contact",
    foot_col_hours: "Opening Hours",
    foot_hours_open: "Open now",
    foot_hours_closed: "Closed now",
    foot_hours_desc: "We recommend ordering special dishes 24h in advance.",
    foot_rights: "All rights reserved.",
    foot_made_in: "in Torremolinos",
    breadcrumb_home: "Home",
    breadcrumb_about: "About",
    breadcrumb_contact: "Contact",
    about_hero_badge: "Tradition · Passion · Homemade Flavor",
    about_hero_title: "The Soul and Taste of Morocco",
    about_hero_subtitle: "From the rich culinary roots of Morocco to the Costa del Sol. A story of family love, pure spices, and centuries-old recipes.",
    about_stat_exp: "10+ Years",
    about_stat_exp_sub: "Family Tradition",
    about_stat_halal: "100% Halal",
    about_stat_halal_sub: "Certified Meats",
    about_stat_recipes: "35+ Dishes",
    about_stat_recipes_sub: "Crafted Fresh Daily",
    about_stat_love: "4.6★ Google",
    about_stat_love_sub: "+337 Real Reviews",
    about_founder_badge: "Our Founder",
    about_founder_title: "Samira's Passion",
    about_founder_p1: "Samira grew up surrounded by the inviting aromas of fresh cumin, pure saffron, and orange blossom water in Morocco. She learned from her grandmother and mother that genuine cooking takes no shortcuts: each tajine requires slow simmering, each couscous must be gently steamed with patience, and each pastilla demands meticulous dedication.",
    about_founder_p2: "When settling in Torremolinos, her dream was crystal clear: open the doors of a welcoming place where anyone could taste authentic Moroccan food, just as it is enjoyed in the warmest homes across North Africa.",
    about_founder_quote: "Cooking for our guests means welcoming them into our home with an open heart and the finest flavors.",
    about_pillars_badge: "Our Philosophy",
    about_pillars_title: "The 4 Pillars of Our Kitchen",
    about_pillar1_title: "Clay Pot Slow Cooking",
    about_pillar1_desc: "Our tajines are gently braised over a low flame in traditional earthenware pots, letting the meats turn extraordinarily tender while the spices blend to perfection.",
    about_pillar2_title: "Pure Spices & Fresh Produce",
    about_pillar2_desc: "We pick fresh market produce every morning and use authentic imported Moroccan spices: artisanal ras el hanout, cinnamon sticks, ginger, and top-tier saffron.",
    about_pillar3_title: "100% Certified Halal",
    about_pillar3_desc: "All our meats (chicken, beef, lamb) are strictly Halal certified, sourced exclusively from trusted and verified suppliers.",
    about_pillar4_title: "Moroccan Hospitality",
    about_pillar4_desc: "Warmth, generosity, and thoughtful hospitality are the cornerstone of Moroccan culture. We want every meal to bring sheer comfort and satisfaction.",
    about_timeline_badge: "Our Journey",
    about_timeline_title: "The Path of Samira",
    about_t1_year: "2014",
    about_t1_title: "The Dream Takes Shape",
    about_t1_desc: "Arriving in Spain with cherished family recipe notebooks and an ambition to share traditional Moroccan cuisine.",
    about_t2_year: "2018",
    about_t2_title: "Opening in Torremolinos",
    about_t2_desc: "Opening Samira Comida Para Llevar on C. Río Aranda 11, quickly establishing itself as a beloved local gem.",
    about_t3_year: "2022",
    about_t3_title: "Catering & Special Events",
    about_t3_desc: "Expanding services for family banquets, large gatherings, and catering across the Costa del Sol.",
    about_t4_year: "Today",
    about_t4_title: "A Culinary Landmark",
    about_t4_desc: "Over 330 verified 4.6-star reviews with a dedicated community of loyal guests returning every week.",
    about_catering_badge: "Events & Special Orders",
    about_catering_title: "We Bring the Feast to Your Table",
    about_catering_desc: "Planning a party, birthday, or family get-together? We prepare giant family pastillas, group couscous platters, whole roasted lamb, and Moroccan sweets by the kilo with 24 hours notice.",
    about_catering_cta: "Explore Event Menu",
    about_cta_title: "Ready to Taste Authentic Moroccan Cuisine?",
    about_cta_desc: "Order your freshly prepared meal for collection or place your custom order via WhatsApp today.",
    about_cta_btn_menu: "Explore Our Full Menu",
    about_cta_btn_contact: "Contact Us Direct",
    contact_hero_badge: "Direct & Caring Support",
    contact_hero_title: "Contact Us",
    contact_hero_subtitle: "Located in Torremolinos, Malaga. Call us for instant orders, message us on WhatsApp, or send a request for special orders and event catering.",
    contact_card_wsp_badge: "Fastest",
    contact_card_wsp_title: "Instant WhatsApp",
    contact_card_wsp_desc: "Order by message or get quick answers to all your questions straight from our team.",
    contact_card_wsp_btn: "Open WhatsApp",
    contact_card_call_badge: "Direct Line",
    contact_card_call_title: "Direct Phone Call",
    contact_card_call_desc: "We answer phone orders every day from 10:00 AM to 9:00 PM.",
    contact_card_call_btn1: "Call Phone 1",
    contact_card_call_btn2: "Call Phone 2",
    contact_card_uber_badge: "Delivery",
    contact_card_uber_title: "Uber Eats Torremolinos",
    contact_card_uber_desc: "Enjoy our delicious hot Moroccan dishes delivered right to your front door.",
    contact_card_uber_btn: "Order on Uber Eats",
    contact_form_badge: "Drop Us a Message",
    contact_form_title: "Contact & Order Inquiry Form",
    contact_form_desc: "Fill in this form to inquire about catering, custom dishes, or general questions. You can also send it directly via WhatsApp in one click.",
    contact_form_name: "Full Name",
    contact_form_name_ph: "e.g. John Smith",
    contact_form_phone: "Phone / WhatsApp",
    contact_form_phone_ph: "e.g. +34 600 000 000",
    contact_form_email: "Email (Optional)",
    contact_form_email_ph: "e.g. john@example.com",
    contact_form_type: "Inquiry Type",
    contact_form_type_take: "Take Away Order (Today)",
    contact_form_type_special: "Special Order (Large Pastilla, Roast Lamb, etc.)",
    contact_form_type_catering: "Catering / Private Event",
    contact_form_type_other: "General Question",
    contact_form_message: "Your Message or Order Details",
    contact_form_message_ph: "Tell us what you'd like, how many guests, or your desired date...",
    contact_form_btn_submit: "Send Message",
    contact_form_btn_wsp: "Send via Direct WhatsApp",
    contact_form_success: "Message sent successfully! We will get back to you shortly.",
    contact_loc_badge: "Location & Access",
    contact_loc_title: "How to Find Us",
    contact_loc_address: "C. Río Aranda, 11, Local 2, 29620 Torremolinos, Malaga",
    contact_loc_train_title: "By Cercanías Train",
    contact_loc_train_desc: "Line C1 (Malaga - Fuengirola), Torremolinos or El Pinillo station, just a few minutes walk away.",
    contact_loc_bus_title: "By City Bus",
    contact_loc_bus_desc: "Local and intercity bus routes stopping along nearby main avenues.",
    contact_loc_car_title: "By Car & Parking",
    contact_loc_car_desc: "Convenient access from N-340 / A-7 highway with public street parking nearby.",
    contact_hours_status_open: "Open Now",
    contact_hours_status_closed: "Closed Now",
    contact_hours_detail: "Monday to Sunday · 10:00 AM – 9:00 PM nonstop",
    contact_faq_badge: "Frequently Asked Questions",
    contact_faq_title: "Here to Help You",
    contact_faq_q1: "Is all your food 100% Halal?",
    contact_faq_a1: "Yes, absolutely. All our chicken, beef, and lamb meats are strictly certified Halal and prepared according to traditional guidelines.",
    contact_faq_q2: "How much advance notice is needed for special orders?",
    contact_faq_a2: "For large family pastillas, whole roasted lamb, homemade rfissa, or festive seffa, we recommend placing your order at least 24 hours ahead.",
    contact_faq_q3: "Do you offer home delivery?",
    contact_faq_a3: "For direct home delivery, we partner with Uber Eats. You can also order ahead by phone or WhatsApp and pick up your hot food with zero wait time.",
    contact_faq_q4: "Do you have vegetarian and vegan options?",
    contact_faq_a4: "Yes, we offer plenty: Vegetable Tajine, Vegetable Couscous, Vegetable Pastilla, fresh Moroccan salads, Zaalouk eggplant, Taktouka, and rich vegetable soups.",
    contact_faq_q5: "Do you cater for weddings or birthdays?",
    contact_faq_a5: "Yes, we provide tailored menus for birthday parties, family banquets, and corporate events. Contact us via WhatsApp or our form for a custom quote.",
    res_badge: "Table Reservation",
    res_title: "Dine In With Us",
    res_title_accent: "Authentic Moroccan Flavor",
    res_desc: "Reserve your table to dine at our cozy restaurant in Torremolinos. Enjoy hot, authentic homemade Moroccan cuisine fresh from our kitchen, confirmed instantly via WhatsApp.",
    res_form_name: "Full Name",
    res_form_name_ph: "e.g. John Smith",
    res_form_phone: "Phone / WhatsApp",
    res_form_phone_ph: "e.g. +34 600 000 000",
    res_form_guests: "Number of Guests",
    res_form_guests_unit: "people",
    res_form_date: "Reservation Date",
    res_form_time: "Desired Time",
    res_form_notes: "Special Requests or Dishes (Optional)",
    res_form_notes_ph: "e.g. Prefer terrace table if available, or pre-order a Lamb Tajine...",
    res_btn_wsp: "Send Reservation via WhatsApp",
    res_btn_call: "Call to Reserve",
    res_feat_confirm: "Instant WhatsApp Confirmation",
    res_feat_halal: "100% Certified Halal Food",
    res_feat_fresh: "Freshly Made Homemade Dishes",
    res_feat_hours: "Tables open 10:00 AM – 9:00 PM",
  },
  fr: {
    nav_home: "Accueil",
    nav_menu: "Carte",
    nav_gallery: "Galerie",
    nav_about: "Nous",
    nav_reviews: "Avis",
    nav_contact: "Contact",
    nav_call: "Appeler",
    hero_badge: "4.6★ · 337+ Avis · Torremolinos",
    hero_title_1: "Authentique",
    hero_title_2: "Cuisine Marocaine",
    hero_title_3: "à Torremolinos",
    hero_desc: "Cuisine maison traditionnelle préparée fraîche tous les jours avec les épices et les saveurs originales du Maroc.",
    hero_hours: "Tous les jours · 10:00 – 21:00",
    hero_address: "C. Río Aranda, 11 · Malaga",
    hero_btn_menu: "Voir la Carte",
    hero_btn_call: "Appeler",
    hero_btn_uber: "Uber Eats",
    hero_btn_map: "Carte",
    hero_btn_reserve: "Réserver une Table",
    why_badge: "Pourquoi Nous Choisir",
    why_title: "L'Expérience",
    why_title_accent: "Samira",
    why_desc: "Nous apportons le cœur, les épices et l'âme de la cuisine marocaine traditionnelle sur la Costa del Sol.",
    why_f1_title: "Recettes de Famille",
    why_f1_desc: "Recettes traditionnelles transmises de génération en génération, préservant l'essence des saveurs marocaines.",
    why_f2_title: "Ingrédients Frais",
    why_f2_desc: "Ingrédients de première qualité et épices originales importées directement des souks du Maroc.",
    why_f3_title: "Maison Familiale",
    why_f3_desc: "Proximité et hospitalité chaleureuse. Nous tenons à ce que chaque client se sente comme chez lui.",
    why_f4_title: "Plats À Emporter",
    why_f4_desc: "Service rapide et pratique. Passez commande par téléphone ou WhatsApp et récupérez-la bien chaude.",
    why_stat_rating: "Note Google",
    why_stat_reviews: "Avis Clients",
    why_stat_tradition: "Années de Tradition",
    why_stat_specs: "Spécialités",
    feat_badge: "Plats Phares",
    feat_title: "Spécialités",
    feat_title_accent: "Vedettes",
    feat_desc: "Plats traditionnels mijotés lentement, préparés avec des ingrédients frais et imprégnés d'arômes orientaux authentiques.",
    feat_btn: "Voir toute la Carte",
    menu_badge: "Notre Carte",
    menu_title: "Cuisine Marocaine",
    menu_title_accent: "Authentique",
    menu_desc: "Des tajines traditionnels mijotés et cuscús moelleux aux pâtisseries artisanales. Tous les plats sont préparés à la minute.",
    menu_call_banner: "📞 Commandez par Téléphone ou WhatsApp",
    menu_disclaimer: "* Les prix sont indicatifs. Appelez pour des commandes importantes ou services de traiteur.",
    menu_btn_whatsapp: "Commander via WhatsApp",
    menu_btn_uber: "Commander sur Uber Eats",
    about_badge: "Notre Histoire",
    about_title: "Le Goût du",
    about_title_accent: "Maroc",
    about_title_loc: "à Torremolinos",
    about_p1: "Notre histoire a commencé par un amour profond pour l'authentique cuisine marocaine — celle transmise de grand-mère à mère, de mère à fille. Samira, notre fondatrice, a apporté ces précieuses recettes familiales de sa maison au Maroc au cœur de Torremolinos.",
    about_p2: "Chaque plat que nous servons reflète cet amour — des tajines mijotés, du couscous moelleux, des pastillas croustillantes et de riches soupes harira, le tout préparé quotidiennement à partir de zéro avec les meilleurs ingrédients.",
    about_p3: "Nous croyons que la nourriture est plus qu'un simple aliment — c'est une célébration de culture, de famille et de partage. C'est pourquoi nous y mettons tout notre cœur.",
    about_v1: "Recettes de famille traditionnelles du Maroc",
    about_v2: "Ingrédients frais de provenance quotidienne",
    about_v3: "Épices marocaines authentiques",
    about_v4: "Fait maison avec amour chaque jour",
    about_v5: "Environnement familial chaleureux",
    about_v6: "Plus de 10 ans de passion culinaire",
    about_services: "Nos Services",
    service_dine: "Sur Place",
    service_take: "À Emporter",
    service_uber: "Uber Eats",
    service_special: "Commandes Spéciales",
    service_catering: "Service Traiteur",
    service_family: "Menu Familial",
    rev_badge: "Avis",
    rev_title: "Ce Que Disent",
    rev_title_accent: "Nos Clients",
    rev_based_on: "Basé sur 337+ avis",
    rev_verified: "Avis Vérifié",
    rev_write: "Rédiger un Avis",
    gal_badge: "Galerie",
    gal_title: "Notre",
    gal_title_accent: "Histoire Visuelle",
    gal_desc: "Un voyage photographique à travers nos délices marocains traditionnels et notre cuisine artisanale.",
    order_badge: "Commander",
    order_title: "Comment Passer",
    order_title_accent: "Commande",
    order_desc: "Choisissez votre canal préféré pour savourer nos délicieuses recettes marocaines maison.",
    order_call_text: "Commander par Téléphone",
    order_phone_add: "Téléphone additionnel",
    order_wsp_title: "WhatsApp",
    order_wsp_sub: "Commande par message",
    order_wsp_desc: "Envoyez-nous un message avec votre commande, et nous la préparerons fraîche pour vous.",
    order_uber_title: "Uber Eats",
    order_uber_sub: "Livraison à Domicile",
    order_uber_desc: "Commandez via Uber Eats pour faire livrer nos plats directement chez vous.",
    order_call_title: "Appeler Direct",
    order_call_sub: "Commande par téléphone",
    order_call_desc: "Appelez-nous directement pour réserver votre repas ou vous renseigner sur nos suggestions.",
    map_badge: "Emplacement",
    map_title: "Où Nous",
    map_title_accent: "Trouver",
    map_desc: "Nous sommes situés à Torremolinos, Malaga. Venez récupérer vos plats chauds ou contactez-nous.",
    map_address_title: "Adresse",
    map_address_link: "Itinéraire",
    map_hours_title: "Horaires",
    map_hours_days: "Lundi au Dimanche",
    map_hours_open: "Ouvert",
    map_hours_closed: "Fermé",
    map_phones_title: "Téléphones",
    map_services_title: "Services disponibles",
    map_btn_google: "Ouvrir sur Google Maps",
    foot_desc: "Authentique cuisine marocaine traditionnelle faite maison et préparée fraîche chaque jour à Torremolinos, Malaga.",
    foot_col_links: "Liens Rapides",
    foot_col_contact: "Contact",
    foot_col_hours: "Horaires d'ouverture",
    foot_hours_open: "Ouvert",
    foot_hours_closed: "Fermé actuellement",
    foot_hours_desc: "Nous recommandons de commander les plats spéciaux 24h à l'avance.",
    foot_rights: "Tous droits réservés.",
    foot_made_in: "à Torremolinos",
    breadcrumb_home: "Accueil",
    breadcrumb_about: "À Propos",
    breadcrumb_contact: "Contact",
    about_hero_badge: "Tradition · Passion · Goût Fait Maison",
    about_hero_title: "L'Âme et les Saveurs du Maroc",
    about_hero_subtitle: "Des racines culinaires du Maroc jusqu'à la Costa del Sol. Une belle histoire d'amour familial, d'épices pures et de recettes ancestrales.",
    about_stat_exp: "10+ Ans",
    about_stat_exp_sub: "De Passion Familiale",
    about_stat_halal: "100% Halal",
    about_stat_halal_sub: "Viandes Certifiées",
    about_stat_recipes: "35+ Plats",
    about_stat_recipes_sub: "Faits Frais Quotidiennement",
    about_stat_love: "4.6★ Google",
    about_stat_love_sub: "+337 Vrais Avis",
    about_founder_badge: "Notre Fondatrice",
    about_founder_title: "La Passion de Samira",
    about_founder_p1: "Samira a grandi au cœur des senteurs chaleureuses de cumin fraîchement moulu, de safran pur et de fleur d'oranger au Maroc. Elle a appris auprès de sa grand-mère et de sa mère que la grande cuisine n'admet aucun compromis : chaque tajine demande son temps de cuisson, chaque couscous doit être monté à la vapeur avec patience et chaque pastilla réclame une finesse d'orfèvre.",
    about_founder_p2: "En s'installant à Torremolinos, son ambition était limpide : ouvrir un lieu convivial où chacun peut savourer la véritable cuisine marocaine, comme préparée dans les plus chaleureux foyers d'Afrique du Nord.",
    about_founder_quote: "Cuisiner pour nos clients, c'est les recevoir chez nous avec le cœur grand ouvert et le meilleur de nos saveurs.",
    about_pillars_badge: "Notre Philosophie",
    about_pillars_title: "Les 4 Piliers de Notre Cuisine",
    about_pillar1_title: "Mijotage en Terre Cuite",
    about_pillar1_desc: "Nos tajines mijotent doucement dans des plats traditionnels en argile, garantissant des viandes tendres et des sauces concentrées en arômes.",
    about_pillar2_title: "Épices Pures & Produits Frais",
    about_pillar2_desc: "Nous sélectionnons nos légumes chaque matin au marché et importons nos épices d'origine : ras el hanout artisanal, cannelle, gingembre et safran de Taliouine.",
    about_pillar3_title: "100% Halal Certifié",
    about_pillar3_desc: "Toutes nos viandes (poulet, bœuf, agneau) sont strictement certifiées Halal auprès de boucheries sélectionnées avec rigueur.",
    about_pillar4_title: "Hospitalité Marocaine",
    about_pillar4_desc: "La générosité et l'accueil bienveillant sont au cœur de notre identité. Nous veillons à ce que chaque commande soit une source de pur réconfort.",
    about_timeline_badge: "Notre Parcours",
    about_timeline_title: "L'Aventure Samira",
    about_t1_year: "2014",
    about_t1_title: "La Naissance d'un Rêve",
    about_t1_desc: "Arrivée en Espagne avec les carnets de recettes familiales et l'envie de partager la culture gastronomique marocaine.",
    about_t2_year: "2018",
    about_t2_title: "Ouverture à Torremolinos",
    about_t2_desc: "Inauguration de Samira Comida Para Llevar au 11 rue Río Aranda, devenant rapidement une adresse incontournable.",
    about_t3_year: "2022",
    about_t3_title: "Service Traiteur & Banquets",
    about_t3_desc: "Extension de nos services aux grandes fêtes de famille, baptêmes et événements privés sur la Costa del Sol.",
    about_t4_year: "Aujourd'hui",
    about_t4_title: "Référence Incontournable",
    about_t4_desc: "Plus de 330 avis vérifiés notés 4.6 étoiles et une communauté fidèle de clients réguliers chaque semaine.",
    about_catering_badge: "Événements & Commandes Spéciales",
    about_catering_title: "La Fête Arrive sur Votre Table",
    about_catering_desc: "Vous organisez un anniversaire, un repas de famille ou une fête ? Nous préparons des pastillas familiales géantes, des couscous de groupe, des épaules d'agneau rôties et des gâteaux au kilo sur commande 24h à l'avance.",
    about_catering_cta: "Consulter la Carte Traiteur",
    about_cta_title: "Prêt à Goûter l'Authentique Cuisine Marocaine ?",
    about_cta_desc: "Commandez votre repas chaud à emporter ou réservez vos spécialités directement via WhatsApp.",
    about_cta_btn_menu: "Découvrir la Carte",
    about_cta_btn_contact: "Nous Contacter",
    contact_hero_badge: "À Votre Écoute 7j/7",
    contact_hero_title: "Contactez-Nous",
    contact_hero_subtitle: "Nous sommes situés à Torremolinos, Malaga. Appelez-nous pour une commande minute, écrivez-nous sur WhatsApp ou envoyez un message pour vos événements.",
    contact_card_wsp_badge: "Le Plus Rapide",
    contact_card_wsp_title: "WhatsApp Direct",
    contact_card_wsp_desc: "Passez votre commande par message ou posez vos questions en direct à notre équipe.",
    contact_card_wsp_btn: "Ouvrir WhatsApp",
    contact_card_call_badge: "Ligne Directe",
    contact_card_call_title: "Appel Téléphonique",
    contact_card_call_desc: "Nous répondons à vos appels tous les jours de 10h00 à 21h00 pour vos commandes à emporter.",
    contact_card_call_btn1: "Appeler Tél 1",
    contact_card_call_btn2: "Appeler Tél 2",
    contact_card_uber_badge: "Livraison",
    contact_card_uber_title: "Uber Eats Torremolinos",
    contact_card_uber_desc: "Faites livrer nos savoureux plats marocains bien chauds directement chez vous.",
    contact_card_uber_btn: "Commander sur Uber Eats",
    contact_form_badge: "Laissez-Nous un Message",
    contact_form_title: "Formulaire de Contact & Commandes",
    contact_form_desc: "Remplissez ce formulaire pour vos demandes de traiteur, commandes spéciales ou questions. Vous pouvez aussi l'envoyer directement par WhatsApp en un clic.",
    contact_form_name: "Nom & Prénom",
    contact_form_name_ph: "Ex. Karim Benali",
    contact_form_phone: "Téléphone / WhatsApp",
    contact_form_phone_ph: "Ex. +34 600 000 000",
    contact_form_email: "Email (Facultatif)",
    contact_form_email_ph: "Ex. karim@example.com",
    contact_form_type: "Type de Demande",
    contact_form_type_take: "Commande à Emporter (Aujourd'hui)",
    contact_form_type_special: "Commande Spéciale (Grande Pastilla, Agneau rôti...)",
    contact_form_type_catering: "Service Traiteur / Événement",
    contact_form_type_other: "Autre Question Générale",
    contact_form_message: "Votre Message ou Commande",
    contact_form_message_ph: "Indiquez vos besoins, le nombre de personnes ou la date souhaitée...",
    contact_form_btn_submit: "Envoyer le Message",
    contact_form_btn_wsp: "Envoyer Directement par WhatsApp",
    contact_form_success: "Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
    contact_loc_badge: "Accès & Localisation",
    contact_loc_title: "Comment Nous Trouver",
    contact_loc_address: "C. Río Aranda, 11, Local 2, 29620 Torremolinos, Malaga",
    contact_loc_train_title: "En Train Cercanías",
    contact_loc_train_desc: "Ligne C1 (Malaga - Fuengirola), gare de Torremolinos ou El Pinillo à quelques minutes à pied.",
    contact_loc_bus_title: "En Bus Urbain",
    contact_loc_bus_desc: "Lignes de bus locales avec arrêts sur les avenues principales à proximité.",
    contact_loc_car_title: "En Voiture & Stationnement",
    contact_loc_car_desc: "Accès facile depuis la N-340 / A-7 avec zones de parking public aux alentours.",
    contact_hours_status_open: "Ouvert Actuellement",
    contact_hours_status_closed: "Fermé Actuellement",
    contact_hours_detail: "Lundi au Dimanche · 10h00 – 21h00 en continu",
    contact_faq_badge: "Foire Aux Questions",
    contact_faq_title: "Vos Questions Fréquentes",
    contact_faq_q1: "Tous vos plats sont-ils 100% Halal ?",
    contact_faq_a1: "Oui, absolument. Toutes nos viandes de poulet, veau et agneau sont rigoureusement certifiées Halal et préparées selon les traditions.",
    contact_faq_q2: "Quel préavis pour les commandes spéciales ?",
    contact_faq_a2: "Pour les grandes pastillas familiales, agneaux entiers au four, rfissa ou seffa, nous conseillons de passer commande au moins 24 heures à l'avance.",
    contact_faq_q3: "Proposez-vous la livraison à domicile ?",
    contact_faq_a3: "Pour la livraison à domicile, nous passons par Uber Eats. Vous pouvez également commander par téléphone ou WhatsApp et venir récupérer votre repas prêt à emporter.",
    contact_faq_q4: "Avez-vous des plats végétariens ou vegans ?",
    contact_faq_a4: "Oui, un large choix s'offre à vous : Tajine de légumes, Couscous aux légumes, Pastilla aux légumes, salades marocaines, Zaalouk d'aubergine, Taktouka et soupes maison.",
    contact_faq_q5: "Proposez-vous un service traiteur pour mariages ou fêtes ?",
    contact_faq_a5: "Oui, nous concevons des menus complets pour vos réceptions, anniversaires et repas de famille. Contactez-nous par WhatsApp pour un devis personnalisé.",
    res_badge: "Réservation de Table",
    res_title: "Mangez sur Place",
    res_title_accent: "Saveurs Marocaines Authentiques",
    res_desc: "Réservez votre table pour déguster nos spécialités dans notre restaurant chaleureux à Torremolinos. Cuisine maison traditionnelle servie bien chaude, avec confirmation immédiate sur WhatsApp.",
    res_form_name: "Nom et Prénom",
    res_form_name_ph: "Ex. Karim Benali",
    res_form_phone: "Téléphone / WhatsApp",
    res_form_phone_ph: "Ex. +34 600 000 000",
    res_form_guests: "Nombre de Personnes",
    res_form_guests_unit: "personnes",
    res_form_date: "Date de Réservation",
    res_form_time: "Heure Souhaitée",
    res_form_notes: "Remarques ou Plats Souhaités (Facultatif)",
    res_form_notes_ph: "Ex. Table en terrasse si possible, ou précommander un Tajine d'agneau...",
    res_btn_wsp: "Envoyer la Réservation par WhatsApp",
    res_btn_call: "Appeler pour Réserver",
    res_feat_confirm: "Confirmation Rapide par WhatsApp",
    res_feat_halal: "Cuisine 100% Halal Certifiée",
    res_feat_fresh: "Plats Faits Maison Servis Chauds",
    res_feat_hours: "Tables disponibles 10h00 – 21h00",
  },
};

// Menu Items translation dictionary to translate dishes and descriptions dynamically
export const menuTranslations: Record<string, Record<string, { name: string; desc: string }>> = {
  es: {
    // Starters
    "taktouka marroqui": { name: "Taktouka Marroquí", desc: "Ensalada marroquí de pimientos verdes y rojos asados con tomates, ajo, aceite de oliva y especias." },
    "zaalouk (berenjena)": { name: "Zaalouk (Berenjena)", desc: "Berenjenas asadas y tomates cocinados a fuego lento con comino, ajo y hierbas frescas." },
    "berenjena frita": { name: "Berenjena Frita", desc: "Rodajas de berenjenas tiernas fritas y sazonadas con un toque ligero de especias." },
    "pimiento frito": { name: "Pimiento Frito", desc: "Pimientos verdes fritos en aceite de oliva y sazonados al punto de sal." },
    "berenjena rellena": { name: "Berenjena Rellena", desc: "Berenjena rellena al horno con carne picada de ternera especiada, queso y hierbas." },
    // Salads
    "ensalada marroqui": { name: "Ensalada Marroquí", desc: "Ensalada fresca de pepinos, tomates y cebollas picadas finamente con aceite y comino." },
    "ensalada mixta": { name: "Ensalada Mixta", desc: "Ensalada de lechuga, tomate, atún, huevo cocido, maíz dulce y aceitunas." },
    "ensalada de la casa": { name: "Ensalada De La Casa", desc: "Nuestra ensalada especial del chef con ingredientes selectos y aderezo especial de la casa." },
    "ensalada tropical": { name: "Ensalada Tropical", desc: "Una combinación fresca de piña, maíz, palitos de cangrejo y salsa rosa." },
    // Tajines
    "tajine verdura": { name: "Tajine de Verduras", desc: "Verduras variadas de temporada estofadas en una olla de barro con especias marroquíes." },
    "tajine pollo": { name: "Tajine de Pollo", desc: "Pollo jugoso guisado lentamente con limones encurtidos, aceitunas verdes y azafrán." },
    "tajine ternera": { name: "Tajine de Ternera", desc: "Carne de ternera cocinada lentamente con verduras frescas en una salsa aromática." },
    "tajine cordero": { name: "Tajine de Cordero", desc: "Tierno cordero guisado a fuego lento con ciruelas pasas, almendras tostadas y sésamo." },
    // Pinchitos
    "pinchitos pollo": { name: "Pinchitos de Pollo", desc: "Brochetas de pollo marinadas con comino, ajo, pimentón dulce y finas hierbas a la parrilla." },
    "pinchitos ternera": { name: "Pinchitos de Ternera", desc: "Brochetas de ternera tierna sazonadas con especias tradicionales marroquíes." },
    "pinchitos cordero": { name: "Pinchitos de Cordero", desc: "Jugosas brochetas de cordero a la parrilla con comino y cilantro fresco." },
    "pinchitos higado": { name: "Pinchitos de Hígado", desc: "Brochetas de hígado de cordero aliñado con especias marroquíes y hecho a la parrilla." },
    // Couscous
    "cuscus verdura": { name: "Cuscús de Verduras", desc: "Sémola de trigo al vapor servida con una gran variedad de verduras de temporada y garbanzos." },
    "cuscus pollo": { name: "Cuscús de Pollo", desc: "Cuscús tradicional servido con pollo, cebolla caramelizada, pasas y almendras (Tfaya)." },
    "cuscus ternera": { name: "Cuscús de Ternera", desc: "Cuscús clásico con carne de ternera tierna estofada y verduras de temporada." },
    "cuscus cordero": { name: "Cuscús de Cordero", desc: "Sémola fina con tierno cordero, verduras dulces tradicionales de la huerta marroquí." },
    // Pastillas
    "pastela de pollo": { name: "Pastela de Pollo", desc: "Pastel hojaldrado crujiente relleno de pollo desmenuzado, almendras tostadas, canela y azúcar glass." },
    "pastela de pescado": { name: "Pastela de Pescado", desc: "Pastel de masa filo relleno de pescados, calamares, gambas, fideos celofán y especias chermoula." },
    "pastela de verdura": { name: "Pastela de Verdura", desc: "Hojaldre tradicional marroquí relleno de verduras de temporada salteadas con hierbas aromáticas." },
    "pastela de pollo con verdura": { name: "Pastela de Pollo con Verduras", desc: "Hojaldre relleno de pechuga de pollo marinada combinada con ricas verduras de temporada." },
    "pastela de carne picada con verdura": { name: "Pastela de Carne Picada con Verduras", desc: "Pastilla de masa fina rellena de kefta (carne picada) sazonada y verduras picadas." },
    // R3ayef & Harcha
    "r3ayef (panuelos)": { name: "R3Ayef (Pañuelos)", desc: "Pan plano marroquí hojaldrado doblado en capas (Msemen) hecho a la plancha caliente." },
    "r3ayef relleno": { name: "R3Ayef Relleno", desc: "Msemen hojaldrado relleno de un sofrito especial de cebolla, pimientos y carne picada especiada." },
    "harcha": { name: "Harcha", desc: "Panecillo redondo marroquí de sémola de trigo con textura crujiente por fuera y blanda por dentro." },
    "harcha con oregano": { name: "Harcha con Orégano", desc: "Harcha tradicional de sémola aromatizada con hojas de orégano silvestre seco." },
    // Soups
    "harira": { name: "Sopa Harira", desc: "Tradicional sopa marroquí espesa de tomate, garbanzos, lentejas, ternera y cilantro fresco." },
    "sopa de pescado": { name: "Sopa de Pescado", desc: "Sabroso caldo de mariscos de la casa con trozos de pescado, calamares, gambas y ajo." },
    "bisara (crema de habas)": { name: "Bisara (Crema de Habas)", desc: "Crema de habas secas servida caliente con aceite de oliva, ajo, comino y pimentón." },
    "crema de verdura": { name: "Crema de Verduras", desc: "Puré suave y cremoso de verduras frescas de la huerta, sazonado al gusto." },
    // Legumbres
    "lentejas": { name: "Lentejas Marroquíes", desc: "Lentejas pardinas estofadas en salsa de tomate casera con comino, ajo y pimentón." },
    "alubias": { name: "Alubias Marroquíes", desc: "Alubias blancas cocinadas a fuego lento en salsa de tomate, ajo y pimentón dulce." },
    "garbanzos con carne (ker3in)": { name: "Garbanzos con Carne (Ker3in)", desc: "Especialidad tradicional de patas de ternera cocinadas con garbanzos y pasas dulces." },
    "callos con salsa (kelya)": { name: "Callos con Salsa (Kelya)", desc: "Guiso de callos de ternera en una salsa especiada marroquí muy sabrosa." },
    // Pescado
    "fritura de pescado": { name: "Fritura de Pescado", desc: "Variedad de pescado fresco seleccionado frito al momento, crujiente y caliente." },
    "tajine de pescado": { name: "Tajine de Pescado", desc: "Pescado guisado en tajine de barro con patatas, tomates, pimientos y adobo chermoula." },
    "pescado al horno (medio)": { name: "Pescado al Horno", desc: "Pescado fresco del día horneado con patatas, limón, hierbas y aceite de oliva." },
    // Otros
    "sardina a la marroqui": { name: "Sardina a la Marroquí", desc: "Sardinas rellenas con adobo chermoula (ajo, perejil, comino y limón) fritas o a la plancha." },
    "paella de marisco": { name: "Paella de Marisco", desc: "Fusión de arroz con surtido fresco de gambas, mejillones y calamares (mín. 2 personas)." },
    "sarten mix pescado con salsa": { name: "Sartén Mix Pescado con Salsa", desc: "Sartén caliente de pescado variado y mariscos cocinados en una salsa de tomate y ajo." },
    // Special Orders
    "sefa": { name: "Sefa", desc: "Cuscús fino o fideos de vermicelli dulces coronados con canela, azúcar y almendras molidas." },
    "rfisa (harcha o melwi)": { name: "Rfisa (Harcha o Melwi)", desc: "Plato tradicional de msemen troceado con pollo y lentejas en salsa de alholva y ras el hanout." },
    "medfona": { name: "Medfona", desc: "El pan tradicional bereber relleno al horno de carne picada aliñada, huevo duro y almendras." },
    "pastela grande familiar": { name: "Pastela Grande Familiar", desc: "Nuestra gran pastela familiar de pollo o marisco para banquetes de grupo y fiestas." },
    "cordero al horno": { name: "Cordero al Horno", desc: "Paletilla o pierna de cordero asada a fuego muy lento hasta quedar extremadamente tierna." },
    "pescado al horno (grande)": { name: "Pescado al Horno Grande", desc: "Gran pescado de roca horneado entero con patatas panaderas y condimento tradicional." },
    "dulces por kg": { name: "Dulces Árabes Por Kg", desc: "Surtido variado de 1kg de nuestra repostería artesanal marroquí de almendras y miel." },
    // Drinks
    "refrescos de lata": { name: "Refrescos de Lata", desc: "Refrescos en lata bien fríos: Coca-Cola, Fanta, Sprite, Nestea, Aquarius." },
    "agua pequena": { name: "Agua Pequeña", desc: "Botella individual de agua mineral, servida bien fría." },
    "agua grande": { name: "Agua Grande", desc: "Botella grande de agua mineral para compartir." },
    "hawai y poms 1l": { name: "Hawai y Poms 1L", desc: "Refrescos marroquíes originales de sabor tropical (Hawai) y manzana (Poms) de 1 litro." },
    "lban": { name: "Lban (Buttermilk)", desc: "Suero de leche fresco de sabor ligeramente agrio, ideal para acompañar el cuscús." },
    "te": { name: "Té Marroquí Tradicional", desc: "Té verde caliente con menta fresca recién hecho y servido en tetera tradicional marroquí." },
    "dulces arabes": { name: "Dulces Árabes", desc: "Surtido de pastas marroquíes artesanales elaboradas a base de almendras y miel." },
  },
  en: {
    // Starters
    "taktouka marroqui": { name: "Moroccan Taktouka", desc: "Moroccan salad of roasted bell peppers and tomatoes cooked with garlic and olive oil." },
    "zaalouk (berenjena)": { name: "Zaalouk (Eggplant)", desc: "Roasted eggplants and tomatoes slow-cooked with cumin, garlic and fresh herbs." },
    "berenjena frita": { name: "Fried Eggplant", desc: "Crispy fried eggplant slices seasoned with a light touch of local spices." },
    "pimiento frito": { name: "Fried Green Pepper", desc: "Green bell peppers pan-seared in clean olive oil and salted to perfection." },
    "berenjena rellena": { name: "Stuffed Eggplant", desc: "Savory baked eggplant stuffed with seasoned minced beef, cheese and herbs." },
    // Salads
    "ensalada marroqui": { name: "Moroccan Salad", desc: "Fresh salad of finely chopped cucumber, tomatoes and onions with olive oil and cumin." },
    "ensalada mixta": { name: "Mixed Salad", desc: "Fresh lettuce garden salad with tuna, boiled eggs, sweet corn and green olives." },
    "ensalada de la casa": { name: "House Salad", desc: "Our chef's special multi-layered salad made with fresh, handpicked local ingredients." },
    "ensalada tropical": { name: "Tropical Salad", desc: "A refreshing combination of sweet pineapple, corn, crab sticks and pink sauce." },
    // Tajines
    "tajine verdura": { name: "Vegetable Tajine", desc: "A variety of fresh seasonal vegetables slow-cooked in a clay pot with Moroccan spices." },
    "tajine pollo": { name: "Chicken Tajine", desc: "Succulent chicken slow-cooked with preserved lemons, green olives and saffron sauce." },
    "tajine ternera": { name: "Beef Tajine", desc: "Tender beef slow-cooked in a clay pot with seasonal garden vegetables." },
    "tajine cordero": { name: "Lamb Tajine", desc: "Tender lamb shoulder slow-cooked with sweet prunes, toasted almonds and sesame." },
    // Pinchitos
    "pinchitos pollo": { name: "Chicken Skewers", desc: "Grilled chicken skewers marinated in cumin, garlic, sweet paprika and fine herbs." },
    "pinchitos ternera": { name: "Beef Skewers", desc: "Tender beef cube skewers marinated in traditional Moroccan spices and grilled." },
    "pinchitos cordero": { name: "Lamb Skewers", desc: "Juicy skewered lamb cubes grilled over open flame with cumin and fresh coriander." },
    "pinchitos higado": { name: "Liver Skewers", desc: "Skewered lamb liver marinated in traditional Moroccan spices and charcoal-grilled." },
    // Couscous
    "cuscus verdura": { name: "Vegetable Couscous", desc: "Fluffy steamed wheat semolina served with a rich variety of seasonal vegetables and chickpeas." },
    "cuscus pollo": { name: "Chicken Couscous", desc: "Traditional couscous served with chicken, sweet caramelized onions, raisins and almonds (Tfaya)." },
    "cuscus ternera": { name: "Beef Couscous", desc: "Classic fluffy couscous with tender slow-cooked beef and seasonal vegetables." },
    "cuscus cordero": { name: "Lamb Couscous", desc: "Fine semolina grain topped with slow-braised lamb and sweet Moroccan vegetables." },
    // Pastillas
    "pastela de pollo": { name: "Chicken Pastilla", desc: "Crispy phyllo pastry pie stuffed with shredded chicken, sweet almonds, sugar and cinnamon." },
    "pastela de pescado": { name: "Seafood Pastilla", desc: "Phyllo pastry envelope stuffed with fish fillets, squid, prawns, vermicelli and chermoula." },
    "pastela de verdura": { name: "Vegetable Pastilla", desc: "Traditional Moroccan pastry pie filled with seasoned garden vegetables and herbs." },
    "pastela de pollo con verdura": { name: "Chicken & Veg Pastilla", desc: "Pastry filled with a delicious combination of marinated chicken breast and vegetables." },
    "pastela de carne picada con verdura": { name: "Minced Meat Pastilla", desc: "Savory pastry filled with spiced kefta (minced meat) and mixed vegetables." },
    // R3ayef & Harcha
    "r3ayef (panuelos)": { name: "R3Ayef (Msemen)", desc: "Traditional Moroccan square flaky flatbread (Msemen) cooked on a hot griddle." },
    "r3ayef relleno": { name: "Stuffed R3Ayef", desc: "Layered msemen flatbread stuffed with spiced onions, peppers and minced meat." },
    "harcha": { name: "Harcha Flatbread", desc: "Traditional Moroccan semolina pan-fried flatbread, crunchy on the outside." },
    "harcha con oregano": { name: "Harcha with Oregano", desc: "Traditional semolina flatbread infused with wild dried oregano leaves." },
    // Soups
    "harira": { name: "Harira Soup", desc: "Classic rich Moroccan tomato soup with chickpeas, lentils, beef and fresh coriander." },
    "sopa de pescado": { name: "Seafood Soup", desc: "Rich seafood broth made in-house with mixed fish, calamari, shrimp and garlic." },
    "bisara (crema de habas)": { name: "Bissara (Fava Bean Cream)", desc: "Creamy pureed dried fava beans served hot with olive oil, cumin and paprika." },
    "crema de verdura": { name: "Cream of Vegetable", desc: "Smooth pureed cream of mixed fresh garden vegetables seasoned with light herbs." },
    // Legumbres
    "lentejas": { name: "Moroccan Lentils", desc: "Brown lentils stewed in tomato sauce with garlic, cumin, paprika and olive oil." },
    "alubias": { name: "Moroccan White Beans", desc: "White beans slow-cooked in a rich sauce of tomato, garlic and sweet paprika." },
    "garbanzos con carne (ker3in)": { name: "Chickpeas with Meat (Ker3in)", desc: "Traditional Moroccan beef feet stewed slowly with chickpeas and sweet raisins." },
    "callos con salsa (kelya)": { name: "Moroccan Tripe Stew (Kelya)", desc: "Slow-cooked calf tripe stewed in a very rich, highly spiced aromatic sauce." },
    // Pescado
    "fritura de pescado": { name: "Fried Fish Platter", desc: "An assortment of fresh local fish deep-fried in hot olive oil, crispy and hot." },
    "tajine de pescado": { name: "Fish Tajine", desc: "Fresh fish steak slow-cooked in a clay tajine pot with potatoes, tomato and chermoula." },
    "pescado al horno (medio)": { name: "Baked Fish", desc: "Fresh baked fish of the day seasoned with fresh lemon, olive oil and parsley." },
    // Otros
    "sardina a la marroqui": { name: "Moroccan Sardines", desc: "Sardines stuffed with chermoula herb marinade, grilled or pan-fried." },
    "paella de marisco": { name: "Seafood Paella", desc: "Spanish-Moroccan fusion rice loaded with prawns, mussels and calamari (Min. 2 Pers)." },
    "sarten mix pescado con salsa": { name: "Seafood Mixed Skillet", desc: "Sizzling skillet of cod, calamari and prawns sautéed in garlic tomato sauce." },
    // Special Orders
    "sefa": { name: "Sefa", desc: "Sweet steamed vermicelli or fine couscous topped with cinnamon, sugar and toasted almonds." },
    "rfisa (harcha o melwi)": { name: "Rfissa (Harcha or Melwi)", desc: "Traditional dish of shredded flatbread with chicken and lentils in fenugreek sauce." },
    "medfona": { name: "Medfona (Berber Pizza)", desc: "Traditional baked bread stuffed with spiced minced beef, eggs, almonds and onions." },
    "pastela grande familiar": { name: "Large Family Pastilla", desc: "Gigantic chicken or seafood pastilla pie, ideal for group banquets and parties." },
    "cordero al horno": { name: "Baked Lamb", desc: "Whole lamb shoulder or leg roasted slowly until fall-apart tender and juicy." },
    "pescado al horno (grande)": { name: "Baked Fish (Large)", desc: "Large whole fish baked with pan potatoes, herbs and traditional Moroccan spices." },
    "dulces por kg": { name: "Arabian Sweets per Kg", desc: "One kilogram of assorted artisanal Moroccan almond and honey pastries." },
    // Drinks
    "refrescos de lata": { name: "Soft Drinks", desc: "Chilled canned sodas: Coca-Cola, Fanta, Sprite, Nestea, Aquarius." },
    "agua pequena": { name: "Mineral Water (Small)", desc: "Individual bottle of natural mineral water, served ice-cold." },
    "agua grande": { name: "Mineral Water (Large)", desc: "Large sharing bottle of natural mineral water for the table." },
    "hawai y poms 1l": { name: "Hawai & Poms 1L", desc: "Original Moroccan sodas in 1L bottle: tropical fruit (Hawai) or apple (Poms) flavor." },
    "lban": { name: "Lban (Buttermilk)", desc: "Cold buttermilk with a refreshing slightly sour taste, ideal with hot couscous." },
    "te": { name: "Traditional Mint Tea", desc: "Authentic hot gunpowder green tea brewed with fresh mint leaves and sugar." },
    "dulces arabes": { name: "Arabian Sweets", desc: "A selection of handmade Moroccan almond and honey-drenched cookies." },
  },
  fr: {
    // Starters
    "taktouka marroqui": { name: "Taktouka Marocaine", desc: "Salade marocaine de poivrons grillés et tomates mijotée à l'ail et à l'huile d'olive." },
    "zaalouk (berenjena)": { name: "Zaalouk (Aubergines)", desc: "Aubergines rôties et tomates mijotées lentement avec du cumin, de l'ail et des herbes." },
    "berenjena frita": { name: "Aubergines Frites", desc: "Rondelles d'aubergines frites croustillantes et assaisonnées d'un mélange d'épices léger." },
    "pimiento frito": { name: "Poivrons Frits", desc: "Poivrons verts doux frits à l'huile d'olive et salés à la perfection." },
    "berenjena rellena": { name: "Aubergine Farcie", desc: "Aubergine farcie au four avec de la viande hachée de bœuf épicée, du fromage et des herbes." },
    // Salads
    "ensalada marroqui": { name: "Salade Marocaine", desc: "Salade fraîche de concombres, tomates et oignons hachés à l'huile d'olive et au cumin." },
    "ensalada mixta": { name: "Salade Mixte", desc: "Salade de laitue, tomates, thon, œuf dur, maïs doux et olives vertes." },
    "ensalada de la casa": { name: "Salade de la Maison", desc: "Notre salade composée spéciale préparée avec des légumes locaux frais et vinaigrette maison." },
    "ensalada tropical": { name: "Salade Tropicale", desc: "Mélange frais d'ananas doux, maïs, bâtonnets de crabe et sauce rose." },
    // Tajines
    "tajine verdura": { name: "Tajine de Légumes", desc: "Légumes frais de saison mijotés à l'étouffée dans un plat en terre cuite." },
    "tajine pollo": { name: "Tajine de Poulet", desc: "Morceaux de poulet tendres mijotés aux citrons confits, olives vertes et safran." },
    "tajine ternera": { name: "Tajine de Veau", desc: "Viande de veau tendre mijotée avec des légumes frais dans un jus aromatique." },
    "tajine cordero": { name: "Tajine d'Agneau", desc: "Agneau fondant mijoté aux pruneaux doux, amandes grillées et graines de sésame." },
    // Pinchitos
    "pinchitos pollo": { name: "Brochettes de Poulet", desc: "Blancs de poulet marinés au cumin, à l'ail, au paprika et fines herbes cuits au gril." },
    "pinchitos ternera": { name: "Brochettes de Bœuf", desc: "Morceaux de bœuf tendres assaisonnés d'épices traditionnelles marocaines et grillés." },
    "pinchitos cordero": { name: "Brochettes d'Agneau", desc: "Juteuses brochettes d'agneau grillées à la flamme au cumin et coriandre fraîche." },
    "pinchitos higado": { name: "Brochettes de Foie d'Agneau", desc: "Foie d'agneau grillé mariné aux épices traditionnelles marocaines." },
    // Couscous
    "cuscus verdura": { name: "Couscous aux Légumes", desc: "Semoule de blé cuite à la vapeur servie avec un riche assortiment de légumes de saison." },
    "cuscus pollo": { name: "Couscous au Poulet", desc: "Couscous traditionnel au poulet accompagné d'oignons caramélisés et de raisins (Tfaya)." },
    "cuscus ternera": { name: "Couscous au Bœuf", desc: "Couscous marocain avec viande de bœuf tendre mijotée et légumes de saison." },
    "cuscus cordero": { name: "Couscous à l'Agneau", desc: "Semoule fine surmontée d'agneau tendre braisé et de sept légumes doux." },
    // Pastillas
    "pastela de pollo": { name: "Pastilla au Poulet", desc: "Feuilleté traditionnel marocain farci de poulet émietté, amandes, cannelle et sucre glace." },
    "pastela de pescado": { name: "Pastilla de Poisson", desc: "Pastilla croustillante farcie de calmars, crevettes, poisson blanc, vermicelles et chermoula." },
    "pastela de verdura": { name: "Pastilla aux Légumes", desc: "Feuilleté de pâte filo garni de légumes du potager sautés aux herbes aromatiques." },
    "pastela de pollo con verdura": { name: "Pastilla Poulet & Légumes", desc: "Feuilleté garni d'un mélange de blanc de poulet mariné et de légumes cuits." },
    "pastela de carne picada con verdura": { name: "Pastilla Viande Hachée", desc: "Pastilla de pâte fine farcie à la viande hachée (kefta) épicée et légumes." },
    // R3ayef & Harcha
    "r3ayef (panuelos)": { name: "R3Ayef (Msemen)", desc: "Crêpe feuilletée marocaine traditionnelle de forme carrée cuite sur plaque chaude." },
    "r3ayef relleno": { name: "Msemen Farci", desc: "Msemen feuilleté farci d'un oignon, poivrons et viande hachée épicée." },
    "harcha": { name: "Harcha Galette", desc: "Galette de semoule de blé marocaine cuite à la poêle, croustillante à souhait." },
    "harcha con oregano": { name: "Harcha à l'Origan", desc: "Galette de semoule de blé traditionnelle parfumée aux feuilles d'origan séchées." },
    // Soups
    "harira": { name: "Soupe Harira", desc: "Traditionnelle soupe marocaine veloutée aux tomates, pois chiches, lentilles, bœuf et coriandre." },
    "sopa de pescado": { name: "Soupe de Poisson", desc: "Caldo de poisson et fruits de mer maison avec calamars, crevettes et ail." },
    "bisara (crema de habas)": { name: "Bissara (Purée de Fèves)", desc: "Crémeuse purée de fèves sèches servie chaude avec huile d'olive, cumin et paprika." },
    "crema de verdura": { name: "Velouté de Légumes", desc: "Puré onctueux de légumes frais de saison, assaisonné aux herbes légères." },
    // Legumbres
    "lentejas": { name: "Lentilles au Cumin", desc: "Lentilles mijotées dans une sauce tomate avec ail, comino et piment doux marocain." },
    "alubias": { name: "Haricots Blancs", desc: "Haricots blancs mijotés dans une riche sauce à la tomate, ail et paprika doux." },
    "garbanzos con carne (ker3in)": { name: "Pieds de Veau aux Pois Chiches", desc: "Spécialité marocaine traditionnelle mijotée de pieds de veau, pois chiches et raisins secs." },
    "callos con salsa (kelya)": { name: "Tripes en Sauce (Kelya)", desc: "Ragoût traditionnel de tripes de veau mijoté dans une sauce marocaine épicée." },
    // Pescado
    "fritura de pescado": { name: "Friture de Poissons", desc: "Assortiment de poissons frais frits à la minute, croustillants et chauds." },
    "tajine de pescado": { name: "Tajine de Poisson", desc: "Steak de poisson mijoté en tajine de terre avec pommes de terre, poivrons et chermoula." },
    "pescado al horno (medio)": { name: "Poisson au Four", desc: "Poisson frais du jour cuit au four avec pommes de terre, citron, herbes et huile d'olive." },
    // Otros
    "sardina a la marroqui": { name: "Sardines à la Marocaine", desc: "Sardines farcies à la marinade d'herbes chermoula, grillées ou poêlées." },
    "paella de marisco": { name: "Paella aux Fruits de Mer", desc: "Paella espagnole-marocaine de riz safrané avec crevettes, moules et calamars (Min. 2 Pers)." },
    "sarten mix pescado con salsa": { name: "Poêlée de la Mer en Sauce", desc: "Poêlée chaude de poissons variés et crevettes cuite dans une sauce tomate à l'ail." },
    // Special Orders
    "sefa": { name: "Seffa", desc: "Vermicelle de cheveux d'ange ou semoule fine sucrée saupoudrée de cannelle et d'amandes." },
    "rfisa (harcha o melwi)": { name: "Rfissa (Harcha ou Melwi)", desc: "Msemen émietté arrosé d'un bouillon de poulet, lentilles composé au fenugrec." },
    "medfona": { name: "Madfouna (Pain Berbère)", desc: "Pain traditionnel farci au four de viande hachée assaisonnée, œufs durs et amandes." },
    "pastela grande familiar": { name: "Grande Pastilla Familiale", desc: "Grande pastilla au poulet ou aux fruits de mer pour banquets de famille et fêtes." },
    "cordero al horno": { name: "Agneau au Four", desc: "Épaule ou gigot d'agneau rôti lentement jusqu'à ce que la viande soit ultra fondante." },
    "pescado al horno (grande)": { name: "Grand Poisson au Four", desc: "Grand poisson entier cuit au four sur lit de pommes de terre de saison." },
    "dulces por kg": { name: "Pâtisseries au Kilo", desc: "Assortiment d'un kilo de nos gâteaux marocains artisanaux aux amandes et miel." },
    // Drinks
    "refrescos de lata": { name: "Boissons en Canette", desc: "Canettes fraîches de Coca-Cola, Fanta, Sprite, Nestea, Aquarius." },
    "agua pequena": { name: "Eau Minérale (Petite)", desc: "Bouteille individuelle d'eau minérale plate servie très fraîche." },
    "agua grande": { name: "Eau Minérale (Grande)", desc: "Grande bouteille d'eau minérale pour partager à table." },
    "hawai y poms 1l": { name: "Hawai & Poms 1L", desc: "Boissons gazeuses marocaines de 1L au goût fruits tropicaux (Hawai) ou pomme (Poms)." },
    "lban": { name: "Lben", desc: "Lait fermenté traditionnel au goût légèrement acide, parfait avec le couscous." },
    "te": { name: "Thé à la Menthe Traditionnel", desc: "Thé vert chaud infusé de menthe fraîche et de sucre en théière marocaine." },
    "dulces arabes": { name: "Pâtisseries Orientales", desc: "Sélection de gâteaux marocains faits main aux amandes, miel et sésame." },
  }
};

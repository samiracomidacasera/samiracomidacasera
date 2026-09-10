export type Review = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  language: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    name: "María García",
    avatar: "M",
    rating: 5,
    date: "Hace 2 semanas",
    text: "¡Absolutamente increíble! El tajine de pollo es de los mejores que he probado fuera de Marruecos. La comida es muy auténtica, generosa y a un precio muy justo. El personal es encantador. Repetiré sin duda.",
    language: "es",
  },
  {
    id: "2",
    name: "James W.",
    avatar: "J",
    rating: 5,
    date: "1 month ago",
    text: "Hidden gem in Torremolinos! The lamb tajine was absolutely divine — perfectly spiced, incredibly tender. The couscous royal is a must-order. Authentic flavors that transport you straight to Marrakech.",
    language: "en",
  },
  {
    id: "3",
    name: "Fatima El Mouadden",
    avatar: "F",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "La meilleure cuisine marocaine de toute la Costa del Sol! Les saveurs sont exactement comme chez nous. Le harira est parfait, le couscous est délicieux. Une vraie pépite pour les Marocains qui ont la nostalgie du pays.",
    language: "fr",
  },
  {
    id: "4",
    name: "Carlos Martínez",
    avatar: "C",
    rating: 5,
    date: "Hace 1 mes",
    text: "Llevamos años siendo clientes habituales. La pastilla es una obra de arte y el couscous del viernes es impresionante. Comida casera marroquí de la mejor calidad. Muy recomendable para llevar también.",
    language: "es",
  },
  {
    id: "5",
    name: "Ahmed B.",
    avatar: "A",
    rating: 4,
    date: "2 weeks ago",
    text: "Excellent restaurant! The rfissa and the mixed grill are outstanding. Very authentic flavors, reminds me of home cooking. Fast service for takeaway orders. Will definitely come back with family.",
    language: "en",
  },
];

export const galleryImages = [
  {
    src: "/dish-chicken-tajine.webp",
    alt: "Tajine de Pollo con Limón y Aceitunas",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/dish-couscous.webp",
    alt: "Cuscús Tradicional Marroquí con Verduras",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/dish-harira.webp",
    alt: "Sopa Harira Casera Tradicional",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/dish-pastilla.webp",
    alt: "Pastilla de Pollo y Almendras Dulce-Salada",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/gallery-tea.webp",
    alt: "Té Verde Marroquí con Menta Fresca",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/dish-lamb-tajine.webp",
    alt: "Tajine de Cordero con Ciruelas y Almendras",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/dish-skewers.webp",
    alt: "Pinchos Morunos a la Parrilla Kefta",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-salad.webp",
    alt: "Ensaladas Variadas de Zanahoria y Zaalouk",
    span: "col-span-1 row-span-1",
  },
];

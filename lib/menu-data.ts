export type MenuItem = {
  name: string;
  description: string;
  price?: string;
  tag?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  nameEs: string;
  emoji: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "starters",
    name: "Moroccan Starters",
    nameEs: "Entrantes Marroquíes",
    emoji: "🫙",
    items: [
      {
        name: "Taktouka Marroqui",
        description: "Roasted bell peppers, tomatoes, garlic and olive oil slow-cooked with Moroccan spices",
        price: "7.00€ / 10.00€",
        tag: "Popular",
        image: "/dishes/taktouka.jpg",
      },
      {
        name: "Zaalouk (Berenjena)",
        description: "Roasted eggplant and tomatoes seasoned with cumin, garlic and fresh herbs",
        price: "7.00€ / 10.00€",
        tag: "Must Try",
        image: "/dishes/zaalouk.jpg",
      },
      {
        name: "Berenjena Frita",
        description: "Crispy fried eggplant slices seasoned with a light touch of spices",
        price: "7.00€ / 10.00€",
        image: "/dishes/berenjena-frita.jpg",
      },
      {
        name: "Pimiento Frito",
        description: "Pan-seared green peppers in olive oil, salted to perfection",
        price: "7.00€ / 10.00€",
        image: "/dishes/pimiento-frito.jpg",
      },
      {
        name: "Berenjena Rellena",
        description: "Stuffed savory eggplant with minced meat, cheese and herbs",
        price: "7.00€ (1Ud) / 12.00€ (2Ud)",
        image: "/dishes/berenjena-rellena.jpg",
      },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    nameEs: "Ensaladas",
    emoji: "🥗",
    items: [
      {
        name: "Ensalada Marroqui",
        description: "Finely diced cucumbers, tomatoes and onions dressed with olive oil and cumin",
        price: "7.00€",
        image: "/dishes/ensalada-marroqui.jpg",
      },
      {
        name: "Ensalada Mixta",
        description: "Mixed garden greens with tuna, boiled eggs, sweet corn and olives",
        price: "10.00€",
        image: "/dishes/ensalada-mixta.jpg",
      },
      {
        name: "Ensalada De La Casa",
        description: "Samira's special layered salad with local ingredients and chef's dressing",
        price: "12.00€",
        tag: "Chef's Favourite",
        image: "/dishes/ensalada-casa.jpg",
      },
      {
        name: "Ensalada Tropical",
        description: "Refreshing salad with pineapple, corn, crab sticks and creamy dressing",
        price: "12.00€",
        image: "/dishes/ensalada-tropical.jpg",
      },
    ],
  },
  {
    id: "tajines",
    name: "Tajines",
    nameEs: "Tajine",
    emoji: "🫕",
    items: [
      {
        name: "Tajine Verdura",
        description: "Slow-cooked seasonal vegetables with Moroccan spices in a clay pot",
        price: "12.00€",
        tag: "Vegetarian",
        image: "/dishes/tajine-verdura.jpg",
      },
      {
        name: "Tajine Pollo",
        description: "Slow-cooked chicken with preserved lemons, green olives and saffron sauce",
        price: "15.00€",
        tag: "Best Seller",
        image: "/dishes/tajine-pollo.webp",
      },
      {
        name: "Tajine Ternera",
        description: "Tender beef stewed slowly with seasonal vegetables and aromatic spices",
        price: "15.00€",
        image: "/dishes/tajine-ternera.webp",
      },
      {
        name: "Tajine Cordero",
        description: "Slow-cooked lamb shoulder with sweet prunes, toasted almonds and sesame seeds",
        price: "17.00€",
        tag: "Chef's Favourite",
        image: "/dishes/tajine-cordero.webp",
      },
    ],
  },
  {
    id: "pinchitos",
    name: "Moroccan Skewers",
    nameEs: "Pinchitos Morunos",
    emoji: "🍢",
    items: [
      {
        name: "Pinchitos Pollo",
        description: "Skewered chicken cubes marinated in garlic, cumin and sweet paprika",
        price: "5.50€ / Ud",
        tag: "Popular",
        image: "/dishes/pinchitos-pollo.webp",
      },
      {
        name: "Pinchitos Ternera",
        description: "Skewered tender beef cubes seasoned with traditional Moroccan spices",
        price: "7.00€ / Ud",
        image: "/dishes/pinchitos-ternera.webp",
      },
      {
        name: "Pinchitos Cordero",
        description: "Skewered lamb cubes grilled over open flame with cumin and coriander",
        price: "7.00€ / Ud",
        tag: "Must Try",
        image: "/dishes/pinchitos-cordero.webp",
      },
      {
        name: "Pinchitos Higado",
        description: "Grilled lamb liver skewers seasoned with cumin and garlic",
        price: "7.00€ / Ud",
        image: "/dishes/pinchitos-higado.jpg",
      },
    ],
  },
  {
    id: "couscous",
    name: "Couscous",
    nameEs: "Cuscús",
    emoji: "🍚",
    items: [
      {
        name: "Cuscus Verdura",
        description: "Fluffy steamed semolina served with a rich variety of seasonal vegetables",
        price: "13.00€",
        tag: "Traditional",
        image: "/dishes/cuscus-verdura.webp",
      },
      {
        name: "Cuscus Pollo",
        description: "Traditional couscous with chicken and sweet caramelized onions and raisins",
        price: "15.00€",
        tag: "Best Seller",
        image: "/dishes/cuscus-pollo.webp",
      },
      {
        name: "Cuscus Ternera",
        description: "Couscous topped with tender slow-cooked beef and seasonal vegetables",
        price: "15.00€",
        image: "/dishes/cuscus-ternera.webp",
      },
      {
        name: "Cuscus Cordero",
        description: "Luxury couscous with slow-cooked tender lamb and seven sweet vegetables",
        price: "17.00€",
        tag: "Signature",
        image: "/dishes/cuscus-cordero.webp",
      },
    ],
  },
  {
    id: "pastelas",
    name: "Pastillas",
    nameEs: "Salados (Pastelas)",
    emoji: "🥧",
    items: [
      {
        name: "Pastela De Pollo",
        description: "Sweet and savory chicken pastry wrapped in thin warqa sheets with almonds, cinnamon and sugar",
        price: "10.00€ - 25.00€",
        tag: "Best Seller",
        image: "/dishes/pastela-pollo.webp",
      },
      {
        name: "Pastela De Pescado",
        description: "Savory seafood pie with white fish, calamari, shrimp, vermicelli and chermoula spices",
        price: "10.00€ - 25.00€",
        tag: "On Order",
        image: "/dishes/pastela-pescado.webp",
      },
      {
        name: "Pastela De Verdura",
        description: "Moroccan phyllo pastry filled with seasoned vegetables and herbs",
        price: "10.00€ - 25.00€",
        image: "/dishes/pastela-verdura.jpg",
      },
      {
        name: "Pastela De Pollo Con Verdura",
        description: "Phyllo pastry stuffed with a mix of spiced chicken and garden vegetables",
        price: "10.00€ - 25.00€",
        image: "/dishes/pastela-pollo-verdura.jpg",
      },
      {
        name: "Pastela De Carne Picada Con Verdura",
        description: "Warqa pastry filled with spiced minced meat (kefta) and seasoned vegetables",
        price: "10.00€ - 25.00€",
        image: "/dishes/pastela-carne.webp",
      },
    ],
  },
  {
    id: "r3ayef",
    name: "Msemen & Harcha",
    nameEs: "R3Ayef & Harcha",
    emoji: "🫓",
    items: [
      {
        name: "R3Ayef (Panuelos)",
        description: "Traditional Moroccan square-folded flaky pancakes, cooked on a griddle",
        price: "2.50€",
        image: "/dishes/r3ayef-panuelos.webp",
      },
      {
        name: "R3Ayef Relleno",
        description: "Flaky msemen stuffed with spiced onions, peppers and minced meat",
        price: "5.00€",
        tag: "Popular",
        image: "/dishes/r3ayef-relleno.jpg",
      },
      {
        name: "Harcha",
        description: "Traditional Moroccan pan-fried semolina flatbread with a buttery texture",
        price: "4.00€",
        image: "/dishes/harcha.webp",
      },
      {
        name: "Harcha con oregano",
        description: "Moroccan semolina flatbread infused with wild dried oregano leaves",
        price: "4.50€",
        image: "/dishes/harcha-oregano.jpg",
      },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    nameEs: "Sopas",
    emoji: "🥣",
    items: [
      {
        name: "Harira",
        description: "Classic rich Moroccan tomato soup with chickpeas, lentils, meat and fresh cilantro",
        price: "6.00€",
        tag: "Traditional",
        image: "/dishes/harira.webp",
      },
      {
        name: "Sopa De Pescado",
        description: "Moroccan-style seafood broth with mixed fish, calamari, garlic and spices",
        price: "9.00€",
        image: "/dishes/sopa-pescado.jpg",
      },
      {
        name: "Bisara (Crema De Habas)",
        description: "Creamy pureed dried fava beans served hot with cumin, paprika and olive oil",
        price: "9.00€",
        tag: "Must Try",
        image: "/dishes/bisara.jpg",
      },
      {
        name: "Crema De Verdura",
        description: "Smooth cream of mixed fresh garden vegetables seasoned with light herbs",
        price: "7.00€",
        image: "/dishes/crema-verdura.jpg",
      },
    ],
  },
  {
    id: "legumbres",
    name: "Moroccan Stews",
    nameEs: "Legumbres (Por Encargo)",
    emoji: "🍲",
    items: [
      {
        name: "Lentejas",
        description: "Brown lentils simmered in a spiced tomato sauce with garlic and cumin",
        price: "10.00€",
        image: "/dishes/lentejas.jpg",
      },
      {
        name: "Alubias",
        description: "White beans slow-cooked in olive oil, garlic, tomato and sweet paprika sauce",
        price: "10.00€",
        image: "/dishes/alubias.jpg",
      },
      {
        name: "Garbanzos Con Carne (Ker3In)",
        description: "Moroccan calf feet stewed slowly with chickpeas and sweet raisins",
        price: "20.00€",
        tag: "Traditional",
        image: "/dishes/garbanzos-carne.jpg",
      },
      {
        name: "Callos Con Salsa (Kelya)",
        description: "Moroccan tripe stew in a rich, spicy herbal sauce",
        price: "20.00€",
        image: "/dishes/callos-kelya.jpg",
      },
    ],
  },
  {
    id: "pescado",
    name: "Fish Specialties",
    nameEs: "Pescado (Por Encargo)",
    emoji: "🐟",
    items: [
      {
        name: "Fritura De Pescado",
        description: "Assorted fresh local fish deep-fried in clean olive oil, crispy and hot",
        price: "25.00€",
        tag: "Popular",
        image: "/dishes/fritura-pescado.jpg",
      },
      {
        name: "Tajine De Pescado",
        description: "Fresh fish steak stewed in a clay tajine pot with potatoes, peppers and chermoula",
        price: "25.00€",
        image: "/dishes/tajine-pescado.jpg",
      },
      {
        name: "Pescado Al Horno (Medio)",
        description: "Baked fish of the day seasoned with lemon, olive oil and fresh parsley",
        price: "20.00€ / 25.00€ / 30.00€",
        image: "/dishes/pescado-horno-medio.jpg",
      },
    ],
  },
  {
    id: "otros",
    name: "Other Dishes",
    nameEs: "Otros Platos",
    emoji: "🍽️",
    items: [
      {
        name: "Sardina A La Marroqui",
        description: "Sardines stuffed with chermoula herb marinade and grilled or pan-fried",
        price: "15.00€ / 20.00€ / 25.00€",
        image: "/dishes/sardina-marroqui.jpg",
      },
      {
        name: "Paella De Marisco",
        description: "Spanish-Moroccan fusion seafood paella with shrimp, mussels and calamari (Min. 2 Pers)",
        price: "30.00€",
        tag: "Must Try",
        image: "/dishes/paella-marisco.jpg",
      },
      {
        name: "Sarten Mix Pescado Con Salsa",
        description: "Hot skillet mix of cod, calamari and shrimp cooked in tomato sauce and garlic",
        price: "20.00€ / 25.00€",
        image: "/dishes/sarten-mix-pescado.jpg",
      },
    ],
  },
  {
    id: "special-orders",
    name: "Special Orders",
    nameEs: "Platos Por Encargo",
    emoji: "⭐",
    items: [
      {
        name: "Sefa",
        description: "Sweet and savory vermicelli topped with cinnamon, toasted almonds and powdered sugar",
        price: "Desde 30.00€",
        tag: "Special",
        image: "/dishes/sefa.webp",
      },
      {
        name: "Rfisa (Harcha O Melwi)",
        description: "Shredded flatbread soaked in a rich chicken and lentil broth spiced with fenugreek",
        price: "Desde 40.00€",
        tag: "Traditional",
        image: "/dishes/rfisa.webp",
      },
      {
        name: "Medfona",
        description: "Stuffed Berber bread filled with spiced beef, eggs, almonds and onions",
        price: "Desde 45.00€",
        tag: "Special",
        image: "/dishes/medfona.jpg",
      },
      {
        name: "Pastela Grande Familiar",
        description: "Gigantic chicken or seafood pastilla, ideal for family banquets and events",
        price: "Desde 120.00€",
        tag: "Celebration",
        image: "/dishes/pastela-familiar.webp",
      },
      {
        name: "Cordero Al Horno",
        description: "Whole lamb shoulder or leg roasted slowly until the meat falls off the bone",
        price: "Desde 80.00€",
        tag: "Groups",
        image: "/dishes/cordero-horno.webp",
      },
      {
        name: "Pescado Al Horno (Grande)",
        description: "Large whole fish baked with potatoes, herbs and spices for group celebrations",
        price: "Desde 60.00€",
        tag: "Groups",
        image: "/dishes/pescado-horno-grande.jpg",
      },
      {
        name: "Dulces Por Kg",
        description: "One kilogram of assorted artisanal Moroccan almond and honey pastries",
        price: "Desde 45.00€",
        tag: "Events",
        image: "/dishes/dulces-kg.jpg",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    nameEs: "Bebidas",
    emoji: "🥤",
    items: [
      {
        name: "Refrescos de lata",
        description: "Coca-Cola, Fanta, Sprite, Nestea or Aquarius canned sodas",
        price: "2.50€",
        image: "/dishes/refrescos-lata.jpg",
      },
      {
        name: "Agua pequena",
        description: "Small bottle of mineral water, served chilled",
        price: "2.00€",
        image: "/dishes/agua-mineral.jpg",
      },
      {
        name: "Agua grande",
        description: "Large bottle of mineral water for sharing",
        price: "4.00€",
        image: "/dishes/agua-mineral.jpg",
      },
      {
        name: "Hawai y Poms 1L",
        description: "Moroccan tropical soda (Hawai) and apple soda (Poms) in 1L sharing bottle",
        price: "5.50€",
        tag: "Must Try",
        image: "/dishes/hawai-poms.jpg",
      },
      {
        name: "Lban",
        description: "Traditional Moroccan refreshing cold buttermilk, ideal to pair with Couscous",
        price: "3.50€",
        image: "/dishes/lban.jpg",
      },
      {
        name: "Te",
        description: "Authentic Moroccan Mint Tea ceremony served in traditional teapots",
        price: "5.00€ / 10.00€ / 15.00€ / 25.00€",
        tag: "Must Try",
        image: "/dishes/te-marroqui.webp",
      },
      {
        name: "Dulces arabes",
        description: "Artisanal Moroccan sweets made with honey, sesame and almonds (Kaab el Ghazal, Chebakia, Briouat)",
        price: "Desde 2.00€ / Ud",
        tag: "Sweet",
        image: "/dishes/dulces-arabes.webp",
      },
    ],
  },
];

export const featuredDishes = [
  {
    name: "Tajine Pollo",
    description: "Slow-cooked chicken with preserved lemons and green olives",
    image: "/dishes/tajine-pollo.webp",
    tag: "Best Seller",
    category: "Tajines",
  },
  {
    name: "Tajine Cordero",
    description: "Tender lamb with prunes, almonds and ras el hanout",
    image: "/dishes/tajine-cordero.webp",
    tag: "Chef's Favourite",
    category: "Tajines",
  },
  {
    name: "Cuscus Verdura",
    description: "Seven vegetables with fluffy semolina and chickpeas",
    image: "/dishes/cuscus-verdura.webp",
    tag: "Vegetarian",
    category: "Couscous",
  },
  {
    name: "Cuscus Pollo",
    description: "Traditional couscous with caramelized onion and raisins",
    image: "/dishes/cuscus-pollo.webp",
    tag: "Traditional",
    category: "Couscous",
  },
  {
    name: "Pastela De Pollo",
    description: "Crispy warqa pie with chicken, almonds and cinnamon",
    image: "/dishes/pastela-pollo.webp",
    tag: "Must Try",
    category: "Special",
  },
  {
    name: "Harira",
    description: "Rich tomato, lentil and chickpea soup with herbs",
    image: "/dishes/harira.webp",
    tag: "Traditional",
    category: "Soups",
  },
  {
    name: "Pinchitos Pollo",
    description: "Kefta, chicken and lamb brochettes with Moroccan spices",
    image: "/dishes/pinchitos-pollo.webp",
    tag: "Popular",
    category: "Grill",
  },
  {
    name: "Rfisa (Harcha O Melwi)",
    description: "Shredded msemen with chicken in fenugreek spiced sauce",
    image: "/dishes/rfisa.webp",
    tag: "Authentic",
    category: "Special",
  },
];

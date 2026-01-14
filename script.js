// Корзина (массив выбранных товаров)
let cart = [];

// Текущий товар в модальном окне
let currentModalProduct = null;

// Выбранный размер для текущего товара
let selectedSize = null;

// Активные фильтры
let activeFilters = {
    color: null,
    size: null,
};
// Добавляем категорию в активные фильтры
activeFilters.category = null;

// Номер WhatsApp (без + и пробелов для wa.me)
const WHATSAPP_NUMBER = "996220118075";

// Фолбэк для битых изображений (чтобы сайт не падал и не показывал "сломанные" картинки)
function handleImageError(imgEl) {
    try {
        if (!imgEl || imgEl.dataset?.fallbackApplied === "1") return;
        imgEl.dataset.fallbackApplied = "1";

        // Встроенный SVG-плейсхолдер, чтобы не требовать внешних файлов
        const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#c8e8f5"/>
      <stop offset="1" stop-color="#ffd1dc"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <g fill="#2c3e50" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" text-anchor="middle">
    <text x="400" y="310" font-size="34" font-weight="700">Нет фото</text>
    <text x="400" y="350" font-size="18" opacity="0.7">Изображение недоступно</text>
  </g>
</svg>`;

        imgEl.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg.trim());
        imgEl.style.objectFit = "contain";
    } catch (e) { }
}

// Данные товаров
const products = [
    // 1️⃣ Nike Tech Fleece — Reflective
    {
        id: 1,
        image: "./assets/Nike tech fleece  Reflective  White -белый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective Белый",
        description: "Reflective\nWhite",
        color: "White",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 2,
        image: "./assets/Nike tech fleece  Reflective   grey- серый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective Серый",
        description: "Reflective\nGrey",
        color: "Grey",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 3,
        image:
            "./assets/Nike tech fleece  Reflective  Черно -серый   М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective Черно-серый",
        description: "Reflective\nЧерно-серый",
        color: "Черно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 4,
        image:
            "./assets/Nike tech fleece  Reflective  Black - черный  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective Черный",
        description: "Reflective\nBlack",
        color: "Black",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 5,
        image:
            "./assets/Nike tech fleece  Reflective  Blue - голубой  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective Голубой",
        description: "Reflective\nBlue",
        color: "Blue",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 6,
        image:
            "./assets/Nike tech fleece  Reflective  Brown- коричневый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective Коричневый",
        description: "Reflective\nBrown",
        color: "Brown",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    // 2️⃣ Nike Tech Fleece — Suna World Center C
    {
        id: 7,
        image:
            "./assets/Nike tech fleece  Suna world Center C Черно-серый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Suna World Center Черно-серый",
        description: "Suna World Center C\nЧерно-серый",
        color: "Черно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 8,
        image:
            "./assets/Nike tech fleece  Suna world Center C White- Белый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Suna World Center Белый",
        description: "Suna World Center C\nWhite",
        color: "White",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 9,
        image:
            "./assets/Nike tech fleece  Suna world Center C Great-серый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Suna World Center  Серый",
        description: "Suna World Center C\nGrey",
        color: "Grey",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 10,
        image:
            "./assets/Nike tech fleece  Suna world Center C Black- Черный М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Suna World Center  Черный",
        description: "Suna World Center C\nBlack",
        color: "Black",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    // 3️⃣ Nike Tech Fleece — Nocta (обычная)
    {
        id: 11,
        image:
            "./assets/Nike tech fleece  Nocta Black- черный  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta Серый",
        description: "Nocta\nGrey",
        color: "Grey",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 12,
        image:
            "./assets/Nike tech fleece  Nocta Orange- оранжевый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta Оранжевый",
        description: "Nocta\nOrange",
        color: "Orange",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 13,
        image:
            "./assets/Nike tech fleece  Nocta Purple- фиолетовый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta ФИолетовый",
        description: "Nocta\nViolet",
        color: "Violet",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 14,
        image:
            "./assets/Nike tech fleece  Nocta Yellow- желтый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta Желтый",
        description: "Nocta\nYellow",
        color: "Yellow",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    // 4️⃣ Nike Tech Fleece — Nocta New Season
    {
        id: 15,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Черно серый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season     Черно-серый",
        description: "Nocta New Season\nЧерно-серый",
        color: "Черно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 16,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Красный  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season Красный",
        description: "Nocta New Season\nКрасный",
        color: "Красный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 17,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Темно синий  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season Темно-синий",
        description: "Nocta New Season\nТемно-синий",
        color: "Темно-синий",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 18,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Темно серый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season Темно-серый",
        description: "Nocta New Season\nТемно-серый",
        color: "Темно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 19,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Голубой  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season Голубой",
        description: "Nocta New Season\nГолубой",
        color: "Голубой",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 20,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Бежевый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season Бежевый",
        description: "Nocta New Season\nБежевый",
        color: "Бежевый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    // 🧥 Nike Tech Fleece — стандартная коллекция
    {
        id: 21,
        image:
            "./assets/белыйтчфлиско.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Белый",
        description: "Стандартная коллекция\nБелый",
        color: "Белый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 22,
        image:
            "./assets/Nike tech fleece  Голубой  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Голубой",
        description: "Стандартная коллекция\nГолубой",
        color: "Голубой",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 23,
        image:
            "./assets/Nike tech fleece  Бордовый  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Бордовый",
        description: "Стандартная коллекция\nБордовый",
        color: "Бордовый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 24,
        image:
            "./assets/Nike tech fleece  Красный M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Красный",
        description: "Стандартная коллекция\nКрасный",
        color: "Красный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 25,
        image:
            "./assets/Nike tech fleece  Зеленый  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Зелёный",
        description: "Стандартная коллекция\nЗелёный",
        color: "Зелёный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 26,
        image:
            "./assets/Nike tech fleece  Серый ◻️ M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Серый",
        description: "Стандартная коллекция\nСерый",
        color: "Серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 27,
        image:
            "./assets/Nike tech fleece  сырый  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Серый ",
        description: "Стандартная коллекция\nСерый (сырый)",
        color: "Серый (сырый)",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 28,
        image:
            "./assets/Nike tech fleece  Черный   M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Чёрный",
        description: "Стандартная коллекция\nЧёрный",
        color: "Чёрный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 29,
        image:
            "./assets/Nike tech fleece  Черный 🔴 M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Чёрный 🔴",
        description: "Стандартная коллекция\nЧёрный 🔴",
        color: "Чёрный 🔴",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 30,
        image:
            "./assets/Nike tech fleece  Черно серый  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Черно-серый",
        description: "Стандартная коллекция\nЧёрно-серый",
        color: "Чёрно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 31,
        image:
            "./assets/Nike tech fleece  Черный 🌿 M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Черный 🌿",
        description: "Стандартная коллекция\nЧерный 🌿",
        color: "Черный 🌿",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 32,
        image:
            "./assets/Nike tech fleece  Темно синий  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция Темно-синий",
        description: "Стандартная коллекция\nТемно-синий",
        color: "Темно-синий",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    // 🆕 Nike Tech Fleece — New Season
    {
        id: 33,
        image:
            "./assets/Nike tech fleece  New season  Серо голубая  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — New Season Серо-голубая",
        description: "New Season\nСеро-голубая",
        color: "Серо-голубая",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 34,
        image:
            "./assets/Nike tech fleece  New season  Черный M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — New Season Черный",
        description: "New Season\nЧерный",
        color: "Черный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 35,
        image:
            "./assets/серый.jpeg",
        title: "Nike Tech Fleece — New Season Серая",
        description: "New Season\nСерая",
        color: "Серая",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 36,
        image:
            "./assets/Nike tech fleece  New season  Черно серая  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — New Season Черно-серая",
        description: "New Season\nЧерно-серая",
        color: "Черно-серая",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    // ===== Секция: Сумки (bags) — пользователь добавит фото позже =====
    {
        id: 37,
        image: "./assets/NikeHoopsEliteProBasketballBackpackBlack2.jpeg",
        title: "Nike Hoops Elite Pro Basketball Backpack Black",
        description: "Elite Pro Backpack\nBlack",
        color: "Black",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 38,
        image: "./assets/NikeHoopsEliteProBasketballBackpackWhite.jpeg",
        title: "Nike Hoops Elite Pro Basketball Backpack White",
        description: "Elite Pro Backpack\nWhite",
        color: "White",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 39,
        image: "./assets/NikeHoopsEliteProBasketballBackpackNavyBlue.jpeg",
        title: "Nike Hoops Elite Pro Basketball Backpack Navy Blue",
        description: "Elite Pro Backpack\nNavy",
        color: "Navy",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 40,
        image: "./assets/NikeHoopsEliteProBasketballBackpackFiol.jpeg",
        title: "Nike Hoops Elite Pro Basketball Backpack Fiolent",
        description: "Elite Pro Backpack\nFiolent",
        color: "Fiolent",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 41,
        image: "./assets/NikeHoopsEliteProBasketballBackpackPink.jpeg",
        title: "Nike Hoops Elite Pro Basketball Backpack Pink",
        description: "Elite Pro Backpack\nPink",
        color: "Pink",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 42,
        image: "./assets/NikeHoopsEliteProBasketballBackpackPinkWrite.jpeg",
        title: "Nike Hoops Elite Pro Basketball Backpack Pink Write",
        description: "Elite Pro Backpack\nPink Write",
        color: "Pink Write",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    // Восстанавливаем предыдущие 6 сумок (Nike Hoops Elite Max Air / Team Backpack)
    {
        id: 45,
        image: "./assets/TeamBackpackBlack.jpeg",
        title: "Nike Hoops Elite Max Air / Team Backpack Black",
        description: "Team Backpack\nBlack",
        color: "Black",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 46,
        image: "./assets/NikeHoopsEliteMaxAirWhite.jpeg",
        title: "Nike Hoops Elite Max Air / Team Backpack White",
        description: "Team Backpack\nWhite",
        color: "White",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 47,
        image: "./assets/TeamBackpackNavyBlue.jpeg",
        title: "Nike Hoops Elite Max Air / Team Backpack Navy",
        description: "Team Backpack\nNavy",
        color: "Navy",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 48,
        image: "./assets/NikeHoopsEliteMaxAirRed.jpeg",
        title: "Nike Hoops Elite Max Air / Team Backpack Red",
        description: "Team Backpack\nRed",
        color: "Red",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 49,
        image: "./assets/NikeHoopsEliteMaxAirAsmanBlue.jpeg",
        title: "Nike Hoops Elite Max Air / Team Backpack Blue",
        description: "Team Backpack\nBlue",
        color: "Blue",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 50,
        image: "./assets/NikeHoopsEliteMaxAirGray.jpeg",
        title: "Nike Hoops Elite Max Air / Team Backpack Grey",
        description: "Team Backpack\nGrey",
        color: "Grey",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 43,
        image: "./assets/NikeHoopsEliteMaxAirGoldenNike.jpeg",
        title: "Nike Hoops Elite Max Air / Team Backpack Golden Write",
        description: "Elite Pro Backpack\nBlue",
        color: "Blue",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 44,
        image: "./assets/NikeHoopsEliteMaxAirPink.jpeg",
        title: "Nike Hoops Elite Max Air / Team Backpack Tiger Pink",
        description: "Elite Pro Backpack\nOrange",
        color: "Orange",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 64,
        image: "./assets/NikeHoopsEliteMaxAirTigerWhite.jpeg",
        title: "Nike Hoops Elite Max Air / Team Backpack Tiger White",
        description: "Elite Pro Backpack\nOrange",
        color: "Orange",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 51,
        image: "./assets/NikeHoopsEliteProBasketballBackpackAsmanBlue.jpeg",
        title: "Nike Hoops Elite Pro Basketball Backpack Blue",
        description: "Elite Pro Backpack\nBlue",
        color: "Blue",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 52,
        image: "./assets/NikeHoopsEliteProBasketballBackpackGoldenWhire.jpeg",
        title: "Nike Hoops Elite Pro Basketball Golden Black",
        description: "Elite Pro Backpack\nGolden Black",
        color: "Golden Black",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },

    // Nike Utility Elite Backpack
    {
        id: 53,
        image: "./assets/NikeUtilityEliteBackpackPink.jpeg",
        title: "Nike Utility Elite Backpack Pink",
        description: "Utility Elite Backpack\nPink",
        color: "Pink",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 54,
        image: "./assets/Nike Utility Elite BackpackOrange.jpeg",
        title: "Nike Utility Elite Backpack Orange",
        description: "Utility Elite Backpack\nOrange",
        color: "Orange",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 55,
        image: "./assets/Nike Utility Elite BackpackShinePink.jpeg",
        title: "Nike Utility Elite Backpack Shine Pink",
        description: "Utility Elite Backpack\nShine Pink",
        color: "Shine Pink",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 56,
        image: "./assets/Nike Utility Elite BackpackGray.jpeg",
        title: "Nike Utility Elite Backpack Gray",
        description: "Utility Elite Backpack\nGray",
        color: "Gray",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 57,
        image: "./assets/Nike Utility Elite BackpackWhiteBlack.jpeg",
        title: "Nike Utility Elite Backpack White Black",
        description: "Utility Elite Backpack\nWhite Black",
        color: "White Black",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 58,
        image: "./assets/Nike Utility Elite BackpackBlack.jpeg",
        title: "Nike Utility Elite Backpack Black",
        description: "Utility Elite Backpack\nBlack",
        color: "Black",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 59,
        image: "./assets/Nike Utility Elite BackpackBlack-Pink.jpeg",
        title: "Nike Utility Elite Backpack Black-Pink",
        description: "Utility Elite Backpack\nBlack-Pink",
        color: "Black-Pink",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 60,
        image: "./assets/Nike Utility Elite BackpackBlack-Gray.jpeg",
        title: "Nike Utility Elite Backpack Black-Gray",
        description: "Utility Elite Backpack\nBlack-Gray",
        color: "Black-Gray",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 61,
        image: "./assets/Nike Utility Elite Backpacklack-yellow.jpeg",
        title: "Nike Utility Elite Backpack Black-Yellow",
        description: "Utility Elite Backpack\nBlack-Yellow",
        color: "Black-Yellow",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 62,
        image: "./assets/Nike Utility Elite Backpack Blue-Orange.jpeg",
        title: "Nike Utility Elite Backpack Blue-Orange",
        description: "Utility Elite Backpack\nBlue-Orange",
        color: "Blue-Orange",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
    {
        id: 63,
        image: "./assets/Nike Utility Elite Backpack Red.jpeg",
        title: "Nike Utility Elite Backpack Red",
        description: "Utility Elite Backpack\nRed",
        color: "Red",
        sizes: "",
        availableSizes: [],
        category: "Bags",
    },
];

// Группы фильтров цветов (только те, которые нужны)
const COLOR_GROUPS = [
    "Белый",
    "Синий-голубой",
    "Серый",
    "Черный",
    "Зеленый",
    "Красный-Бордовый",
    "Оранжевый",
];

// Порядок и название брендов, которые отображаем первыми
const BRANDS = ["Nike", "Polo"];

// Возвращает бренд товара (по умолчанию Nike для существующих записей)
function brandOf(p) {
    return p && p.brand ? p.brand : "Nike";
}

// Функция, которая нормализует название цвета в одну из групп
function colorGroup(color) {
    if (!color) return null;
    const s = color.toString().toLowerCase();
    if (/(white|бел)/i.test(s)) return "Белый";
    if (/(blue|голуб|син|бирюз|cyan)/i.test(s)) return "Синий-голубой";
    if (/(grey|gray|сер)/i.test(s)) return "Серый";
    if (/(black|чер)/i.test(s)) return "Черный";
    if (/(green|зел)/i.test(s)) return "Зеленый";
    if (/(red|борд|крас)/i.test(s)) return "Красный-Бордовый";
    if (/(orange|оранж)/i.test(s)) return "Оранжевый";
    return null;
}

// Получение уникальных групп цветов, но только из списка COLOR_GROUPS и в нужном порядке
function getUniqueColors() {
    const present = new Set();
    products.forEach((p) => {
        if (activeFilters.brand && brandOf(p) !== activeFilters.brand) return;
        const g = colorGroup(p.color);
        if (g) present.add(g);
    });
    return COLOR_GROUPS.filter((g) => present.has(g));
}

// Получение уникальных размеров
function getUniqueSizes() {
    const allSizes = products
        .filter((p) => !activeFilters.brand || brandOf(p) === activeFilters.brand)
        .flatMap((p) => p.availableSizes);
    const uniqueSizes = [...new Set(allSizes)];
    // Оставим простую сортировку; при желании можно задать порядок вручную
    return uniqueSizes.sort();
}

// Получаем уникальные категории (только непустые)
function getUniqueCategories() {
    const cats = products
        .filter((p) => !activeFilters.brand || brandOf(p) === activeFilters.brand)
        .map((p) => p.category)
        .filter(Boolean);
    return [...new Set(cats)];
}

// Список файлов в папке assets (используется для автоматического сопоставления)
const ASSET_FILES = [
    "Nike tech fleece  Nocta  new season  Бежевый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta  new season  Голубой  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta  new season  Красный  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta  new season  Темно серый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta  new season  Темно синий  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta  new season  Черно серый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta Black- черный  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta Blue- голубой  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta Orange- оранжевый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta Purple- фиолетовый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta Violet- темно фиолетовый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Nocta Yellow- желтый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Reflective   grey- серый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Reflective  Black - черный  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Reflective  Blue - голубой  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Reflective  Brown- коричневый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Reflective  White -белый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Reflective  Черно -серый   М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Suna world Center C Black- Черный М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Suna world Center C Great-серый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Suna world Center C White- Белый  М, L, XL, 2XL.jpeg",
    "Nike tech fleece  Suna world Center C Черно-серый  М, L, XL, 2XL.jpeg",
];

// Более точная автоматическая подстановка: для каждого файла выбираем лучший товар
function autoAssignLocalImages() {
    const normalize = (s) => (s ? s.toString().toLowerCase() : "");

    function groupToken(title) {
        const t = normalize(title);
        if (!t) return "";
        if (t.includes("reflective")) return "reflective";
        if (t.includes("suna")) return "suna";
        if (t.includes("nocta")) return "nocta";
        if (t.includes("new season")) return "new season";
        return "";
    }

    const candidates = products.filter((p) => !p.image || p.image.toString().trim() === "");
    const usedFiles = new Set();
    const assignments = [];

    ASSET_FILES.forEach((fname) => {
        const f = normalize(fname);
        let best = null;
        let bestScore = 0;

        candidates.forEach((p) => {
            if (p._assigned) return; // уже получили файл
            let score = 0;
            const g = groupToken(p.title);
            if (g && f.includes(g)) score += 2;

            const colorTokens = normalize(p.color)
                .replace(/[,()\-]/g, " ")
                .split(/\s+/)
                .filter(Boolean);
            if (colorTokens.some((ct) => f.includes(ct))) score += 1;

            // небольшая догадка по части названия (например "nocta" уже учтено)
            const titleWords = normalize(p.title).split(/\s+/).filter(Boolean);
            if (titleWords.some((w) => w.length > 3 && f.includes(w))) score += 0.5;

            if (score > bestScore) {
                bestScore = score;
                best = p;
            }
        });

        if (best && bestScore > 0 && !usedFiles.has(fname)) {
            best.image = "./assets/" + encodeURI(fname);
            best._assigned = true;
            usedFiles.add(fname);
            assignments.push({ file: fname, id: best.id, title: best.title, color: best.color });
        }
    });

    // Удаляем временные флаги
    products.forEach((p) => delete p._assigned);

    // Логируем результат сопоставления (можно посмотреть в консоли браузера)
    if (assignments.length) {
        console.log("Auto-assigned images:", assignments);
    } else {
        console.log("No local images matched to empty product slots.");
    }
}

autoAssignLocalImages();

// Polo: создаём карточки строго по названиям файлов из папки assetspolo
const POLO_ASSET_DIR = "./assetspolo";
const POLO_ASSET_FILES = [
    "Polo Ralph Laurent  Cap Стандарт  Бордовый.jpeg",
    "Polo Ralph Laurent  Cap Стандарт  Black White Horse.jpeg",
    "Polo Ralph Laurent  Cap Стандарт  Black.jpeg",
    "Polo Ralph Laurent  Cap Стандарт  Blue.jpeg",
    "Polo Ralph Laurent  Cap Стандарт  Brown.jpeg",
    "Polo Ralph Laurent  Cap Стандарт  Pink.jpeg",
    "Polo Ralph Laurent  Cap Стандарт  White.jpeg",
    "Polo Ralph Laurent  costume  Black.jpeg",
    "Polo Ralph Laurent  costume  White.jpeg",
    "Polo Ralph Laurent  costume Blue.jpeg",
    "Polo Ralph Laurent  costume red Black.jpeg",
    "Polo Ralph Laurent  costume red Blue.jpeg",
    "Polo Ralph Laurent  Jacket  Black .jpeg",
    "Polo Ralph Laurent  Jacket  Blue .jpeg",
    "Polo Ralph Laurent  Jacket  Brown.jpeg",
    "Polo Ralph Laurent  Sweater  Black.jpeg",
    "Polo Ralph Laurent  Sweater  Pink.jpeg",
    "Polo Ralph Laurent  Sweater Blue.jpeg",
    "Polo Ralph Laurent  Sweater Gray.jpeg",
    "Polo Ralph Laurent  Sweater White.jpeg",
    "Polo Ralph Laurent  T-shirt   Blue.jpeg",
    "Polo Ralph Laurent  T-shirt   Pink.jpeg",
    "Polo Ralph Laurent  T-shirt   White.jpeg",
    "Polo Ralph Laurent  T-shirt  Brown.jpeg",
    "Polo Ralph Laurent  T-shirt  Gray.jpeg",
    "Polo Ralph Laurent  T-shirt  Pink.jpeg",
    "Polo Ralph Laurent  T-shirt  red Black.jpeg",
    "Polo Ralph Laurent  T-shirt  Red.jpeg",
    "Polo Ralph Laurent  T-shirt  White .jpeg",
    "Polo Ralph Laurent  T-shirt  white Blue.jpeg",
    "Polo Ralph Laurent  T-shirt Black.jpeg",
    "Polo Ralph Laurent  Zip hoodie  Black.jpeg",
    "Polo Ralph Laurent  Zip hoodie  red Blue.jpeg",
    "Polo Ralph Laurent  Zip hoodie  White.jpeg",
    "Polo Ralph Laurent  Zip hoodie Blue.jpeg",
    "Polo Ralph Laurent  Zip hoodie Gray.jpeg",
    "Polo Ralph Laurent  Zip hoodie red Black.jpeg",
    "PoloRalphLaurent T-shirt Blue.jpeg",
    "PoloRalphLaurentT-shirtGray.jpeg",
];

function poloCategoryFromFilename(baseName) {
    const s = (baseName || "").toString().toLowerCase();
    if (s.includes("cap")) return "Caps";
    if (s.includes("t-shirt") || s.includes("tshirt")) return "T-shirt";
    if (s.includes("zip hoodie") || s.includes("hoodie")) return "Zip hoodie";
    if (s.includes("sweater")) return "Sweater";
    if (s.includes("jacket")) return "Jacket";
    if (s.includes("costume") || s.includes("tracksuit")) return "Costume";
    if (s.includes("shirt")) return "Shirt";
    return "Polo";
}

function poloColorFromFilename(baseName, category) {
    const raw = (baseName || "").toString();
    let s = raw
        .replace(/\.jpe?g$/i, "")
        .replace(/polo\s*ralph\s*laurent\s*/i, "")
        .replace(/poloralphlaurent\s*/i, "")
        .replace(/[_-]+/g, " ");

    if (category) {
        // убираем категорию (без учёта регистра), чтобы осталось "что-то похожее на цвет"
        s = s.replace(new RegExp(category.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), " ");
    }

    s = s
        .replace(/\s+/g, " ")
        .trim();

    // убираем частые слова, которые не являются цветом
    const remove = new Set(["cap", "стандарт", "t-shirt", "zip", "hoodie", "sweater", "jacket", "costume"]);
    const tokens = s.split(" ").filter(Boolean);
    const filtered = tokens.filter((t) => !remove.has(t.toLowerCase()));
    const color = filtered.join(" ").trim();

    // если после чистки ничего не осталось — возвращаем исходную строку
    return color || s || raw;
}

(function syncPoloProductsFromAssets() {
    // Удаляем любые ранее созданные/заглушечные Polo-товары, чтобы не было дублей
    for (let i = products.length - 1; i >= 0; i--) {
        if (products[i] && products[i].brand === "Polo") {
            products.splice(i, 1);
        }
    }

    let nextId = Math.max(0, ...products.map((p) => Number(p.id) || 0)) + 1;
    const sizeStr = "Размеры: M, L, XL, 2XL, 3XL";
    const sizeArr = ["M", "L", "XL", "2XL", "3XL"];

    POLO_ASSET_FILES.forEach((fname) => {
        const base = fname.replace(/\.jpe?g$/i, "");
        const category = poloCategoryFromFilename(base);
        const color = poloColorFromFilename(base, category);
        const hasSizes = category !== "Caps" && category !== "Accessories";

        products.push({
            id: nextId++,
            image: `${POLO_ASSET_DIR}/${fname}`,
            title: base,
            description: `${category}\n${color}`,
            color: color,
            sizes: hasSizes ? sizeStr : "",
            availableSizes: hasSizes ? sizeArr : [],
            category: category,
            brand: "Polo",
        });
    });
})();

// Инициализация фильтров
function initFilters() {
    const brandFilters = document.getElementById("brandFilters");
    const colorFilters = document.getElementById("colorFilters");
    const sizeFilters = document.getElementById("sizeFilters");
    const categoryFilters = document.getElementById("categoryFilters");

    function createColorButtons() {
        colorFilters.innerHTML = "";
        const colors = getUniqueColors();
        colors.forEach((color) => {
            const btn = document.createElement("button");
            btn.className = "filter-btn";
            btn.textContent = color;
            btn.addEventListener("click", () => {
                colorFilters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
                if (activeFilters.color === color) {
                    activeFilters.color = null;
                } else {
                    btn.classList.add("active");
                    activeFilters.color = color;
                }
                filterProducts();
            });
            colorFilters.appendChild(btn);
        });
    }

    function createSizeButtons() {
        sizeFilters.innerHTML = "";
        const sizes = getUniqueSizes();
        sizes.forEach((size) => {
            const btn = document.createElement("button");
            btn.className = "filter-btn";
            btn.textContent = size;
            btn.addEventListener("click", () => {
                sizeFilters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
                if (activeFilters.size === size) {
                    activeFilters.size = null;
                } else {
                    btn.classList.add("active");
                    activeFilters.size = size;
                }
                filterProducts();
            });
            sizeFilters.appendChild(btn);
        });
    }

    function createCategoryButtons() {
        categoryFilters.innerHTML = "";
        const categories = getUniqueCategories();
        categories.forEach((cat) => {
            const btn = document.createElement("button");
            btn.className = "filter-btn";
            btn.textContent = cat;
            btn.addEventListener("click", () => {
                categoryFilters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
                if (activeFilters.category === cat) {
                    activeFilters.category = null;
                } else {
                    btn.classList.add("active");
                    activeFilters.category = cat;
                }
                filterProducts();
            });
            categoryFilters.appendChild(btn);
        });
    }

    // Фильтры по бренду
    brandFilters.innerHTML = "";
    // Показать бренды в заранее определённом порядке, если они есть
    const availBrands = BRANDS.filter((b) => products.some((p) => brandOf(p) === b));
    availBrands.forEach((b) => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.textContent = b;
        btn.addEventListener("click", () => {
            brandFilters.querySelectorAll(".filter-btn").forEach((bb) => bb.classList.remove("active"));
            if (activeFilters.brand === b) {
                activeFilters.brand = null;
            } else {
                btn.classList.add("active");
                activeFilters.brand = b;
            }
            // Сброс подфильтров при смене бренда (по желанию можно оставить выбранные)
            activeFilters.color = null;
            activeFilters.size = null;
            activeFilters.category = null;
            // Перерисовать группы фильтров, опираясь на выбранный бренд
            createColorButtons();
            createSizeButtons();
            createCategoryButtons();
            filterProducts();
        });
        brandFilters.appendChild(btn);
    });

    // Подфильтры будут создаваться при выборе бренда (см. обработчик клика выше)
}

// Фильтрация товаров
function filterProducts() {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "";

    // Если бренд не выбран — не показываем товары и просим выбрать бренд
    if (!activeFilters.brand) {
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "Пожалуйста, выберите бренд (Nike или Polo)";
        emptyMessage.style.textAlign = "center";
        emptyMessage.style.padding = "40px";
        emptyMessage.style.color = "#666666";
        emptyMessage.style.fontSize = "18px";
        catalog.appendChild(emptyMessage);
        return;
    }

    let filteredProducts = products;

    // Фильтр по бренду (показываем только товары выбранного бренда)
    if (activeFilters.brand) {
        filteredProducts = filteredProducts.filter((p) => brandOf(p) === activeFilters.brand);
    }

    // Фильтр по цвету (используем группы)
    if (activeFilters.color) {
        filteredProducts = filteredProducts.filter((p) => {
            return colorGroup(p.color) === activeFilters.color;
        });
    }

    // Фильтр по категории
    if (activeFilters.category) {
        filteredProducts = filteredProducts.filter((p) => p.category === activeFilters.category);
    }

    // Фильтр по размеру
    if (activeFilters.size) {
        filteredProducts = filteredProducts.filter((p) =>
            p.availableSizes.includes(activeFilters.size)
        );
    }

    // Отображаем отфильтрованные товары
    filteredProducts.forEach((product) => {
        const card = createProductCard(product);
        catalog.appendChild(card);
    });

    // Если нет товаров, показываем сообщение
    if (filteredProducts.length === 0) {
        const emptyMessage = document.createElement("div");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "Товары не найдены";
        emptyMessage.style.textAlign = "center";
        emptyMessage.style.padding = "40px";
        emptyMessage.style.color = "#666666";
        emptyMessage.style.fontSize = "18px";
        catalog.appendChild(emptyMessage);
    }
}

// Инициализация каталога
function initCatalog() {
    filterProducts();
}

// Создание карточки товара
function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Открыть ${product.title}`);

    const image = document.createElement("img");
    image.src = product.image ? encodeURI(product.image) : "";
    image.alt = product.title;
    image.className = "product-image";
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => handleImageError(image));

    const info = document.createElement("div");
    info.className = "product-info";

    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.title;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description.split("\n")[0];

    const sizes = document.createElement("p");
    sizes.className = "product-sizes";
    sizes.textContent = product.sizes;

    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(sizes);

    card.appendChild(image);
    card.appendChild(info);

    // Обработчик клика — передаём изображение карточки, чтобы в модальном не менять размер
    card.addEventListener("click", (e) => openModal(product, image));
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(product, image);
        }
    });

    return card;
}

// Парсинг размеров из строки
function parseSizes(sizesString) {
    const match = sizesString.match(/Размеры:\s*(.+)/);
    if (match) {
        return match[1].split(",").map((s) => s.trim());
    }
    return [];
}

// Открытие модального окна
function openModal(product, sourceImageEl) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const sizeButtons = document.getElementById("sizeButtons");
    const selectBtn = document.getElementById("selectBtn");

    // Сохраняем текущий товар и сбрасываем выбранный размер
    currentModalProduct = product;
    selectedSize = null;

    modalImage.src = product.image ? encodeURI(product.image) : "";
    modalImage.alt = product.title;
    modalImage.loading = "lazy";
    modalImage.decoding = "async";
    modalImage.addEventListener("error", () => handleImageError(modalImage));

    // Если экран мобильный — включаем полноэкранный режим для модального изображения
    const isMobile = window.innerWidth <= 767;
    const modalEl = document.getElementById('modal');
    if (isMobile) {
        modalEl.classList.add('fullscreen-image');
        // Даем CSS контролировать размер (чтобы картинка занимала окно)
        modalImage.style.width = '';
        modalImage.style.height = '';
        modalImage.style.maxWidth = '';
        modalImage.style.objectFit = 'cover';
    } else {
        modalEl.classList.remove('fullscreen-image');
        // Если передан элемент-источник (из карточки), подгоняем размеры модального изображения
        if (sourceImageEl && sourceImageEl instanceof Element) {
            try {
                const w = sourceImageEl.clientWidth;
                const h = sourceImageEl.clientHeight;
                // Устанавливаем inline-стили, чтобы изображение в модальном окне оставалось тем же по размеру
                modalImage.style.width = w + "px";
                modalImage.style.height = h + "px";
                modalImage.style.objectFit = "cover";
                // Ограничение по max-width чтобы не выходило за границы модального
                modalImage.style.maxWidth = "100%";
            } catch (e) { }
        } else {
            // Сбрасываем на поведение по-умолчанию
            modalImage.style.width = "";
            modalImage.style.height = "";
            modalImage.style.objectFit = "cover";
            modalImage.style.maxWidth = "";
        }
    }
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;

    // Создаем кнопки размеров
    const sizes = parseSizes(product.sizes);
    sizeButtons.innerHTML = "";

    // Если у товара нет размеров — скрываем блок выбора размеров и активируем кнопку выбора
    const sizeSelectionContainer = document.querySelector('.size-selection');
    if (sizes.length === 0) {
        if (sizeSelectionContainer) sizeSelectionContainer.style.display = 'none';
        selectBtn.disabled = false;
    } else {
        if (sizeSelectionContainer) sizeSelectionContainer.style.display = '';
    }

    sizes.forEach((size) => {
        const btn = document.createElement("button");
        btn.className = "size-btn";
        btn.textContent = size;
        btn.addEventListener("click", () => {
            // Убираем выделение с других кнопок
            sizeButtons.querySelectorAll(".size-btn").forEach((b) => {
                b.classList.remove("selected");
            });
            // Выделяем выбранную
            btn.classList.add("selected");
            selectedSize = size;
            // Активируем кнопку выбора
            selectBtn.disabled = false;
        });
        sizeButtons.appendChild(btn);
    });

    // Если есть размеры — по умолчанию кнопка выключена, иначе включена (товар без размеров)
    if (sizes.length > 0) {
        selectBtn.disabled = true;
    } else {
        selectBtn.disabled = false;
    }
    selectBtn.textContent = "Выбрать эту модель";
    selectBtn.classList.remove("selected");

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Фокус на кнопке закрытия для доступности
    setTimeout(() => {
        document.getElementById("modalClose").focus();
    }, 100);
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

// Выбор товара
function selectProduct(product, size) {
    // Если у товара есть опции размеров, то размер обязателен
    const hasSizes = Array.isArray(product.availableSizes) && product.availableSizes.length > 0;
    if (hasSizes && !size) {
        alert("Пожалуйста, выберите размер");
        return;
    }

    // Добавляем товар в корзину
    const cartItem = {
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        size: size || '',
    };

    cart.push(cartItem);

    const selectBtn = document.getElementById("selectBtn");
    selectBtn.textContent = "✓ Выбрано";
    selectBtn.classList.add("selected");

    // Обновляем корзину и кнопки
    updateCart();

    // Закрываем модальное окно через небольшую задержку
    setTimeout(() => {
        closeModal();
    }, 500);
}

// Обновление корзины
function updateCart() {
    const fixedCart = document.getElementById("fixedCart");
    const fixedCartCount = document.getElementById("fixedCartCount");
    const orderBtn = document.getElementById("orderBtn");

    if (cart.length > 0) {
        fixedCart.style.display = "block";
        fixedCartCount.textContent = cart.length;
        orderBtn.style.display = "inline-block";
    } else {
        fixedCart.style.display = "none";
        orderBtn.style.display = "none";
    }
}

// Открытие модального окна заказа
function openOrderModal() {
    if (cart.length === 0) {
        alert("Корзина пуста");
        return;
    }

    const orderModal = document.getElementById("orderModal");
    const orderItem = document.getElementById("orderItem");

    // Показываем все товары в корзине
    orderItem.innerHTML = cart
        .map(
            (item, index) => `
        <div class="order-item-content">
            <div class="order-item-title">${item.title}</div>
            <div class="order-item-details">${item.description}</div>
            <div class="order-item-size">${item.size ? `Размер: ${item.size}` : ''}</div>
        </div>
    `
        )
        .join('<div class="order-item-divider"></div>');

    orderModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Закрытие модального окна заказа
function closeOrderModal() {
    const orderModal = document.getElementById("orderModal");
    orderModal.classList.remove("active");
    document.body.style.overflow = "";
}

// Открытие WhatsApp с данными заказа
function submitOrder() {
    // Формируем сообщение
    let message = "Здравствуйте! Хочу заказать:\n\n";

    cart.forEach((item, index) => {
        message += `${item.title}\n${item.description}\nРазмер: ${item.size}`;
        if (index < cart.length - 1) {
            message += "\n\n";
        }
    });

    // Добавляем запрос наличия в конце
    message += "\n\nесть в наличии ?";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Очищаем корзину после отправки
    cart = [];
    updateCart();
    closeOrderModal();
}

// Инициализация обработчиков
function initModalHandlers() {
    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modalClose");
    const modalOverlay = document.getElementById("modalOverlay");
    const selectBtn = document.getElementById("selectBtn");
    const orderBtn = document.getElementById("orderBtn");
    const cartBtn = document.getElementById("cartBtn");

    // Модальное окно товара
    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (modal.classList.contains("active")) {
                closeModal();
            }
            if (
                document.getElementById("orderModal").classList.contains("active")
            ) {
                closeOrderModal();
            }
        }
    });

    modal.querySelector(".modal-content").addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Обработчик кнопки выбора
    selectBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!currentModalProduct) return;
        const hasSizes = Array.isArray(currentModalProduct.availableSizes) && currentModalProduct.availableSizes.length > 0;
        if (hasSizes) {
            if (selectedSize) selectProduct(currentModalProduct, selectedSize);
            else alert('Пожалуйста, выберите размер');
        } else {
            // Товар без размеров — добавляем без размера
            selectProduct(currentModalProduct, '');
        }
    });

    // Обработчик кнопки заказать
    orderBtn.addEventListener("click", openOrderModal);

    // Обработчик фиксированной корзины
    document
        .getElementById("fixedCartBtn")
        .addEventListener("click", openOrderModal);

    // Модальное окно заказа
    const orderModal = document.getElementById("orderModal");
    const orderModalClose = document.getElementById("orderModalClose");
    const orderModalOverlay = document.getElementById("orderModalOverlay");
    const submitOrderBtn = document.getElementById("submitOrderBtn");

    orderModalClose.addEventListener("click", closeOrderModal);
    orderModalOverlay.addEventListener("click", closeOrderModal);

    orderModal
        .querySelector(".modal-content")
        .addEventListener("click", (e) => {
            e.stopPropagation();
        });

    // Обработчик отправки заказа
    submitOrderBtn.addEventListener("click", submitOrder);
}
// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    initFilters();
    initCatalog();
    initModalHandlers();

    // Обработка ошибок загрузки изображений (после фильтрации)
    setTimeout(() => {
        document.querySelectorAll(".product-image").forEach((img) => {
            img.addEventListener("error", () => handleImageError(img));
        });
    }, 100);
});

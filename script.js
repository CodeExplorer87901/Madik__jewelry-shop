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

// Номер WhatsApp (без + и пробелов для wa.me)
const WHATSAPP_NUMBER = "996220118075";

// Данные товаров
const products = [
    // 1️⃣ Nike Tech Fleece — Reflective
    {
        id: 1,
        image: "./assets/Nike tech fleece  Reflective  White -белый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective",
        description: "Reflective\nWhite",
        color: "White",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 2,
        image: "./assets/Nike tech fleece  Reflective   grey- серый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective",
        description: "Reflective\nGrey",
        color: "Grey",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 3,
        image:
            "./assets/Nike tech fleece  Reflective  Черно -серый   М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective",
        description: "Reflective\nЧерно-серый",
        color: "Черно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 4,
        image:
            "./assets/Nike tech fleece  Reflective  Black - черный  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective",
        description: "Reflective\nBlack",
        color: "Black",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 5,
        image:
            "./assets/Nike tech fleece  Reflective  Blue - голубой  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective",
        description: "Reflective\nBlue",
        color: "Blue",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 6,
        image:
            "./assets/Nike tech fleece  Reflective  Brown- коричневый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Reflective",
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
        title: "Nike Tech Fleece — Suna World Center C",
        description: "Suna World Center C\nЧерно-серый",
        color: "Черно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 8,
        image:
            "./assets/Nike tech fleece  Suna world Center C White- Белый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Suna World Center C",
        description: "Suna World Center C\nWhite",
        color: "White",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 9,
        image:
            "./assets/Nike tech fleece  Suna world Center C Great-серый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Suna World Center C",
        description: "Suna World Center C\nGrey",
        color: "Grey",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 10,
        image:
            "./assets/Nike tech fleece  Suna world Center C Black- Черный М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Suna World Center C",
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
        title: "Nike Tech Fleece — Nocta",
        description: "Nocta\nGrey",
        color: "Grey",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 12,
        image:
            "./assets/Nike tech fleece  Nocta Orange- оранжевый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta",
        description: "Nocta\nOrange",
        color: "Orange",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 13,
        image:
            "./assets/Nike tech fleece  Nocta Purple- фиолетовый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta",
        description: "Nocta\nViolet",
        color: "Violet",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 14,
        image:
            "./assets/Nike tech fleece  Nocta Yellow- желтый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta",
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
        title: "Nike Tech Fleece — Nocta New Season",
        description: "Nocta New Season\nЧерно-серый",
        color: "Черно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 16,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Красный  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season",
        description: "Nocta New Season\nКрасный",
        color: "Красный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 17,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Темно синий  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season",
        description: "Nocta New Season\nТемно-синий",
        color: "Темно-синий",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 18,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Темно серый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season",
        description: "Nocta New Season\nТемно-серый",
        color: "Темно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 19,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Голубой  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season",
        description: "Nocta New Season\nГолубой",
        color: "Голубой",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 20,
        image:
            "./assets/Nike tech fleece  Nocta  new season  Бежевый  М, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — Nocta New Season",
        description: "Nocta New Season\nБежевый",
        color: "Бежевый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    // 🧥 Nike Tech Fleece — стандартная коллекция
    {
        id: 21,
        image:
            "./assets/WhatsApp Image 2026-01-13 at 17.27.17.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nБелый",
        color: "Белый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 22,
        image:
            "./assets/Nike tech fleece  Голубой  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nГолубой",
        color: "Голубой",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 23,
        image:
            "./assets/Nike tech fleece  Бордовый  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nБордовый",
        color: "Бордовый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 24,
        image:
            "./assets/Nike tech fleece  Красный M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nКрасный",
        color: "Красный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 25,
        image:
            "./assets/Nike tech fleece  Зеленый  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nЗелёный",
        color: "Зелёный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 26,
        image:
            "./assets/Nike tech fleece  Серый ◻️ M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nСерый",
        color: "Серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 27,
        image:
            "./assets/Nike tech fleece  сырый  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nСерый (сырый)",
        color: "Серый (сырый)",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 28,
        image:
            "./assets/Nike tech fleece  Черный   M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nЧёрный",
        color: "Чёрный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 29,
        image:
            "./assets/Nike tech fleece  Черный 🔴 M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nЧёрный 🔴",
        color: "Чёрный 🔴",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 30,
        image:
            "./assets/Nike tech fleece  Черно серый  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nЧёрно-серый",
        color: "Чёрно-серый",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 31,
        image:
            "./assets/Nike tech fleece  Черный 🌿 M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
        description: "Стандартная коллекция\nЧерный 🌿",
        color: "Черный 🌿",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 32,
        image:
            "./assets/Nike tech fleece  Темно синий  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — стандартная коллекция",
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
        title: "Nike Tech Fleece — New Season",
        description: "New Season\nСеро-голубая",
        color: "Серо-голубая",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 34,
        image:
            "./assets/Nike tech fleece  New season  Черный M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — New Season",
        description: "New Season\nЧерный",
        color: "Черный",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 35,
        image:
            "./assets/Nike tech fleece  New season  Серая  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — New Season",
        description: "New Season\nСерая",
        color: "Серая",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
    },
    {
        id: 36,
        image:
            "./assets/Nike tech fleece  New season  Черно серая  M, L, XL, 2XL.jpeg",
        title: "Nike Tech Fleece — New Season",
        description: "New Season\nЧерно-серая",
        color: "Черно-серая",
        sizes: "Размеры: M, L, XL, 2XL",
        availableSizes: ["M", "L", "XL", "2XL"],
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
        const g = colorGroup(p.color);
        if (g) present.add(g);
    });
    return COLOR_GROUPS.filter((g) => present.has(g));
}

// Получение уникальных размеров
function getUniqueSizes() {
    const allSizes = products.flatMap((p) => p.availableSizes);
    const uniqueSizes = [...new Set(allSizes)];
    return uniqueSizes.sort();
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

// Инициализация фильтров
function initFilters() {
    const colorFilters = document.getElementById("colorFilters");
    const sizeFilters = document.getElementById("sizeFilters");

    // Фильтры по цвету
    const colors = getUniqueColors();
    colors.forEach((color) => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.textContent = color;
        btn.addEventListener("click", () => {
            // Переключаем активность
            colorFilters.querySelectorAll(".filter-btn").forEach((b) => {
                b.classList.remove("active");
            });
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

    // Фильтры по размеру
    const sizes = getUniqueSizes();
    sizes.forEach((size) => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.textContent = size;
        btn.addEventListener("click", () => {
            // Переключаем активность
            sizeFilters.querySelectorAll(".filter-btn").forEach((b) => {
                b.classList.remove("active");
            });
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

// Фильтрация товаров
function filterProducts() {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "";

    let filteredProducts = products;

    // Фильтр по цвету (используем группы)
    if (activeFilters.color) {
        filteredProducts = filteredProducts.filter((p) => {
            return colorGroup(p.color) === activeFilters.color;
        });
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
    image.src = product.image;
    image.alt = product.title;
    image.className = "product-image";

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

    // Обработчик клика
    card.addEventListener("click", () => openModal(product));
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(product);
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
function openModal(product) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const sizeButtons = document.getElementById("sizeButtons");
    const selectBtn = document.getElementById("selectBtn");

    // Сохраняем текущий товар и сбрасываем выбранный размер
    currentModalProduct = product;
    selectedSize = null;

    modalImage.src = product.image;
    modalImage.alt = product.title;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;

    // Создаем кнопки размеров
    const sizes = parseSizes(product.sizes);
    sizeButtons.innerHTML = "";

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

    // Сбрасываем кнопку выбора
    selectBtn.disabled = true;
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
    if (!size) {
        alert("Пожалуйста, выберите размер");
        return;
    }

    // Добавляем товар в корзину
    const cartItem = {
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        size: size,
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
            <div class="order-item-size">Размер: ${item.size}</div>
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
        if (currentModalProduct && selectedSize) {
            selectProduct(currentModalProduct, selectedSize);
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

// Загрузка изображений с обработкой ошибок
function handleImageError(img) {
    img.src =
        "https://via.placeholder.com/800x800/f5f5f5/999999?text=Nike+Tech+Fleece";
    img.alt = "Изображение недоступно";
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

const products = [
    // Chairs
    {
        id: 1,
        name: "Стул классический",
        price: 1200,
        image: "/images/table1.jpg",
        categories: ["chairs"],
        tags: ["classic", "wood"],
        specs: {
            material: "wood",
            color: "brown",
            width: 45,
            height: 90,
            depth: 50,
            weight: 6,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 8 },
            { storeId: "north", storeName: "Северный склад", city: "Balti", quantity: 3 },
        ],
    },
    {
        id: 2,
        name: "Стул современный",
        price: 1500,
        image: "/images/table2.jpg",
        categories: ["chairs"],
        tags: ["modern", "metal"],
        specs: {
            material: "metal",
            color: "black",
            width: 48,
            height: 92,
            depth: 52,
            weight: 7,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 5 },
        ],
    },
    {
        id: 3,
        name: "Барный стул",
        price: 1800,
        image: "/images/table1.jpg",
        categories: ["chairs"],
        tags: ["bar", "high"],
        specs: {
            material: "metal",
            color: "silver",
            height: 110,
            adjustable: true,
            weight: 8,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 2 },
        ],
    },

    // Tables
    {
        id: 4,
        name: "Стол обеденный",
        price: 4500,
        image: "/images/table1.jpg",
        categories: ["tables"],
        tags: ["kitchen", "wood"],
        specs: {
            material: "wood",
            shape: "rectangular",
            seats: 6,
            width: 160,
            height: 75,
            depth: 90,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 1 },
            { storeId: "south", storeName: "Южный салон", city: "Cahul", quantity: 1 },
        ],
    },
    {
        id: 5,
        name: "Стол журнальный",
        price: 2500,
        image: "/images/table2.jpg",
        categories: ["tables"],
        tags: ["living-room", "glass"],
        specs: {
            material: "glass",
            shape: "round",
            diameter: 80,
            height: 45,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 4 },
        ],
    },
    {
        id: 6,
        name: "Консольный стол",
        price: 3200,
        image: "/images/table1.jpg",
        categories: ["tables"],
        tags: ["hallway", "narrow"],
        specs: {
            material: "wood",
            width: 100,
            height: 80,
            depth: 35,
        },
        availability: [
            { storeId: "north", storeName: "Северный склад", city: "Balti", quantity: 2 },
        ],
    },

    // Wardrobes
    {
        id: 7,
        name: "Шкаф для одежды",
        price: 7800,
        image: "/images/table2.jpg",
        categories: ["wardrobes"],
        tags: ["clothes", "wood"],
        specs: {
            material: "wood",
            doors: 3,
            shelves: 6,
            height: 200,
            width: 150,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 1 },
        ],
    },
    {
        id: 8,
        name: "Комод",
        price: 5500,
        image: "/images/table1.jpg",
        categories: ["wardrobes"],
        tags: ["storage", "modern"],
        specs: {
            material: "wood",
            drawers: 4,
            width: 100,
            height: 90,
        },
        availability: [
            { storeId: "south", storeName: "Южный салон", city: "Cahul", quantity: 2 },
        ],
    },
    {
        id: 9,
        name: "Шкаф купе",
        price: 9500,
        image: "/images/table2.jpg",
        categories: ["wardrobes"],
        tags: ["sliding", "large"],
        specs: {
            material: "wood",
            doors: 2,
            sliding: true,
            height: 220,
            width: 180,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 0 },
        ],
    },

    // Sofas
    {
        id: 10,
        name: "Диван угловой",
        price: 12500,
        image: "/images/table1.jpg",
        categories: ["sofas"],
        tags: ["corner", "leather"],
        specs: {
            material: "leather",
            seats: 4,
            folding: false,
            width: 260,
            depth: 180,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 1 },
        ],
    },
    {
        id: 11,
        name: "Диван прямой",
        price: 9800,
        image: "/images/table2.jpg",
        categories: ["sofas"],
        tags: ["straight", "fabric"],
        specs: {
            material: "fabric",
            seats: 3,
            folding: false,
            width: 200,
        },
        availability: [
            { storeId: "north", storeName: "Северный склад", city: "Balti", quantity: 2 },
        ],
    },
    {
        id: 12,
        name: "Маленький диван",
        price: 7200,
        image: "/images/table1.jpg",
        categories: ["sofas"],
        tags: ["small", "compact"],
        specs: {
            material: "fabric",
            seats: 2,
            folding: true,
            width: 160,
        },
        availability: [
            { storeId: "south", storeName: "Южный салон", city: "Cahul", quantity: 1 },
        ],
    },

    // Armchairs
    {
        id: 13,
        name: "Кресло мягкое",
        price: 3300,
        image: "/images/table2.jpg",
        categories: ["armchairs"],
        tags: ["soft", "relax"],
        specs: {
            material: "fabric",
            width: 80,
            height: 95,
            weight: 12,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 3 },
        ],
    },
    {
        id: 14,
        name: "Кресло офисное",
        price: 4200,
        image: "/images/table1.jpg",
        categories: ["armchairs"],
        tags: ["office", "ergonomic"],
        specs: {
            material: "mesh",
            adjustable: true,
            wheels: true,
            maxLoad: 120,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 6 },
        ],
    },
    {
        id: 15,
        name: "Кресло-качалка",
        price: 5000,
        image: "/images/table2.jpg",
        categories: ["armchairs"],
        tags: ["rocking", "wood"],
        specs: {
            material: "wood",
            rocking: true,
            weight: 14,
        },
        availability: [
            { storeId: "north", storeName: "Северный склад", city: "Balti", quantity: 1 },
        ],
    },

    // Beds
    {
        id: 16,
        name: "Кровать двуспальная",
        price: 10200,
        image: "/images/table1.jpg",
        categories: ["beds"],
        tags: ["double", "wood"],
        specs: {
            material: "wood",
            size: "160x200",
            storage: false,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 2 },
        ],
    },
    {
        id: 17,
        name: "Кровать односпальная",
        price: 7200,
        image: "/images/table2.jpg",
        categories: ["beds"],
        tags: ["single", "compact"],
        specs: {
            material: "wood",
            size: "90x200",
            storage: false,
        },
        availability: [
            { storeId: "south", storeName: "Южный салон", city: "Cahul", quantity: 2 },
        ],
    },
    {
        id: 18,
        name: "Кровать с ящиками",
        price: 11500,
        image: "/images/table1.jpg",
        categories: ["beds"],
        tags: ["storage", "modern"],
        specs: {
            material: "wood",
            size: "160x200",
            storage: true,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 1 },
        ],
    },

    // Cabinets
    {
        id: 19,
        name: "Тумба прикроватная",
        price: 2200,
        image: "/images/table2.jpg",
        categories: ["cabinets"],
        tags: ["bedroom", "small"],
        specs: {
            material: "wood",
            drawers: 2,
            width: 45,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 5 },
        ],
    },
    {
        id: 20,
        name: "Витрина для посуды",
        price: 6700,
        image: "/images/table1.jpg",
        categories: ["cabinets"],
        tags: ["kitchen", "glass"],
        specs: {
            material: "glass",
            shelves: 5,
            height: 190,
        },
        availability: [
            { storeId: "north", storeName: "Северный склад", city: "Balti", quantity: 1 },
        ],
    },
    {
        id: 21,
        name: "Комод высокий",
        price: 5800,
        image: "/images/table2.jpg",
        categories: ["cabinets"],
        tags: ["storage", "wood"],
        specs: {
            material: "wood",
            drawers: 6,
            height: 130,
        },
        availability: [
            { storeId: "south", storeName: "Южный салон", city: "Cahul", quantity: 2 },
        ],
    },

    // Extras
    {
        id: 22,
        name: "Стул для офиса",
        price: 2900,
        image: "/images/table1.jpg",
        categories: ["chairs"],
        tags: ["office", "modern"],
        specs: {
            material: "plastic",
            adjustable: true,
            wheels: true,
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 10 },
        ],
    },
    {
        id: 23,
        name: "Диван раскладной",
        price: 13500,
        image: "/images/table2.jpg",
        categories: ["sofas"],
        tags: ["foldable", "fabric"],
        specs: {
            material: "fabric",
            seats: 3,
            folding: true,
            sleepingPlace: "140x200",
        },
        availability: [
            { storeId: "center", storeName: "Центральный магазин", city: "Chisinau", quantity: 1 },
        ],
    },
    {
        id: 24,
        name: "Кресло кожаное",
        price: 4800,
        image: "/images/table1.jpg",
        categories: ["armchairs"],
        tags: ["leather", "luxury"],
        specs: {
            material: "leather",
            color: "black",
            weight: 15,
        },
        availability: [
            { storeId: "north", storeName: "Северный склад", city: "Balti", quantity: 1 },
        ],
    },
];

export default products;

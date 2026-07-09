
export interface HomeCategoryItem {
    categoryId: string;
    section: string;
    name: string;
    image: string;
}

export const homeCategories = [
    // SHOP BY CATEGORY (card tròn to) 
    {
        categoryId: "Laptop",
        section: "shopByCategory",
        name: "Laptop",
        image: "https://images.pexels.com/photos/20828487/pexels-photo-20828487.jpeg",
    },
    {
        categoryId: "PCGaming",
        section: "shopByCategory",
        name: "PC Gaming",
        image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
    },
    {
        categoryId: "Core",
        section: "shopByCategory",
        name: "Linh kiện máy tính",
        image: "https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg",
    },
    {
        categoryId: "Storage",
        section: "shopByCategory",
        name: "Ổ cứng - SSD",
        image: "https://picsum.photos/seed/storage-shop/600/600",
    },
    {
        categoryId: "Monitor",
        section: "shopByCategory",
        name: "Màn hình - Tivi",
        image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
    },
    {
        categoryId: "KeyboardMouse",
        section: "shopByCategory",
        name: "Bàn phím - Chuột",
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
    },
    {
        categoryId: "Accessories",
        section: "shopByCategory",
        name: "Phụ kiện",
        image: "https://picsum.photos/seed/accessories-shop/600/600",
    },
    {
        categoryId: "Routers",
        section: "shopByCategory",
        name: "Thiết bị mạng",
        image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg",
    },
    {
        categoryId: "GamingGear",
        section: "shopByCategory",
        name: "Ghế - Bàn Gaming",
        image: "https://picsum.photos/seed/gaminggear-shop/600/600",
    },
    {
        categoryId: "Printer",
        section: "shopByCategory",
        name: "Máy in - Scan",
        image: "https://picsum.photos/seed/printer-shop/600/600",
    },
    {
        categoryId: "Software",
        section: "shopByCategory",
        name: "Phần mềm",
        image: "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg",
    },

    // ELECTRIC CATEGORY (icon nhỏ + tên) 
    {
        categoryId: "Laptop",
        section: "electricCategory",
        name: "Laptop",
        image: "https://i.pinimg.com/736x/9a/fc/31/9afc318c8a266b717c9e9e5e0817886d.jpg",
    },
    {
        categoryId: "PCGaming",
        section: "electricCategory",
        name: "PC Gaming",
        image: "https://picsum.photos/seed/pcgaming-icon/200/200",
    },
    {
        categoryId: "Case",
        section: "electricCategory",
        name: "Case - Vỏ máy",
        image: "https://images.pexels.com/photos/163140/circuit-circuit-board-resistor-computer-163140.jpeg",
    },
    {
        categoryId: "PSU",
        section: "electricCategory",
        name: "Nguồn máy tính",
        image: "https://picsum.photos/seed/psu-icon/200/200",
    },
    {
        categoryId: "Cooling",
        section: "electricCategory",
        name: "Tản nhiệt",
        image: "https://picsum.photos/seed/cooling-icon/200/200",
    },
    {
        categoryId: "Storage",
        section: "electricCategory",
        name: "Ổ cứng - SSD",
        image: "https://picsum.photos/seed/storage-icon/200/200",
    },
    {
        categoryId: "Monitor",
        section: "electricCategory",
        name: "Màn hình",
        image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    },
    {
        categoryId: "KeyboardMouse",
        section: "electricCategory",
        name: "Bàn phím - Chuột",
        image: "https://picsum.photos/seed/keyboardmouse-icon/200/200",
    },
    {
        categoryId: "Routers",
        section: "electricCategory",
        name: "Thiết bị mạng",
        image: "https://images.pexels.com/photos/4432500/pexels-photo-4432500.jpeg",
    },
    {
        categoryId: "GamingGear",
        section: "electricCategory",
        name: "Ghế - Bàn Gaming",
        image: "https://picsum.photos/seed/gaminggear-icon/200/200",
    },
    {
        categoryId: "Printer",
        section: "electricCategory",
        name: "Máy in - Scan",
        image: "https://picsum.photos/seed/printer-icon/200/200",
    },
    {
        categoryId: "Accessories",
        section: "electricCategory",
        name: "Phụ kiện",
        image: "https://picsum.photos/seed/accessories-icon/200/200",
    },
    {
        categoryId: "Software",
        section: "electricCategory",
        name: "Phần mềm",
        image: "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg",
    },

    //  DEAL (card giảm giá) 
    {
        categoryId: "Laptop",
        section: "deal",
        name: "Laptop",
        image: "https://images.pexels.com/photos/7054521/pexels-photo-7054521.jpeg",
    },
    {
        categoryId: "PCGaming",
        section: "deal",
        name: "PC Gaming",
        image: "https://picsum.photos/seed/pcgaming-deal/600/400",
    },
    {
        categoryId: "Monitor",
        section: "deal",
        name: "Màn hình",
        image: "https://picsum.photos/seed/monitor-deal/600/400",
    },
    {
        categoryId: "KeyboardMouse",
        section: "deal",
        name: "Bàn phím - Chuột",
        image: "https://picsum.photos/seed/keyboardmouse-deal/600/400",
    },
    {
        categoryId: "Storage",
        section: "deal",
        name: "Ổ cứng - SSD",
        image: "https://picsum.photos/seed/storage-deal/600/400",
    },
    {
        categoryId: "Accessories",
        section: "deal",
        name: "Phụ kiện",
        image: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg",
    },

    // ================== GRID (banner lớn, layout lệch) ==================
    {
        categoryId: "Laptop",
        section: "grid",
        name: "Laptop",
        image: "https://images.pexels.com/photos/8533592/pexels-photo-8533592.jpeg",
    },
    {
        categoryId: "PCGaming",
        section: "grid",
        name: "PC Gaming",
        image: "https://picsum.photos/seed/pcgaming-grid/800/600",
    },
    {
        categoryId: "Core",
        section: "grid",
        name: "Linh kiện",
        image: "https://images.pexels.com/photos/37113175/pexels-photo-37113175.jpeg",
    },
    {
        categoryId: "Storage",
        section: "grid",
        name: "Ổ cứng - SSD",
        image: "https://picsum.photos/seed/storage-grid/800/600",
    },
    {
        categoryId: "Monitor",
        section: "grid",
        name: "Màn hình",
        image: "https://images.pexels.com/photos/12512639/pexels-photo-12512639.jpeg",
    },
    {
        categoryId: "KeyboardMouse",
        section: "grid",
        name: "Bàn phím - Chuột",
        image: "https://picsum.photos/seed/keyboardmouse-grid/800/600",
    },
    {
        categoryId: "Routers",
        section: "grid",
        name: "Thiết bị mạng",
        image: "https://images.pexels.com/photos/17112932/pexels-photo-17112932.jpeg",
    },
    {
        categoryId: "GamingGear",
        section: "grid",
        name: "Ghế - Bàn Gaming",
        image: "https://picsum.photos/seed/gaminggear-grid/800/600",
    },
    {
        categoryId: "Printer",
        section: "grid",
        name: "Máy in - Scan",
        image: "https://picsum.photos/seed/printer-grid/800/600",
    },
    {
        categoryId: "Software",
        section: "grid",
        name: "Phần mềm",
        image: "https://images.pexels.com/photos/29711663/pexels-photo-29711663.jpeg",
    },
    {
        categoryId: "Case",
        section: "grid",
        name: "Case",
        image: "https://images.pexels.com/photos/6913135/pexels-photo-6913135.jpeg",
    },
];
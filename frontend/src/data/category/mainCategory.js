export interface MainCategoryItem {
  categoryId: string;
  name: string;
}

// QUAN TRONG: "categoryId" o day phai khop CHINH XAC (phan biet hoa/thuong)
// voi cac key dang dung trong categoryTwo/categoryThree o AddProduct.tsx
// (Laptop, Core, Case, Monitor, Accessories, Routers, Software)
export const mainCategory: MainCategoryItem[] = [
  { categoryId: "Laptop", name: "Laptop" },
  { categoryId: "Core", name: "Linh kiện máy tính" },
  { categoryId: "Case", name: "Case - Vỏ máy tính" },
  { categoryId: "Monitor", name: "Màn hình máy tính - Tivi" },
  { categoryId: "Accessories", name: "Phụ kiện" },
  { categoryId: "Routers", name: "Thiết bị mạng - Kết nối" },
  { categoryId: "Software", name: "Phần mềm" },
];
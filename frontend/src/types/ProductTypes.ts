import { Seller } from "./SellerTypes";

export interface AttributeItem {
  key: string;
  value: string;
}

export interface Product{
    id?:number;
    title:string;
    description:string,
    orgPrice: number;
    sellingPrice: number;
    discountPercent:number;
    quantity: number;
    color:string;
    images: string[];
    numRatings?:number;
    category?:Category;
    seller?:Seller;
    createdAt?:Date;
    attributes: AttributeItem[];// Thay "sizes: string" bang attributes vi san pham la dien tu, moi san pham co bo thuoc tinh ky thuat rieng (RAM, CPU, kich thuoc...)
  
}


export interface Category {
  id?: number;
  name: string;         // VD: "Màn hình máy tính - Tivi"
  categoryId: string;   // VD: "Laptop", "Core", "Monitor"
  category2?: string;   // VD: "By Brand", "Gaming Laptops"
  category3?: string;   // VD: "Dell", "Asus ROG"
}
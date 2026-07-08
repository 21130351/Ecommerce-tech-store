import { CartItem } from "../types/CartTypes";


// 1. Hàm tính TỔNG TIỀN GỐC của giỏ hàng (Khi CHƯA giảm giá)
// -> Cách tính: Cộng dồn tất cả (Giá gốc x Số lượng) của từng món đồ
export const sumCartItemOrgPrice =(cartItems:CartItem[]) => {

    return cartItems.reduce((acc, item)=>acc+item.orgPrice*item.quantity,0)

}

// 2. Hàm tính TỔNG TIỀN THỰC TRẢ của giỏ hàng (Sau khi ĐÃ giảm giá)
// -> Cách tính: Cộng dồn tất cả (Giá bán thực tế x Số lượng) của từng món đồ
export const sumCartItemSellingPrice=(cartItems:CartItem[]) => {
    return cartItems.reduce((acc,item) => acc+item.sellingPrice*item.quantity,0)

}
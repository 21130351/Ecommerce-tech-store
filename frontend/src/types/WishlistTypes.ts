import { Product } from "./ProductTypes";
import { User } from "./UserTypes";

export interface Wishlist {
    id: number;
    user: User;
    products: Product[];
}

export interface WishlistState {
    wishlist: Wishlist | null;
    loading: boolean;
    error: string | null;
}

//payload interface for asyn thunks
export interface AddProductToWishlistPayload {
    wishlistId: number;
    productId: number;
}
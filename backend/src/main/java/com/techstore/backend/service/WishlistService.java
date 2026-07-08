package com.techstore.backend.service;

import com.techstore.backend.modal.Product;
import com.techstore.backend.modal.User;
import com.techstore.backend.modal.Wishlist;

public interface WishlistService {

    Wishlist createWishlist(User user);
    Wishlist getWishlistByUserId(User user);
    Wishlist addProductToWishlist(User user, Product product);
}

package com.techstore.backend.service;

import com.techstore.backend.modal.Cart;
import com.techstore.backend.modal.CartItem;
import com.techstore.backend.modal.Product;
import com.techstore.backend.modal.User;

public interface CartService {

    public CartItem addCartItem(
            User user,
            Product product,
            String size,
            int quantity
    );

    public Cart findUserCart(User user);
}

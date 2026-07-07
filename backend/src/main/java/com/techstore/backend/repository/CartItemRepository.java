package com.techstore.backend.repository;

import com.techstore.backend.modal.Cart;
import com.techstore.backend.modal.CartItem;
import com.techstore.backend.modal.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {

    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);

}

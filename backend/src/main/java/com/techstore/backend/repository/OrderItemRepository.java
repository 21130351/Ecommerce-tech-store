package com.techstore.backend.repository;

import com.techstore.backend.modal.Order;
import com.techstore.backend.modal.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}

package com.techstore.backend.controller;

import com.techstore.backend.domain.OrderStatus;
import com.techstore.backend.modal.Order;
import com.techstore.backend.modal.Seller;
import com.techstore.backend.service.OrderService;
import com.techstore.backend.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/seller/orders")
public class SellerOrderController {

    private final OrderService  orderService;
    private final SellerService sellerService;

    @GetMapping()
    public ResponseEntity<List<Order>> getAllOrdersHandler(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        Seller seller = sellerService.getSellerProfile(jwt);
        List<Order> orders = orderService.sellersOrder( seller.getId());

        return new  ResponseEntity<>(orders, HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{orderId}/status/{orderStatus}")
    public ResponseEntity<Order> updateOrderHandler(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long orderId,
            @PathVariable OrderStatus orderStatus
    ) throws Exception {
        Order order = orderService.updateOrderStatus(orderId, orderStatus);

        return new  ResponseEntity<>(order, HttpStatus.ACCEPTED);
    }
}

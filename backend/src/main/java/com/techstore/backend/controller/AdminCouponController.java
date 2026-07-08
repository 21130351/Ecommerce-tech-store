package com.techstore.backend.controller;

import com.techstore.backend.modal.Cart;
import com.techstore.backend.modal.Coupon;
import com.techstore.backend.modal.User;
import com.techstore.backend.service.CartService;
import com.techstore.backend.service.CouponService;
import com.techstore.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/coupons")
public class AdminCouponController {

    private final CouponService couponService;
    private final UserService userService;
    private final CartService cartService;

    @PostMapping("/apply")
    public ResponseEntity<Cart> applyCoupon(@RequestParam String apply,
                                            @RequestParam String code,
                                            @RequestParam double orderValue,
                                            @RequestHeader("Authorization")  String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        Cart cart;

        if (apply.equals("true")) {
            cart = couponService.applyCoupon(code, orderValue, user);
        }
        else {
            cart = couponService.removeCoupon(code, user);
        }

        return ResponseEntity.ok(cart);
    }

    @PostMapping("/admin/create")
    public ResponseEntity<Coupon> createCoupon(@RequestBody Coupon coupon) {
        Coupon createdCoupon = couponService.createCoupon(coupon);
        return ResponseEntity.ok(createdCoupon);
    }

    @DeleteMapping("/admin/delete/{id}")
    public ResponseEntity<?> deleteCoupon(@PathVariable Long id) throws Exception{
        couponService.deleteCoupon(id);
        return ResponseEntity.ok("Coupon deleted successfully");
    }

    @GetMapping("/admin/all")
    public ResponseEntity<List<Coupon>>  getAllCoupons() {
        List<Coupon> coupons = couponService.findAllCoupons();
        return ResponseEntity.ok(coupons);
    }
}

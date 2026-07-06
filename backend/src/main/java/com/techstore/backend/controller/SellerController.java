package com.techstore.backend.controller;

import com.techstore.backend.modal.VerificationCode;
import com.techstore.backend.repository.VerificationCodeRepository;
import com.techstore.backend.request.LoginRequest;
import com.techstore.backend.response.ApiResponse;
import com.techstore.backend.response.AuthResponse;
import com.techstore.backend.service.AuthService;
import com.techstore.backend.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/sellers")
public class SellerController {

    private final SellerService sellerService;
    private final VerificationCodeRepository  verificationCodeRepository;
    private final AuthService authService;



    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginSeller (
            @RequestBody LoginRequest req
            ) throws Exception {

        String otp = req.getOtp();
        String email = req.getEmail();


        req.setEmail("seller_"+email);
        AuthResponse authResponse = authService.signing(req);

        return ResponseEntity.ok(authResponse);
    }

}

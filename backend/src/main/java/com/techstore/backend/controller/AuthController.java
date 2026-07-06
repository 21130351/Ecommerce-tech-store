package com.techstore.backend.controller;

import com.techstore.backend.domain.USER_ROLE;
import com.techstore.backend.modal.User;
import com.techstore.backend.modal.VerificationCode;
import com.techstore.backend.repository.UserRepository;
import com.techstore.backend.request.LoginOtpRequest;
import com.techstore.backend.request.LoginRequest;
import com.techstore.backend.response.ApiResponse;
import com.techstore.backend.response.AuthResponse;
import com.techstore.backend.response.SignupRequest;
import com.techstore.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req) throws Exception {

        String jwt = authService.createUser(req);

        AuthResponse res = new AuthResponse();
        res.setJwt(jwt);
        res.setMessage("register success");
        res.setRole(USER_ROLE.ROLE_CUSTOMER);

        return ResponseEntity.ok(res);
    }

    @PostMapping("/sent/login-signup-otp")
    public ResponseEntity<ApiResponse> sentOtpHandler(@RequestBody LoginOtpRequest req) throws Exception {

        authService.sentLoginOtp(req.getEmail(), req.getRole());

        ApiResponse res = new ApiResponse();

        res.setMessage("otp sent successfully");

        return ResponseEntity.ok(res);
    }

    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> loginHandler(@RequestBody LoginRequest req) throws Exception {

       AuthResponse authResponse = authService.signing(req);


        return ResponseEntity.ok(authResponse);
    }
}

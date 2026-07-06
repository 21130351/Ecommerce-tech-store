package com.techstore.backend.service;

import com.techstore.backend.domain.USER_ROLE;
import com.techstore.backend.request.LoginRequest;
import com.techstore.backend.response.AuthResponse;
import com.techstore.backend.response.SignupRequest;

public interface AuthService {

    void sentLoginOtp(String email, USER_ROLE role) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signing(LoginRequest req) throws Exception;
}

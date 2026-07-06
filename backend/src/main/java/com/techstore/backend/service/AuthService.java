package com.techstore.backend.service;

import com.techstore.backend.request.LoginRequest;
import com.techstore.backend.response.AuthResponse;
import com.techstore.backend.response.SignupRequest;

public interface AuthService {

    void sentLoginOtp(String email) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signing(LoginRequest req);
}

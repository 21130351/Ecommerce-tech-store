package com.techstore.backend.controller;

import com.techstore.backend.domain.USER_ROLE;
import com.techstore.backend.modal.User;
import com.techstore.backend.response.AuthResponse;
import com.techstore.backend.response.SignupRequest;
import com.techstore.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/api/users/profile")
    public ResponseEntity<User> UserProfileHandler(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        return ResponseEntity.ok(user);
    }
}

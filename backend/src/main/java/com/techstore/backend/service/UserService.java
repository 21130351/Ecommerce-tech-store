package com.techstore.backend.service;

import com.techstore.backend.modal.User;

public interface UserService {

    User findUserByJwtToken(String jwt) throws Exception;
    User findUserByEmail(String email) throws Exception;
}

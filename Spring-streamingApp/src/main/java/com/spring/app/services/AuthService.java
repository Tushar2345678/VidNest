package com.spring.app.services;

import com.spring.app.controllers.AuthResponse;
import com.spring.app.controllers.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
}

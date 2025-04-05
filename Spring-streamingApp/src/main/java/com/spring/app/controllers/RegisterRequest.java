package com.spring.app.controllers;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.spring.app.entities.User;
import com.spring.app.helper.Role;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String password;
    private String email;
     public User toUserEntity(PasswordEncoder encoder) {
        User user = new User();
        user.setUsername(this.username);
        user.setPassword(encoder.encode(this.password));
        user.setEmail(this.email);
        user.setRole(Role.USER);
        return user;
    }
   
}

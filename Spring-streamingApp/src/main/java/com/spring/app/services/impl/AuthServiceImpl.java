package com.spring.app.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.app.config.JwtUtil;
import com.spring.app.controllers.AuthRequest;
import com.spring.app.controllers.AuthResponse;
import com.spring.app.controllers.RegisterRequest;
import com.spring.app.entities.User;
import com.spring.app.helper.Role;
import com.spring.app.repositories.UserRepository;
import com.spring.app.services.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired 
    private UserRepository userRepository;
    
    @Autowired 
    private PasswordEncoder passwordEncoder;
    
    @Autowired 
    private JwtUtil jwtUtil;

    @Autowired 
    private UserDetailsServiceImpl userDetailsService;

    @Override
    public AuthResponse register(RegisterRequest request) {
        // Save the user
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmail(request.getEmail());
        user.setRole(Role.USER); // or "USER", depending on your setup

        userRepository.save(user);

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        // Generate JWT
        String token = jwtUtil.generateToken(userDetails);

        return new AuthResponse(token);
    }
}

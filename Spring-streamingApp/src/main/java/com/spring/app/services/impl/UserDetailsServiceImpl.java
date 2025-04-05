package com.spring.app.services.impl;
import com.spring.app.entities.User;
import com.spring.app.repositories.UserRepository;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // Load user by username or email
    @Override
    public UserDetails loadUserByUsername(String input) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(input)
            .orElseGet(() -> userRepository.findByEmail(input)
            .orElseThrow(() -> new UsernameNotFoundException("User not found with username or email: " + input)));
    
        return new org.springframework.security.core.userdetails.User(
            user.getEmail(), // or user.getUsername() based on how you use it
            user.getPassword(),
            Collections.emptyList()
        );
    }
    
}

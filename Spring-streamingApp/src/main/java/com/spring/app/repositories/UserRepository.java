package com.spring.app.repositories;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.app.entities.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email); // or findByUsername if you use username

    Optional<User> findByUsername(String input);
}


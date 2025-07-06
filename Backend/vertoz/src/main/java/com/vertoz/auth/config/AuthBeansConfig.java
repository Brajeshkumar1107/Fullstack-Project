package com.vertoz.auth.config;

import org.springframework.context.annotation.Configuration;

import com.vertoz.repository.UserRepository;

@Configuration
public class AuthBeansConfig {

    private final UserRepository userRepository;

    public AuthBeansConfig(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

}

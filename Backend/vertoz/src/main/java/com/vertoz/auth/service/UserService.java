package com.vertoz.auth.service;

import com.vertoz.model.User;
import com.vertoz.repository.UserRepository;
import com.vertoz.auth.AuthRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repo;
    private final PasswordEncoder encoder;

    public String register(AuthRequest request) {
        if (repo.findByEmail(request.getEmail()).isPresent()) {
            return "User already exists!";
        }

        User user = User.builder()
                .email(request.getEmail())
                .password(encoder.encode(request.getPassword()))
                .build();
        repo.save(user);
        return "User registered successfully";
    }
}

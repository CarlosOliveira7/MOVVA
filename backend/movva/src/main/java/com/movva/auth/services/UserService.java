package com.movva.auth.services;

import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.movva.auth.entities.User;
import com.movva.auth.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public User registerUser(String username, String password) {
        String encryptedPassword = passwordEncoder.encode(password);
        User user = new User(username, encryptedPassword);
        return userRepository.save(user);
    }

    public Optional<User> FindByUsername(String username) {
        return userRepository.findByUsername(username);
    }


}

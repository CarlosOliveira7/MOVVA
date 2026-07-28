package com.movva.auth.controllers;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movva.auth.dto.AuthResponse;
import com.movva.auth.dto.LoginRequest;
import com.movva.auth.dto.RegisterRequest;
import com.movva.auth.entities.User;
import com.movva.auth.security.JwtUtil;
import com.movva.auth.services.UserService;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserService userService;
    private final JwtUtil jwtUtil;

    public AuthController(UserService userService,JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {

        User user = userService.registerUser(request.username(), request.password());

        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<User> user = userService.FindByUsername(request.username());

        if (user.isPresent()) {

            String token = jwtUtil.generateToken(user.get().getUsername());

            return ResponseEntity.ok(new AuthResponse(token));
        }
        return ResponseEntity.status(401).body("Invalid Credentials");
    }
    
}

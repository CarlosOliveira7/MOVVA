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

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;

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

        User user = userService.registerUser(request.email(), request.password());

        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<User> user = userService.FindByEmail(request.email());

        if (user.isPresent()) {

            String token = jwtUtil.generateToken(user.get().getEmail());
            ResponseCookie jwtCookie = ResponseCookie.from("token", token)
                    .httpOnly(true)            
                    .secure(false)            
                    .path("/")                 
                    .maxAge(7 * 24 * 60 * 60)  
                    .sameSite("Lax")          
                    .build();

            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                    .body("Login realizado com sucesso!");
        }
        return ResponseEntity.status(401).body("Invalid Credentials");
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        ResponseCookie cookie = ResponseCookie.from("token", "")
                .httpOnly(true)
                .path("/")
                .maxAge(0)
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body("Logout realizado com sucesso!");
    }
    
}

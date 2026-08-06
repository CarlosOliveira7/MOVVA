package com.movva.auth.dto;

public record LoginRequest(
    String email,
    String password
) {
    
}

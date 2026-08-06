package com.movva.auth.dto;

public record RegisterRequest(
    String email,
    String password
) {
    
}

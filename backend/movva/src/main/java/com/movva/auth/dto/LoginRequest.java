package com.movva.auth.dto;

public record LoginRequest(
    String username,
    String password
) {
    
}

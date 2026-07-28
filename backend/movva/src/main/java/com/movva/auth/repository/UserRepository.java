package com.movva.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movva.auth.entities.User;

public interface UserRepository extends JpaRepository<User,Long>{
    

    Optional<User> findByUsername(String username);
}

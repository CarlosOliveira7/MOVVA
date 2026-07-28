package com.movva.movva;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.movva")
@EnableJpaRepositories(basePackages = "com.movva")
@EntityScan(basePackages = "com.movva")
public class MovvaApplication {

    public static void main(String[] args) {
        SpringApplication.run(MovvaApplication.class, args);
    }
}
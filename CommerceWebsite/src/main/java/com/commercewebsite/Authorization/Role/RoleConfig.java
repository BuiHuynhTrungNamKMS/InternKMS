package com.commercewebsite.Authorization.Role;


import com.commercewebsite.Authorization.Repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class RoleConfig {
    @Bean
    CommandLineRunner createDefaultRole(RoleRepository repo){
        return args -> {
            Role user = new Role(
                    ERole.ROLE_USER
            );
            Role admin = new Role(
                    ERole.ROLE_ADMIN
            );
            repo.saveAll(List.of(user, admin));
        };
    }
}
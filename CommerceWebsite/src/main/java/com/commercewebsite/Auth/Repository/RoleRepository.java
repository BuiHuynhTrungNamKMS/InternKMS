package com.commercewebsite.Auth.Repository;

import java.util.Optional;

import com.commercewebsite.Auth.Role.ERole;
import com.commercewebsite.Auth.Role.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}


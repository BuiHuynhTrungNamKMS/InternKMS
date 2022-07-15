package com.commercewebsite.Authorization.Repository;

import java.util.Optional;

import com.commercewebsite.Authorization.Role.ERole;
import com.commercewebsite.Authorization.Role.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}


package com.commercewebsite.Cart;

import com.commercewebsite.Auth.Security.service.UserDetailsImpl;
import com.commercewebsite.Auth.Security.service.UserDetailsServiceImpl;
import com.commercewebsite.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class CartController {
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @GetMapping("/cart")
    public UserDetails cart(@AuthenticationPrincipal UserDetailsImpl user) {
        System.out.println("11111111111111111111111111111111111111111111111111111111111111111_" + user.getId());

        return userDetailsService.loadUserByUsername("trungnam");


    }

}
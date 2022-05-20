package com.commercewebsite.Authorization.Auth;

import com.commercewebsite.Authorization.Payload.Request.LoginRequest;
import com.commercewebsite.Authorization.Payload.Request.SignupRequest;
import com.commercewebsite.Authorization.Payload.Response.JwtResponse;
import com.commercewebsite.Authorization.Payload.Response.MessageResponse;
import com.commercewebsite.Authorization.Repository.RoleRepository;
import com.commercewebsite.Authorization.Role.ERole;
import com.commercewebsite.Authorization.Role.Role;
import com.commercewebsite.Authorization.Security.jwt.JwtUtils;
import com.commercewebsite.Authorization.Security.service.UserDetailsImpl;
import com.commercewebsite.Message.ResponseMessage;
import com.commercewebsite.Whistlist.WhistlistService;
import com.commercewebsite.user.User;
import com.commercewebsite.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AuthService {

    @Autowired
    private final WhistlistService whistlistService;
    ResponseMessage responseMessage;
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    public AuthService(WhistlistService whistlistService) {
        this.whistlistService = whistlistService;
    }

    public ResponseEntity<?> authenticateUser(LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    public ResponseEntity<?> registerUser(SignupRequest signUpRequest){
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse(responseMessage.ERROR_USERNAME_IS_ALREADY_USED.toString()));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse(responseMessage.ERROR_EMAIL_IS_ALREADY_USED.toString()));
        }

        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException(responseMessage.ERROR_ROLE_IS_NOT_FOUND.toString()));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException(responseMessage.ERROR_ROLE_IS_NOT_FOUND.toString()));
                        roles.add(adminRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException(responseMessage.ERROR_ROLE_IS_NOT_FOUND.toString()));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);
        whistlistService.addNewWhistlist(user);
        return ResponseEntity.ok(new MessageResponse(responseMessage.REGISTER_SUCCESSFULLY.toString()));
    }
}

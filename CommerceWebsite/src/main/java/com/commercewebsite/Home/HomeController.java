package com.commercewebsite.Home;


import com.commercewebsite.Message.ResponseMessage;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/home")
public class HomeController {
    ResponseMessage responseMessage;
    @GetMapping("/all")
    public String allAccess() {
        return responseMessage.PUBLIC_CONTENT.toString();
    }


    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public String userAccess() {
        return responseMessage.USER_CONTENT.toString();
    }
    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return responseMessage.ADMIN_CONTENT.toString();
    }
}

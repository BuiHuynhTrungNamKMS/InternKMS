package com.commercewebsite.Whistlist;

import com.commercewebsite.Auth.Security.service.UserDetailsImpl;
import com.commercewebsite.Item.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class WhistlistController {

    private final ItemService itemService;

    private final WhistlistRepository whistlistRepository;
    @Autowired
    public WhistlistController(ItemService itemService, WhistlistRepository whistlistRepository) {
        this.itemService = itemService;
        this.whistlistRepository = whistlistRepository;
    }

    @GetMapping("/whistlist/add/{producId}/{quantity}")
    public String cart(@AuthenticationPrincipal UserDetailsImpl user, @PathVariable Long producId, @PathVariable Integer quantity) {
        //user.getId()

        itemService.addNewItem(whistlistRepository.FindByMax(),producId,quantity);
        return "Add successfully";
    }

}
package com.commercewebsite.Whistlist;

import com.commercewebsite.Authorization.Security.service.UserDetailsImpl;
import com.commercewebsite.Item.ItemService;
import com.commercewebsite.Message.ResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api")
public class WhistlistController {
    ResponseMessage responseMessage;
    private final ItemService itemService;
    private final WhistlistRepository whistlistRepository;
    @Autowired
    public WhistlistController(ItemService itemService, WhistlistRepository whistlistRepository) {
        this.itemService = itemService;
        this.whistlistRepository = whistlistRepository;
    }

    @GetMapping("/whistlist/add/{producId}/{quantity}")
    public String cart(@AuthenticationPrincipal UserDetailsImpl user, @PathVariable Long producId, @PathVariable Integer quantity) {
        itemService.addNewItem(whistlistRepository.FindByMax(),producId,quantity);
        return responseMessage.ADD_SUCCESSFULLY.toString();
    }

}
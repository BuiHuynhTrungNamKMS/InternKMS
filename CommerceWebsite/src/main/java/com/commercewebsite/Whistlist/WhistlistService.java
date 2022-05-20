package com.commercewebsite.Whistlist;

import com.commercewebsite.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WhistlistService {
    private final WhistlistRepository whistlistRepository;

    @Autowired
    public WhistlistService(WhistlistRepository whistlistRepository) {
        this.whistlistRepository = whistlistRepository;
    }

    public void addNewWhistlist(User user){
        Whistlist whistlist = new Whistlist(user);
        whistlistRepository.save(whistlist);
    }
}

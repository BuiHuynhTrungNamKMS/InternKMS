package com.commercewebsite.Item;

import com.commercewebsite.Whistlist.WhistlistRepository;
import com.commercewebsite.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    private final ProductRepository productRepository;
    private final WhistlistRepository whistlistRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository, ProductRepository productRepository, WhistlistRepository whistlistRepository) {
        this.itemRepository = itemRepository;
        this.productRepository = productRepository;
        this.whistlistRepository = whistlistRepository;
    }

    public void addNewItem(Long whistlistId, Long productId, Integer quantity){
        Item item = new Item(whistlistRepository.findById(whistlistId).get(), productRepository.findById(productId).get(),quantity);
        itemRepository.save(item);
    }

}

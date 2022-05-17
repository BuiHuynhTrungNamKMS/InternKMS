package com.commercewebsite.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/all")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/search")
    public List<Product> searchByName(@RequestParam(name = "name") String name){
        return productService.findByName(name);
    }
    @GetMapping("/sort")
    public List<Product> sortByPrice(){
        return productService.sortByPrice();
    }
    @GetMapping("/{id}")
    Product detailProduct(@PathVariable Long id) {
        return productService.findById(id);

    }
    @PostMapping
    public void addNewProduct(@RequestBody Product product){
        productService.addNewProduct(product);
    }
}

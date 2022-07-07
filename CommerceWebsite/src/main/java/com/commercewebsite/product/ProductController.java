package com.commercewebsite.product;

import com.commercewebsite.Authorization.Payload.Request.SignupRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin()
@RequestMapping(path="api/product")
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
    @GetMapping("/count")
    public long getNumberOfProducts(){
        return productService.getNumberOfProducts();
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
    @GetMapping("/trending")
    public List<Product> trendingMale(@RequestParam(name = "gender") String gender){
        return productService.findByStatusAndGender("Trending", gender);
    }
    @GetMapping("/pagination")
    public List<Product> getProductwithPagination(@RequestParam(name = "page") String page){
        return productService.findProductsWithPagination(Integer.parseInt(page));
    }
    @GetMapping("")
    public List<Product> searchByGender(@RequestParam(name = "gender") String gender){
        return productService.findByGender(gender);
    }
    @GetMapping("/delete/{id}")
    public void deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
    }
    @PostMapping("/add")
    public void addProduct(@Valid @RequestBody AddRequest addRequest){
        productService.addProduct(addRequest);
    }
    @PostMapping("/update")
    public void updateProduct(@Valid @RequestBody AddRequest addRequest){
        productService.updateProduct(addRequest);
    }
//    @PostMapping
//    public void addNewProduct(@RequestBody Product product){
//        productService.addNewProduct(product);
//    }
}

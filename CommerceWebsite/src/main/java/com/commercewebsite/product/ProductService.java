package com.commercewebsite.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public long getNumberOfProducts(){return productRepository.count();}
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    public void addNewProduct(Product product) {
        System.out.printf(product.toString());
    }

    public List<Product> findByName(String name) {
        return productRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Product> findByGender(String gender) {
        return productRepository.findByGender(gender);
    }

    public List<Product> sortByPrice() {
        return productRepository.findByOrderByPriceAsc();
    }

    public Product findById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Couldn't find anyone product at '" + id + "'"));
    }
    public List<Product> findByStatusAndGender(String status, String gender) {
        return productRepository.findByStatusAndGender(status, gender);
    }
    public List<Product> findProductsWithPagination(int offset) {
        Page<Product> products =  productRepository.findAll(PageRequest.of(offset, 4));
        return products.getContent();
    }
}

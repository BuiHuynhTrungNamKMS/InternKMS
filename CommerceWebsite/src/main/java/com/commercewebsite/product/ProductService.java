package com.commercewebsite.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> clearDeleteProduct(List<Product> products){
        List<Product> temp = new ArrayList<>();
        for (Product p : products) {
            if(p.getDeleteAt() == null) temp.add(p);
        }
        return temp;
    }
    public long getNumberOfProducts(){return productRepository.count();}
    public List<Product> getAllProducts() {
        return clearDeleteProduct(productRepository.findAll());
    }

    public List<Product> findByKeyword(String keyword, Integer offset, Integer size) {
        List<Product> data = clearDeleteProduct(productRepository.findByKeyword(keyword));

        if (data.size() - 1 < offset*size)    data.clear();
        else if(data.size() - 1 >= offset*size && data.size() < offset*size + size) data = data.subList(offset*size, data.size());
        else data = data.subList(offset*size, offset*size + size);
        return data;
    }

    public List<Product> sortByPrice() {
        return clearDeleteProduct(productRepository.findByOrderByPriceAsc());
    }

    public Product findById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Couldn't find anyone product at '" + id + "'"));
    }
    public List<Product> findByStatusAndGender(String status, String gender) {
        return clearDeleteProduct(productRepository.findByStatusAndGender(status, gender));
    }
    public List<Product> findProductsWithPagination(int offset) {
        Page<Product> products =  productRepository.findAll(PageRequest.of(offset, 4));
        return clearDeleteProduct(products.getContent());
    }
    public void deleteProduct(Long id){
        LocalDateTime currentDate = LocalDateTime.now();
        Product product = productRepository.findById(id).get();
        product.setDeleteAt(currentDate);
        productRepository.save(product);
    }

    public void addProduct(AddRequest addRequest){
        LocalDateTime currentDate = LocalDateTime.now();
        Product product = new Product(
                addRequest.getProductName(),
                addRequest.getType(),
                addRequest.getPrice(),
                addRequest.getColor(),
                addRequest.getDescription(),
                addRequest.getImage(),
                addRequest.getGender(),
                addRequest.getStatus(),
                currentDate
        );
        productRepository.save(product);
    }
    public void updateProduct(AddRequest addRequest){
        LocalDateTime currentDate = LocalDateTime.now();
        Product product = productRepository.findById(addRequest.getId()).get();

        product.setName(addRequest.getProductName());
        product.setType(addRequest.getType());
        product.setPrice(addRequest.getPrice());
        product.setDescribe(addRequest.getDescription());
        product.setImage(addRequest.getImage());
        product.setGender(addRequest.getGender());
        product.setUpdateAt(currentDate);

        productRepository.save(product);
    }
    public List<Product> filter(String type, String gender, Integer offset, Integer size){
        List<Product> data;
        if(type.equals("all"))  type = null;
        if(gender.equals("all")) gender = null;

        Product example = Product
                .builder()
                .type(type) // firstName from parameter
                .gender(gender) // lastName from parameter
                .build();
        data =  clearDeleteProduct(productRepository.findAll(Example.of(example)));

        if(data.size() - 1 < offset*size)    data.clear();
        else if(data.size() - 1 >= offset*size && data.size() < offset*size + size) data = data.subList(offset*size, data.size());
        else data = data.subList(offset*size, offset*size + size);

        return clearDeleteProduct(data);
    }
}

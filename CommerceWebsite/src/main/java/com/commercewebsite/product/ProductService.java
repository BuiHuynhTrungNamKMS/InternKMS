package com.commercewebsite.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
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

    public List<Product> findByKeyword(String keyword, Integer offset, Integer size) {
        List<Product> data = productRepository.findByKeyword(keyword);

        if (data.size() - 1 < offset*size)    data.clear();
        else if(data.size() - 1 >= offset*size && data.size() < offset*size + size) data = data.subList(offset*size, data.size());
        else data = data.subList(offset*size, offset*size + size);
        return data;
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
    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }

    public void addProduct(AddRequest addRequest){
        Product product = new Product(
                addRequest.getProductName(),
                addRequest.getType(),
                addRequest.getPrice(),
                addRequest.getColor(),
                addRequest.getDescription(),
                addRequest.getImage(),
                addRequest.getGender(),
                addRequest.getStatus()
        );
        System.out.println(product);
        productRepository.save(product);
    }
    public void updateProduct(AddRequest addRequest){
        Product product = productRepository.findById(addRequest.getId()).get();

        product.setName(addRequest.getProductName());
        product.setType(addRequest.getType());
        product.setPrice(addRequest.getPrice());
        product.setDescribe(addRequest.getDescription());
        product.setImage(addRequest.getImage());
        product.setGender(addRequest.getGender());

        System.out.println(product);
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
        data =  productRepository.findAll(Example.of(example));

        if(data.size() - 1 < offset*size)    data.clear();
        else if(data.size() - 1 >= offset*size && data.size() < offset*size + size) data = data.subList(offset*size, data.size());
        else data = data.subList(offset*size, offset*size + size);

        return data;
    }
}

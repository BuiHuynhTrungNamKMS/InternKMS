package com.commercewebsite;

import com.commercewebsite.product.Product;
import com.commercewebsite.product.ProductRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.time.LocalDateTime;
import java.util.Optional;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class CRUDTest {
    @Autowired private ProductRepository repo;

    @Test
    public void addNewProduct(){
        LocalDateTime currentDate = LocalDateTime.now();
        Product product = new Product(
                "abc",
                "Jean",
                1000,
                "Blue",
                "Welcome",
                "abc.com",
                "female",
                "Hot",
                currentDate
        );

        Product savedProduct = repo.save(product);
        Assertions.assertThat(savedProduct).isNotNull();
        Assertions.assertThat(savedProduct.getId()).isGreaterThan(0);
    }
    @Test
    public void testListAll(){
        Iterable<Product> users = repo.findAll();
        Assertions.assertThat(users).hasSizeGreaterThan(0);
    }

    @Test
    public void testUpdate(){
        Product product = repo.findById(Long.valueOf(1)).get();
        product.setName("HiHiHi");
        repo.save(product);
        Product updatedUser = repo.findById(Long.valueOf(1)).get();
        Assertions.assertThat(updatedUser.getName()).isEqualTo("HiHiHi");
    }
    @Test
    public void testGetById() {
        Optional<Product> product = repo.findById(Long.valueOf(2));
        Assertions.assertThat(product).isPresent();
        System.out.println(product.get());
    }
    @Test
    public void testDeleteById() {
        repo.deleteById(Long.valueOf(2));
        Optional<Product> product = repo.findById(Long.valueOf(2));
        Assertions.assertThat(product).isNotPresent();
    }
}

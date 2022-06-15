package com.commercewebsite.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {

    List<Product> findAllByName(String name);

    List<Product> findByNameContainingIgnoreCase(String name);
    List<Product> findByGender(String gender);

    List<Product> findByOrderByPriceAsc();
}

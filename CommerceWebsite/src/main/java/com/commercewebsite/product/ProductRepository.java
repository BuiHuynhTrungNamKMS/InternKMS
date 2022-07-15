package com.commercewebsite.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findAllByName(String name);
    @Query(value = "select * from Product p where p.name like %:keyword%", nativeQuery = true)
    List<Product> findByKeyword(String keyword);
    List<Product> findByGender(String gender);

    List<Product> findByOrderByPriceAsc();
    List<Product> findByStatusAndGender(String status, String gender);
}

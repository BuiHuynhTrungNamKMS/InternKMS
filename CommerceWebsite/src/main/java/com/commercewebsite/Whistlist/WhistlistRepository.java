package com.commercewebsite.Whistlist;

import com.commercewebsite.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface WhistlistRepository extends JpaRepository<Whistlist, Long> {

    @Query("select max(id) from Whistlist")
    Long FindByMax();
}

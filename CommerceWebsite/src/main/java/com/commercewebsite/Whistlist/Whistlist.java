package com.commercewebsite.Whistlist;

import com.commercewebsite.Item.Item;
import com.commercewebsite.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Whistlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    @OneToMany(mappedBy="whistlist")
    private Set<Item> items = new HashSet<>();

    public Whistlist(Set<Item> items) {
        this.items = items;
    }



    public Whistlist(User user) {
        this.user = user;
    }

    public Whistlist(Long id, Set<Item> items) {
        this.id = id;
        this.items = items;
    }


}
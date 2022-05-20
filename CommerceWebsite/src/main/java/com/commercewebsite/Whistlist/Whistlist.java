package com.commercewebsite.Whistlist;

import com.commercewebsite.Item.Item;
import com.commercewebsite.user.User;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
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

    public Whistlist() {
    }

    public Whistlist(Long id, Set<Item> items) {
        this.id = id;
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Whistlist{" +
                "id=" + id +
                ", items=" + items +
                '}';
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }

    public Set<Item> getItems() {
        return items;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
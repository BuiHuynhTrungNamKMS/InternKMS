package com.commercewebsite.product;

import com.commercewebsite.Item.Item;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
public class Product {
    @Id
    @SequenceGenerator(
            name = "product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_sequence"
    )
    private Long id;
    private String name;
    private String type;
    private Integer price;
    private String color;
    private String describe;
    private String gender;
    private String image;
    @OneToMany(mappedBy="product")
    private Set<Item> items = new HashSet<>();

    public Product(Long id, String name, String type, int price, String color, String describe, String image, String gender) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.color = color;
        this.describe = describe;
        this.image = image;
        this.gender = gender;
    }

    public Product() {
    }

    public Product(String name, String type, int price, String color, String describe, String image, String gender) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.color = color;
        this.describe = describe;
        this.image = image;
        this.gender = gender;
    }

    public Product(String name, String type, Integer price, String color, String describe, Set<Item> items, String image, String gender) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.color = color;
        this.describe = describe;
        this.items = items;
        this.image = image;
        this.gender = gender;
    }

    public Product(Long id) {
        this.id = id;
    }

    public Set<Item> getItems() {
        return items;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public int getPrice() {
        return price;
    }

    public String getColor() {
        return color;
    }

    public String getDescribe() {
        return describe;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", price=" + price +
                ", color='" + color + '\'' +
                ", describe='" + describe + '\'' +
                ", gender='" + gender + '\'' +
                ", image='" + image + '\'' +
                ", items=" + items +
                '}';
    }
}

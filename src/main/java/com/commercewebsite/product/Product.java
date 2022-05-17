package com.commercewebsite.product;

import javax.persistence.*;

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

    public Product(Long id, String name, String type, int price, String color, String describe) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.color = color;
        this.describe = describe;
    }

    public Product() {
    }

    public Product(String name, String type, int price, String color, String describe) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.color = color;
        this.describe = describe;
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
                '}';
    }
}

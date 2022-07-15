package com.commercewebsite.product;

import com.commercewebsite.Item.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
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
    private String status;
    @Column(columnDefinition = "TEXT")
    private String image;
    @OneToMany(mappedBy="product")
    private Set<Item> items = new HashSet<>();

    private LocalDateTime createAt;
    private LocalDateTime  deleteAt;
    private LocalDateTime  updateAt;
    public Product(Long id, String name, String type, int price, String color, String describe, String image, String gender, String status) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.color = color;
        this.describe = describe;
        this.image = image;
        this.gender = gender;
        this.status = status;
    }

    public Product(String name, String type, int price, String color, String describe, String image, String gender, String status, LocalDateTime  createAt) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.color = color;
        this.describe = describe;
        this.image = image;
        this.gender = gender;
        this.status = status;
        this.createAt = createAt;
    }

    public Product(String name, String type, Integer price, String color, String describe, Set<Item> items, String image, String gender, String status) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.color = color;
        this.describe = describe;
        this.items = items;
        this.image = image;
        this.gender = gender;
        this.status = status;
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

    public Integer getPrice() {
        return price;
    }

    public String getColor() {
        return color;
    }

    public String getDescribe() {
        return describe;
    }

    public String getGender() {
        return gender;
    }

    public String getStatus() {
        return status;
    }

    public String getImage() {
        return image;
    }

    public Set<Item> getItems() {
        return items;
    }

    public LocalDateTime getCreateAt() {
        return createAt;
    }

    public LocalDateTime getDeleteAt() {
        return deleteAt;
    }

    public LocalDateTime getUpdateAt() {
        return updateAt;
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

    public void setPrice(Integer price) {
        this.price = price;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }

    public void setCreateAt(LocalDateTime createAt) {
        this.createAt = createAt;
    }

    public void setDeleteAt(LocalDateTime deleteAt) {
        this.deleteAt = deleteAt;
    }

    public void setUpdateAt(LocalDateTime updateAt) {
        this.updateAt = updateAt;
    }
}

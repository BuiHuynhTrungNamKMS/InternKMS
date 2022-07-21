package com.commercewebsite.product;

import com.commercewebsite.Item.Item;
import lombok.*;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(indexes = @Index(name = "idx_name_gender",columnList = "name, gender"))
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
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
}

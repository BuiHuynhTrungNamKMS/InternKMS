package com.commercewebsite.Item;

import com.commercewebsite.Whistlist.Whistlist;
import com.commercewebsite.product.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(indexes = @Index(name = "idx_whistlist_product",columnList = "whistlist_id, product_id"))
@Setter
@Getter
@ToString
@NoArgsConstructor
public class Item {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne
        @JoinColumn(name="whistlist_id", nullable=false)
        private Whistlist whistlist;

        @ManyToOne
        @JoinColumn(name="product_id", nullable=false)
        private Product product;
        private Integer quantity;

        public Item(Long id, Whistlist whistlist, Product product, Integer quantity) {
                this.id = id;
                this.whistlist = whistlist;
                this.product = product;
                this.quantity = quantity;
        }

        public Item(Whistlist whistlist, Product product, Integer quantity) {
                this.whistlist = whistlist;
                this.product = product;
                this.quantity = quantity;
        }

}

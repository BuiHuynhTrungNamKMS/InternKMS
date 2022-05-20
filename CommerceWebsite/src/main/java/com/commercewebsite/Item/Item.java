package com.commercewebsite.Item;

import com.commercewebsite.Whistlist.Whistlist;
import com.commercewebsite.product.Product;

import javax.persistence.*;

@Entity
@Table(indexes = @Index(name = "idx_whistlist_product",columnList = "whistlist_id, product_id"))
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

        public Item() {
        }

        public void setProduct(Product product) {
                this.product = product;
        }

        public Long getId() {
                return id;
        }

        public void setWhistlist(Whistlist whistlist) {
                this.whistlist = whistlist;
        }

        public void setQuantity(Integer quantity) {
                this.quantity = quantity;
        }

        public void setId(Long id) {
                this.id = id;
        }

        @Override
        public String toString() {
                return "Item{" +
                        "id=" + id +
                        ", whistlist=" + whistlist +
                        ", quantity=" + quantity +
                        '}';
        }
}

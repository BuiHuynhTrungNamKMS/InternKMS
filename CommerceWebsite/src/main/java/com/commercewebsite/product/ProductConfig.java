package com.commercewebsite.product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ProductConfig {
    @Bean
    CommandLineRunner createDefaultProduct(ProductRepository repo){
        return args -> {
            Product A = new Product(
                    "Cotton jersey T-shirt",
                    "Shirt",
                    550,
                    "white",
                    "Since its beginning, the House has always been inspired by other times and places",
                    "https://images.hugoboss.com/is/image/boss/hbeu50473056_001_350?$large$=&fit=crop,1&align=1,1&wid=462&qlt=80",
                    "male"
            );

            Product B = new Product(
                    "Crepe de chine dress",
                    "Dress",
                    5700,
                    "blue",
                    "Taking shape with a '70s inspired silhouette, this crepe de Chine dress features ruffles trims and a polo collar.",
                    "https://www.twinset.com/dw/image/v2/BCKJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw83bffd84/images/TwinSet/Images/Catalog/211TQ210H-06493-01.JPG?sw=930",
                    "female"
            );

            Product C = new Product(
                    "Cotton jersey sweatshirt",
                    "Shirt",
                    1980,
                    "black",
                    "Paying homage to the city that created a fascination with the movie industry, Gucci Love Parade is a collection inspired by Hollywood's glamour and pop culture—mixing old Hollywood with new Hollywood.",
                    "https://dfi0jv14tzjw0.cloudfront.net/magento/media/catalog/product/z/y/zyllie-la06-1.jpg",
                    "male"
            );

            Product D = new Product(
                    "Gucci Rock Hudson cotton T-shirt",
                    "Shirt",
                    650,
                    "yellow",
                    "Printed on the back of this T-shirt is a quote by historian and archeologist Paul Veynem, while the front depicts 'Gucci Rock Hudson', a celebration of the House's long-lasting ties with the jet-set and pop culture.",
                    "https://dfi0jv14tzjw0.cloudfront.net/magento/media/catalog/product/z/y/zyllie-la06-1.jpg",
                    "female"
            );
            Product E = new Product(
                    "Gucci Rock Hudson cotton T-shirt",
                    "Shirt",
                    650,
                    "yellow",
                    "Printed on the back of this T-shirt is a quote by historian and archeologist Paul Veynem, while the front depicts 'Gucci Rock Hudson', a celebration of the House's long-lasting ties with the jet-set and pop culture.",
                    "https://dfi0jv14tzjw0.cloudfront.net/magento/media/catalog/product/z/y/zyllie-la06-1.jpg",
                    "female"
            );
            repo.saveAll(List.of(A,B,C,D,E));
        };
    }
}

package com.commercewebsite.product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ProductConfig {
    @Bean
    CommandLineRunner commandLineRunner(ProductRepository repo){
        return args -> {
            Product A = new Product(
                    "Cotton jersey T-shirt",
                    "T-shirt",
                    550,
                    "white",
                    "Since its beginning, the House has always been inspired by other times and places"
            );

            Product B = new Product(
                    "Crepe de chine dress",
                    "Dress",
                    5700,
                    "blue",
                    "Taking shape with a '70s inspired silhouette, this crepe de Chine dress features ruffles trims and a polo collar."
            );

            Product C = new Product(
                    "Cotton jersey sweatshirt",
                    "Sweatshirt",
                    1980,
                    "black",
                    "Paying homage to the city that created a fascination with the movie industry, Gucci Love Parade is a collection inspired by Hollywood's glamour and pop culture—mixing old Hollywood with new Hollywood."
            );

            Product D = new Product(
                    "Gucci Rock Hudson cotton T-shirt",
                    "T-shirt",
                    650,
                    "yellow",
                    "Printed on the back of this T-shirt is a quote by historian and archeologist Paul Veynem, while the front depicts 'Gucci Rock Hudson', a celebration of the House's long-lasting ties with the jet-set and pop culture."
            );
            repo.saveAll(List.of(A,B,C,D));
        };
    }
}

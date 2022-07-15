package com.commercewebsite.product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Configuration
public class ProductConfig {
    @Bean
    CommandLineRunner createDefaultProduct(ProductRepository repo){
        return args -> {
            LocalDateTime currentDate = LocalDateTime.now();

            Product A = new Product(
                    "Cotton jersey T-shirt",
                    "Shirt",
                    550,
                    "white",
                    "Since its beginning, the House has always been inspired by other times and places",
                    "https://i.imgur.com/S4i072W.jpeg",
                    "male",
                    "Hot",
                    currentDate
            );

            Product B = new Product(
                    "Crepe de chine dress",
                    "Dress",
                    5700,
                    "blue",
                    "Taking shape with a '70s inspired silhouette, this crepe de Chine dress features ruffles trims and a polo collar.",
                    "https://i.imgur.com/I2jPZdm.jpeg",
                    "female",
                    "Hot",
                    currentDate
            );

            Product C = new Product(
                    "jersey sweatshirt",
                    "Dress",
                    1980,
                    "black",
                    "Paying homage to the city that created a fascination with the movie industry, Gucci Love Parade is a collection inspired by Hollywood's glamour and pop culture—mixing old Hollywood with new Hollywood.",
                    "https://i.imgur.com/12YTRfX.jpeg",
                    "male",
                    "Hot",
                    currentDate
            );

            Product D = new Product(
                    "Rock Hudson cotton",
                    "Shirt",
                    650,
                    "yellow",
                    "Printed on the back of this T-shirt is a quote by historian and archeologist Paul Veynem, while the front depicts 'Gucci Rock Hudson', a celebration of the House's long-lasting ties with the jet-set and pop culture.",
                    "https://i.imgur.com/12YTRfX.jpeg",
                    "female",
                    "Hot",
                    currentDate
            );
            Product E = new Product(
                    "Gucci Rock Hudson cotton",
                    "Shirt",
                    650,
                    "yellow",
                    "Printed on the back of this T-shirt is a quote by historian and archeologist Paul Veynem, while the front depicts 'Gucci Rock Hudson', a celebration of the House's long-lasting ties with the jet-set and pop culture.",
                    "https://i.imgur.com/12YTRfX.jpeg",
                    "female",
                    "Hot",
                    currentDate
            );
            Product F = new Product(
                    "501 Skinny Jeans",
                    "Jean",
                    108,
                    "Blue",
                    "These timeless Levi’s 501 jeans are reinterpreted with a formfitting skinny leg and a go-with-anything faded wash",
                    "https://i.imgur.com/48eTSBd.jpeg",
                    "female",
                    "Hot",
                    currentDate
            );
            Product G = new Product(
                    "Slim Khaki T",
                    "Jean",
                    399,
                    "Gray",
                    "These timeless Levi’s 501 jeans are reinterpreted with a formfitting skinny leg and a go-with-anything faded wash",
                    "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.15752-9/290641648_1786825254998994_5429930653858331968_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=x716-2oiSPQAX-gnb1l&_nc_ht=scontent.fsgn5-11.fna&oh=03_AVJiGNFnueSE89PvkyDt8Fa9fg7PyuAz6cY8B21i07xOxw&oe=62E32D91",
                    "male",
                    "Trending",
                    currentDate
            );
            Product H = new Product(
                    "Nike Shoes",
                    "Accessory",
                    599,
                    "Red",
                    "These timeless Levi’s 501 jeans are reinterpreted with a formfitting skinny leg and a go-with-anything faded wash",
                    "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/290536998_384897200320086_7259614225938222576_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=iSZEgjifmMAAX_POg-Z&_nc_ht=scontent.fsgn5-5.fna&oh=03_AVJ-P1ZZfrWut6J8qWROtHmY6vuCSXXLGJva6fajXnckbA&oe=62E1D25C",
                    "male",
                    "Trending",
                    currentDate
            );
            Product I = new Product(
                    "Men T-Shirt",
                    "Shirt",
                    200,
                    "White",
                    "These timeless Levi’s 501 jeans are reinterpreted with a formfitting skinny leg and a go-with-anything faded wash",
                    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/288709052_757736885423357_1272002190278849111_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wuVeSb9akw0AX-fF80k&_nc_ht=scontent.fsgn5-10.fna&oh=03_AVIk8C3eRjm7zDHCpNEW0U7HwF-0sNfGw3-8aAEl2g6sqQ&oe=62DF9F97",
                    "male",
                    "Trending",
                    currentDate
            );
            Product J = new Product(
                    "W-Watch",
                    "Accessory",
                    980,
                    "Yellow",
                    "These timeless Levi’s 501 jeans are reinterpreted with a formfitting skinny leg and a go-with-anything faded wash",
                    "https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/289026646_1071283033500291_7316486192064310394_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1PWAsFIc9NIAX9JhIGl&_nc_ht=scontent.fsgn5-10.fna&oh=03_AVKWWLrHWJ7XiDjrySUkTbv5X4GrZplxjseuyhC8wyIryQ&oe=62DFEF43",
                    "male",
                    "Trending",
                    currentDate
            );
            Product K = new Product(
                    "Printed Wrap Dress",
                    "Dress",
                    799,
                    "Red",
                    "These timeless Levi’s 501 jeans are reinterpreted with a formfitting skinny leg and a go-with-anything faded wash",
                    "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.15752-9/289040125_392839952667792_2447617874740117338_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=39bNNaYXLOAAX_Wk6Ln&tn=a09JDzw44wlrdAAG&_nc_ht=scontent.fsgn5-6.fna&oh=03_AVIc-VXpASdDMUK7gYoAUCRhLwPcxq9cMvS8XAkY1nE47Q&oe=62DFCD64",
                    "female",
                    "Trending",
                    currentDate
            );
            Product L = new Product(
                    "V Neck Tassel Cape",
                    "Shirt",
                    399,
                    "White",
                    "These timeless Levi’s 501 jeans are reinterpreted with a formfitting skinny leg and a go-with-anything faded wash",
                    "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/290548455_3201563176794806_1577692679056248307_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=K9gc5HeeFcMAX90iWi7&_nc_ht=scontent.fsgn5-5.fna&oh=03_AVJnShVxBC_xAw1PIzbDAGdHZq5N1X32s-Qicy5JeUHJTQ&oe=62E13EA8",
                    "female",
                    "Trending",
                    currentDate
            );
            Product M = new Product(
                    "High Waist Denim Skirt",
                    "Jean",
                    690,
                    "Blue",
                    "These timeless Levi’s 501 jeans are reinterpreted with a formfitting skinny leg and a go-with-anything faded wash",
                    "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/287106852_491399766117414_4609841897702008781_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tpNfTDemYAgAX_ziZAz&_nc_ht=scontent.fsgn5-5.fna&oh=03_AVJlFyW56c4TMdm59fIVZJia4lGYB26M7OtVRx8Uvfd-dg&oe=62E29BE6",
                    "female",
                    "Trending",
                    currentDate
            );
            Product N = new Product(
                    "Blue Denim Dress",
                    "Dress",
                    499,
                    "Blue",
                    "These timeless Levi’s 501 jeans are reinterpreted with a formfitting skinny leg and a go-with-anything faded wash",
                    "https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.15752-9/288573900_749373722931030_8551326732419136499_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DHKYb8SUBQcAX8uo703&tn=a09JDzw44wlrdAAG&_nc_ht=scontent.fsgn5-13.fna&oh=03_AVLuPTTt8xbMk2yfdF5xQc2x28mZpHz5RaqUCxG09v_6Ow&oe=62E292D0",
                    "female",
                    "Trending",
                    currentDate
            );

            repo.saveAll(List.of(G,H,I,J,K,L,M,N,A,B,C,D,E,F));
        };
    }
}

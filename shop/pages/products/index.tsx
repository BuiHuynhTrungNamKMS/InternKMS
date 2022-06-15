import { GetServerSideProps } from 'next';
import Footer from '../../src/Common/Footer';
import NavBar from '../../src/Common/NavBar';
import { ProductListProps } from '../../src/Model/Module';
import Filter from '../../src/Product/Filter';
import ItemList from '../../src/Product/ItemList';
// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('http://localhost:8080/api/product/all')
//   const products = await res.json()

//   return {
//     props: {
//       products
//     }
//   }
// }

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:8080/api/product/all');
  const products: ProductListProps = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default function Home({ products }: ProductListProps) {
  return (
    <div className="container mx-auto p-5">
      <Filter products={products} />
      {/* <ItemList products={products} /> */}
    </div>
  );
}

// const products = [
//     {
//       id: 1,
//       name: 'Earthen Bottle',
//       price: '$48',
//       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     },
//     {
//       id: 2,
//       name: 'Nomad Tumbler',
//       price: '$35',
//       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//     },
//     {
//       id: 3,
//       name: 'Focus Paper Refill',
//       price: '$89',
//       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//     },
//     {
//       id: 4,
//       name: 'Machined Mechanical Pencil',
//       price: '$35',
//       image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     },
//     {
//         id: 5,
//         name: 'Earthen Bottle',
//         price: '$48',
//         image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//       },
//       {
//         id: 6,
//         name: 'Nomad Tumbler',
//         price: '$35',
//         image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//       },
//       {
//         id: 7,
//         name: 'Focus Paper Refill',
//         price: '$89',
//         image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//       },
//       {
//         id: 8,
//         name: 'Machined Mechanical Pencil',
//         price: '$35',
//         image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//       },
//   ]

import Footer from '../../src/Common/Footer';
import NavBar from '../../src/Common/NavBar';
import ItemDetails from '../../src/Product/ItemDetails';
import { DetailProductProps } from '../../src/Model/Module';
import { GetServerSideProps } from 'next';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
  },
];

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch('http://localhost:8080/api/product/' + id);
  const product: DetailProductProps = await res.json();
  return {
    props: {
      product,
    },
  };
};
export default function Details({ product }: DetailProductProps) {
  return (
    <>
      <ItemDetails product={product} />
    </>
  );
}

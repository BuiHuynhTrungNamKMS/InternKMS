import { GetServerSideProps } from 'next';

import axios from 'axios';

import { ProductListProps } from '../../src/Model/Module';
import Filter from '../../src/Product/Filter';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('http://localhost:8080/api/product/pagination?page=0');
  const products: ProductListProps = await res.data;
  return {
    props: {
      products
    }
  };
};

export default function Home({ products }: ProductListProps) {
  return (
    <div className="mx-auto p-10 bg-gray-100">
      <Filter products={products} lazyLoad={true} />
    </div>
  );
}

import { GetServerSideProps } from 'next';
import Footer from '../../src/Common/Footer';
import NavBar from '../../src/Common/NavBar';
import { ProductListProps } from '../../src/Model/Module';
import Filter from '../../src/Product/Filter';
import ItemList from '../../src/Product/ItemList';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:8080/api/product/pagination?page=0');
  const products: ProductListProps = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default function Home({ products }: ProductListProps) {
  return (
    <div className="mx-auto p-10 bg-gray-100">
      <Filter products={products}/>
    </div>
  );
}

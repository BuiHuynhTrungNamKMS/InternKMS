import { GetServerSideProps } from 'next';

import axios from 'axios';

import Panel from '../src/Common/Panel';
import HomePage from '../src/Home/HomePage';
import { Product } from '../src/Model/Module';
import { TrendingProductListProps } from '../src/Model/Module';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('http://localhost:8080/api/product/trending?gender=male');
  const trendingMaleProduct: Product[] = await res.data;

  const res2 = await axios.get('http://localhost:8080/api/product/trending?gender=female');
  const trendingFemaleProduct: Product[] = await res2.data;

  return {
    props: {
      trendingMaleProduct,
      trendingFemaleProduct
    }
  };
};

export default function Home({ trendingMaleProduct, trendingFemaleProduct }: TrendingProductListProps) {
  return (
    <div className="mx-auto p-5 bg-gray-100">
      <Panel />
      <HomePage trendingMaleProduct={trendingMaleProduct} trendingFemaleProduct={trendingFemaleProduct} />
    </div>
  );
}

import { GetServerSideProps } from 'next';

import { DetailProductProps } from '../../src/Model/Module';
import ItemDetails from '../../src/Product/ItemDetails';

export const getServerSideProps: GetServerSideProps = async context => {
  const id = context.params?.id;
  const res = await fetch('http://localhost:8080/api/product/' + id);
  const product: DetailProductProps = await res.json();
  return {
    props: {
      product
    }
  };
};
export default function Details({ product }: DetailProductProps) {
  return <ItemDetails product={product} />;
}

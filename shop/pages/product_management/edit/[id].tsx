import { GetServerSideProps } from 'next';

import Edit from '../../../src/Management/Edit';
import { DetailProductProps } from '../../../src/Model/Module';

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

export default function edit({ product }: DetailProductProps) {
  return (
    <div className="bg-gray-100">
      <Edit product={product} />
    </div>
  );
}

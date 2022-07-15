import type { NextPage } from 'next'
import HomePage from '../src/Home/HomePage'
import Panel from '../src/Common/Panel'
import { useEffect } from 'react';
import { useState } from 'react';
import { Product } from '../src/Model/Module';
import { GetServerSideProps } from 'next';
import { ProductListProps } from '../src/Model/Module';
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:8080/api/product/trending?gender=male');
  const products: Product[] = await res.json();
  
  const res2 = await fetch('http://localhost:8080/api/product/trending?gender=female');
  const products2: Product[] = await res2.json();
  return {
    props: {
      products, products2
    },
  };
};

export default function Home({products, products2}: any) {
  return (
    <div className="mx-auto p-5 bg-gray-100">
      <Panel />
      <HomePage maleProducts={products} femaleProducts={products2} />
    </div>
  )
}

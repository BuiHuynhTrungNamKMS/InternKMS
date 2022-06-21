import { GetServerSideProps } from 'next';
import Footer from '../../src/Common/Footer';
import NavBar from '../../src/Common/NavBar';
import { ProductListProps } from '../../src/Model/Module';
import Filter from '../../src/Product/Filter';
import ItemList from '../../src/Product/ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useState } from 'react';
import { Product } from '../../src/Model/Module';
import { filterActions } from '../../store/filter-slice';
import { useEffect } from 'react';

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
      {/* <Filter products={products} /> */}
      <Filter />
      <ItemList products={products} />
    </div>
  );
}

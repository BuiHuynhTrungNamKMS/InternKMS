// import { GetServerSideProps } from 'next';
// const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('http://localhost:8080/api/product/all');
//   const products = await res.json();

//   return products;
// };

// export default getServerSideProps;

import { ProductListProps } from "../src/Model/Module"

export const getAllProducts = async () => {
    const res = await fetch('http://localhost:8080/api/product/all')
        const products: ProductListProps[] = await res.json()
        return {
            props: {
            products,
            },
        } 
  }

export default getAllProducts;
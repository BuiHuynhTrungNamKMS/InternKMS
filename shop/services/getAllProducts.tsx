// import { GetServerSideProps } from 'next';
// const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('http://localhost:8080/api/product/all');
//   const products = await res.json();
//   return products;
// };
// export default getServerSideProps;
import axios from 'axios';

export const getAllProducts = async (url: string) => {
  return await (await axios.get(url)).data;
};


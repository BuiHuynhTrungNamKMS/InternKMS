import { ProductListProps } from "../../src/Model/Module";
import { GetServerSideProps } from "next";
import ProductList from "../../src/Management/ProductList"
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:8080/api/product/all');
    const products: ProductListProps = await res.json();
    return {
      props: {
        products,
      },
    };
  };


export default function management({ products }: ProductListProps) {
    return (
        <div className="bg-gray-100">
            <ProductList products={products} lazyLoad={false}/>
        </div>
        
    )
  }

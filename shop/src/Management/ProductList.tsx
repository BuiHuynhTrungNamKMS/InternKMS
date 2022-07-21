import Link from 'next/link';

import { ProductListProps } from '../Model/Module';
import Product from './Product';
import TableHeader from './TableHeader';

const ProductList: React.FC<ProductListProps> = (props) => {
  const { products = [] } = props;
  return (
    <div className="bg-gray-100 p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-black font-medium text-xl">Products Management</h2>
          <span className="text-xs font-medium">All products item</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-50 items-center p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
          </div>
          <div className="lg:ml-40 ml-10 space-x-8">
            <Link href="/product_management/addProduct">
            <a className="bg-indigo-600 px-4 py-2 rounded-full text-white font-semibold tracking-wide cursor-pointer">
              New Product
            </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <TableHeader />
              <tbody>
                {products.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
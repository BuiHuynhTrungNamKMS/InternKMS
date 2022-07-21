import Link from 'next/link';

import { TrendingProductProps } from '../Model/Module';
import ItemList from '../Product/ItemList';

const TrendingProduct: React.FC<TrendingProductProps> = (props) => {
  return (
    <div className="my-20 font-serif text-white container mx-auto p-5 bg-gray-300 rounded-lg">
    <div className="flex flex-row justify-between my-5">
      <h2 className="text-3xl bg-gradient-to-r from-[#3112AF] to-[#558D97] px-2 py-2 rounded-r-full">{props.title}</h2>
      <Link href="/products">
      <a className="flex flex-row text-lg hover:text-pink-700">
        View All
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
      </Link>
      
    </div>
    <ItemList products={props.products} lazyLoad={false} />
  </div>
  );
};
export default TrendingProduct;
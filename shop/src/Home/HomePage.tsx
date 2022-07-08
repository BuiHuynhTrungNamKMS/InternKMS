import Dialog from '../Dialog/Dialog';
import ItemList from '../Product/ItemList';
import { TrendingProductListProps } from '../Model/Module';
import Link from 'next/link';

const HomePage: React.FC<TrendingProductListProps> = (props) => {
  
  const {maleProducts = []} = props;
  const {femaleProducts = []} = props;
  
  return (
    <>
    <Dialog />
      <div className="my-20 font-serif text-white container mx-auto p-5 bg-gray-300 rounded-lg">
        <div className="flex flex-row justify-between my-5">
          <h2 className="text-3xl bg-gradient-to-r from-[#3112AF] to-[#558D97] px-2 py-2 rounded-r-full">Men Collection</h2>
          <Link href="/products">
          <a className="flex flex-row text-lg hover:text-pink-700">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          </Link>
          
        </div>
        <ItemList products={maleProducts} lazyLoad={false} />
      </div>
      <div className="my-20 text-base font-medium text-white container mx-auto p-5 bg-gray-300 rounded-lg">
        <div className="flex flex-row justify-between my-5">
          <h2 className="text-3xl bg-gradient-to-r from-red-600 to-pink-500 px-2 py-2 rounded-r-full">Women Collection</h2>
          <Link href="/products">
          <a className="flex flex-row text-lg hover:text-pink-700">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          </Link>
        </div>
        <ItemList products={femaleProducts} lazyLoad={false} />
      </div>
      <div className="rounded-lg shadow-lg my-20 flex flex-row">
        <div className="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-extrabold mb-4">
              Subscribe to get our offers first
            </h3>
            <p className="mb-4 leading-relaxed">
              Want to hear from us when we have new offers? Sign up for our
              newsletter and we will email you every time we have new sale
              offers.
            </p>
            <div>
              <input type="email" placeholder="Enter email address" className="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4"
              />
              <button type="submit" className="bg-red-600 py-3 rounded-lg w-full" >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
          <img src="/images/subscribe-banner.png" className="h-96" alt="" />
        </div>
      </div>
    </>
  );
};
export default HomePage;

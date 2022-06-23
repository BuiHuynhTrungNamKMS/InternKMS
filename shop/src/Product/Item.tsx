import { ItemProps } from '../Model/Module';
import Image from 'next/image';

type Props = {
  product: ItemProps;
};

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { RootState } from '../../store';
import { useRouter } from 'next/router';

const Item: React.FC<Props> = (props) => {
  const { product } = props;
  const router = useRouter();
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.isLoggedIn
  );
  const dispatch = useDispatch();
  return (
    <div className="shadow-lg rounded-lg">
      <Link href={'/products/' + product.id}>
        <a>
          <Image
            width="301.33"
            height="376.66"
            src={product.image}
            className="rounded-tl-lg rounded-tr-lg"
            alt=""
          />
        </a>
      </Link>
      <div className="p-5">
        <h3>
          <a href="#">{product.name}</a>
        </h3>
        <div className="flex flex-row my-3">
          <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
          <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
          <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
          <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
          <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
        </div>
        <div className="flex flex-row my-3">
          <h5 className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs">
            XL
          </h5>
          <h5 className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs">
            XXL
          </h5>
          <h5 className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs">
            L
          </h5>
          <h5 className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs">
            M
          </h5>
          <h5 className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs">
            S
          </h5>
        </div>
        <div>
          <div>
            <a
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              href="#"
              onClick={() => {
                if (isLoggedIn === true)
                  dispatch(cartActions.addToCart(product));
                else router.push('/login');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
          </div>
          <div>
            <Link href={'/products/' + product.id}>
              <a
                className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                View Details
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;

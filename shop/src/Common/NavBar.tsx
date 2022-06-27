import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { cartActions } from "../../store/cart-slice";
import Cart from "../Cart/Cart";
import { useRouter } from "next/router";
import { authActions } from "../../store/auth-slice";
import { dialogActions } from "../../store/dialogSlice";

const NavBar: React.FC = () => {
  const quantity: number = useSelector(
    (state: RootState) => state.cartSlice.totalQuantity
  );
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.isLoggedIn
  );
  const accessToken = useSelector(
    (state: RootState) => state.authSlice.accessToken
  );
  const tokenType = useSelector(
    (state: RootState) => state.authSlice.tokenType
  );
  const dispatch = useDispatch();
  const router = useRouter();
  let message: string = '';

  if (isLoggedIn) message = 'Logout';
  else message = 'Login';

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isLoggedIn === false) router.push('/login');
    else {
      dispatch(authActions.logout());
      dispatch(cartActions.resetCart());
    }
  };

  const openCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(cartActions.setShowCart(true));
  };

  const accessAdminPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(accessToken);
    fetch('http://localhost:8080/api/home/admin', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: tokenType + ' ' + accessToken,
      },
    })
      .then((response) => {
        if (response.ok === true) return response.status;
        else throw new Error("Don't have permission!");
      })
      .then((data) => {
        dispatch(dialogActions.changeMessage(data));
        dispatch(dialogActions.changeShow(true));
      })
      .catch((error) => {
        dispatch(dialogActions.changeMessage("Don't have permission!"));
        dispatch(dialogActions.changeShow(true));
      });
  };
  return (
    <>
      <Cart />
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-red-600 to-pink-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width={54} height={54} viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span className="font-semibold text-xl tracking-tight">E-Commerce Shop</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          <Link href="/">
            <a className="block text-base font-medium mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
          </Link>
          <Link href="/products">
            <a className="block text-base font-medium mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Products
            </a>
          </Link>
          <Link href="/about">
            <a className="block text-base font-medium mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
          </Link>
          </div>
          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <a className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 text-teal-200 hover:text-white mr-4" href="#">Upload Product</a>
              <button onClick={buttonHandler} className="my-1 text-base text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 text-teal-200 hover:text-white mr-4">{message}</button>
            </div>
          </div>
          <div>
            <button
            className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full mx-0.5"
            onClick={openCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 inline-block"
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
            Cart ({quantity})
          </button>
          </div>
        </div>
      </nav>
      {/* <div
        className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base bg-gray-200 rounded-full h-full"
        style={{ margin: '10px' }}
      >
        <div className="flex flex-row justify-center">
          <Link href="/">
            <a>
              <img
                src="https://cdn5.vectorstock.com/i/1000x1000/96/59/modern-beauty-and-beautiful-woman-logo-vector-26889659.jpg"
                className="mr-3 w-15 h-20 rounded-full"
                alt="Flowbite Logo"
              />
            </a>
          </Link>

          <Link href="/">
            <a className="font-mono text-3xl text-pink-600 ml-2 italic">
              E-Commerce <br /> Shop
            </a>
          </Link>
        </div>

        <div className="font-serif mt-2">
          <Link href="/">
            <a className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">
              Home
            </a>
          </Link>
          <Link href="/products">
            <a className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">
              Products
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">
              About
            </a>
          </Link>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={accessAdminPage}
          >
            Admin
          </button>
          <button
            className="bg-red-600 text-gray-50 hover:bg-pink-700 p-3 px-3 sm:px-5 rounded-full mx-0.5"
            onClick={buttonHandler}
          >
            {message}
          </button>
          <button
            className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full mx-0.5"
            onClick={openCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 inline-block"
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
            Cart ({quantity})
          </button>
        </div>
      </div> */}
    </>
  );
};
export default NavBar;
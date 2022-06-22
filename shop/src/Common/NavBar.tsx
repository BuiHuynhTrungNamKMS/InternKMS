import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { cartActions } from "../../store/cart-slice";
import Cart from "../Cart/Cart";
import { useRouter } from "next/router";
import { authActions } from "../../store/auth-slice";
const NavBar: React.FC = () => {
  const quantity: number = useSelector((state:RootState)=> state.cartSlice.totalQuantity)
  const dispatch = useDispatch()
  let message: string = "";
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.isLoggedIn
  );
  console.log(isLoggedIn)
  if(isLoggedIn)  message = "Logout"
  else message = "Login"
    const router = useRouter()
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(isLoggedIn === false)  router.push("/login")
    else{
      dispatch(authActions.logout());
    }
  }

  const openCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(cartActions.setShowCart(true));
  };
    return (
        <>
        <Cart />
      <div
        className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base bg-gray-200 rounded-full h-full"
        style={{ margin: '10px'}}
      >
        <div className="flex flex-row justify-center">
          <Link href="/">
            <a>
            <img src="https://cdn5.vectorstock.com/i/1000x1000/96/59/modern-beauty-and-beautiful-woman-logo-vector-26889659.jpg" className="mr-3 w-15 h-20 rounded-full" alt="Flowbite Logo" />
              
            </a>
          </Link>

          <Link href="/">
            <a className="font-mono text-3xl text-pink-600 ml-2 italic">E-Commerce <br /> Shop</a>
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
        
      </div>
    </>
    );
}
export default NavBar;
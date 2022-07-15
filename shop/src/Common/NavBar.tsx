import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { cartActions } from '../../store/cart-slice';
import Cart from '../Cart/Cart';
import { useRouter } from 'next/router';
import { authActions } from '../../store/auth-slice';
import { dialogActions } from '../../store/dialogSlice';
import CookieService from '../../services/CookieService';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { AuthState } from '../Model/Module';
import { NavBarData } from '../Data/Data';
import NavBarItem from './NavBarItem';

const NavBar: React.FC = () => {
  const quantity: number = useSelector((state: RootState) => state.cartSlice.totalQuantity);
  const isLoggedIn = useSelector((state: RootState) => state.authSlice.isLoggedIn);
  const accessToken = useSelector((state: RootState) => state.authSlice.accessToken);
  const tokenType = useSelector((state: RootState) => state.authSlice.tokenType);
  const dispatch = useDispatch();
  const router = useRouter();

  let token: string = "";
  useEffect(()=>{
    token = CookieService.get('accessToken') as string;
    if(token) dispatch(authActions.login({isLoggedIn: true, accessToken: token, tokenType: "Bearer"} as AuthState));
  },[])

  const loginRouteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isLoggedIn === false) router.push('/login');
    else {
      CookieService.remove('accessToken');
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
        router.push('/product_management');
      })
      .catch((error) => {
        dispatch(dialogActions.changeMessage("Don't have permission!"));
        dispatch(dialogActions.changeShow(true));
      });
  };
  return (
    <>
      <Cart />
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-[#3D6176] to-[#99BFC6] p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width={54} height={54} viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            E-Commerce Shop
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
          {NavBarData.map((item) => <NavBarItem name={item.name} link={item.link} key={item.name} />)}
          </div>
          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <button onClick={accessAdminPage} className="my-1 text-base text-white font-medium hover:text-indigo-500 md:mx-4 md:my-0 text-teal-200 hover:text-white mr-4">
                Products Management
              </button>
              <button onClick={loginRouteHandler} className="my-1 text-base text-white font-medium hover:text-indigo-500 md:mx-4 md:my-0 text-teal-200 hover:text-white mr-4" >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
          </div>
          <div>
            <button className="bg-purple-500 text-gray-50 font-medium hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full mx-0.5" onClick={openCart}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart ({quantity})
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;

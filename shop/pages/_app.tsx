import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../src/Common/NavBar';
import Footer from '../src/Common/Footer';
import { wrapper } from '../store';
import { useSelector } from 'react-redux';
import { AuthState } from '../src/Model/Module';
import { RootState } from '../store';
import Login from '../src/Login/Login';

function MyApp({ Component, pageProps }: AppProps) {
  const isLoggedIn = useSelector((state: RootState) => state.authSlice.isLoggedIn)
  console.log(isLoggedIn)

  const cartItems = useSelector((state:RootState)=> state.cartSlice.itemsList)
    console.log(cartItems)
  return (
    <>
      <NavBar />
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Component {...pageProps} />}
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);

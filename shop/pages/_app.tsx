import type { AppProps } from 'next/app';

import { useSelector } from 'react-redux';

import Footer from '../src/Common/Footer';
import NavBar from '../src/Common/NavBar';
import { wrapper } from '../store';
import { RootState } from '../store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.isLoggedIn
  );

  const cartItems = useSelector(
    (state: RootState) => state.cartSlice.itemsList
  );
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default wrapper.withRedux(MyApp);

import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { useState } from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Dialog from '../Dialog/Dialog';
import { dialogActions } from '../../store/dialogSlice';
import AuthService from '../../services/AuthService';
import IconLoginPanel from './IconLoginPanel';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const dispatch = useDispatch();

  const accessToken = useSelector((state: RootState) => state.authSlice.accessToken);
  const tokenType = useSelector((state: RootState) => state.authSlice.tokenType);

  const getUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;
    setUsername(username);
  };
  const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };
  
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }).then((response) => {
        if (!response.ok) throw new Error("Incorrect username or password");
        else return response.json();
      })
      .then((data) => {
        dispatch(authActions.login(data));
        AuthService.handleLoginSuccess(data);
        dispatch(dialogActions.changeMessage("Login successfully"))
        dispatch(dialogActions.changeShow(true))
        if(username === "admin") router.push("/product_management")
        else router.push("/")
      })
      .catch((error) => {
        dispatch(dialogActions.changeMessage("Incorrect username or password"))
        dispatch(dialogActions.changeShow(true))
      });
  };
  return (
    <><Dialog />
    <section className="h-screen bg-gray-300">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={submitForm}>
              <IconLoginPanel />
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>
              <div className="mb-6">
                <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="User name" onChange={getUsername} />
              </div>
              <div className="mb-6">
                <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Password" onChange={getPassword} />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck2" />
                  <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2" >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-gray-800">
                  Forgot password?
                </a>
              </div>
              <div className="text-center lg:text-left">
                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >
                  Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Do not have an account?
                  <Link href="/register">
                    <a className="ml-2 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                      Register Now
                    </a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Login;

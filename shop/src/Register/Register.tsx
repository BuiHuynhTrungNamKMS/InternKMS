import { useRouter } from 'next/router';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { dialogActions } from '../../store/dialogSlice';
import Dialog from '../Dialog/Dialog';
import IconRegisterPanel from './IconRegisterPanel';

const Register: React.FC = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const getUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {target: {value = ""}} = event;
    setUsername(value);
  };

  const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {target: {value = ""}} = event;
    setEmail(value);
  };

  const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {target: {value = ""}} = event;
    setPassword(value);
  };
  
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('http://localhost:8080/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        role: ['user'],
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Email or Username is already exist');
        else return response.json();
      })
      .then((data) => {
        dispatch(dialogActions.changeMessage("Register successfully"))
        dispatch(dialogActions.changeShow(true))
        router.push('/login');
      })
      .catch((error) => {
        dispatch(dialogActions.changeMessage(error.message))
        dispatch(dialogActions.changeShow(true))
      });
  };

  return (
    <> 
    <Dialog/>
    <section className="h-screen bg-gray-300">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={submitForm}>
              <IconRegisterPanel />
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>
              <div className="mb-6">
                <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="User name" onChange={getUsername} />
              </div>
              <div className="mb-6">
                <input type="email" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2"placeholder="Email address"onChange={getEmail}/>
              </div>
              <div className="mb-6">
                <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Password" onChange={getPassword}/>
              </div>
              <div className="text-center lg:text-left">
                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Register;

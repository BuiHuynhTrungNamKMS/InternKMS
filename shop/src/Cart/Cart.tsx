import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { RootState } from '../../store';
import { cartActions } from '../../store/cart-slice';
import { CartProduct } from '../Model/Module';

const Cart: React.FC = () => {
  const showCart: boolean = useSelector(
    (state: RootState) => state.cartSlice.showCart
  );
  const products: CartProduct[] = useSelector(
    (state: RootState) => state.cartSlice.itemsList
  );
  const total: number = useSelector(
    (state: RootState) => state.cartSlice.totalPrice
  );
  const dispatch = useDispatch();

  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(cartActions.setShowCart(false))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6 bg-gray-100">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-white bg-[#99BFC6] p-2 rounded-full">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() =>
                              dispatch(cartActions.setShowCart(false))
                            }
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="mt-5 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-black">
                                      <h3>
                                        <a className=' text-lg'>{product.name} </a>
                                      </h3>
                                      <p className="ml-4">${product.price}/unit</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end text-sm my-2">
                                    <button
                                      className="bg-[#99BFC6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                      onClick={() =>
                                        dispatch(
                                          cartActions.removeFromCart(product.id)
                                        )
                                      }
                                    >
                                      -
                                    </button>
                                    <p className="text-black font-medium mx-5 py-2">
                                      {product.quantity}
                                    </p>
                                    <button
                                      className="bg-[#99BFC6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                      onClick={() =>
                                        dispatch(cartActions.addToCart(product))
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                  <div>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="bg-red-500 font-medium text-white hover:bg-pink-700 p-2 rounded-lg"
                                        onClick={() =>dispatch(cartActions.removeAll(product.id))}>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6 bg-gradient-to-r from-[#3D6176] to-pink-500">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p></p>
                        <p className='bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded-lg text-white'>Total: ${total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-white">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-pink-500 to-[#3D6176] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-white hover:text-indigo-500"
                            onClick={() =>
                              dispatch(cartActions.setShowCart(false))
                            }
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default Cart;

const Footer: React.FC = () => {
  return (
    <footer className="text-3xl p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/96/59/modern-beauty-and-beautiful-woman-logo-vector-26889659.jpg"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-700 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="text-base mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-base mr-4 hover:underline md:mr-6 ">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-base mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="text-base hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-800 sm:text-center dark:text-gray-600">
        © 2022{' '}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
export default Footer;

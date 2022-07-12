import { loginIconProps } from '../Model/Module';

const RegisterIcon: React.FC<loginIconProps> = (props) => {
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={props.viewBox}
        className="w-4 h-4"
      >
        <path
          fill="currentColor"
          d={props.path}
        />
      </svg>
    </button>
  );
};
export default RegisterIcon;

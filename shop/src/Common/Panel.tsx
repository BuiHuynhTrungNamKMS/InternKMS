import { RootState } from "../../store";
import { useSelector } from "react-redux";

const Panel: React.FC = () => {
  let name: string = '';
  const isLoggedIn = useSelector((state: RootState) => state.authSlice.isLoggedIn);
  const username = useSelector((state: RootState) => state.authSlice.username);

  if (isLoggedIn) name = 'Xin Chào ' + username + ' !';
  else name = 'Xin Chào !';

  return (
    <div className="md:flex md:flex-row mt-10 bg-gray-400 rounded-xl">
      <div className="md:w-2/5 flex flex-col justify-center items-center mx-10">
        <h2 className="text-base text-4xl text-red-600 mb-4 text-center">
          Bright Minds - Brilliant Solutions
        </h2>

        <p className="uppercase text-gray-600 tracking-wide text-justify text-base font-medium italic mx-10">
          A website that allows people to buy and sell physical goods, services,
          and digital products over the internet rather than at a
          brick-and-mortar location
        </p>
        <button className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full mt-5 py-4 px-8 text-gray-50 uppercase text-xl content-center">
          {name}
        </button>
      </div>
      <div className="md:w-3/5">
        <img src="/slide-1.jpg" className="w-full rounded-r-lg mx-2" alt="" />
      </div>
    </div>
  );
};
export default Panel;
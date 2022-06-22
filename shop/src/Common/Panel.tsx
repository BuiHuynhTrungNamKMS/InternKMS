import Link from "next/link";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
const Panel: React.FC = () => {
  let name: string = "";
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.isLoggedIn
  );
  const username = useSelector(
    (state: RootState) => state.authSlice.username
  );
  if(isLoggedIn)  name = "Xin Chào " + username + " !";
  else name = "Xin Chào!"
    return (
        <div className="md:flex md:flex-row mt-20">
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">
        Bright Minds, Brilliant Solutions
        </h2>

        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left font-serif italic">
        A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location
        </p>
        <button
          className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5"
        >
         {name}
        </button>
        
      </div>
      <div className="md:w-3/5">
        <img src="/slide-1.jpg" className="w-full rounded-lg mx-2" alt="" />
      </div>
    </div>
    );
}
export default Panel;
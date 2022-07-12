import { FooterData } from "../Data/Data";
import FooterItem from "./FooterItem";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-r from-[#3D6176] to-pink-500 text-white">
        <div className="container flex flex-col flex-wrap px-4 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <svg className="fill-current h-20 w-20 mr-2" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <p className="mt-2 text-sm italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
              at sequi cum, impedit fuga in placeat illo eum minima possimus est
            </p>
          </div>
          <div className="justify-between w-full mt-4 text-center lg:flex">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest">
                Useful Links
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
                {FooterData.map((item) => <FooterItem name={item.name} link={item.link} key={item.name} />)}
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest">
                Useful Links
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
              {FooterData.map((item) => <FooterItem name={item.name} link={item.link} key={item.name} />)}
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest">
                Useful Links
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
              {FooterData.map((item) => <FooterItem name={item.name} link={item.link} key={item.name} />)}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-base">
            All rights reserved by @ company 2021
          </p>
        </div>
      </footer>
  );
};
export default Footer;

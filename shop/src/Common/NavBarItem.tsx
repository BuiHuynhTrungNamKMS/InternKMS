import { MenuItemProps } from '../Model/Module';
import Link from 'next/link';

const NavBarItem: React.FC<MenuItemProps> = (props) => {
  return (
    <Link href={props.link}>
      <button className="block text-base font-medium mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        {props.name}
      </button>
    </Link>
  );
};
export default NavBarItem;



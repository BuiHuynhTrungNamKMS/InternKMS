import Link from 'next/link';

import { MenuItemProps } from '../Model/Module';

const NavBarItem = ({ link, name }: MenuItemProps) => {
  return (
    <Link href={link}>
      <button className="block text-base font-medium mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        {name}
      </button>
    </Link>
  );
};
export default NavBarItem;
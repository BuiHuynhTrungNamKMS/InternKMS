import Link from 'next/link';

import { MenuItemProps } from '../Model/Module';

const FooterItem = ({ link, name }: MenuItemProps) => {
  return (
    <Link href={link}>
      <li>
        <button className="hover:text-gray-800">{name}</button>
      </li>
    </Link>
  );
};
export default FooterItem;
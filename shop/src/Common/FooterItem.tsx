import { MenuItemProps } from '../Model/Module';
import Link from 'next/link';
const FooterItem: React.FC<MenuItemProps> = (props) => {
  return (
    <Link href={props.link}>
      <li>
        <button className="hover:text-gray-800">{props.name}</button>
      </li>
    </Link>
  );
};
export default FooterItem;

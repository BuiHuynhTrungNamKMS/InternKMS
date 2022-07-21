import ColumnHeader from './ColumnHeader';
import { titleColumn } from '../constants';

const TableHeader: React.FC = () => {
  return (
      <thead>
      <tr>
        {
          titleColumn.map((item)=> <ColumnHeader key={item.id} title={item.title} />)
        }
      </tr>
    </thead>
  );
};
export default TableHeader;

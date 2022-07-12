import ColumnHeader from "./ColumnHeader";
const TableHeader: React.FC = () => {
    return (
        <thead>
        <tr>
          <ColumnHeader title="ID" />
          <ColumnHeader title="Name" />
          <ColumnHeader title="Gender" />
          <ColumnHeader title="Color" />
          <ColumnHeader title="Price" />
          <ColumnHeader title="Type" />
          <ColumnHeader title="" />
          <ColumnHeader title="" />
        </tr>
      </thead>
    );
  };
  export default TableHeader;
  
const ColumnHeader: React.FC<{ title: string }> = (props) => {
  return (
    <th className="font-medium px-3 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-sm font-semibold text-black uppercase tracking-wider">
      {props.title}
    </th>
  );
};
export default ColumnHeader;
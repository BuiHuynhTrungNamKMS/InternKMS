import { inputProps } from '../Model/Module';
const InputField: React.FC<inputProps> = (props) => {
  return (
    <div className={props.divClass}>
      <label
        htmlFor="last_name"
        className="block text-sm font-medium text-gray-700"
      >
        {props.title}
      </label>
      <input
        onChange={props.getData}
        type="text"
        name="type"
        id="type"
        autoComplete="family-name"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-200 py-2 px-2"
        defaultValue={props.defaultValue}
      />
    </div>
  );
};
export default InputField;

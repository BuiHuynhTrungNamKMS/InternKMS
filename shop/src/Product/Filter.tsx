import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { filterActions } from "../../store/filter-slice";
const Filter: React.FC = () => {
  const dispatch = useDispatch()

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    dispatch(filterActions.changeFilter(+enteredName))
  };
  return (
    <div className="flex justify-center">
        <div className="form-check form-check-inline">
          <input onChange={inputHandler} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" defaultValue="1" />
          <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">1</label>
        </div>
        <div className="form-check form-check-inline">
          <input onChange={inputHandler} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" defaultValue="2" />
          <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox2">2</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" id="inlineCheckbox3" defaultValue="option3" disabled />
          <label className="form-check-label inline-block text-gray-800 opacity-50" htmlFor="inlineCheckbox3">3 (disabled)</label>
        </div>
      </div>
  )
}

export default Filter;
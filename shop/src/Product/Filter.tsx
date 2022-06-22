import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { filterActions } from "../../store/filter-slice";
const Filter: React.FC = () => {
  const dispatch = useDispatch()

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    dispatch(filterActions.changeFilter(option))
  };
  const searchHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const searchKey = (event.target as HTMLInputElement).value
    dispatch(filterActions.changeSearchKey(searchKey))
  };
  return (
    <>
    <div className="flex justify-center my-3">
    <input type="search" onKeyUp={searchHandler} id="default-search" className="mx-2 block p-4 pl-10 w-2/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
      <div>
        <div className="flex items-center mr-4">
          <input onChange={inputHandler} id="red-checkbox" type="checkbox" defaultValue="Shirt" className="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="red-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shirt Type</label>
        </div>
        <div onChange={inputHandler} className="flex items-center mr-4">
          <input id="green-checkbox" type="checkbox" defaultValue="Dress" className="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="green-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dress</label>
        </div>
        <div onChange={inputHandler} className="flex items-center mr-4">
          <input id="purple-checkbox" type="checkbox" defaultValue="Jean" className="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="purple-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jean</label>
        </div>
      </div>
      </div>
      </>
  )
}

export default Filter;
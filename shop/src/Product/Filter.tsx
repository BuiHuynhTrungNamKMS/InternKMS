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
    <form>   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative">
          <input type="search" onKeyUp={searchHandler} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
    <div className="flex justify-center">
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
      </>
  )
}

export default Filter;
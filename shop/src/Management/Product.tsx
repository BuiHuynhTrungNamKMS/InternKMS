import { ItemProps } from '../Model/Module';
import { DetailProductProps } from '../Model/Module'
import { useDispatch } from 'react-redux';
import { dialogActions } from '../../store/dialogSlice';
import Dialog from '../Dialog/Dialog';
import { useRouter } from 'next/router';
const Product: React.FC<DetailProductProps> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const deleteHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch(`http://localhost:8080/api/product/delete/${product.id}`)
    .then((response) => {
      if (!response.ok) throw new Error("Can not delete product");
      else {
        dispatch(dialogActions.changeMessage("Delete successfully"))
        dispatch(dialogActions.changeShow(true))
        router.push("/product_management")
      }
    })
    .catch((error) => {
      dispatch(dialogActions.changeMessage("Incorrect username or password"))
      dispatch(dialogActions.changeShow(true))
    });
  };
  return (
    <>
    <Dialog />
    <tr>
      <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{product.id}</p>
      </td>
      <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={product.image}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap font-medium">{product.name}</p>
          </div>
        </div>
      </td>
      <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{product.gender}</p>
      </td>
      <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{product.color}</p>
      </td>
      <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{product.price}</p>
      </td>
      <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          />
          <span className="relative">{product.type}</span>
        </span>
      </td>
      <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Update
        </button>
      </td>
      <td className="px-2 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={deleteHandler} className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Delete
        </button>
      </td>
    </tr>
    </>
    
  );
};
export default Product;

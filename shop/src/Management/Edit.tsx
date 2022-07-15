import { useState } from "react";
import { useDispatch } from 'react-redux';
import { dialogActions } from '../../store/dialogSlice';
import Dialog from '../Dialog/Dialog';
import { useRouter } from 'next/router';
import { DetailProductProps } from "../Model/Module";
import InputField from "./inputField";
const Edit: React.FC<DetailProductProps> = (props) => {
  const { product } = props;
    const dispatch = useDispatch();
    const router = useRouter();

    const [productName, setProductName] = useState(product.name)
    const [image, setImage] = useState(product.image)
    const [price, setPrice] = useState(product.price)
    const [color, setColor] = useState(product.color)
    const [description, setDescription] = useState(product.describe)
    const [gender, setGender] = useState(product.gender)
    const [status, setStatus] = useState(product.status)
    const [type, setType] = useState(product.type)

    const getProductName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setProductName(name);
      };
      const getImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const img = event.target.value;
        setImage(img);
      };
      const getPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const price = event.target.value;
        setPrice(parseInt(price));
      };
      const getColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const color = event.target.value;
        setColor(color);
      };
      const getDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        const description = event.target.value;
        setDescription(description);
      };
      const getGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        const gender = event.target.value;
        setGender(gender);
      };
      const getStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        const status = event.target.value;
        setStatus(status);
      };
      const getType = (event: React.ChangeEvent<HTMLInputElement>) => {
        const type = event.target.value;
        setType(type);
      };

      const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch('http://localhost:8080/api/product/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: product.id,
              productName: productName,
              type: type,
              price: price,
              image: image,
              description: description,
              gender: gender,
              status: status,
              color: color
            }),
          }).then((response) => {
            if (!response.ok) throw new Error("Can not update product");
            else {
                dispatch(dialogActions.changeMessage("Update successfully"))
                dispatch(dialogActions.changeShow(true))
                router.push("/product_management")
            }
          })
          .catch((error) => {
            dispatch(dialogActions.changeMessage("Can not update product"))
            dispatch(dialogActions.changeShow(true))
          });
      };
  return (
    <>
    <Dialog />
    <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form onSubmit={submitForm} method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                  <InputField getData={getProductName} title="Product Name" defaultValue={props.product.name} divClass="col-span-6 sm:col-span-3"/>
                  <InputField getData={getType} title="Type" defaultValue={props.product.type} divClass="col-span-6 sm:col-span-3"/>
                  <InputField getData={getPrice} title="Price" defaultValue={props.product.price} divClass="col-span-6 sm:col-span-4"/>
                  <InputField getData={getImage} title="Image" defaultValue={props.product.image} divClass="col-span-6 sm:col-span-3"/>
                  <InputField getData={getDescription} title="Description" defaultValue={props.product.describe} divClass="col-span-6"/>
                  <InputField getData={getGender} title="Gender" defaultValue={props.product.gender} divClass="col-span-6 sm:col-span-6 lg:col-span-2"/>
                  <InputField getData={getColor} title="Color" defaultValue={props.product.color} divClass="col-span-6 sm:col-span-3 lg:col-span-2"/>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Update Product
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
  );
};
export default Edit;

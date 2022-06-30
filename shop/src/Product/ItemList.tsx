import { ProductListProps } from '../Model/Module';
import Item from './Item';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useState } from 'react';
import { Product } from '../Model/Module';
import { useEffect } from 'react';


const ItemList: React.FC<ProductListProps> = (props) => {

  const { products = [] } = props;
  console.log("aaa")
  console.log(products)
  const [data, setData] = useState<Product[]>([])

  const optionList = useSelector((state: RootState) => state.filterSlice.filterList);
  const searchKey = useSelector((state: RootState) => state.filterSlice.searchKey);
  const sortOption = useSelector((state: RootState) => state.filterSlice.sortOption);
  const genderOption = useSelector((state: RootState) => state.filterSlice.gender);

  useEffect(()=>{
    let temp: Product[] = [];
    if (optionList.length === 0 || optionList.length === 3){
      for(let j = 0; j < products.length; j ++){
        if(products[j].name.includes(searchKey))  temp.push(products[j])
      }
    } 
    else {
      for(let i = 0; i < optionList.length; i++){
        for(let j = 0; j < products.length; j ++){
          if(optionList[i] === products[j].type && products[j].name.includes(searchKey))  temp.push(products[j])
        }
      }
    }

    if(genderOption === "Men"){
      temp = temp.filter((item) => item.gender === "male");
    } else if(genderOption === "Women"){
      temp = temp.filter((item) => item.gender === "female");
     }

    if (sortOption === 0) {
      temp = temp.sort((a: Product, b: Product) => {
        return a.price - b.price;
      });
    } else if (sortOption === 1) {
      temp = temp.sort((a: Product, b: Product) => {
        return b.price - a.price;
      });
    }
    setData(temp);
  },[optionList, searchKey, sortOption, genderOption])

  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {data.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;

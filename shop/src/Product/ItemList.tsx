import { ProductListProps } from '../Model/Module';
import Item from './Item';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useState } from 'react';
import { Product } from '../Model/Module';
import { useEffect } from 'react';

const ItemList: React.FC<ProductListProps> = (props) => {

  const { products = [] } = props;
  const [data, setData] = useState<Product[]>([])

  const optionList = useSelector((state: RootState) => state.filterSlice.filterList);
  const searchKey = useSelector((state: RootState) => state.filterSlice.searchKey);
  
  useEffect(()=>{
    const temp: Product[] = [];
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
    setData(temp);
  },[optionList, searchKey])

  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {data.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;

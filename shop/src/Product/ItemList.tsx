import { ProductProps } from '../Model/Module';
import { ProductListProps } from '../Model/Module';
import Item from './Item';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { useState } from 'react';
import { Product } from '../Model/Module';
import { filterActions } from '../../store/filter-slice';
import { useEffect } from 'react';
const ItemList: React.FC<ProductListProps> = (props) => {
  const { products = [] } = props;
  //let data: Product[] = products
  const [data, setData] = useState<Product[]>([])
  const optionList = useSelector(
    (state: RootState) => state.filterSlice.filterList
  );
  const isChangeOption = useSelector(
    (state: RootState) => state.filterSlice.isChange
  );
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if (optionList.length === 0 || optionList.length === 2) setData(products);
    else {
      const a: Product[] = [];
      if (optionList[0] === 1) {
        for (let i = 0; i < products.length; i++) {
          if (products[i].type === 'Shirt') a.push(products[i]);
        }
      } else {
        for (let i = 0; i < products.length; i++) {
          if (products[i].type === 'Dress') a.push(products[i]);
        }
      }
      setData(a);
      console.log(data)
    }
  },[optionList])
  // if (isChangeOption) {
  //   if (optionList.length === 0 || optionList.length === 2) data = products;
  //   else {
  //     const a: Product[] = [];
  //     if (optionList[0] === 1) {
  //       for (let i = 0; i < products.length; i++) {
  //         if (products[i].type === 'Shirt') a.push(products[i]);
  //       }
  //     } else {
  //       for (let i = 0; i < products.length; i++) {
  //         if (products[i].type === 'Dress') a.push(products[i]);
  //       }
  //     }
  //     data = a;
  //   }
    //dispatch(filterActions.changeOption());
  //}
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;

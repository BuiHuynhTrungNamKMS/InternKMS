import { ProductProps } from "../Model/Module";
import { ProductListProps } from "../Model/Module";
import Item from "./Item";
const ItemList: React.FC<ProductListProps> = props => {
    const {products = [] } = props;

    return (
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
        <Item
          key={product.id}
          product={product} 
        />
      ))}
    </div>
    );
  };
  
  export default ItemList;
  
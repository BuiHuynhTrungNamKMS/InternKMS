import { ProductListProps } from '../Model/Module';
import Item from './Item';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useState } from 'react';
import { Product } from '../Model/Module';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const ItemList: React.FC<ProductListProps> = (props) => {
  const { products = [] } = props;
  const { lazyLoad } = props;
  const [loadedData, setLoadedData]= useState<Product[]>(products);
  const [data, setData] = useState<Product[]>(products);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0)

  const optionList = useSelector(
    (state: RootState) => state.filterSlice.filterList
  );
  const searchKey = useSelector(
    (state: RootState) => state.filterSlice.searchKey
  );
  const sortOption = useSelector(
    (state: RootState) => state.filterSlice.sortOption
  );
  const genderOption = useSelector(
    (state: RootState) => state.filterSlice.gender
  );
  useEffect(() => {
    fetch("http://localhost:8080/api/product/count")
    .then(response => response.json())
    .then(data => setTotalProducts(data))
  },[])
  useEffect(() => {
    let temp: Product[] = [];
    if (optionList.length === 0 || optionList.length === 3) {
      for (let j = 0; j < loadedData.length; j++) {
        if (loadedData[j].name.includes(searchKey)) temp.push(loadedData[j]);
      }
    } else {
      for (let i = 0; i < optionList.length; i++) {
        for (let j = 0; j < loadedData.length; j++) {
          if (
            optionList[i] === loadedData[j].type &&
            loadedData[j].name.includes(searchKey)
          )
            temp.push(loadedData[j]);
        }
      }
    }

    if (genderOption === 'Men') {
      temp = temp.filter((item) => item.gender === 'male');
    } else if (genderOption === 'Women') {
      temp = temp.filter((item) => item.gender === 'female');
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
  }, [optionList, searchKey, sortOption, genderOption]);

  const getMoreData = async () => {
    console.log(page)
    const res = await fetch(
      `http://localhost:8080/api/product/pagination?page=${page}`
    );
    const newData = await res.json();
    setLoadedData((item) => [...item, ...newData]);
    setData((item) => [...item, ...newData]);
    setPage(page + 1);
    console.log(Math.ceil(totalProducts/4) - 1)
    if (page > Math.ceil(totalProducts/4) - 1) setHasMore(false);
  };

  return (
    <>
    {lazyLoad &&
      <InfiniteScroll
        dataLength={data.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<button className="bg-pink-400 items-center p-2 rounded-lg text-white" disabled>
        Processing...
      </button>}
        endMessage={<button className='mt-5 bg-pink-400 items-center p-2 rounded-lg text-white' disabled>End</button>}
      >
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    }
    {!lazyLoad &&
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
    }
    </>
  );
};

export default ItemList;

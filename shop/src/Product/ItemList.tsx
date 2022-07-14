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
  useEffect(() => {
    fetch("http://localhost:8080/api/product?page=0")
    .then(response => response.json())
    .then(data => {
      setLoadedData(data)
    })
  },[])
  const { lazyLoad } = props;
  const [loadedData, setLoadedData]= useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const option = useSelector((state: RootState) => state.filterSlice.filter);
  const searchKey = useSelector((state: RootState) => state.filterSlice.searchKey);
  const sortOption = useSelector((state: RootState) => state.filterSlice.sortOption);
  const genderOption = useSelector((state: RootState) => state.filterSlice.gender);
  const currentFilterOption = useSelector((state: RootState) => state.filterSlice.currentFilterOption);
  useEffect(() => {
    
    fetch(`http://localhost:8080/api/product/filter?type=${option}&gender=${genderOption}&offset=0&size=4`)
    .then(response => response.json())
    .then(data => {
      setLoadedData(data)
      setHasMore(true)
      setPage(1)
    })
    
  }, [option, genderOption]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/product/search?keyword=${searchKey}&offset=0&size=4`)
    .then(response => response.json())
    .then(data => {
      setLoadedData(data)
      setHasMore(true)
      setPage(1)
    })
    
  }, [searchKey]);
console.log("current " + currentFilterOption)
  const getMoreData = async () => {
    if (currentFilterOption === 0){
      
      const res = await fetch(`http://localhost:8080/api/product?page=${page}`);
      const newData = await res.json();
      if (newData.length > 0) {
      setLoadedData((item) => [...item, ...newData]);
      setPage(page + 1)
      }
    }else if (currentFilterOption === 1){
      
        const res = await fetch(
          `http://localhost:8080/api/product/filter?type=${option}&gender=${genderOption}&offset=${page}&size=4`
        );
        const newData = await res.json();
        if (newData.length > 0) {
        setLoadedData((item) => [...item, ...newData]);
        setPage(page + 1)
      }
      }else {
      const res = await fetch(
        `http://localhost:8080/api/product/search?keyword=${searchKey}&offset=${page}&size=4`
      );
      const newData = await res.json();
      if (newData.length > 0) {
      setLoadedData((item) => [...item, ...newData]);
      setPage(page + 1)
      }
    }

  };

  return (
    <>
    {lazyLoad &&
      <InfiniteScroll
        dataLength={loadedData.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={null}
        endMessage={null}
      >
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {loadedData.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>}
      
    {!lazyLoad &&
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
    }
    </>
  );
};

export default ItemList;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync } from './productsSlice';
//import { addAsync } from '../cart/cartSlice';
import './Products.css';

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  // useEffect(()=>{
  //   dispatch(fetchAsync())
  // },[])

  return (
    <div>
      <div>
      <button aria-label="Decrement value"
      onClick={()=>dispatch(fetchAsync())}>
        fetch Products
      </button>
      
        {products.map((product) => (
          <div className="card">
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p>
              <button>Add To Cart</button>
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useEffect, useContext,useState } from "react";
//import ProductCard from "components/Product";
//import { ProductsStateContext,  ProductsDispatchContext,  getProducts} from "contexts/products";
//import { CommonStateContext } from "contexts/common";
import ProductCard from "./Product";

//import {ProductsStateContext,  ProductsDispatchContext, getProducts } from "../context/products";
import { CommonStateContext } from "../context/common";
import { ProductsStateContext , ProductsDispatchContext, getProducts} from "../context/products";
import Header from "./Header";
import styles from './Home1.module.css'
import { clearCart } from "../context/Cart";
 export const ListProduct = () => {
  const {products, isLoading, isLoaded } = useContext(ProductsStateContext);
  const [showcart,setShowCart] = useState(false)
  //const [products] = useContext(ProductsStateContext);
  const { searchKeyword } = useContext(CommonStateContext);
  const dispatch = useContext(ProductsDispatchContext);

  

  useEffect(() => {
  // let a= getProducts(dispatch)
  //console.log(a)
    getProducts(dispatch);
  }, []);
  

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div >
         <button onClick={()=>setShowCart(!showcart)}>Show Cart</button>
      <div className={styles.wrapper} onClick={()=>setShowCart(!showcart)}>
        {isLoaded &&
          products.map((data) => {
            return <ProductCard key={data.productId} data={data}  />;
          })}
      </div>
      <div className={styles.cart}>
        { showcart ? <Header />:null}
      
      </div>
      {/* <Header/> */}
     
    </div>
  );
};

// export default ListProduct;

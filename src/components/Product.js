import React, { useState, useContext } from "react";
import { CartDispatchContext,addToCart } from "../context/Cart";
import Header from "./Header";
//import { CartDispatchContext, addToCart } from "contexts/cart";
import styles from './Home1.module.css'
const ProductCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [showcart,setShowCart] =useState(false)
  const dispatch = useContext(CartDispatchContext);
  const { image, name, price, productId ,amount} = data;

  const handleAddToCart = (product) => {
    console.log(product.price)

   
    const product1 = { ...data, quantity: +data.quantity + 1 };
   // const product = { ...data, quantity: 1 };
    addToCart(dispatch, product1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };

  return (
    <div className={styles.item}>
       
      <div className="product-image" key={productId}>
        <img src={image} alt={name} height="200px" width="200px" />
      </div>
      <h4 className="product-name">{name}</h4>
      <p className="product-price">{price}</p>
      <div className="product-action">
        <button
          className="btn btn-md btn-success"
          type="button"
          onClick={()=>handleAddToCart(data)}
        >
          {!isAdded ? "ADD TO CART" : "✔ ADDED"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

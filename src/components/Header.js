import React, { useContext, useEffect } from "react";
import { useState } from "react";
//import classNames from "classnames";
import { Link } from "react-router-dom";
//import { CartStateContext,  CartDispatchContext,  toggleCartPopup} from "contexts/cart";
//import { CommonDispatchContext, setSearchKeyword } from "contexts/common";
//import CartPreview from "components/CartPreview";
import CartProvider, { CartStateContext ,  CartDispatchContext,  toggleCartPopup} from "../context/Cart";
//import CartPreview from "../context/CartPreview";
//import CartPreview from "../context/CartPreview";
import { CommonDispatchContext, setSearchKeyword } from "../context/common";
//import CartPreview from "./CartPreview";
//import CartPreview from "./CartPreview";

import CartPreview from "../components/CartPreview";
import { toInteger } from "lodash";
//import { TotalItems } from "../context/Cart";
const Header = (props) => {
  const [total,setTotal]= useState(0)
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const cartDispatch = useContext(CartDispatchContext);
  //const cartQuantity = cartItems.length;
  console.log(cartItems.length)
  // const cartTotal = cartItems.map((item) => 
  //    item.price * item.quantity
  //    .reduce((prev, current) => prev + current, 0))

   

  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };
  const total1=cartItems.reduce((acc,item ) => acc + Number(item.price) ,0)
  console.log(total1.toString())
useEffect(()=>{
  //let acc=0;
 setTotal(cartItems.reduce((acc,item ) => Number(acc) + Number(item.price) ,0))

},[])
console.log(total)
  return (
    <header>
      <div className="container">
    
        <div className="brand">
          {/* <Link to="/">
            <img
              className="logo"
              src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
              alt="Veggy Brand Logo"
            />
          </Link> */}
          Food Web shop cart
        </div>

       

        <div className="cart">
          <div className="cart-info">
           
          </div>
          <a className="cart-icon" href="#" onClick={handleCartButton}>
            <img
              className={props.cartBounce ? "tada" : " "}
              src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
              alt="Cart"
            />
            {/* {cartQuantity ? (
              <span className="cart-count">{cartQuantity}</span>
            ) : (
              ""
            )} */}
            {cartItems.length}
          </a>
          <CartPreview />
        </div>
      </div>
    </header>
  );
};

export default Header;

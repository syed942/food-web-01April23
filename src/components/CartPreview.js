
import { Add } from "@mui/icons-material";
import { toInteger, toNumber } from "lodash";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
//import classNames from "classnames";
import { CartStateContext, CartDispatchContext, toggleCartPopup, removeFromCart } from "../context/Cart";
import { addToCart,clearCart } from "../context/Cart";


const CartPreview = () => {
    const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const { items } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  //const history = useHistory()
const navigate=useNavigate()
  const handleRemove = (product) => {
    return removeFromCart(dispatch,product.productId);
  };
  //const cartQuantity = cartItems.length;
 // console.log(cartQuantity)
  
//   const CalculateTotal1=(cartItems) => 
//   cartItems.reduce((ack,item)=> ack + item.quantity ,0);
//   .reduce((prev, current) => prev + current, 0);
  
  const handleProceedCheckout = () => {
    toggleCartPopup(dispatch);
   // history.push("/checkout");
   navigate("/checkout")
  };
const Add=(product)=>{
   // const product1 = { ...product, quantity: product.quantity + 1 };
    // const product = { ...data, quantity: 1 };
     addToCart(dispatch, product);
}

  return (
    <div >
        
      <ul className="cart-items" style={{display:"block"}}>
        {items?.map((product) => {
          return (
            <li className="cart-item" key={product.name}>
              <img className="product-image" src={product.image} alt="jj" height="100px" width="100px"/>
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">
                  {/* {`${cartQuantity} ${
                    cartQuantity > 1 ? "Nos." : "No."
                  }`} */}
                </p>
              {console.log(toInteger(product.amount) )}
                {/* <p className="amount">Amount:{cartQuantity * product.price}</p> */}
              </div>
              <button onClick={()=>clearCart(dispatch)}>
                Empty Cart
              </button>
              <button
                className="product-remove"
                onClick={() => handleRemove(product)}
              >
                × remove from cart
              </button>
              <button onClick={()=>{
            navigate('/OrderMe',{state:{price:product.price,name:product.name,id:product.productId}});
            clearCart(dispatch)
              }}> Order Now</button>
              <button onClick={()=>alert("item added")}>Add+</button>
            </li>
          );
        })}
      </ul>
      <div className="action-block">
       
      </div>
    </div>
  );
};

export default CartPreview;

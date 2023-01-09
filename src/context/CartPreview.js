import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
//import classNames from "classnames";
import { CartStateContext, CartDispatchContext, toggleCartPopup, removeFromCart } from "../context/Cart";
import { addToCart } from "../context/Cart";

const CartPreview = () => {
  const { items, isCartOpen } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  //const history = useHistory();
  const navigate = useNavigate()

  // const handleRemove = (productId) => {
  //   const product2 = { ...items, productId: +productId - 1 };
  //  // return removeFromCart(dispatch, id)
  //    return removeFromCart(dispatch,productId);
  // };

  
  const handleAddToCart = (product) => {
    const product1 = { ...product, quantity: 1 };
    addToCart(dispatch, product1);
   // setIsAdded(true);
 //   setTimeout(() => {
  //    setIsAdded(false);
  //  }, 3500);
  };
  //console.log(items)
  return (<>
    <div>
      <div className="cart-items">


        {items.map((product) => {
          return (<>
           <img
            
              src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
              alt="Cart"
              height="50px" width="50px"
            />
            ${product.quantity}
          <div className="cart-item" key={product.name}>
              <img className="product-image" src={product.image} height="200px" width="200px" />
              <div className="product-info">
                <p className="product-name">Name:{product.name}</p>
                <p className="product-price">Price:{product.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">
                  {`Quantity: ${product.quantity} ${product.quantity > 1 ? "Nos." : "No."
                    }`}
                </p>
                <p className="amount">Amount:{+product.quantity * +product.price}</p>
              </div>
              {/* <button
                className="product-remove"
                onClick={() => handleRemove(product.productId)}
              >
                ×
              </button> */}
              <button
          className="btn btn-md btn-success"
          type="button"
          onClick={()=>handleAddToCart(product)}
        >+</button>
            </div>
          </>
            
          );
        })}
      </div>
      <div className="action-block">
        {/* <button
          type="button"
          //   className={classNames({ disabled: items && items.length === 0 })}
          onClick={handleProceedCheckout}
        >
          PROCEED TO CHECKOUT
        </button> */}
      </div>
    </div>
  </>

  );
};

export default CartPreview;

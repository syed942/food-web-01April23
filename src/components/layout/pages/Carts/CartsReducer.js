

import CartItem from '../Carts/CartsItem/CartItem'



//types


import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


import { Order } from './Order';
import { OrderReducer } from './OrderReducer';


const CartsReducer =({cartItems,addToCart,removeFromCart}) =>{
     const navigate=   useNavigate()
   
     const CalculateTotal=(items) => 
    items.reduce((ack,item)=> ack + item.amount * item.price,0);
    const GrossTotal=CalculateTotal(cartItems).toFixed(2);
    const GetOrder=()=>{
        navigate("/orderreducer",{state:{items:cartItems,GrossTotal:GrossTotal}})
     }
    return(
        <div style={{backgroundColor:"skyblue",height:"100%"
    }}>
            
            {cartItems.length ===0 ? <p>no items</p> : null}

            {cartItems.map(item=>{
                return(
                    <>
                    <OrderReducer
                 
                    item  ={item}
                    addToCart={addToCart}
                    GrossTotal={GrossTotal}
                    removeFromCart={removeFromCart}
                    style={{width:"200px"}}
                    />
                    {/* <CartItem
 
   item  ={item}
   addToCart={addToCart}
   GrossTotal={GrossTotal}
   removeFromCart={removeFromCart}
   style={{width:"250px"
   }}

   /> */}
                    </>
                )
 
            }
                
               
            )
            }
             {/* <h2>Total:{CalculateTotal(cartItems).toFixed(2)}</h2> */}
             <h2>
                Gross Total:{GrossTotal}
             </h2>
            
             
        </div>
    )
}

export default CartsReducer;



import CartItem from '../Carts/CartsItem/CartItem'



//types


import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import { Order } from './Order';


const Carts =({cartItems,addToCart,removeFromCart}) =>{
    // const navigate=   useNavigate()
     const navigate = useNavigate()
     //  const [Ids,setIds]=  useState([])
     const [Qts, setQts] = useState([])
     var Ids1 = []
     const [maxId, setMaxId] = useState([]);
     console.log("max is id ", maxId)
   
   
     console.log("max is id ", typeof (maxId))
     const CalculateTotal = (items) =>
       items.reduce((ack, item) => ack + item.amount * item.price, 0);
     const GrossTotal = CalculateTotal(cartItems).toFixed(2)
     const FetchData = async () => {
       await axios.get('http://localhost/ReactApps/food-web/OrderId.php').then(res => {
         console.log(res.data)
         setMaxId(res.data)
       })
     }
     useEffect(() => {
       FetchData();
   
     }, [])
     const Oids = maxId.map(el => el.orderId)
     console.log(Oids)
     const max = Math.max(...Oids);
     console.log("max oid is", max)
     console.log(typeof (max))
     console.log("Gros total is ", GrossTotal)
   
     // const [Ids,setIds]=  useState([])
     const arr = []
     console.log(arr)
     //  console.log("Ids are",Ids)
     const Ids = cartItems.map(el =>
       el.productId
   
     )
   
     console.log("ids are", Ids)
     const Names = cartItems.map(el =>
       el.name
   
     )
   
     console.log("names are are", Names)
     const Quantities = cartItems.map(el =>
       el.amount
   
     )
   
     console.log("quantities are", Quantities)
     const prices = cartItems.map(el =>
       el.price
   
     )
   
     console.log("prices are", prices)
   
     //const CalculateTotal=(items) => 
    //items.reduce((ack,item)=> ack + item.amount * item.price,0);
    const TotalQuantity=(items) => 
    items.reduce((ack,item)=> ack + item.amount ,0);
    //const GrossTotal=CalculateTotal(cartItems).toFixed(2);
    const GetOrder=()=>{
        navigate("/order",{state:{items:cartItems,GrossTotal:GrossTotal}})
     }
     const ConfirmOrder = () => {

        navigate('/orderconfirm', { state: { maxOrderId: max, Pids: Ids, Quantities: Quantities, prices: prices, GrossAmount: GrossTotal } })
      }
    return(
        <div style={{backgroundColor:"skyblue",height:"auto"
    }}>
            
            {cartItems.length ===0 ? <p>no items</p> : null}

            {cartItems.map(item=>{
                return(
                    <>
                    <Order
                 
                    item  ={item}
                    addToCart={addToCart}
                    GrossTotal={GrossTotal}
                    removeFromCart={removeFromCart}
                    style={{width:"500px"}}
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
             <h4>
                Gross :{GrossTotal}
             </h4>
             <h4>Total Quantity: {TotalQuantity(cartItems)}</h4>
             <button onClick={ConfirmOrder}
             className="btn btn-md btn-success"
             >
                Order Now
             </button>
            
             
        </div>
    )
}

export default Carts;

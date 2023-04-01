import React ,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const Order = ({item,addToCart,removeFromCart,GrossTotal}) => {
   const [Oamount,setOamount]= useState(item.amount * item.price)
   const [pid,setPid] =useState(item.productId)
   const [quantity,setQuantity] =useState(item.amount)
              const navigate=   useNavigate()
  //  const ConfirmOrder=()=>{
   
  //   navigate('/orderconfirm',{state:{Amount:Oamount,Pid:pid,Quantity:quantity}})
  //  }
   
  return (
    <div>
 <div >
       
      
        <div style={{marginLeft:"50px",width:"200px",height:"auto"}} >
            <h5>Name:{item.name}</h5>
            <h5>Pid:{item.productId}
            
            </h5>
            <div className="information">
            <p>price: PKR.{item.price}</p>
            
            <p>Total: PKR{item.amount * item.price}</p>
            </div>
        </div>
        <div className="buttons container">
            <span>
            <button size='small'
            className="btn btn-md btn-warning"
            disableElevation
            variant="contained"
            onClick={()=>{
                removeFromCart(item.productId)
            }}
            
            >
               - </button>   
               <span style={{fontSize:"30px",margin:"0 20px"}}>{item.amount}</span>
                <button size='small'
            disableElevation
            className="btn btn-md btn-success"
            variant="contained"
            onClick={()=>{
              const newTotal=item.amount+1;
              setQuantity(item.amount+1)
              setOamount(newTotal * item.price)
                addToCart(item)
                
            }}
            
            >
               +</button>   

            </span>
            <img src={item.image}  alt={item.name} width="100px" height="100px" 
        style={{marginLeft:"50px"}}
        />
        {/* <div> <button onClick={ConfirmOrder}
        className="btn btn-md btn-success"
        >OrderNow</button></div>*/}
       
        </div> 
       
    </div>
   
    
    </div>
   
  )
}

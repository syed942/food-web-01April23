import React, { useContext,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TransactionContext } from '../context/TransactionContext'
import styles from './CartTransactions.module.css'
export const CartTransaction = () => {
     const navigate=  useNavigate()
     const {cart,addTransaction,counter,  removeFromCart}=    useContext(TransactionContext)
    const [counter1,setCounter]= useState(1)
     console.log("carts items are ",cart)
     const totalItems=cart.length;
     console.log("total items",totalItems)
    console.log("conter1",counter1)
    const CalculateTotal1=(cart) => 
    cart.reduce((ack,item)=> ack + Number(item.quantity1) ,0);
    
const AddItem=(prod)=>{
    // console.log(counter1)
    // setCounter(counter1 +1)
    addTransaction(prod)
}
//useEffect(()=>{
    // const CalculateTotal=(items) => 
    // items.reduce((ack,item)=> ack + Number(item.amount) * Number(item.price,0));
    // const GrossTotal=CalculateTotal(cart).toFixed(2);
//},[cart])
const HandleOrder=(prod)=>{
  const amount=  prod.quantity1 * prod.price
 
    navigate('/ConfirmOrder',{state:{name:prod.name,id:prod.productId,price:prod.price,quantity1:prod.quantity1,
    amount:amount
    }});

}
  return (
    <div className={styles.wrapper}>
        <div>
       
        {/* <button>{CalculateTotal1(cart)}</button> */}
        <div >
            {
                cart?.map(prod=>{
                    return(
                        <>
                        <div key={prod.productId}>
                           
                            <p style={{fontSize:"14px",fontWeight:"bold"}}>Id:{prod.productId}</p> 
                            <p style={{fontSize:"14px",fontWeight:"bold"}}>Name:{prod.name}</p> 
                   <p style={{fontSize:"14px",fontWeight:"bold"}}>price:{prod.price}</p>  
                     
                   {/* <div>PayableAmount= {prod.quantity1 * prod.price}</div>   */}
                
                            <img src={prod.image} alt="ll" height="100px" width="100px" />
                        </div>
                        <br/>
                        <div>
                        <p style={{fontSize:"14px",fontWeight:"bold"}}>Amount= {prod.quantity1 * prod.price} PKR</p>
                        </div>
                        <br/>
                        <button className='btn btn-md btn-success' style={{marginRight:"20px"}}
                        onClick={()=>AddItem(prod)}
                        >Add</button>
                       {prod.quantity1}
                        <button onClick={()=>  removeFromCart(prod)}
                        className='btn btn-md btn-danger' style={{marginLeft:"20px"}}
                        >Remove</button>
                        <br/>
                        <br/>
                        <button onClick={()=>HandleOrder(prod)}
                        style={{position:"relative",width:"100%",backgroundColor:"lightgreen"}} className="btn btn-lg btn success"
                        >Order Now</button>
                        </>
                    )

                })
            }

        </div>

        </div>
        
    </div>
  )
}

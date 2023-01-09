import React ,{useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { TransactionContext } from '../context/TransactionContext'

export const OrderMe = () => {
 // const {quantity}=    useContext(TransactionContext)
    const loc=  useLocation()
    const id=loc.state.id;
    const name=loc.state.name;
    const price=loc.state.price;
   const quantity1= +loc.state.quantity1;
   const amount = loc.state.amount;
    
  return (
    <div>OrderMe
      product id:  {id}
      name:{name}
      price : {price}
      Quantity: {quantity1}
      Amount:{amount}
    </div>
  )
}

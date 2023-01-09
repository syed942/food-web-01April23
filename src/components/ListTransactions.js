import React from 'react'
import { useEffect,useState } from 'react'
import { useContext } from 'react'
import {  TransactionContext } from '../context/TransactionContext'
import { CartTransaction } from './CartTransaction'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer,List, ListItem, ListItemText,ListItemIcon } from '@mui/material'
import styles from './ListTransactions.module.css'
export const ListTransactions = () => {
    const { getTransactions,transactions,cart,  addTransaction,  QuantityInc,quantity}=   useContext(TransactionContext)
    const [openDrawer,setOpenDrawer] = useState(false)
   // const dispatch = useContext(ProductsDispatchContext);
   // const [list,setList] = useState(transactions)
    console.log(transactions)
    console.log("cart ites is",cart)
    const totalItems=cart.length
   // console.log(list)
   const CalculateTotal1=(cart) => 
   cart.reduce((ack,item)=> ack + Number(item.quantity1) ,0);
     useEffect(()=>{
  getTransactions()  
    

     },[])
     const   AddItem =(item)=>{
   //  QuantityInc()
      addTransaction(item)
     // console.log(QuantityInc())
     
     }
  return (
    <div>
     
       <header style={{backgroundColor:"skyblue",zIndex:"400"}}>
        <IconButton aria-label="cart" onClick={()=>setOpenDrawer(true)} style={{marginLeft:"85%",marginTop:"10px"}}>
        <Badge badgeContent={CalculateTotal1(cart)} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
          
        </header>
        {/* <div>{
           currentItems?.map(item=> 
         ( <Items item={item} addToCart={handleAddToCart} key={item.productId}/>))
        }</div> */}
         
   <Drawer anchor= "right"  onClose={()=>setOpenDrawer(false)} 
 
   
   open={openDrawer}>
   
   <CartTransaction  />
  
</Drawer>
     <div className={styles.wrapper}>
     {transactions?.map(item=>{
            return(<>
            <div key={item.productId} className={styles.item}>
              <span style={{fontSize:"14px",fontWeight:"bold"}}>Id: {item.productId}</span>
          <p style={{fontSize:"14px",fontWeight:"bold"}}>Name:    {item.name}</p>  
          <p style={{fontSize:"14px",fontWeight:"bold"}}> Price:   {item.price}</p>
                <img src={item.image} alt="ll" height="100px" width="100px"/>
                <br/>
                <br/>
            
  <button onClick={()=>AddItem(item)}
  className="btn btn-lg btn-success"
  >Add</button>
 
            </div>
            </>)
        }
            )}
     </div>
       
            {/* <CartTransaction /> */}
    </div>
  )
}

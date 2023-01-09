
import React from 'react'
import { Drawer,List, ListItem, ListItemText,ListItemIcon } from '@mui/material'
import styles from './Items.module.css'
import { useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalStates'
export const Items = ({item,addToCart}) => {
 // const {AddToCart1}=   useContext(GlobalContext)
 // console.log(AddToCart1)
  return (
   
        <div className={styles.item} key={item.productId} >
        <h4>Category:{item.name}</h4>
        {/* <p>Title: {item.email}</p> */}
        <p><img src={item.image} alt="ll" height="100px" width="100px" /></p>
       <p>Price: {item.price}</p>
       <List>
                <ListItem  >
                    <ListItemText>
                      <ListItemIcon ><button onClick={()=>addToCart(item)}
                      className={`btn btn-lg btn-success ${styles.AddCartBtn}`} >addToCart</button></ListItemIcon>
                    </ListItemText>
                </ListItem>
                </List>
       

   </div>

  
  )
}


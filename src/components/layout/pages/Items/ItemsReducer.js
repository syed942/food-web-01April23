
import React from 'react'
import { Drawer,List, ListItem, ListItemText,ListItemIcon } from '@mui/material'
import styles from './Items.module.css'
import { useContext } from 'react'
import { GlobalContext, GlobalProvider } from '../../../../context/GlobalStates'
import { ShoppingList } from '../../../ShoppingList'
import { AddItem } from '../../../AddItem'
export const ItemsReducer = ({item}) => {
          const { items, AddToCart1} =    useContext(GlobalContext)
          const AddShop=(item)=>{
            alert(item.name)
            AddToCart1(item)
          }
         
  return (
   
        <div className={styles.item} key={item.productId} >
           
        
      
        {/* <p><img src={item.image} alt="ll" height="100px" width="100px" /></p>
       <p>Price: {item.price}</p> */}
       <List>
                <ListItem  >
                    <ListItemText>
                      {/* <ListItemIcon ><button onClick={()=>AddShop(item)} */}
                      {/* className={`btn btn-lg btn-success ${styles.AddCartBtn}`} >addToCart</button></ListItemIcon> */}
                    </ListItemText>
                </ListItem>
                </List>
                <div>

                  <GlobalProvider>
                    <AddItem item={item}/>
                    <ShoppingList/>
                 
                  </GlobalProvider>
                 
                </div>
             

   </div>

  
  )
}


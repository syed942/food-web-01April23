
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalStates';

// import { RemoveItem } from './RemoveItem';
// import {Counter} from './Counter';
 
export const ShoppingList = () => {
   const { items } = useContext(GlobalContext);
 
   const shoppingMarkup = items.map((item, index) => (
      //  <li key = {index} className = 'list-item'> 
      //            {item.id} {item.name} {item.city} <RemoveItem item = {item} /> 
                 
      // </li>
      <li key = {index} className = 'list-item'> 
      {item.productId}  {item.name}
      
</li>
   )) 

   return ( 
      <ul className = 'shopping-list'> 
         {shoppingMarkup} 
      </ul>
   )
}

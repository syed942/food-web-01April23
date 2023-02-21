
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'
import { useEffect } from 'react';
const data=[{id:1,name:"asad",city:"lahore"},{id:2,name:"asad shsh",city:"lahore"}]
const initialState = {
 //  shoppingList : [{id:1,name:"asad",city:"lahore"},{id:2,name:"asad shsh",city:"lahore"}],
  //cartItems : [],
  products: null,
   adminUser:"ishfaq@foodweb.com",
   adminPassword:"admin",
  // adminOk:null
 //  counter:33
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   

    
   const [state, dispatch] = useReducer(AppReducer, initialState);
   
  
   

   return(
      <GlobalContext.Provider value = {{
        //shoppingList : state.shoppingList,handleInc,handleDec,counter:state.counter,
       //addItemToList, removeItemFromList
      // AddToCart1,
     //  getProducts,
       userName:state.adminUser,
       password:state.adminPassword,
       items:state.cartItems
      // adminOk:state.adminOk,
      
       
       }}> 
        {children} 
   </GlobalContext.Provider>
   )
}

      
  
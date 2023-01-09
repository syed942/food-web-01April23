import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import AppReducerNew from './AppReducerNew';

const initialState = {
  transactions: [],
  cart:[],
  quantity:0,
  loading: true
}

export const TransactionContext = createContext(initialState);
//export const ProductsDispatchContext = createContext();
export const TransactionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducerNew, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  
  function addTransaction(item) {
    dispatch({
      type:'ADD_TRANSACTION',
      payload: item
    })
  }
  // function removeFromCart  ( cartItemId) {
  //   dispatch({
  //     type: "REMOVE_FROM_CART",
  //     payload:  cartItemId
  //   });
  // };
 //function  removeFromCart(cartItemId) {
  function  removeFromCart(item) {
    dispatch({
      type: "REMOVE_FROM_CART",
      // payload: {
      //   cartItemId: cartItemId
      // }
      payload:item
    });
  };
 
   function removeItemFromList(item) {
    dispatch({
        type: 'REMOVE_ITEM',
        payload: item
    });

}

  // Async Action
  async function getTransactions() {
    try {
      const response = await axios.get('http://localhost/ReactApps/food-web/Product.php')
      //state.transactions= response.data.data
      console.log(response.data)
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: response.data
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
  }

  return (
    // <ProductsDispatchContext.Provider value={dispatch}>
<TransactionContext.Provider value={{
      transactions: state.transactions,
      cart:state.cart,
      addTransaction,
      deleteTransaction,
      removeItemFromList,
      removeFromCart,
      getTransactions,
      error: state.error,
      loading: state.loading,
     // QuantityInc,
      quantity:state.quantity

    }}>
      {children}
    </TransactionContext.Provider>
    // </ProductsDispatchContext.Provider>
    
  )
}
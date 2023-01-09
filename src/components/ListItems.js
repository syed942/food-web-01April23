import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { ProductsDispatchContext } from '../context/ProductActions'
import { getProducts, ProductsStateContext } from '../context/ProductActions'
import styles from './Home1.module.css'
export const ListItems = () => {
    const {products}=  useContext(ProductsStateContext)
          const dispatch  =  useContext(ProductsDispatchContext)
          useEffect(()=>{
            getProducts(dispatch)
          },[products])
  return (
    <div className={styles.wrapper}>
      {
         products?.map(item=>{
            return(
            <><div key={item.productId} className={styles.item}>
            {item.productId}
          {item.name}
            {item.price}
            <img src={item.image} alt="ll" height="100px" width="100px" />
      <div>
      <button onClick={()=>{
         alert("jjj")
      }}>add</button>
      </div>
           
         </div>
         </>
               )
         })
      }
    </div>
  )
}

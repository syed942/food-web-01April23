import React,{useState} from 'react'
import { useContext } from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalStates'
import { ShoppingList } from './ShoppingList'

export const AddItem = ({item}) => {
  const [product,setProduct]=useState(item)
  const {AddToCart1,items}=    useContext(GlobalContext)
  
    const AddToShop=({item})=>{
     
       // e.preventDefault()
      //  console.log("item added")
       // alert("item add",product.name)
       AddToCart1({item})
    }
  return (
    <div>AddItem
      {product.name}
      <GlobalProvider>
     <ShoppingList/>
      </GlobalProvider>
     
         <h4>Category:{item.name}</h4>
      
        <p><img src={item.image} alt="ll" height="100px" width="100px" /></p>
       <p>Price: {item.price}</p>
       <button onClick={AddToShop}>Add Item</button>
      
    </div>
  )
}

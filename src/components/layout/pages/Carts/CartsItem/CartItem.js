import { useNavigate } from "react-router-dom"
import { Order } from "../Order"


// styles
const CartItem = ({item,addToCart,removeFromCart,GrossTotal})=>{
   
return(
<div style={{backgroundColor:""}}>
    
        <div style={{marginLeft:"20px",backgroundColor:""}} className='container'>
            <h3>{item.name}</h3>
            <div className="information">
            <p>price: PKR.{item.price}</p>
            
            <p>Total: PKR{item.amount * item.price}</p>
            </div>
        </div>
        <div className="buttons container">
            <span>
            <button size='small'
            className="btn btn-md btn-warning"
            disableElevation
            variant="contained"
            onClick={()=>{
                removeFromCart(item.productId)
            }}
            
            >
               - </button>   
               <span style={{fontSize:"30px",margin:"0 20px"}}>{item.amount}</span>
                <button size='small'
            disableElevation
            className="btn btn-md btn-success"
            variant="contained"
            onClick={()=>{
                addToCart(item)
            }}
            
            >
               +</button>   

            </span>
         
        </div>
        <img src={item.image}  alt={item.name} width="100px" height="100px"/>
       
    </div>
)
    
}
    


export default CartItem
import { Satellite } from "@mui/icons-material";
import { act } from "react-dom/test-utils";

function AppReducerNew(state, action) {
    // console.log("quantity is",state.quantity)
    switch (action.type) {
        case 'ADD_TRANSACTION':
            //  let isOld=null;
            const isOld = state.cart.find(item => item === action.payload)
            //  const ok=isOld.productId;
            console.log("items already existed", isOld)
            let a = 3;
            // setCartItem(prev=>{
            //     const isItemInCart=prev.find(item=>item.productId===clickedItem.productId)
            //     if(isItemInCart){
            //       return prev.map(item=> item.productId===clickedItem.productId?{...item,amount:item.amount +1}: item
            //       );
            //     }
            //     return [...prev,{...clickedItem,amount:1}]
            //   })
            if (isOld) {
               // if(action.payload.productId === isOld.productId){
                    return {
                        ...state,
                        //state.cart.map(item=> item.productId===clickedItem.productId?{...item,amount:item.amount +1}: item)
                    //cart: return(cart.map(el=>{el.productId === action.payload.productId? { ...action.payload, quantity1: action.payload.quantity1 + 1 }:action.payload}))
                       cart: [{ ...action.payload, quantity1: action.payload.quantity1 + 1 }] // exact true
                    }                   
               

            }
            else {
                return {
                    ...state,
                    // return [...prev,{...clickedItem,amount:1}]
                    cart: [{ ...action.payload, quantity1: 1 }]
                    // quantity:1
                }


            }



        case "increment": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case "REMOVE_FROM_CART":


            // const ii=4;
            if (state.cart[0].quantity1 >= 1) {
                return {
                    ...state,
                    cart: [{ ...state.cart[0], quantity1: state.cart[0].quantity1 - 1 }]


                }

            } else {
                return {
                    ...state,

                    cart: state.cart.filter(item => item !== action.payload)

                }

            }


        case 'GET_TRANSACTIONS':
            console.log(action.payload)
            return {
                ...state,
                transactions: action.payload
            }

        default:
            return state
    }

}
export default AppReducerNew;



// const handleAddToCart=(clickedItem)=>{
//     setOpenDrawer(true)
//     setCartItem(prev=>{
//       const isItemInCart=prev.find(item=>item.productId===clickedItem.productId)
//       if(isItemInCart){
//         return prev.map(item=> item.productId===clickedItem.productId?{...item,amount:item.amount +1}: item
//         );
//       }
//       return [...prev,{...clickedItem,amount:1}]
//     })
//   }
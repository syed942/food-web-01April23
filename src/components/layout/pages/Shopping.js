
import React,{useState,useEffect} from 'react'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Drawer,List, ListItem, ListItemText,ListItemIcon } from '@mui/material'
//import { Container } from './Container'
import axios from 'axios'
import { Items } from './Items/Items';
import Carts from './Carts/Carts';
import styles from './Items/Items.module.css'
import { Paginate } from './UI/Paginate';
import { Paginate1 } from './UI/Paginate1';

//import { Drawer,List, ListItem, ListItemText } from '@material-ui/core'

 const Shopping = () => {
  const [openDrawer,setOpenDrawer]=useState(false)
  const [data,setData]= useState([])
  const CalculateTotal1=(items) => 
    items.reduce((ack,item)=> ack + item.amount ,0);
  const [cartOpen,setCartOpen]=useState(false);
  const [cartItem,setCartItem]= useState([]);
//   const FetchData=async()=>{
//     const res=await axios.get(`https://fakestoreapi.com/products`)
//     console.log(res.data)
//     setData(res.data)
//   }
//   useEffect(()=>{
// FetchData()
//   },[])
  const FecthData = async () => {
    //setSkeleton(false)
    await axios.get('http://localhost/ReactApps/food-web/Product.php').then(res => {
      console.log(res.data)
      setData(res.data)
      //  setCurrentItems(res.data);
      //  setCurrentItems([...res.data.slice(pagination.start, pagination.end)])
      // e.preventDefault()


    })
  }
  useEffect(() => {
    FecthData()
    

  }, [])
 
  const handleAddToCart=(clickedItem)=>{
    setCartItem(prev=>{
      const isItemInCart=prev.find(item=>item.productId===clickedItem.productId)
      if(isItemInCart){
        return prev.map(item=> item.productId===clickedItem.productId?{...item,amount:item.amount +1}: item
        );
      }
      return [...prev,{...clickedItem,amount:1}]
    })
  }
  const handleRemoveFromCart=(id)=>{
    setCartItem(prev => prev.reduce((ack,item)=>{
    if(item.productId===id){
      if(item.amount===1)  return ack;
      return [...ack,{...item,amount:item.amount -1}];
    }  else {
      return [...ack,item];
    }
    },[] )
    
    )
    
    
    
      }
  
console.log(data)
  return (
    <div>
        {/* <button className='btn btn-md btn-success'>hello</button>
        <i className= " fa fa-eye" ></i> */}
      <header style={{backgroundColor:"skyblue"}}>
      {/* <IconButton aria-label="cart" onClick={()=>setOpenDrawer(true)}>
      <Badge badgeContent={CalculateTotal1(cartItem).toFixed(0)} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton> */}
        
      </header>
      {/* <div className={styles.wrapper}>{
        data?.map(item=> 
       ( <Items item={item} addToCart={handleAddToCart}/>))
      }
      </div> */}
      {/* {
        data?.map(item=> 
       ( <Items item={item} addToCart={handleAddToCart}/>))
      } */}
     
 <Drawer anchor='right'  onClose={()=>setOpenDrawer(false)}  open={openDrawer}>
 
             {/* <List>
                <ListItem button>
                    <ListItemText>
                      <ListItemIcon>Courses</ListItemIcon>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                      <ListItemIcon>Courses</ListItemIcon>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                      <ListItemIcon>Courses</ListItemIcon>
                    </ListItemText>
                </ListItem>
               
            </List>  */}
            <Carts cartItems={cartItem} addToCart={handleAddToCart}
       removeFromCart={handleRemoveFromCart} />
        </Drawer>
                    
 <div >
         

          
             
         <Paginate1 items={data} />
      
</div>
    </div>
       
  
  )
}
export default Shopping;
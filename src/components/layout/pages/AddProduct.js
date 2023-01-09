
import React ,{useState,useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styles from '../pages/AddProduct.module.css'
import axios from 'axios'
export const AddProduct = () => {
  const navigate= useNavigate()
  const [product,setProduct]=useState({
    name:null,
    file: null,
    data:[],
    name1:"",
    price:0,
    image:""
    

    
  })
  const handleChange=(e)=>{
    setProduct({...product,[e.target.name]:e.target.value});
  }
//   useEffect(()=>{
//     setProduct({...product,name:null,price:null});
//   },[])
  const onChangeImg=(event)=> {
    setProduct({...product,
        name: URL.createObjectURL(event.target.files[0]),
        file: event.target.files[0]
    })
}
const HandleCancel=()=>{
  navigate("/shopping")
}
const HandleSubmit=(e)=>{
  e.preventDefault()
  console.log("product is added")
  
    
    //console.log(num)
    console.log("add is pressed")
    console.log(product.name)
    console.log(product.file.name)

    const formData = new FormData();
    //formData.append('id', user.id);
    formData.append('name', product.name)
    formData.append('image', product.file);
    formData.append('name1', product.name1);
    formData.append('price', product.price);
    //formData.append('password', user.password);
    formData.append('data', product.data)
    // let url = "http://localhost/Server.php"
    let url = "http://localhost/ReactApps/food-web/AddProduct.php"
    axios.post(url, formData, {
    })
      .then(res => {
        console.log(res.data);
      })

   // window.location.reload(false);
    navigate("/shopping1")
    
   // navigate('/welcome',{state:{name:user.name1,email:user.email}});

}
  return (
    <div>
      <div className={styles.wrapper}>
        < div className={styles.item}>
        <form onSubmit={HandleSubmit}   >
     
       
     <table>
       <br/>
       <tr>
         <td><label htmlFor='name1'>Name:</label></td>
         <td ><input type="text" value={product.name1} 
   id="name1" placeholder='Please enter Product Name' required="true" 
   name="name1" onChange={handleChange} /></td>
       </tr>
       <br/>
       <tr>
         <td>
         <label htmlFor='price'>Price</label>
         </td>
         <td> <input type="number" value={product.price} required="true" 
   id="price" placeholder='Please enetr Product price'
   name="price" onChange={handleChange} /></td>
       </tr>
       <br/>
       <tr>
         
       </tr>
       <tr>
        <td>
        
        </td>
        <td>
          
        <button type="submit" className='btn btn-md btn-success'>
 Save
 <i class="fa fa-plus"></i>
</button>
        <button onClick={HandleCancel} className="btn btn-md btn-warning">Cancel
 <i class="fa-regular fa-circle-xmark"></i>
 </button>
        </td>
       </tr>
     </table>
   
   
   
  

  

 </form>
        </div>
     
      
      <div className={styles.item}>
      <label>Add Product picture</label>
           <input type="file" name="image" onChange={onChangeImg}  
/>
           
           <img src={product.name} alt='File preview'  className={styles.img}
          
          />
      </div>
      </div>
    </div>
  )
}

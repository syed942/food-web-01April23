import React ,{useState,useEffect,useRef} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import axios from 'axios'
import styles from '../pages/Signup.module.css'
export const Signup = () => {
  const navigate= useNavigate()
  const form=useRef();
  const [user,setUser]=useState({
    name:null,
    file: null,
    data:[],
    name1:"",
    email:"",
    password:""

    
  })
  const [subject, setSubject]= useState("welcome email")
  const [email1,setEmail1]= useState("sishfaqhussain1974@gmail.com")

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  useEffect(()=>{
    setUser({...user,name:null,email:null});
  },[])
  const onChangeImg=(event)=> {
    setUser({...user,
        name: URL.createObjectURL(event.target.files[0]),
        file: event.target.files[0]
    })
}
const HandleCancel=()=>{
  navigate("/")
}
const HandleSubmit=(e)=>{
  e.preventDefault()
  console.log("sign up submitted")
  
    
    //console.log(num)
    console.log("add is pressed")
    console.log(user.email)
    console.log(user.file.name)

    const formData = new FormData();
    formData.append('id', user.id);
    formData.append('name', user.name)
    formData.append('image', user.file);
    formData.append('name1', user.name1);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('data', user.data)
    // let url = "http://localhost/Server.php"
    let url = "http://localhost/ReactApps/food-web/AddUser.php"
    axios.post(url, formData, {
    })
      .then(res => {
        console.log(res.data);
      })

    //window.location.reload(false);
    emailjs.sendForm('service_45un1qa', 'template_wdhkugw', form.current, 'dkkdslkjhin_wG7bh')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    navigate('/welcome',{state:{name:user.name1,email:user.email}});

}

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.item}>
        <form ref={form}  onSubmit={HandleSubmit}>
       
        
     
       
     <table>
       <br/>
       <tr>
         <td><label htmlFor='name1'>Name:</label></td>
         <td ><input type="text" value={user.name1} 
   id="name1" placeholder='Please enter Your Name' required="true" 
   name="name1" onChange={handleChange} /></td>
       </tr>
       <br/>
       <tr>
         <td>
         <label htmlFor='email'>Email</label>
         </td>
         <td> <input type="email" value={user.email} required="true" 
   id="email" placeholder='Please enetr Your Email'
   name="email" onChange={handleChange} /></td>
       </tr>
       <br/>
       <tr>
         <td>
         <label htmlFor='password'>Password</label>
         </td>
         <td>
         <input type="password" value={user.password} required="true" 
   id="password"
   name="password" onChange={handleChange} />
         </td>
       </tr>
       <tr>
        <td>
        
        </td>
        <td>
          {/* <div onClick={SendEmail}> */}
          <button type="submit" className='btn btn-md btn-success'  >
        Save
 <i class="fa fa-plus"></i>
</button>
          {/* </div> */}
          
          
       
        <button onClick={HandleCancel} className="btn btn-md btn-warning">Cancel
 <i class="fa-regular fa-circle-xmark"></i>
 </button>
 
        </td>
       </tr>
     </table>
   
   
   
  

  

 </form>
        </div>
     
      
      
      <div className={styles.item}>
      <label>Add Your picture</label>
           <input type="file" name="image" onChange={onChangeImg}  
/>
           
           <img src={user.name} alt='File preview'  width="200px" height="200px" className={styles.img}
          
          />
      </div>
      </div>
    </div>
  )
}

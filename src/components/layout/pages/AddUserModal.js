import { red } from '@mui/material/colors';
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Modal from 'react-modal';
//import './FlexBox.css'
import styles from '../pages/AddUserModal.module.css'
import { useRef } from 'react';
const customStyles = {
  content: {
    
    top: '50%',
    left: '50%',
    borderRadius:'20px',
    background:'skyblue',
    // width:'100%',
    right: 'auto',
    width: '60%',
    bottom: 'auto',
   // marginRight: '-50%',
    marginLeft: '30px',
    textAlign:"center",
    
    
    transform: 'translate(-50%, -50%)'
  }
};

export const AddUserModal=(props)=> {
  const navigate=useNavigate()
  const form1=useRef()
  const [user,setUser]=useState({
    name:null,
    file: null,
    data:[],
    name1:"",
    email:"",
    password:""

    
  })
 
  function afterOpenModal(e) {
    props.onAfterOpen(e, 'After Modal Opened');
  }

  function onModalClose(event) {
    navigate("/")
    // let data = { name: 'example', type: 'closed from child' };
    // props.onCloseModal(event, data);
  }
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
// style={{position:"relative",left:"120px",top:"300px"}}
// style={{position:"relative",left:"-190px",
//width:"330px",height:"500px"}}
  return (
    <div>
      <div >
      <Modal
        isOpen={props.IsModalOpened}
        onAfterOpen={e => afterOpenModal(e)}
      // style={customStyles}
       
        
     
      
      >
       
       
       
        
        {/* <div className="wrapper"  > */}
        {/* <div className="row "   > */}
      <div  className={styles.wrapper} >
      <div  className={styles.item}  >
        
        {/* <div className="col-sm-6 col-md-5"   > */}
             <form onSubmit={event => props.handleClick(event,user,form1)}  ref={form1} >
          
            
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
                   
                 <button type="submit" className='btn btn-md btn-success'>
          Save
          <i class="fa fa-plus"></i>
        </button>
                 <button onClick={e => onModalClose(e)} className="btn btn-md btn-warning">Cancel
          <i class="fa-regular fa-circle-xmark"></i>
          </button>
                 </td>
                </tr>
              </table>
            
            
            
           
     
           
        
          </form>
          </div>
     
          
          
          
            
             
              
     
           
             
             {/* <div className= {`col-sm-6 ${styles.col2}`} style={{border:"2px solid blue",borderRadius:"20px"}}> */}
             {/* <div className="col-sm-6 col-md-5"   > */}
             {/* <div  className={`card ${styles.one}`} > */}
             <div  className={styles.item} >
              
               <label>Add Your picture</label>
                <input type="file" name="image" onChange={onChangeImg}  
     />
                
                <img src={user.name} alt='File preview' 
               className={styles.img}
                width="200px" height="200px"
               
               />
         
     
     
             
     </div>
     
     
       </div> 
        

</Modal>
</div>

     
     </div>
  );
}

//export default AddUserModal;
// import React from 'react'

// export const AddUserModal1 = () => {
//   return (
//     <div>
       


// <div class="container">
//         <div class="row">
//             <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div class="card">
//                     <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>
//                     <div class="card-block">
//                         <h5 class="text-bold">Tawshif Ahsan Khan</h5>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div class="card">
//                     <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>

//                     <div class="card-block">
//                         <h4 class="card-title">Tawshif Ahsan Khan</h4>
//                         <div class="meta">
//                             <a href="#">Friends</a>
//                         </div>
//                         <div class="card-text">
//                             Tawshif is a web designer living in Bangladesh.
//                         </div>
//                     </div>
//                     <div class="card-footer">
//                         <span class="float-right">Joined in 2013</span>
//                         <span><i class=""></i>75 Friends</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div class="card">
//                     <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>

//                     <p class="card-block">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam velit quisquam veniam excepturi temporibus inventore corporis dicta sit culpa veritatis placeat earum, dolorum asperiores, delectus dolore voluptatibus, at magnam nobis!
//                     </p>
//                 </div>
//             </div>
//             <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div class="card">
//                     <img class="card-img-top" src="https://picsum.photos/200/150/?random" />

//                     <div class="card-block">
//                         <figure class="profile">
//                             <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""/>
//                         </figure>
//                         <h4 class="card-title mt-3">Tawshif Ahsan Khan</h4>
//                         <div class="meta">
//                             <a>Friends</a>
//                         </div>
//                         <div class="card-text">
//                             Tawshif is a web designer living in Bangladesh.
//                         </div>
//                     </div>
//                     <div class="card-footer">
//                         <small>Last updated 3 mins ago</small>
//                         <button class="btn btn-secondary float-right btn-sm">show</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="row mb-5">
//             <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div class="card card-inverse card-primary ">
//                     <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>
//                     <blockquote class="card-blockquote p-3">
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
//                         <footer>
//                             <small>
//                           Someone famous in <cite title="Source Title">Source Title</cite>
//                         </small>
//                         </footer>
//                     </blockquote>
//                 </div>
//             </div>
//             <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div class="card card-inverse card-info">
//                     <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>
//                     <div class="card-block">
//                         <figure class="profile">
//                             <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""/>
//                         </figure>
//                         <h4 class="card-title mt-3">Tawshif Ahsan Khan</h4>
//                         <div class="meta card-text">
//                             <a>Friends</a>
//                         </div>
//                         <div class="card-text">
//                             Tawshif is a web designer living in Bangladesh.
//                         </div>
//                     </div>
//                     <div class="card-footer">
//                         <small>Last updated 3 mins ago</small>
//                         <button class="btn btn-info float-right btn-sm">Follow</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div class="card card-inverse card-info">
//                     <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>
//                     <div class="card-block">
//                         <figure class="profile profile-inline">
//                             <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""/>
//                         </figure>
//                         <h4 class="card-title">Tawshif Ahsan Khan</h4>
//                         <div class="card-text">
//                             Tawshif is a web designer living in Bangladesh.
//                         </div>
//                     </div>
//                     <div class="card-footer">
//                         <small>Last updated 3 mins ago</small>
//                         <button class="btn btn-info float-right btn-sm">Follow</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
//                 <div class="card card-inverse card-info">
//                     <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>
//                     <div class="card-block">
//                         <figure class="profile profile-inline">
//                             <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""/>
//                         </figure>
//                         <h4 class="card-title">Tawshif Ahsan Khan</h4>
//                         <div class="card-text">
//                             Tawshif is a web designer living in Bangladesh.
//                         </div>
//                     </div>
//                     <div class="card-footer">
//                         <button class="btn btn-info btn-sm">Follow</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
// </div>
//     </div>)
// }
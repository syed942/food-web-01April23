
import React, { useState,useEffect ,useMemo} from 'react';
import Modal from 'react-modal';
//import styles from './UpdateUserModal.css'
import styles from '../pages/UpdateUserModal.module.css'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    background:'skyblue',
    borderRadius:'20px',
    
    right: 'auto',
    width: '70%',
   
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export const UpdateUserModal=(props)=> {
  console.log(props.data.image)
  console.log(props.data.name)
  console.log(props.handleClick1)
    console.log(props.data.name)
    console.log(props.data.image)
    console.log(props.data.userId)
  const [user,setUser]=useState({
   // id:props.data.userId,
    Imgname:props.data.image,
    file1: props.data.image,
    data1:[],
    Username:props.data.name,
    userEmail:props.data.email,
    userPassword:props.data.password

    
  })
  useEffect(()=>{
    setUser({...user,
     // id:props.data?.userId,
      Username:props.data.name,userEmail:props.data.email,userPassword:props.data.password,file1:props.data.image,Imgname:props.data.image})
  },[props.data])
  
  function afterOpenModal(e) {
    props.onAfterOpen1(e, 'After Modal Opened');
  }

  function onModalClose(event) {
    let data = { name: 'example', type: 'closed from child' };
    props.onCloseModal1(event, data);
  }
  function onModalClose1(event) {
    let data = { name: 'example', type: 'closed from child' };
    props.onCloseModal1(event, data);
  }
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  const onChangeImg=(event)=> {
    
    setUser({...user,
     Imgname: URL.createObjectURL(event.target.files[0]),
      file1: event.target.files[0]
  })
}

  return (
    <div>
      <Modal
        isOpen={props.IsModalOpened1}
        onAfterOpen1={e => afterOpenModal(e)}
       // style={customStyles}
      //  ariaHideApp={false}
      
      >
        <div className={styles.wrapper}>
          <div className={styles.item}>
          <form onSubmit={event => props.handleClick1(event,user)}   >
          
            <table>
              <br/>
              <br/>
              <tr>
                <td>
                <label htmlFor='name1'>Name:</label>
                </td>
                <td>
                <input type="text" value={user.Username} 
          id="name1"
          name="name1" onChange={(e)=>setUser({...user,Username:e.target.value})} />
                </td>
              </tr>
              <br/>
              <br/>
              <tr>
                <td>
                <label htmlFor='password'>Password</label>
                </td>
                <td>
                <input type="password" value={user.userPassword}
          id="password"
          name="password" onChange={(e)=>setUser({...user,userPassword:e.target.value})} />
                </td>
              </tr>
            </table>
         
          <br/>
         <br/>
         
         
          
        <input type="submit" value="Save Changes"  className='btn btn-md btn-success'/>
        <span> <button onClick={e => onModalClose1(e)}
        className="btn btn-md btn-warning"
        >Cancel</button></span>
        
</form>
          </div>
          <div className={styles.item}>
            <form onSubmit={e => props.editImg(e,user)}>
            <input type="file" name="name" onChange={onChangeImg} />
          <img src={user.Imgname} alt='File preview' height="200px" width="200px" className={styles.img}
        />
        
        <input type="submit" value="Save New Image" 
          
          onClick={(e)=>props.editImg(e,user)}
       
          />
        
          

          

          

          
          
         

        </form>
        </div>
        </div>
        
          
       
        
    
      </Modal>
    </div>
  );
}

//export default AddUserModal;
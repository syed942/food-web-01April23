

import React ,{useEffect,useState} from 'react'
import {useNavigate,Navigate}  from 'react-router-dom'
export const Protected = (props,{children}) => {
  const [login,setLogin] = useState(false)
    const {Component} = props;
    const navigate=useNavigate()
   

useEffect(()=>{  
  let user=localStorage.getItem('login')
      
        if (!user) {
        
        navigate("/login")
        }
})
      
      return (
        <div>
            <Component />
        </div>
      )
       
  }
 


import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
export const Welcome = () => {
  const form = useRef()
  const location = useLocation();
  const name = location.state.name;
  const email = location.state.email;
    console.log(name)
    const logoutUser=()=>{
      localStorage.clear()
    }
  return (
    <div><h3>Welcome Mr./Mrs. {name}</h3>
      <div onClick={logoutUser}>
      <Link to="/login">Sign In</Link>
      </div>
     
    </div>
  )
}


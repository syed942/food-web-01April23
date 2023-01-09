import React from 'react'
import { useState } from 'react'

export const Object = () => {
    const [user ,setUser]= useState(
        {
            name:"ali",
            city:"lahore"
        }
    )
   console.log(user)
    const Addnew=()=>{
setUser({...user,age:20,gender:"male"})
    }
  return (
    <div>
        <button onClick={Addnew}>ADD</button>

    </div>
  )
}

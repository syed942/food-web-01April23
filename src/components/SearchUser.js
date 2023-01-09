import React, { useState, useEffect } from 'react'
import axios from 'axios'
//const baseURL = `http://localhost/ReactApps/food-web/SingleUser.php/?`;
export const SearchUser = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    
    email: "",
    password: "",
    name:"",
    
  })
  console.log(data)
  const FecthData =  (email) => {
    const formData = new FormData();
    formData.append('email', form.email)
    
  }
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }
 
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log("form is submitted", form)
    // const formData=new FormData();
    // formData.append('email',form.email)
    const result = await axios.get(`http://localhost/ReactApps/food-web/SingleUser.php/?email=${form.email}`);
    //const result = await axios.get(`http://localhost/ReactApps/food-web/SingleUser.php/?userId=${form.id}`);
    setData(result.data)
   
    

  }
  const DeleteOne=async()=>{
    const result = await axios.delete(`http://localhost/ReactApps/food-web/DeleteUser.php/?email=${form.email}`);
    setData(result.data)

  }
  const UpdateOne=async()=>{
    const formData= new FormData();
    formData.append('name',form.name)
   const name=formData.get('name')
    
    //formData.append('email',form.email)
     const result = await axios.patch(`http://localhost/ReactApps/food-web/UpdateUser.php?email=${form.email} && name=${form.name}`);
   //  const result = await axios.patch(`http://localhost/ReactApps/food-web/UpdateUser.php?userId=${form.userId} && name=${form.name} && 
   //  email=${form.email}
    // `);
   // const result = await axios.patch(`http://localhost/ReactApps/food-web/UpdateUser.php?email=${form.email} `, name,{});
    setData(result.data)

  }

  return (
    <div>
      <h2>Search Component</h2>
       {
        data.map(el=>{
          return (<div key={el.userId}>
  {el.name}
          </div>)
        }
          )
         
       }
      
      <form onSubmit={handleSubmit}>
   
      <input type="text" value={form.name} name="name" onChange={handleChange} />
        <input type="email" value={form.email} name="email" onChange={handleChange} />
        <br />
        <input type="password" value={form.password} name="password" onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
      <button onClick={DeleteOne}>Delete</button>
      <button onClick={UpdateOne}>Update</button>
  


    </div>
  )
}

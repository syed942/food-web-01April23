
import React,{useEffect} from 'react'
import {useNavigate,Link,createSearchParams}  from 'react-router-dom'
import { NavBar } from '../../navbar/NavBar';
//import { Navbar } from '../../navBar/Navbar';
import { List } from './List';

export const Home = () => {
  const navogate=useNavigate();
 
 useEffect(()=>{
  navogate("list/?limit=5&&offset=0")
  //const params = { limit: '10', offset: '0' };

  
  
    
  //navogate( pathname, 'list',
  //search, '?limit=10',)

  },[])
  useEffect(()=>{
    localStorage.removeItem("name")

  },[])
  
  
  return (
    <div>
      {/* <NavBar logout={logout}/> */}
      {/* <button onClick={DashBoard}>Go TO Dashboard</button> */}
     {/* <Link to="list/?limit=5&&offset=0">Dash Board</Link> */}
     {/* <NavBar logout={logout}/> */}
     
    </div>
  )
}


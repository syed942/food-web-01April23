
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import styles from '../pages/Login.module.css'
import { GlobalContext } from '../../../context/GlobalStates';
import { AdminPanelSettingsOutlined } from '@mui/icons-material';

export const Login = () => {
  const { adminUser, adminPassword } = useContext(GlobalContext);
  var userName = adminUser;
  
  console.log(" user name", userName);
  console.log("admin password is", adminPassword)
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  console.log("showPassword", showPassword)
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [loginFailed, setLoginFailed] = useState(false)
  const [userOk,setUserOk] = useState(true)
  console.log(userOk)
  var login1;
  const navigate = useNavigate()
  const login = () => {
    localStorage.setItem('login', true)
    navigate("/", { state: { hideLogout: true } })
  }
  useEffect(() => {
    var user = localStorage.getItem('login')
    if (user) {
      navigate("/")
    }
  })
  const FetchData = () => {
    axios.get('http://localhost/ReactApps/food-web/UserList.php').then((response) => {
      setData(response.data);
    });
  }
  const ShowPassword = () => {
    setShowPassword(!showPassword);
  }
  useEffect(() => {
    FetchData()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = data.find(item => item.email == loginForm.email && item.password === loginForm.password)
    console.log(user)
    if (adminUser === loginForm.email && adminPassword === loginForm.password 
    ) {
      localStorage.setItem('login', true)
      localStorage.setItem('admin',true)
      
       
      setLoginForm({ ...loginForm, email: " ", password: " " })
      
      navigate("/?limit=5&&offset=0"
      )
     
    } else if(user.email === loginForm.email &&
      user.password === loginForm.password){
        localStorage.setItem('login', true)
       // localStorage.setItem('admin',true)
        
         
        setLoginForm({ ...loginForm, email: "", password: "" })
        
        navigate("/?limit=5&&offset=0"
        )
      }
    
    
   
  }
  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div>{
        loginFailed ? "incorrect email or password" : ""
      }
      </div>
      <div className={styles.tableContainer}>
        {/* <div className={styles.item}> */}
        <form onSubmit={handleSubmit}>
          <table align='center' className='table'>
            <tr>
              <td><label htmlFor='email'>UserName/Email</label>
              </td>
              <td>
                <input type="text" id="email" value={loginForm.email}
                  name="email" onChange={handleChange} style={{ position: "relative", width: "100%", margin: "0 auto" }}
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <label htmlFor='password' >Pssword</label>
              </td>
              <td>
                <input type={showPassword ? 'text' : 'password'} id="password" value={loginForm.password}
                  name="password" onChange={handleChange} style={{ position: "relative", width: "100%", margin: "0 auto" }}
                />
              </td>
              <td style={{ textAlign: "left", color: "green", fontSize: "30px" }}><i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                onClick={ShowPassword}
              ></i></td>
            </tr>
            <tr>
            </tr>
          </table>
          <button type="submit"
            className="btn btn-md btn-success" style={{ minWidth: "100%", position: "relative" }}
          >Login</button>
        </form>
      </div>
    </div>
  )
}


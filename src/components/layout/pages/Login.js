
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import styles from '../pages/Login.module.css'
import { GlobalContext } from '../../../context/GlobalStates';
import { AdminPanelSettingsOutlined, VerticalAlignBottom } from '@mui/icons-material';
//import jwt_decode  from "jwt-decode"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

export const Login = () => {
  const { adminUser, adminPassword } = useContext(GlobalContext);
  console.log("admin user and adminpassword", adminUser, adminPassword)
  const [user1, setUser1] = useState({
  })
  var userName = adminUser;

  console.log(" user name", userName);
  console.log("admin password is", adminPassword)
  //const [email,setEmail]= useState("")
  const myref = useRef()
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  console.log("showPassword", showPassword)
  const [error, setErrorMessages] = useState("")
  const [data, setData] = useState([])
  console.log("data is ", data)
  const [data1, setData1] = useState([{}])
  const [loginFailed, setLoginFailed] = useState(false)
  const [userOk, setUserOk] = useState(true)
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

  const FetchData = async () => {
    await axios.get('http://localhost/ReactApps/food-web/UserList.php').then((response) => {
      // axios.get(`http://localhost/ReactApps/food-web/SingleUser.php/?email=${loginForm.email}`).then((response) => {
      console.log(response.data)
      setData(response.data);
    });
  }
  const ShowPassword = () => {
    setShowPassword(!showPassword);
  }
  useEffect(() => {
    FetchData()
  }, [loginForm])
  const handleCredentialResponse = (response) => {
    // e.preventDefault()
    console.log("encode resp" + response.credential)

    localStorage.setItem('login', true)



    navigate("/?limit=5&&offset=0")

    // navigate("/")
  }
  const [profile, setProfile] = useState([]);
  // const clientId =  '1001712440940-7u8j7te4uluitfbkvgakrpc6g88d8o5j.apps.googleusercontent.com'
  const clientId = '1037666133127-cste80get37mqk0in8b7pjfl36s3bh9v.apps.googleusercontent.com'

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });
  const onSuccess = (res) => {
    console.log(res.profileObj)
    setProfile(res.profileObj);
    localStorage.setItem('login', true)
    navigate("/?limit=5&&offset=0")
  };
  const onFailure = (err) => {
    console.log('failed', err);
  };

  const logOut = () => {
    //  setLoginForm({...loginForm,email:"",password:""})

    setProfile(null);


  };
  useEffect(() => {
    localStorage.setItem("name", null)
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = data.find(item => item.email == loginForm.email)
    console.log(user)
    //setLoginForm({...loginForm,email:"",password:""}) 
    if( user?.email === loginForm.email && user?.password === loginForm.password) {
      localStorage.setItem('login', true)
      navigate("/?limit=5&&offset=0")}
      else if(adminUser === loginForm.email && adminPassword === loginForm.password){
        localStorage.setItem('login', true)
        localStorage.setItem('admin', true)
        navigate("/?limit=5&&offset=0")
      }
      else{
        setLoginFailed(true)
      }
  }
  const handleChange = (e) => {
    e.preventDefault()
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    setTimeout(() => { setLoginForm({ ...loginForm, email: "", password: "" }) }, 12000)

  }, [])
  useEffect(() => {
    // console.log("Component1 has mounted...");
    // return () => { console.log("Component1 has unmounted...")
    setTimeout(() => { setLoginForm({ ...loginForm, email: "", password: "" }) }, 1000)
    //setLoginForm({...loginForm,email:"",password:""})

  }, []);
  return (
    <div>
      <h2>{error}</h2>
      {/* <div className={styles.loginFailed}>{
        loginFailed ? "incorrect email or password" : ""
      }
      </div> */}
      <div className={styles.tableContainer}>
        {/* <div className={styles.loginFailed}>{
          loginFailed ? "incorrect email or password" : ""
        }
        </div> */}
        {
          loginFailed ? <div className={styles.loginFailed}><h6>incorrect email or password</h6></div> : ""
        }
        {/* <div className={styles.item}> */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <table align='center' className='table'>
            <tr>
              <td><label htmlFor='email'>UserName/Email</label>
              </td>
              <td>
                <input type="email" id="email" value={loginForm.email}
                  name="email" onChange={(e) => handleChange(e)} style={{ position: "relative", width: "100%", margin: "0 auto" }}
                />
              </td>
              {/* <td>
                <input type="text" id="email" ref={myref} style={{ position: "relative", width: "100%", margin: "0 auto" }}
                />
              </td> */}
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
        {profile ? (
          <div>
            {/* <img src={profile.imageUrl} alt="user image" /> */}
            {/* <h3>User Logged in</h3>
            <h3>{profile.imageUrl}</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br /> */}
            <GoogleLogout clientId={clientId} buttonText="Log out From Google" onLogoutSuccess={logOut} className={styles.logoutBtn} />
          </div>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            className={styles.googleLoginBtn}
          />
        )}

        {/* <div id="signIn">

</div> */}
      </div>
      {/* <div id="signIn">

</div> */}
    </div>
  )
}


import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStates'

export const NavBar = ({ logout }) => {
    let user = localStorage.getItem('admin')
    console.log("userFrom local storage", user)


    const navigate = useNavigate()
    const HandleLogout = () => {
        // localStorage.setItem('login',false)
        // localStorage.setItem('admin',false)
        navigate("login")
    }
    const GoShopping = () => {


    }
    const Shopping1 = () => {

        navigate({
            pathname: '/shopping1',
            search: '?limit=5&&offset=0',
        });
    }
    const ShoppingReducer = () => {
        // navigate("/listproduct")  //genuine
        navigate("/listtransactions")

        // navigate({
        //     pathname: '/home1',
        //     search: '?limit=5&&offset=0',
        // });
    }
    const OrderList = () => {

        navigate({
            pathname: '/orderlist1',
            search: '?limit=5&&offset=0',
        });
    }
    const ListTransactions = () => {

        navigate({
            pathname: '/listtransactions',
            search: '?limit=5&&offset=0',
        });
    }
    const ListTransactionsNew = () => {

        navigate({
            pathname: '/listtransactionsnew',
            search: '?limit=5&&offset=0',
        });
    }
    const AddProduct = () => {
        navigate("/addproduct")
    }
    return (
        <div>
            {
                user ? <nav class="navbar navbar-expand-md m-0 p-3 " style={{ backgroundColor: "brown", height: "5%" }}>

                    <a class="navbar-brand" href="#" style={{ color: "#8e44ad" }}>FoodWeb</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav " style={{ textAlign: "center", marginLeft: "20px", zIndex: "300" }}>
                            {/* <li class="nav-item active " style={{ marginLeft: "20px" }}>

                            <Link to="/shopping"
                                className='text-white'
                            >shopping</Link>
                        </li> */}
                            <li class="nav-item" style={{ marginLeft: "20px" }}>

                                <Link to="/" className='text-white btn btn-md' style={{ border: "none" }}>Home</Link>
                            </li>
                            <li class="nav-item" style={{ marginLeft: "20px" }}>

                                <Link to="/contact" className='text-white btn btn-md'>Contact Us</Link>
                            </li>
                            <li class="nav-item" style={{ marginLeft: "20px", marginTop: "-5px" }} onClick={HandleLogout}
                                className="btn btn-md"
                            >


                                <button onClick={logout
                                } className="btn btn-md text-white " >
                                    SignIn
                                </button>
                            </li>

                            <li class="nav-item" style={{ marginLeft: "20px" }}>
                                <button onClick={ListTransactionsNew}
                                    style={{ marginLeft: "20px", border: "none", backgroundColor: "brown" }}
                                    className="text-white btn btn-md"
                                >
                                    Shop Now
                                </button>

                                {/* <Link to="/listtransactions" className='text-white'>Shop now</Link> */}

                            </li>
                            <li class="nav-item" style={{ marginLeft: "20px" }}>

                                <Link to="/signup" className='text-white btn btn-md'>Signup</Link>
                            </li>
                            <li class="nav-item" className='text-white' style={{ marginLeft: "20px" }}>

                                <Link to="/about" className='text-white btn btn-md'>About Us</Link>
                            </li>


                            <li class="nav-item dropdown" style={{ marginLeft: "20px" }}>
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Shop Here
                                </a>
                              
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <ul style={{display:"block"}}>
                                    <li>
                                    <button onClick={AddProduct} className="btn btn-md"
                                        style={{ marginLeft: "0px", border: "none" }}
                                    >Add Product</button>
                                        
                                    </li>
                                    <li>
                                    <button onClick={Shopping1} className="btn btn-md"
                                        style={{  border: "none" }}
                                    >
                                        Shopping Now
                                    </button>
                                    </li>
                                    <li>
                                    <button onClick={OrderList} className="btn btn-md"
                                            style={{ border: "none" }}
                                        >
                                            OrderList
                                        </button>
                                    </li>
                                </ul>
                                   
                                  
                                    {/* <div>
                                       
                                    </div> */}



                                </div>
                            </li>
                            <li onClick={HandleLogout}>
                                <button style={{ border: "none", background: "inherit", color: "white" }}
                                    className="btn btn-md"
                                    onClick={logout
                                    }
                                >Logout  </button>
                            </li>
                        </ul>
                    </div>
                </nav> :
                    <nav class="navbar navbar-expand-md m-0 p-3 " style={{ backgroundColor: "brown", height: "5%" }}>

                        <a class="navbar-brand" href="#" style={{ color: "#8e44ad" }}>FoodWeb</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav " style={{ textAlign: "center", marginLeft: "20px", zIndex: "300" }}>

                                <li class="nav-item" style={{ marginLeft: "20px" }}>

                                    <Link to="/" className='text-white btn btn-md' >Home</Link>
                                </li>
                                <li class="nav-item" style={{ marginLeft: "20px" }}>

                                    <Link to="/contact" className='text-white btn btn-md'>Contact Us</Link>
                                </li>
                                <li class="nav-item"
                                    className='btn btn-md'
                                    style={{ marginLeft: "20px", marginTop: "-5px" }} onClick={HandleLogout} >


                                    <button onClick={logout
                                    } className="btn btn-md text-white " >
                                        SignIn
                                    </button>
                                </li>
                                {/* <li class="nav-item">
                        
   
                         <button onClick={Shopping1} className="text-white"
                         style={{ marginLeft: "20px", backgroundColor:"brown" ,border:"none"}}
                         >
                             Shop1
                         </button>
                     </li> */}
                                <li class="nav-item" style={{ marginLeft: "20px" }} className="btn btn-md">
                                    {/* <Link to="/listtransactions" className='text-white'>Shop now</Link> */}
                                    <button onClick={ListTransactionsNew}
                                        style={{ backgroundColor: "brown", color: "white", border: "none" }}
                                    >
                                        Shopping Now
                                    </button>
                                </li>
                                <li class="nav-item" style={{ marginLeft: "20px" }}>

                                    <Link to="/signup" className='text-white btn btn-md'>Signup</Link>
                                </li>
                                <li class="nav-item" className='text-white' style={{ marginLeft: "20px" }}>

                                    <Link to="/about" className='text-white btn btn-md'>About Us</Link>
                                </li>


                                <li class="nav-item dropdown" style={{ marginLeft: "20px" }}>
                                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop Here
                                    </a>
                                    
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        {/* <a class="dropdown-item " href="shopping">Shopping</a> */}
                                        {/* <a class="dropdown-item " href="addproduct">Add Product </a> */}
                                        <button onClick={Shopping1}
                                        className="btn btn-md"
                                            style={{ marginLeft: "20px", border: "none" }}
                                        >
                                            Shopping Now
                                        </button>
                                      

                                    </div>
                                </li>
                                <li onClick={HandleLogout}>
                                    <button style={{ border: "none", background: "inherit", color: "white" }}
                                        className="btn btn-md"

                                        onClick={logout
                                        }
                                    >Logout  </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
            }

        </div>
    )
}



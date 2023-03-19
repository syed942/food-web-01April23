import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, createBrowserRouter } from 'react-router-dom'
import { Home } from './components/layout/pages/Home';
import { List } from './components/layout/pages/List';
import { Login } from './components/layout/pages/Login';
import { NavBar } from './components/navbar/NavBar';
import Shopping from './components/layout/pages/Shopping';
import { Contact } from './components/layout/Contact';
import { Signup } from './components/layout/pages/Signup';
import { About } from './components/layout/pages/About';
import { Protected } from './components/Protected';
import { Welcome } from './components/layout/pages/Welcome';
import { AddProduct } from './components/layout/pages/AddProduct';
import { Shopping1 } from './components/layout/pages/Shopping1';
import { Order } from './components/layout/pages/Carts/Order';
import { OrderConfirm } from './components/layout/pages/Carts/OrderConfirm';
import { OrderList } from './components/layout/pages/Carts/OrderList';
import { ShoppingReducer } from './components/layout/pages/ShoppingReducer';
import { OrderConfirmReducer } from './components/layout/pages/Carts/OrderConfirmReducer';
//import { NavBar } from './components/layout/pages/NavBar/NavBar';

import CommonLayout from './components/layout/CommonLayout';
import { ListProduct } from './components/ListProduct';
import { OrderMe } from './components/OrderMe';
import { CartTransaction } from './components/CartTransaction';
import { ListTransactions } from './components/ListTransactions';
import { TransactionContextProvider } from './context/TransactionContext';
import { ListTransactionsNew } from './components/ListTransactionsNew';
import { ConfirmOrder } from './components/ConfirmOrder';

const App = () => {

  const logout = () => {
    localStorage.clear();

  }
  const Logout = () => {
   
   
    localStorage.clear();
  


  }
  
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Shopping/>}/>
        </Routes>
      </Router> */}



      <TransactionContextProvider>
        <Router>
          <NavBar logout={Logout} />
          <Routes>
            <Route
              exact path="/" element={<Protected
                Component={Home}
            
              />} />

            <Route
              path="/listproduct"
              exact
              element={<ListProduct />}
          
            />


            <Route exact path="/list" element={<List />}
       
            />
            <Route exact path="/order" element={<Order />}
              layout={CommonLayout}
            />
            <Route exact path="/orderMe" element={<OrderMe />}
              layout={CommonLayout}
            />
             <Route exact path="/confirmorder" element={<ConfirmOrder />}
              layout={CommonLayout}
            />
            <Route exact path="/listtransactionsnew" element={<ListTransactionsNew />}
              layout={CommonLayout}
            />
             <Route exact path="/listtransactions" element={<ListTransactions />}
              layout={CommonLayout}
            />
            <Route exact path="/carttransaction" element={<CartTransaction />}
              layout={CommonLayout}
            />
            <Route exact path="/order" element={<OrderList />}
              layout={CommonLayout}
            />
            <Route exact path="/orderlist" element={<OrderList />}
              layout={CommonLayout}
            />
            <Route exact path="/orderconfirm" element={<OrderConfirm />}
              layout={CommonLayout}
            />
            <Route exact path="/orderconfirmreducer" element={<OrderConfirmReducer />}
              layout={CommonLayout}
            />

            <Route exact path="/shopping1" element={<Shopping1 />}
              layout={CommonLayout}
            />


            <Route exact path="/addproduct" element={<AddProduct />}
              layout={CommonLayout}
            />
            <Route exact path="/welcome" element={<Welcome />}
              layout={CommonLayout}
            />
            <Route exact path="/login" element={<Login />}
              layout={CommonLayout}
            />
            <Route exact path="/shopping" element={<Protected
              Component={Shopping} />} />
            <Route exact path="/contact" element={<Protected
              Component={Contact} />}
              layout={CommonLayout}
            />
            <Route exact path="/Signup" element={<Signup />}
              layout={CommonLayout}
            />
            <Route exact path="/about" element={<About />}
              layout={CommonLayout}
            />

          </Routes>
        </Router>

      </TransactionContextProvider>


    </div>
  )
}


export default App;

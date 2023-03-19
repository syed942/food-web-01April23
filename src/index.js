import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Shopping from './components/layout/pages/Shopping'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import Shopping from './components/layout/pages/Shopping';
import { Home } from './components/layout/pages/Home';
import { List } from './components/layout/pages/List'
import { FlexBox } from './components/FlexBox';
import Slider from './components/Slider/Slider';
import { Shopping1 } from './components/layout/pages/Shopping1';
import Home1 from './components/ListProduct';
import ProductsProvider from './context/ProductActions';
import CartProvider from './context/Cart';
import AuthProvider from './context/auth';
import CommonProvider from './context/common';
import CheckoutProvider from './context/checkout';
import Header from './components/Header';
import { ListItems } from './components/ListItems';
import { GlobalProvider } from './context/GlobalStates';
import { Object } from './components/Object';
import { ProductsDispatchContext, TransactionContextProvider } from './context/TransactionContext';
import { ListTransactions } from './components/ListTransactions';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

import React from 'react';
import { Router as MyRouter } from "@reach/router"
import NotFoundPage from '../404';
import Login from '../../components/auth/login/Login';
import Register from '../../components/auth/register/Register';
import Cart from '../../components/cart/Cart';
import Playstation from '../../components/playstation/Playstation';
import Account from '../../components/account/Account';
// import "../../assets/css/main.css"






// Here can use my dynamic routes
const App: React.FC = () => {
  const userJWT = localStorage.getItem("userJWT")

  return (


      <MyRouter basepath="/app">
      
         <Cart  path="/cart"/>
        <Login path="/login" /> 
        <Register path="/register" />
        <Playstation path="/playstation" />
        <Account path="/account" />
      
        <NotFoundPage path="*" />
      </MyRouter>



  );
};

export default App;
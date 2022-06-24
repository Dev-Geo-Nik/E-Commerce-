import React from 'react';
import { Router as MyRouter, useNavigate, redirectTo, } from "@reach/router"

import NotFoundPage from '../404';
import Login from '../../components/auth/login/Login';
import Register from '../../components/auth/register/register';







// Here can use my dynamic routes
const App: React.FC = () => {

  return (
    <>

      <MyRouter basepath="/app">
    
        <Login path="/login" /> 
        <Register path="/register" />
     
      
        <NotFoundPage path="*" />
      </MyRouter>

    </>

  );
};

export default App;
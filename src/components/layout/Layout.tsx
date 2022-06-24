import React from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer";



const theme = {}
import "../../assets/css/main.scss";

const Layout = ({ children }:any) => {
    return <>
        
            <Navbar/>
            {children}
            <Footer/>
           
          </>
  }
  
  export default Layout
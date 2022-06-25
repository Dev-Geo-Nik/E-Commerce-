import React from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer";




import "../../assets/css/main.css";
import "../../assets/css/mixins.scss";

const Layout = ({ children }:any) => {
    return <>
        
            <Navbar/>
            {children}
            <Footer/>
           
          </>
  }
  
  export default Layout
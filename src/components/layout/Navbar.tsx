import React, { useEffect, useState } from 'react';
import  * as styles from './navbar.module.scss';
import Logo from "../../assets/images/logo.svg"
import { Link } from 'gatsby';
import {  FaPlaystation, FaShoppingCart, FaUserCog, FaUserPlus, FaUserTag, FaXbox } from "react-icons/fa";
import { useGameContext } from '../../context/game/GameContext';
import { displayCart } from '../../util/CartHelpers';
import { useSpring,animated } from 'react-spring';

const active = {
     background: "#5e5b5b",
     zIndex:3,
     // borderRadius:px"
}
const activeCart  ={
     background: "#5e5b5b",
     height:"100%"
}
   
// How to pass 2 classes in scss modules
// className={[styles.icon, styles.playstation].join(" ")}  
// <div className={`${styles.text} ${styles.class}`}></div>

const  Navbar :React.FC = () => {
     const { state:{gameSourceCart,cartAnimation}} = useGameContext()
     

     const isBrowser = typeof window !== "undefined"
     let userJWT;
     let username;
     
     
     if (isBrowser) {
     userJWT = localStorage.getItem("userJWT")
     username = localStorage.getItem("username")
  
     }  


     const cartAnimate = useSpring({
        from:{
          scale: 1,
     
        },
        to:{
          scale: cartAnimation? 1.4 : 1,
          rotateY: cartAnimation ?-360 : 0
         
        },
       
     })
     
    
  
  return (
<nav className={styles.nav}>
      <ul>
         <li>
             <Link to="/"> <img src={Logo} alt="logo of the GAMESOURCE" className={styles.logo} /> </Link>
         </li>
          <div className={styles.linksContainer}>
               <li >
                    

                    <Link to="/app/playstation" activeStyle={active} className={styles.link}>
                    <FaPlaystation className={styles.icon}/>
                     Playstation
                    </Link>
                    
               </li>
               <li>
                   
                    <Link to="/app/xbox" activeStyle={active} className={styles.link}>
                    <FaXbox className={styles.icon}/> 
                    Xbox
                  </Link>
               </li>
               <li className ={ userJWT ? styles.displayNone : [styles.displayBlock ,styles.link].join(" ")  }>
                    <Link to="/app/login" activeStyle={active}>
                    <FaUserTag className={styles.icon}/> 
                    Sign In
                  </Link>
               </li>
               <li className ={ userJWT ? styles.displayNone :  [styles.displayBlock ,styles.link].join(" ")}>
                    <Link to="/app/register" activeStyle={active}>
                    <FaUserPlus className={ styles.icon}/> 
                    Sign Up
                    </Link>
               </li>
               <li className ={ userJWT ?  [styles.displayBlock , styles.link].join(" "): styles.displayNone  }>
                    <Link to="/app/account" activeStyle={active} >
                    <FaUserCog className={styles.icon}/> 
                       {userJWT ?  username : "My Account"}
                     </Link>
               </li>
              
               <animated.li className={styles.linkCart} style={{...cartAnimate}}>
                    <Link to="/app/cart"  activeStyle={activeCart}  >                 
                         <FaShoppingCart className={styles.iconCart}/>  
                         <span  className={styles.cartText}>{displayCart() ? displayCart().length : "0"}</span>
                    </Link>
               </animated.li>
             
          </div>
      


      </ul>
</nav>
);
};

export default Navbar;


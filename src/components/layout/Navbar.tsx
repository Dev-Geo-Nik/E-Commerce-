import React, { useState } from 'react';
import  * as styles from './navbar.module.scss';
import Logo from "../../assets/images/logo.svg"
import { Link } from 'gatsby';
import {  FaPlaystation, FaShoppingCart, FaUserCog, FaUserPlus, FaUserTag, FaXbox } from "react-icons/fa";
import { useGameContext } from '../../context/game/GameContext';

const active = {
     background: "#5e5b5b",
     borderRadius:"5px"
}
   
// How to pass 2 classes in scss modules
// className={[styles.icon, styles.playstation].join(" ")}  
// <div className={`${styles.text} ${styles.class}`}></div>

const  Navbar :React.FC = () => {
   
     // console.log(localStorage.getItem("userJWT"))
     const userJWT = localStorage.getItem("userJWT")
     const username = localStorage.getItem("username")

  
  return (
<nav className={styles.nav}>
      <ul>
         <li>
             <Link to="/"> <img src={Logo} alt="logo of the GAMESOURCE" className={styles.logo} /> </Link>
         </li>
          <div className={styles.linksContainer}>
               <li >
                    
                    <Link to="/app/playstation" activeStyle={active}>
                    <FaPlaystation className={styles.icon}/>
                         Playstation
                    </Link>
               </li>
               <li>
                   
                    <Link to="/app/xbox" activeStyle={active}>
                    <FaXbox className={styles.icon}/> 
                         Xbox
                  </Link>
               </li>
               <li className ={ userJWT ? styles.displayNone : styles.displayBlock}>
                    <Link to="/app/login" activeStyle={active}>
                    <FaUserTag className={styles.icon}/> 
                         Sign In
                  </Link>
               </li>
               <li className ={ userJWT ? styles.displayNone : styles.displayBlock}>
                    <Link to="/app/register" activeStyle={active}>
                    <FaUserPlus className={ styles.icon}/> 
                         Sign Up
                    </Link>
               </li>
               <li className ={ userJWT ? styles.displayBlock : styles.displayNone  }>
                    <Link to="/app/account" activeStyle={active}>
                    <FaUserCog className={styles.icon}/> 
                       {userJWT ?  username : "My Account"}
                     </Link>
               </li>
               <li className={styles.linkCart}>
                    <Link to="/app/cart"  >                 
                         <FaShoppingCart className={styles.iconCart}/>  
                         <span className={styles.cartText}>0</span>
                    </Link>
               </li>
          </div>
      


      </ul>
</nav>
);
};

export default Navbar;


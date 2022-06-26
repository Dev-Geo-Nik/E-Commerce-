import React from 'react';
import  * as styles from './navbar.module.scss';
import Logo from "../../assets/images/logo.svg"
import { Link } from 'gatsby';
import { FaHeart, FaPlaystation, FaShoppingCart, FaUserCog, FaUserPlus, FaUserTag, FaXbox } from "react-icons/fa";

const active = {
     background: "#5e5b5b",
     borderRadius:"5px"
}
   
// How to pass 2 classes in scss modules
// className={[styles.icon, styles.playstation].join(" ")}  
// <div className={`${styles.text} ${styles.class}`}></div>

const  Navbar :React.FC = () => {

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
               <li>
                    <Link to="/app/login" activeStyle={active}>
                    <FaUserTag className={styles.icon}/> 
                         Sign In
                  </Link>
               </li>
               <li>
                    <Link to="/app/register" activeStyle={active}>
                    <FaUserPlus className={styles.icon}/> 
                         Sign Up
                    </Link>
               </li>
               <li>
                    <Link to="/app/account" activeStyle={active}>
                    <FaUserCog className={styles.icon}/> 
                        My Account
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


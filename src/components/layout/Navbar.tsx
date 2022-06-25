import React from 'react';
import  * as styles from './navbar.module.scss';
import Logo from "../../assets/images/logo.svg"
import { Link } from 'gatsby';


const active = {

}

const  Navbar :React.FC = () => {

  return (
<nav className={styles.nav}>
      <ul>
         <li>
             <Link to="/"> <img src={Logo} alt="logo of the GAMESOURCE" className={styles.logo} /> </Link>
         </li>
         <li className={styles.flexLink}>
              <Link to="/" activeStyle={active}>About</Link>
         </li>
         <li>
              <Link to="/" activeStyle={active}>Test</Link>
         </li>
      </ul>
</nav>
);
};

export default Navbar;


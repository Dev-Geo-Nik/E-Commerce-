import { navigate } from 'gatsby';
import React from 'react';
import { IoExitOutline } from 'react-icons/io5';
import  * as styles from './logout.module.scss';

const  Logout :React.FC = () => {


    const logoutHandler = () => {
        console.log("logout")
        localStorage.clear();
        navigate("/")
        
      }


  return (
<>
<button onClick={logoutHandler}><IoExitOutline className={styles.logoutIcon}/>Logout</button>
</>
);
};

export default Logout;


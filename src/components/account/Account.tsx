import { navigate } from 'gatsby';
import React from 'react';
import  * as styles from './account.module.scss';
import { IoExitOutline } from "react-icons/io5";
import { displayTotalCartAmount } from '../../util/CartHelpers';
interface Props {
    path: string;
}

const  Account :React.FC<Props> = () => {

  const logoutHandler = () => {
    console.log("logout")
    localStorage.clear();
    
    navigate("/")
  }

  console.log(displayTotalCartAmount())
  
  return (
<>
Account
 <button onClick={logoutHandler}><IoExitOutline className={styles.logoutIcon}/>Logout</button>
</>
);
};

export default Account;


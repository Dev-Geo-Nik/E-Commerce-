import React, { useRef } from 'react';
import  * as styles from './accountPopup.module.scss';
import Logo from "../../assets/images/logo.svg"
import { Link } from 'gatsby';
import { AiFillCloseCircle } from "react-icons/ai";
import { useGameContext } from '../../context/game/GameContext';
import { ActionTypes } from '../../context/Constants';



const  AccountPopup :React.FC = () => {
   
   const {state:{displayPopupWindow},dispatch} = useGameContext();

  const isBrowser = typeof window !== "undefined"




  if(displayPopupWindow){
    if (isBrowser) {
      document.body.style.overflow = 'hidden';
      
    }
 
  }


  const resetClickedItem = () => {
    const isBrowser = typeof window !== "undefined"
     if (isBrowser) {
      // refContainer.current.style.display= "none"
       document.body.style.overflow = 'auto';
     }

     dispatch({type:ActionTypes.DISPLAY_POPUP_WINDOW , payload:false})
    }

  
  return (
<div className={styles.popupContainer} >
    <div className={styles.layoutContainer} >
        <div className={styles.contentContainer} >
           {/* <h2>Welcome</h2> */}
           <AiFillCloseCircle className={styles.iconClose} onClick={resetClickedItem}/>
           <img src={Logo} alt="logo image from gamescoure" className={styles.logo} />
           <Link to= "/app/login" className={`btn-cta ${styles.btnSingle}` } >Log in</Link>
           <Link to="/app/playstation" className={[styles.ghostBtn ,"btn-ghost "].join(" ")}>Sign up</Link>
        </div>

    </div>
</div>
);
};

export default AccountPopup;


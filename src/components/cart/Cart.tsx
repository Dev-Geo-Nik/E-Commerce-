import { navigate } from 'gatsby';
import React from 'react';
import { ActionTypes } from '../../context/Constants';
import { useGameContext } from '../../context/game/GameContext';
import { displayCart } from '../../util/CartHelpers';
import AccountPopup from '../accountPopup/AccountPopup';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import SEO from '../layout/Seo';
import  * as styles from './cart.module.scss';
import DisplayCart from './DisplayCart';

interface Props {
    path: string;
}


const  Cart :React.FC<Props> = () => {
  const userJWT = localStorage.getItem("userJWT")
  const {state:{gameSourceCart,displayPopupWindow},dispatch} = useGameContext()


  // todo make i new popup model with 3 links , home sing up , log in 
  if (!userJWT) {
    // dispatch({type: ActionTypes.DISPLAY_POPUP_WINDOW,payload:true})
    //   return<div className= {styles.backgroundContainer}>
    //           <AccountPopup/>
    //          </div>
       navigate("/app/login")
       return <></>
  }

 
 


  return (
<section className={styles.cartMasterContainer}>
    <SEO  title="Cart"/>
    <Navbar/>
    <DisplayCart/>
    <Footer/>
</section>
);
};

export default Cart;


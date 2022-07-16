import React, { useState } from 'react';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import { addToCart, displayCart, displayTotalCartAmount } from '../../../util/CartHelpers';
import uniqid from 'uniqid';

import  * as styles from './button.module.scss';



interface Props{
  stock: number
  gameId: number
  platform: string
  imageUrl:string
  productName: string
  productPrice:number
  productDiscountPrice:string
  edition:string
}



const  Button :React.FC<Props> = ({stock,gameId,platform,imageUrl,productDiscountPrice,productName,productPrice,edition}) => {
  const {dispatch} = useGameContext();
 

  const  isBrowser = typeof window !== "undefined"
  
  // console.log(displayCart())
  let user :string | null= ""
  if (isBrowser) {
    
     user = localStorage.getItem('userJWT');
  }
    // console.log(user)

  const addToCartHandler  = ()=>{
    
    if (user === null) {
      dispatch({type:ActionTypes.DISPLAY_POPUP_WINDOW , payload: true})
       return  
    }

    // console.log("Add to cart")

    addToCart({productId:gameId.toString(),platform:platform ,amount:1,productName:productName ,imageUrl:imageUrl,productDiscountPrice:productDiscountPrice,productPrice,uniqid:uniqid(),edition:edition})
    
    dispatch({type:ActionTypes.ADD_PRODUCT_TO_CART , payload:{product:displayCart(),totalAmount:displayTotalCartAmount()}})
    
  }


  return (
<>

{stock > 0 ? <button className={`btn-cta ${styles.btnSingle}` } onClick={addToCartHandler}>Add to cart</button> :  <button className={`btn-cta ${styles.disable}` }>Add to cart</button>} 



</>
   

);
};

export default Button;


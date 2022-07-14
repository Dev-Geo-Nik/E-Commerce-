import React from 'react';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import { addToCart, displayCart, displayTotalCartAmount } from '../../../util/CartHelpers';

import  * as styles from './button.module.scss';


interface Props{
  stock: number
  gameId: number
  platform: string
  imageUrl:string
  productName: string
  productPrice:number
  productDiscountPrice:string
}


const  Button :React.FC<Props> = ({stock,gameId,platform,imageUrl,productDiscountPrice,productName,productPrice}) => {
  const {dispatch} = useGameContext();
  // const isBrowser = typeof window !== "undefined"
  
  // console.log(displayCart())
 




  const addToCartHandler  = ()=>{
    console.log("Add to cart")

    addToCart({productId:gameId.toString(),platform:platform ,amount:1,productName:productName ,imageUrl:imageUrl,productDiscountPrice:productDiscountPrice,productPrice})
    
    dispatch({type:ActionTypes.ADD_PRODUCT_TO_CART , payload:{product:displayCart(),totalAmount:displayTotalCartAmount()}})
    
  }


  return (
<>
{stock > 0 ? <button className={`btn-cta ${styles.btnSingle}` } onClick={addToCartHandler}>Add to cart</button> :  <button className={`btn-cta ${styles.disable}` }>Add to cart</button>} 

</>
   

);
};

export default Button;


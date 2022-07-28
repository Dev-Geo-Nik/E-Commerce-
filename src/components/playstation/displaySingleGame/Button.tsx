import React, { useState ,Ref, useRef } from 'react';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import { addToCart, displayCart, displayTotalCartAmount } from '../../../util/CartHelpers';
import uniqid from 'uniqid';
import { useSpring, animated } from 'react-spring'


import  * as styles from './button.module.scss';
import { FaBox, FaShoppingCart } from 'react-icons/fa';




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
  const [clicked ,setClicked] = useState(false);
  
  const buttonAnimation = useSpring({  to:{  color:clicked ? "transparent" : "#fff"}})
  
  const cartAnimation = useSpring({
    from: { x:10 },   
    to: { opacity: clicked ? 1 : 0,   x:156   },
    reset:clicked,
    config: {  tension:100,   friction:60   },
    // delay:1000,
  })    
   
 

  const boxAnimation = useSpring({
    from: { y:-50 },
    to: {  y:37,  opacity: clicked ? 1 : 0,    },
    reset:clicked,
    config: {  tension:110, friction:60   },})
  
    
    const buttonActiveStyles = useSpring({
      from:{opacity:0},
      to: {   opacity:clicked ? 1 :0 }
    
    })
 

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
    
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
      dispatch({type:ActionTypes.CART_ANIMATE , payload:false})
    }, 1600);
  }

  // console.log(clicked)


                    



  let displayButton = <animated.button className={`btn-cta   ${styles.btnSingle}` } onClick={addToCartHandler}  style={{
    
                                 ...buttonAnimation
                             }}>
                            
                             <animated.span className={styles.buttonActive} style={{...buttonActiveStyles}}></animated.span>
                            <animated.div className={styles.cartContainer} style={{
                              ...cartAnimation
                            }}>
                                <FaShoppingCart className = { styles.shoppingCartIcon}/>
                            </animated.div>

                            <animated.div className={styles.boxContainer} style = {{
                                ...boxAnimation
                            }}>

                                <FaBox className={styles.boxIcon}/>
                            </animated.div>
                        
                          Add to cart
                     </animated.button> 


  



  return (
<>
    
  {stock > 0 ?  displayButton:  <button className={`btn-cta ${styles.disable}` }>Add to cart</button>} 
</>
   

);
};

export default Button;


import { navigate } from 'gatsby';
import React from 'react';
import { useGameContext } from '../../context/game/GameContext';
import { displayCart } from '../../util/CartHelpers';
import  * as styles from './cart.module.scss';

interface Props {
    path: string;
}


const  Cart :React.FC<Props> = () => {
  const userJWT = localStorage.getItem("userJWT")
  const {state:{gameSourceCart}} = useGameContext()


  if (!userJWT) {
      navigate("/app/login");
      return<></>
  }
  const cart = displayCart();
  
  console.log(gameSourceCart.map((prod:any)=>{
      // console.log(prod)
  }))


  return (
<>
cart
</>
);
};

export default Cart;


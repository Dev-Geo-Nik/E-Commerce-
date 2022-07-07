import { navigate } from 'gatsby';
import React from 'react';
import  * as styles from './cart.module.scss';

interface Props {
    path: string;
}


const  Cart :React.FC<Props> = () => {
  const userJWT = localStorage.getItem("userJWT")
  
  if (!userJWT) {
      navigate("/app/login");
      return<></>
  }


  return (
<>
cart
</>
);
};

export default Cart;


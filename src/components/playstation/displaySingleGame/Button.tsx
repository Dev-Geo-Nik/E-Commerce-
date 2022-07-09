import React from 'react';
import  * as styles from './button.module.scss';


interface Props{
  stock: number
  gameId: number
}

const  Button :React.FC<Props> = ({stock,gameId}) => {


  return (
<>
{stock > 0 ? <button className={`btn-cta ${styles.btnSingle}` }>Add to cart</button> :  <button className={`btn-cta ${styles.disable}` }>Add to cart</button>} 

</>
   

);
};

export default Button;


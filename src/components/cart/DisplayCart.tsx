import React from 'react';
import  * as styles from './displayCart.module.scss';
import DisplayProducts from './DisplayProducts';


const  DisplayCart :React.FC = () => {

  return (
<div className={styles.container}>
   <DisplayProducts/>

</div>
);
};

export default DisplayCart;


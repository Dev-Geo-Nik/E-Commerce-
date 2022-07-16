import React from 'react';
import  * as styles from './displayCart.module.scss';
import DisplayProducts from './DisplayProducts';
import OrderSummary from './OrderSummary';

const  DisplayCart :React.FC = () => {

  return (
<div className={styles.container}>
   <DisplayProducts/>
   {/* <OrderSummary/> */}
</div>
);
};

export default DisplayCart;


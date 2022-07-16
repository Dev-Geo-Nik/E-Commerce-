import React from 'react';
import  * as styles from './checkoutButton.module.scss';

const  CheckoutButton :React.FC = () => {

  return (
<>
    <button className={`btn-cta ${styles.btnSingle}` } > checkout</button>
</>
);
};

export default CheckoutButton;


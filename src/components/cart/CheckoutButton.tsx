import React from 'react';
import { displayCart } from '../../util/CartHelpers';
import  * as styles from './checkoutButton.module.scss';

const  CheckoutButton :React.FC = () => {

  const cart = displayCart();
  return (
<>
    {/* <button className={`btn-cta ${styles.btnSingle}` } > checkout</button> */}
    {cart.length > 0 ? <button className={`btn-cta ${styles.btnSingle}` } > checkout</button> : <button className={`btn-cta ${styles.disable}` } > checkout</button> }
</>
);
};

export default CheckoutButton;


import React from 'react';
import { displayCart, displayTotalCartAmount } from '../../util/CartHelpers';
import CheckoutButton from './CheckoutButton';
import  * as styles from './productsHeader.module.scss';

const  ProductsHeader :React.FC = () => {

    const cart = displayCart();
    const summary = displayTotalCartAmount();



  return (

<div className={styles.header}>
    <div className={styles.countGroup}>
        <p className={styles.cartSummary}>Cart Summary</p> 
        <p className={styles.productsCount}>{cart.length}</p>
    </div>
    <div className={styles.summaryGroup}>
        <p >Total Price :</p>
        <p className={styles.totalAmount}>{summary} $</p>
        <CheckoutButton/>
    </div>
 </div>
);
};

export default ProductsHeader;


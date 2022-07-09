import React, { useEffect, useState } from 'react';
import  * as styles from './stock.module.scss';

interface Props{
  stock:number;
}

const  Stock :React.FC<Props> = ({stock}) => {



  return (
<>
  {stock > 0 ? <p className={styles.inStock}>In stock</p>:<p className={styles.outOfStock}>Out of stock</p> }
</>
);
};

export default Stock;


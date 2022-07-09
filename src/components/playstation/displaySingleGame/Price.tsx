import React from 'react';
import  * as styles from './price.module.scss';

interface Props{
    price: number;
    discountPrice: string;
}

const  Price :React.FC<Props> = ({discountPrice,price}) => {


    let displayDiscountPrice =   <div>
                                        <p className={styles.discountPriceSingle}>${discountPrice}</p>
                                        <p className={styles.initialPriceSingle}>${price}</p> 
                                  </div>

  return (
<>
    {discountPrice ? displayDiscountPrice : <p className={styles.normalPriceSingle}>${price}</p> }
</>
);
};

export default Price;


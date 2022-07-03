import React from 'react';
import { PlaystationGameStatus } from '../../../context/Constants';

import  * as styles from './salestatus.module.scss';

interface Props {
  status: string;
}
const  SaleStatus :React.FC<Props> = ({status}) => {
  // console.log(styles.status.replace(/\s/g, ''))  
  const  currentStatus = () =>{
    switch (status) {
      case PlaystationGameStatus.HOT:
        return   <p className={styles.text}> <span className={` ${styles.general} ${styles.hot}`}>{status}</span></p>
      case PlaystationGameStatus.NEW:
        return   <p className={styles.text}> <span className={` ${styles.general} ${styles.statusNew}`}>{status}</span></p>
      case PlaystationGameStatus.ON_SALE:
        return   <p className={styles.text}> <span className={` ${styles.general} ${styles.onSale}`}>{status}</span></p>
      case PlaystationGameStatus.PRE_ORDER:
        return   <p className={styles.text}> <span className={` ${styles.general} ${styles.preOrder}`}>{status}</span></p>
      case PlaystationGameStatus.TRENDING:
        return   <p className={styles.text}> <span className={` ${styles.general} ${styles.trending}`}>{status}</span></p>
      case PlaystationGameStatus.BEST_SELLER:
        return   <p className={styles.text}> <span className={` ${styles.general} ${styles.bestSeller}`}>{status}</span></p>
      default:      return <></>
    }
  }
 

 
  return currentStatus();
};

export default SaleStatus;


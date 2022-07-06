import React from 'react';
import  * as styles from './spinner.module.scss';
import SpinnerGif  from "../../../assets/images/spinner.gif"


const  Spinner :React.FC = () => {

  return (
<>
<div className={styles.spinnerModal}>   </div>                  
 <img src={SpinnerGif} alt=" indicating loading image"  className={styles.spinnerImage}/>
</>
);
};

export default Spinner;


import React from 'react';
import AccountCategories from './AccountCategories';
import  * as styles from './displayAccountInformation.module.scss';

const  DisplayAccountInformation :React.FC = () => {

  return (
<div className={styles.container}>
    <AccountCategories/>
</div>
);
};

export default DisplayAccountInformation;


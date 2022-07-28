import React from 'react';
import AccountManagement from './AccountManagement';
import  * as styles from './accountSections.module.scss';
import DisplayAccountInformation from './DisplayAccountInformation';

const  AccountSections :React.FC = () => {

  return (

<div className={styles.accountSectionsContainer}>
    <AccountManagement/>
    <DisplayAccountInformation/>
</div>

);
};

export default AccountSections;


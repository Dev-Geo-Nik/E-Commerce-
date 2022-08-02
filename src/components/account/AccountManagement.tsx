import React from 'react';
import  * as styles from './accountManagement.module.scss';

const  AccountManagement :React.FC = () => {

  return (
<div className= {styles.container}>
    <ul>
       <li>Account Information</li>
       <li>Your Orders</li>
       <li>Favorites</li>
       <li>Account Security</li>
       <li>Customer Services</li>
    </ul>
</div>
);
};

export default AccountManagement;


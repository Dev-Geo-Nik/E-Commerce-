import React from 'react';
import  * as styles from './registerSuccess.module.scss';

const  RegisterSuccess :React.FC = () => {

  return (
<div className={styles.successContainer}>
    <h4>User successfully registered</h4>
</div>
);
};

export default RegisterSuccess;


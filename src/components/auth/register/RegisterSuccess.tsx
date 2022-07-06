import { Link } from 'gatsby';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaRegCheckCircle } from 'react-icons/fa';

import  * as styles from './registerSuccess.module.scss';

const  RegisterSuccess :React.FC = () => {

  return (
<div className={styles.successContainer}>
      <FaRegCheckCircle className = {styles.successIcon}/>
       <h4 className={styles.successText}>Your account has been created successfully!</h4>
       <Link to="/app/login" className = {styles.successLink}>
          <div className={styles.linkFlex}>
              Continue 
              <AiOutlineArrowRight className={styles.arrowIcon}/>   
          </div> 
      </Link>
</div>
);
};

export default RegisterSuccess;


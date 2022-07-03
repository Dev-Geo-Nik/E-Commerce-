import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import Navbar from '../../layout/Navbar';
import SEO from '../../layout/Seo';
import  * as styles from './register.module.scss';
import RegisterForm from './RegisterForm';




const  register :React.FC = () => {


  return (
<section className={styles.container}>
<SEO title="Register" description="GAMESOURCE register page" />
    <Navbar/>
    <div className={styles.splitContainer}>
      <div className={styles.inputsContainer}>
         <RegisterForm/>
      </div>
      <StaticImage src="../../../assets/images/register.jpg" alt='register wallpaper image' className={styles.registerImage} objectFit='fill' placeholder='tracedSVG'/>
    </div>
</section>
);
};

export default register;


import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Navbar from '../../layout/Navbar';
import SEO from '../../layout/Seo';
import  * as styles from './login.module.scss';

const  Login :React.FC = () => {

  return (
<section className={styles.container}>
  <SEO title="Login" description="GAMESOURCE login page" />
    <Navbar/>
    <div className={styles.splitContainer}>
      <div className={styles.inputsContainer}>
          inputsContainer
      </div>
      <StaticImage src="../../../assets/images/login.jpg" alt='register wallpaper image' className={styles.loginImage} objectFit='fill' placeholder='tracedSVG'/>
    </div>
</section>
);
};

export default Login;


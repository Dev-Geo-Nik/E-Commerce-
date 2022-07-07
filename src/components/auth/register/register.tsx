import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { useGameContext } from '../../../context/game/GameContext';

import Navbar from '../../layout/Navbar';
import SEO from '../../layout/Seo';
import  * as styles from './register.module.scss';
import RegisterForm from './RegisterForm';
import Spinner from '../../spinner/Spinner';

interface Props {
  path: string;
}



const  register :React.FC<Props> = () => {
  const {state:{isLoading}} = useGameContext()

  return (
<section className={styles.container}>
    <SEO title="Register" description="GAMESOURCE register page" />
    <Navbar/>
    <div className={styles.splitContainer}>
     {isLoading && <Spinner/>}
      <RegisterForm/>
      <StaticImage src="../../../assets/images/register.jpg" alt='register wallpaper image' className={styles.registerImage} objectFit='fill' placeholder='tracedSVG'/>
    </div>
</section>
);
};

export default register;


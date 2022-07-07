import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useGameContext } from '../../../context/game/GameContext';
import Navbar from '../../layout/Navbar';
import SEO from '../../layout/Seo';
import Spinner from '../../spinner/Spinner';
import  * as styles from './login.module.scss';
import LoginForm from './LoginForm';


interface Props {
  path: string;
}


const  Login :React.FC<Props> = () => {

  const {state:{isLoading}} = useGameContext()

  return (
<section className={styles.container}>
  <SEO title="Login" description="GAMESOURCE login page" />
    <Navbar/>
    {isLoading && <Spinner/>}
    <div className={styles.splitContainerLogin}>
      <LoginForm/>
      <StaticImage src="../../../assets/images/login.jpg" alt='register wallpaper image' className={styles.loginImage} objectFit='fill' placeholder='tracedSVG'/>
    </div>
</section>
);
};

export default Login;


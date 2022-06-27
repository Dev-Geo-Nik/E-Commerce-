import React from 'react';
import SectionTest from '../home/SectionTest';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import SEO from '../layout/Seo';
import DisplayPlaystationGames from './displayPlaystationGames/displayPlaystationGames';
import Filters from './filters/Filters';

import  * as styles from './playstation.module.scss';

interface Props{
    path: string;

}

const  Playstation :React.FC<Props> = () => {

  return (

   <section className={styles.container}>
    <SEO title="Playstation" description="Playstation video game page for sell" />
        <Navbar/>
          <Filters/>
          <DisplayPlaystationGames/>
        <Footer/>
    </section>

);
};

export default Playstation;


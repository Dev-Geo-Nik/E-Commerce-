import React from 'react';
import "../../assets/css/main.css";
import Banner from '../banner/Banner';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import  * as styles from './home.module.scss';
import SectionTest from './SectionTest';


const  Home :React.FC = () => {

  return (

    <section className={styles.container}>
        {/* <Banner/> */}
        <Navbar/>
            <SectionTest/>
        <Footer/>
    </section>
  


);
};

export default Home;


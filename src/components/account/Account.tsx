
import React from 'react';
import  * as styles from './account.module.scss';
import { displayTotalCartAmount } from '../../util/CartHelpers';
import SEO from '../layout/Seo';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import AccountSections from './AccountSections';
import Logout from './Logout';


interface Props {
    path: string;
}



const  Account :React.FC<Props> = () => {



  console.log(displayTotalCartAmount())
  
  return (
    <section className={styles.container}>
    <SEO title="Account" description="Account page of GAMESOURCE" />
        <Navbar/>
          <AccountSections/>
          <Logout/>
        <Footer/>
    </section>
);
};

export default Account;


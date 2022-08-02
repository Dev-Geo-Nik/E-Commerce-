import React from 'react';
import { AccountCategoriesData } from '../../util/helpers';
import  * as styles from './accountCategories.module.scss';

interface Category {
  title: string
  subtitle: string
  icon:any
}

const  AccountCategories :React.FC = () => {


    let displayCategories = AccountCategoriesData.map((category:Category,index) => {
              const {title,subtitle,icon} = category;

              return(
                    <div className={styles.categorySingleContainer} key={index}> 
                           
                            <span className={styles.icon}>{icon}</span>
                            <div className={styles.textContainer}>
                                <h2 className={styles.title}>{title}</h2>
                                <p className={styles.subtitle}>{subtitle}</p>
                            </div>
                   </div>
                   )

    })

  return (
<section className={styles.categoriesContainer}>
     {displayCategories}
</section>
);
};

export default AccountCategories;


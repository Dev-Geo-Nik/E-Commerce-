import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import  * as styles from './favoriteGame.module.scss';

const  FavoriteGame :React.FC = () => {

  return (
<>
<div className={styles.circle}>
        <div className={styles.backgroundCircle}>
          <IoIosHeartEmpty className = {styles.heartIcon}/>
        </div>
        <div className={styles.textModalContainer}>        
            <p className={styles.textModal}>Add to Wishlist</p>
            <div className={styles.modalBackground}></div>
        </div>
    </div>
</>
);
};

export default FavoriteGame;


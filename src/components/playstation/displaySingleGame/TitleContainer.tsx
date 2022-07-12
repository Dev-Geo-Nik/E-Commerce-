import React from 'react';
import { SinglePlaystationGameType } from '../../../pages/playstation/game/{StrapiPlaystationGame.slug}';
import Button from './Button';
import DeliveryStockContainer from './DeliveryStockContainer';
import FavoriteGame from './FavoriteGame';
import Price from './Price';
import Stock from './Stock';
import  * as styles from './titleContainer.module.scss';


interface Props {
    gameData: SinglePlaystationGameType;
   
}

const  TitleContainer :React.FC<Props> = ({gameData}) => {
    const {strapiPlaystationGame:{title,description,genre,id,image,language,pegi,platform,price,publisher,stock,strapi_id,videoUrl,discountPrice,status,edition}} = gameData;

  return (
<div  className={styles.titleContainerSingle}>
  <div className={styles.priceContainer}>
     <h2 className={styles.title}>{title}</h2>
      <Price  price={price} discountPrice={discountPrice} />
  </div>
  <p className={styles.paraFlex}> <span className={styles.label}>Edition </span>  <span className = {styles.labelText}>{edition}</span></p>
  <p className={styles.paraFlex}> <span className={styles.label}>Publisher </span>  <span className = {styles.labelText}>{publisher}</span></p>
  <p className={styles.paraFlex}> <span className={styles.label}>Genre </span>  <span className = {styles.labelText}>{genre}</span></p>
  <p className={styles.paraFlex}> <span className={styles.label}>PEGI </span>  <span className = {styles.labelText}>{pegi}</span></p>
  <p className={styles.paraFlex}> <span className={styles.label}>Region </span>  <span className = {styles.labelText}>English</span></p>
   <DeliveryStockContainer gameId={strapi_id} platform={platform}/>

  
</div>

);
};

export default TitleContainer;


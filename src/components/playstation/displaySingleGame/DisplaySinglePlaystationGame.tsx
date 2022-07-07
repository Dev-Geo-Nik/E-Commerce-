import React from 'react';
import { SinglePlaystationGameType } from '../../../pages/playstation/game/{StrapiPlaystationGame.title}';
import  * as styles from './displaySinglePlaystationGame.module.scss';

 interface Props{
   gameData :SinglePlaystationGameType
 }


const  DisplaySinglePlaystationGame :React.FC<Props> = ({gameData}) => {
     const {strapiPlaystationGame:{title,description,genre,id,image,language,pegi,platform,price,publisher,stock,strapi_id,videoUrl,discountPrice}} = gameData;
  return (
<div className={styles.playstationSingleGameContainer}>
     <h2>{gameData.strapiPlaystationGame.title}</h2>
     <p>{discountPrice}</p>
</div> 
);
};

export default DisplaySinglePlaystationGame;


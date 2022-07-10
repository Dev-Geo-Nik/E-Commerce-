import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { SinglePlaystationGameType } from '../../../pages/playstation/game/{StrapiPlaystationGame.title}';
import SaleStatus from '../displayPlaystationGames/SaleStatus';
import  * as styles from './displaySinglePlaystationGame.module.scss';
import ReactPlayer from 'react-player'
import Favorite from '../displayPlaystationGames/Favorite';
import TitleContainer from './TitleContainer';

 interface Props{
   gameData :SinglePlaystationGameType
 }

// ! check stock with useEffect?


const  DisplaySinglePlaystationGame :React.FC<Props> = ({gameData}) => {
     const {strapiPlaystationGame:{title,genre,id,image,language,pegi,platform,price,publisher,stock,strapi_id,videoUrl,discountPrice,status,edition,description}} = gameData;
  


  return (
<div className={styles.playstationSingleGameContainer}>
    <div className={styles.marginContainer}>
          
        <div className={styles.imageTitleContainer}>
          <div className={styles.imageContainer}>
            <SaleStatus status={status}/>
              {/* @ts-ignore */}
              <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt={title} objectFit="fill" className={styles.postImage}/>
          </div>
            <div className={styles.titleContainer}>
              <TitleContainer gameData={gameData}/>
            </div>
        </div>
        <h4 className={styles.descriptionTitle}>Product description</h4>
        <p className={styles.descriptionText}>{description.data.description}</p>
      <ReactPlayer url={videoUrl} className={styles.videoComponent} controls={true} width="100%" height="50rem"/>
      <div className="related-products">
         Related products
      </div>
      <div className="recommended">
        Recommended for you  
      </div>
    </div>
</div> 
);
};

export default DisplaySinglePlaystationGame;


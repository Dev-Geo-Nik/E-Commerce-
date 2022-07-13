import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { useGameContext } from '../../../context/game/GameContext';
import  * as styles from './displayPlaystationGames.module.scss';
import Favorite from './Favorite';
import NoGameModal from './NoGameModal';
import SaleStatus from './SaleStatus';






const  DisplayPlaystationGames :React.FC = () => {

    const {state:{gamesPS4,gamesPS5,currentPlaystationPlatform,currentPlaystationPublisher,currentPlaystationGenre,allFavorites}} = useGameContext();
    let currentGames = currentPlaystationPlatform === "playstation 4" ? gamesPS4 : gamesPS5;
 
   

    
//   console.log("rendering!!!")
    // Sort the displayed games.
    let sortedCurrentGames = currentGames.sort((a,b)=>(a.title >b.title ? 1 :-1))
  

    let displayGames = sortedCurrentGames.map((game,index)=>{
     
      const {title,
           description,
           image:{url,localFile:{childImageSharp:{gatsbyImageData}}},
           price,
           slug,
           videoUrl,
           publisher,
           genre,
           language,
           pegi,
           discountPrice,
           stock,
           edition,
           preOrder,
           strapi_id,
           status,
           favored,
           platform
        } = game;

     
        if(currentPlaystationPublisher != "All Publishers"){
            if (publisher.trim() != currentPlaystationPublisher) {
                return false
            }
        }
        if(currentPlaystationGenre != "All Genres"){
            if (genre.trim() != currentPlaystationGenre) {
                return false
            }
        }
        
        return( 
          <div className={styles.singleGameContainer} key={index} >
                <SaleStatus status={status}/>
                <div className={styles.imageContainer} >
                    {/* @ts-ignore */}
                     <GatsbyImage image={gatsbyImageData} alt={title} className={styles.gameImage} objectFit="fill"/>
                     <div className={styles.imageTextContainer}   >
                        {/* <Favorite gameID={strapi_id} platform={platform}/> */}
                            
                        <Link to={`/playstation/game/${slug}`} className={styles.ctaButton}>See More </Link>
                        <div className={styles.ratingContainer}>
                            <p >ESRB: <span className={styles.pegiText}>{pegi}</span></p>
                        </div>
                        <div className={styles.genreContainer}>
                            <p >Genre: <span className={styles.genreText}>{genre}</span></p>
                        </div>
                     </div>
                </div>
                <div className={styles.textContainer}>
                    <h3 className={styles.gameTitle}>{title}</h3>
                    <p className={styles.gameEdition}>{edition}</p>
                    <div className="priceContainer">
                        {discountPrice ?
                         <div className={styles.discountContainer}>
                                <p className={styles.discountPrice}>${discountPrice}</p>
                                <p className={styles.initialPrice}>${price}</p> 
                        </div>
                        :<p className={styles.normalPrice}>${price}</p>  }
                        
                    </div>
                </div>
             
          </div>
        )   
    })



    // We check if we have matching results from filters
 let isGameArrayEmpty =  displayGames.every(elm => elm === false)
  
  return (
<section className={styles.container}>
    {isGameArrayEmpty && <NoGameModal/> }
    {!isGameArrayEmpty &&  <div className={styles.gameContainer}> {displayGames}  </div>}
</section>
);
};

export default DisplayPlaystationGames;


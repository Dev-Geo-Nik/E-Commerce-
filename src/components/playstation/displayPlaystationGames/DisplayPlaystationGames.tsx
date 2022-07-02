import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { useGameContext } from '../../../context/game/GameContext';
import  * as styles from './displayPlaystationGames.module.scss';
import NoGameModal from './NoGameModal';


const  DisplayPlaystationGames :React.FC = () => {
    const {state:{gamesPS4,gamesPS5,currentPlaystationPlatform,currentPlaystationPublisher,currentPlaystationGenre}} = useGameContext();
    let currentGames = currentPlaystationPlatform === "playstation 4" ? gamesPS4 : gamesPS5;
    

  

    let displayGames = currentGames.map((game:any,index)=>{

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
           stock,
           edition,
           preOrder,
           strapi_id,
           status
        } = game;

            console.log(status)
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
          <div className={styles.singleGameContainer} key={index}>
                <div className={styles.imageContainer} >
                     <GatsbyImage image={gatsbyImageData} alt={title} className={styles.gameImage} objectFit="fill"/>
                     <div className={styles.imageTextContainer}>
                            <Link to={`/playstation/game/${slug}`} className={styles.ctaButton}>See More </Link>
                     </div>
                </div>
                <div className={styles.textContainer}>
                    <h3>{title}</h3>

                </div>
          </div>
        )   
    })



    
 let isGameArrayEmpty =  displayGames.every(elm => elm === false)
  
  return (
<section className={styles.container}>
    {isGameArrayEmpty && <NoGameModal/> }
    {!isGameArrayEmpty &&  <div className={styles.gameContainer}> {displayGames}  </div>}
</section>
);
};

export default DisplayPlaystationGames;


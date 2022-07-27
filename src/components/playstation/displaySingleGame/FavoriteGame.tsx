import { navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import { AddToFavorites, deleteFavorite, isFavoredCheckFun } from '../../../util/helpers';
import AccountPopup from '../../accountPopup/AccountPopup';
import  * as styles from './favoriteGame.module.scss';



interface Props {
  gameId: number
  platform: string
}


const  FavoriteGame :React.FC<Props> = ({gameId,platform}) => {
  const {state:{displayPopupWindow},dispatch} = useGameContext();
  const [isFavored , setIsFavored] = useState(false )
  const isBrowser = typeof window !== "undefined"
  let user:string | null  = ""
  let username  :string | null = ""

   if(isBrowser){
     user = localStorage.getItem("userJWT")
     username = localStorage.getItem("username");
   
  }





  useEffect(()=>{
    
    if (username) {
      const result = isFavoredCheckFun(user,username,gameId.toString(),platform ,setIsFavored)
    }

  },[isFavored])




  const handlerClick = () =>{
    
    // if no user return login
    if (user === null) {
      dispatch({type:ActionTypes.DISPLAY_POPUP_WINDOW, payload: true})
        // navigate("/app/login")

        return <></>
    }

    
    if (isFavored) {
      // Deleting the favorite
        //  inside in result we have the data and errors if we want to make error handling
      const result =  deleteFavorite(user,username,gameId.toString(),platform ,setIsFavored);
      
    }

    // Add the favorite
    const resultAddToFavorites =   AddToFavorites(user,username,gameId.toString(),platform ,setIsFavored)

  }
  
  return (
<>
{/* {displayPopupWindow && <AccountPopup/>} */}
<div className={styles.circle} onClick={handlerClick} >
        <div className={isFavored? [styles.backgroundCircle, styles.backgroundFavored].join(" ") : styles.backgroundCircle}>
          <IoIosHeartEmpty className = {styles.heartIcon}/>
        </div>
        <div className={styles.textModalContainer}>        
        
            <p className={isFavored? [styles.textModal, styles.textModalUnfavorite].join(" ") : styles.textModal  }>{isFavored ? "Remove from wishlist" : "Add to Wishlist"}</p>
            <div className={ isFavored ? [styles.modalBackground, styles.modalBackgroundUnfavorite].join(" ") :  styles.modalBackground}></div>
        </div>
    </div>
</>
);
};

export default FavoriteGame;


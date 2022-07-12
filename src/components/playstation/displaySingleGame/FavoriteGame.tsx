import React, { useEffect, useState } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import  * as styles from './favoriteGame.module.scss';



interface Props {
  gameId: number
  platform: string
}


const  FavoriteGame :React.FC<Props> = ({gameId,platform}) => {

  const [isFavored , setIsFavored] = useState(false )

  const user = localStorage.getItem("userJWT")


  useEffect(()=>{
    
  console.log("userEffect???")

    const isFavoredCheck  = async()=>{
      console.log("checking???")
        const payload ={
            data:{
                jwt:user,
                gameId: gameId.toString(),
                platform:platform
            }
          }
        const request = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
          
              Authorization: `Bearer ${localStorage.getItem("userJWT")}`,
            },
            body: JSON.stringify(
                payload
            )
            }
  

      try {
        const res = await  fetch(`http://localhost:1340/api/find-favorite`,request);
        const resData = await res.json();

      

        if ((resData.userJWT)) {
          console.log(resData.userJWT)
          setIsFavored(true)
        }
      } catch (error) {
        console.log(error)
        setIsFavored(false)
      }
  
    }

    if(user){
      isFavoredCheck();
    }

  },[isFavored])

// console.log(isFavored)
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


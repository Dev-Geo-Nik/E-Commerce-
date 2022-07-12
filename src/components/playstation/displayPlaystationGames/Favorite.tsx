import React, { useEffect, useState } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useGameContext } from '../../../context/game/GameContext';
import  * as styles from './favorite.module.scss';

interface Props {
  gameID:number
  platform: string
 
}

const  Favorite :React.FC<Props> = ({gameID,platform}) => {
  const {state:{allFavorites}} = useGameContext()
  // const [favored ,setFavored] = useState(false)

  // console.log(hovered)

   const handlerClick = () =>{
    // Check if we have logged in user
    let userJWT = localStorage.getItem("userJWT")


    if (userJWT === null) {
        return
    }

  

    const AddToFavorites =  async() =>{

     const payload ={
       data:{
          userJWT: userJWT,
          productId:gameID.toString(),
          platform:platform
       }
     }

      const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
       
          Authorization: `Bearer ${userJWT}`,
        },
        body: JSON.stringify(
          payload
        )
        }
     
      try {
          const res = await  fetch("http://localhost:1340/api/add-favorite",request);
          const data = await res.json();
          // console.log(data)

      } catch (error) {
          // console.log(error)
      }

   
    }
   
    AddToFavorites();

   }


 
  return (

    <div className={styles.circle} onClick={handlerClick}>
        <div className={   styles.backgroundCircle  }>
          <IoIosHeartEmpty className = {styles.heartIcon}/>
        </div>
        <div className={styles.textModalContainer}>        
            <p className={styles.textModal}>Add to Wishlist</p>
            <div className={styles.modalBackground}></div>
        </div>
    </div>

);
};

export default Favorite;





// const gameId = e.currentTarget.getAttribute("data-game-id")
// const platform = e.currentTarget.getAttribute("data-platform")
// const user = localStorage.getItem("userJWT")
// const payload ={
//     data:{
//         jwt:user,
//         gameId: gameId,
//         platform:platform
//     }
//   }
// const request = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
   
//       Authorization: `Bearer ${localStorage.getItem("userJWT")}`,
//     },
//     body: JSON.stringify(
//         payload
//     )
//     }
//     const test = async () =>{

//       try {
//         const res = await  fetch(`http://localhost:1340/api/find-favorite`,request);
//         const resData = await res.json();
//         console.log(resData.userJWT)
//         if ((resData.userJWT)) {
//           // setHover(true)
//           setFavored(true)
//         }
//       } catch (error) {
//         console.log(error)
//         setFavored(false)
//       }
//     }

//     if (localStorage.getItem("userJWT")) {
      
//       test();
//     }
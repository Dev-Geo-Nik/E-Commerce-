import React, { useEffect, useState } from 'react';
import  * as styles from './stock.module.scss';

interface Props{
    gameId:number
}

const  Stock :React.FC<Props> = ({gameId}) => {
    const [stock , setStock] = useState(1)
  // checking??? like loading?

    useEffect(()=>{
          
        const fetchSingleGame = async()=>{
            const   res = await fetch(`http://localhost:1340/api/playstation-games/${gameId}`)
            const gameData = await res.json();
        
            setStock(gameData.data.attributes.stock);
        }

    fetchSingleGame()
    },[stock])

console.log(gameId)


  return (
<>
  {stock >0 ? <p className={styles.inStock}>In stock</p>:<p className={styles.outOfStock}>Out of stock</p> }
 
  
</>
);
};

export default Stock;


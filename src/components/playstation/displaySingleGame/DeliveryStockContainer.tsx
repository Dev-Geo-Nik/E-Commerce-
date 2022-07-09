import React, { useEffect, useState } from 'react';
import Button from './Button';
import  * as styles from './deliveryStockContainer.module.scss';
import FavoriteGame from './FavoriteGame';
import Stock from './Stock';

interface Props {
    gameId:number
}

const  DeliveryStockContainer :React.FC<Props> = ({gameId}) => {

    const [stock , setStock] = useState(1)

    useEffect(()=>{
          
        const fetchSingleGame = async()=>{

            const   res = await fetch(`http://localhost:1340/api/playstation-games/${gameId}`)
            const gameData = await res.json();
            setStock(gameData.data.attributes.stock);
        
        }

    fetchSingleGame()

    },[stock])



  return (
<>
  <Stock stock = {stock}/>
  <div className={styles.deliveryTime}>Delivery time : {stock > 0 ? <span className={styles.deliverySpanText}>6-12 business days</span> : "unknown"}</div>
  <Button stock={stock} gameId={gameId}/>
  <FavoriteGame/>
</>
);
};

export default DeliveryStockContainer;


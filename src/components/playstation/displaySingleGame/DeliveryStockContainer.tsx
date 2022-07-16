import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import  * as styles from './deliveryStockContainer.module.scss';
import FavoriteGame from './FavoriteGame';
import Stock from './Stock';

interface Props {
    gameId:number
    platform:string
    imageUrl:string
    productName: string
    productPrice:number
    productDiscountPrice:string
    edition: string
}

const  DeliveryStockContainer :React.FC<Props> = ({gameId,platform,imageUrl,productDiscountPrice,productName,productPrice,edition}) => {

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
  <Button stock={stock} gameId={gameId} platform={platform} imageUrl={imageUrl} productDiscountPrice = {productDiscountPrice} productName={productName}  productPrice = {productPrice} edition={edition}/>
   <Link to="/app/playstation" className={[styles.ghostBtm ,"btn-ghost "].join(" ")}>Back</Link>
  <FavoriteGame gameId={gameId} platform={platform}/>
</>
);
};

export default DeliveryStockContainer;


import React, { useState } from 'react';
import { IoTrashOutline,  } from 'react-icons/io5';
import { ActionTypes } from '../../context/Constants';
import { useGameContext } from '../../context/game/GameContext';
import { displayCart, displayTotalCartAmount, removeProductFromCart } from '../../util/CartHelpers';
import  * as styles from './displayProducts.module.scss';
import ProductsHeader from './ProductsHeader';
import {useSpring, animated as a} from "react-spring";


interface ProductProps {
  amount: number,
  imageUrl: string,
  platform: string,
  productDiscountPrice?:string,
  productId:string
  productName: string,
  productPrice:number
  edition: string
  uniqid: string



}



const  DisplayProducts :React.FC = () => {      

  const {dispatch} = useGameContext()
  const cart = displayCart();




      const removeProductHandler  = (e:React.MouseEvent) =>{
          
           
            const productID = e.currentTarget.getAttribute("data-product-unique-id");
            const discountPrice = e.currentTarget.getAttribute("data-discount-price");
            const normalPrice = e.currentTarget.getAttribute("data-normal-price");
                  console.log(productID)
            if (productID) {
                  removeProductFromCart(productID,discountPrice,normalPrice)   
            }

            dispatch({type:ActionTypes.REMOVE_ITEM_FROM_CART ,payload:{product:displayCart(),totalAmount:displayTotalCartAmount()}})
           
      }


  let displayProducts = cart.map((prod:ProductProps)=>{
        const {productName,amount,imageUrl,platform,productId,productPrice,uniqid,productDiscountPrice,edition} = prod;
      
          
        return (
               <div className={styles.productContainer} key = {uniqid}       >
         

                 
                    <img src={imageUrl} alt={productName}  className={styles.productImage}/>
                    <div className={styles.detailsContainer}>
                         <p className={styles.title}>{productName}</p>
                          <p className={styles.edition}> Edition : <span className={styles.editionText}>{edition}</span> </p>
                          <p className={styles.platform}> Platform : <span className={styles.platformText}>{platform}</span> </p>
                    </div>
                    <div className={styles.priceGroup}>
                          {
                          productDiscountPrice ?
                          <div>
                              <p className={styles.discountPriceSingle}>${productDiscountPrice} </p>
                              <p className={styles.initialPriceSingle}>${productPrice}</p> 
                            
                          </div>
                          :<p className={styles.normalPriceSingle}>${productPrice}</p>                        
                        }
                          <div className={styles.deleteGroup}   onClick={(e)=>removeProductHandler(e)} data-product-unique-id={[uniqid]} data-discount-price = {[productDiscountPrice]} data-normal-price= {[productPrice]}>
                              <IoTrashOutline className ={styles.deleteIcon} />
                              <div className={styles.textModalContainer}>        
                                    <p className={styles.textModal}>Remove product</p>
                                    <div className={styles.modalBackground}></div>
                              </div>
                          </div>
                    </div>
                    
               </div>
        )
  })

  return (
<section className={styles.productsContainer}>
          <ProductsHeader/>
         {displayProducts}
</section>
);
};

export default DisplayProducts;


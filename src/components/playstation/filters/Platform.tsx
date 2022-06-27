import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import  * as styles from './platform.module.scss';



interface Props{
    platforms: string[] ;
  
}


const  Platform :React.FC<Props> = ({platforms}) => {
    const {state:{currentPlaystationPlatform},dispatch}  = useGameContext();
    
   
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
   
    dispatch({type:ActionTypes.CHANGE_PLAYSTATION_PLATFORM,payload: e.currentTarget.value})
  }

  let displayPlatforms = platforms.map((plat)=>{
    return <option key={plat} value={plat} >{plat}</option>
  })

  return (
    <select  value={currentPlaystationPlatform} onChange={handleChange} className={styles.select} >
    {displayPlatforms}
  </select>
);
};

export default Platform;


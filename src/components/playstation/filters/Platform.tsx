import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import  * as styles from './platform.module.scss';



interface Props{
   
  
}


const  Platform :React.FC<Props> = () => {
    const {state:{currentPlaystationPlatform,playstationPlatforms},dispatch}  = useGameContext();
    
  //  console.log(playstationPlatforms)
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
     const platformValue =  e.currentTarget.value;

   
    dispatch({type:ActionTypes.CHANGE_PLAYSTATION_PLATFORM,payload:platformValue})
  }

  
  let displayPlatforms = playstationPlatforms?.map((plat)=>{
    return <option key={plat} value={plat} >{plat}</option>
  })



  return (
    <select  value={currentPlaystationPlatform} onChange={handleChange}  >
    {displayPlatforms}
  </select>
);
};

export default Platform;


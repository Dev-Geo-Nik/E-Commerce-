import React from 'react';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import  * as styles from './publisher.module.scss';




interface Props{
  publishersPS4: string[];
  publishersPS5: string[];
}


const  Publisher :React.FC<Props> = ({publishersPS4,publishersPS5}) => {
  const {state:{currentPlaystationPublisher,currentPlaystationPlatform},dispatch}  = useGameContext();
  
   
const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
  
  dispatch({type:ActionTypes.CHANGE_PLAYSTATION_PUBLISHER,payload: e.currentTarget.value})
}

let displayPublishersPS4 = publishersPS4.map((publisher,index)=>{
  return <option label={publisher} key={index} value={publisher} >{publisher}</option>
})

let displayPublishersPS5 = publishersPS5.map((publisher,index)=>{
  return <option label={publisher} key={index} value={publisher} >{publisher}</option>
})


return (
  <select    value={currentPlaystationPublisher} onChange={handleChange}  >
      <option value="All Publishers" >All Publishers</option>
      {currentPlaystationPlatform === "Playstation 4" ? displayPublishersPS4 : displayPublishersPS5}
</select>
);
};

export default Publisher;


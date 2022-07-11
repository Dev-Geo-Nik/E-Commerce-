import React from 'react';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import  * as styles from './publisher.module.scss';




interface Props{

}


const  Publisher :React.FC<Props> = () => {
  const {state:{currentPlaystationPublisher,currentPlaystationPlatform,playstationPS4Publishers,playstationPS5Publishers},dispatch}  = useGameContext();
  
   
const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
  
  dispatch({type:ActionTypes.CHANGE_PLAYSTATION_PUBLISHER,payload: e.currentTarget.value})
}



let sortedPS4 = playstationPS4Publishers.sort((a,b)=>(a >b ? 1 :-1))
let sortedPS5 =playstationPS5Publishers .sort((a,b)=>(a >b ? 1 :-1))

let displayPublishersPS4 = sortedPS4.map((publisher,index)=>{
  return <option label={publisher} key={index} value={publisher} >{publisher}</option>
})

let displayPublishersPS5 = sortedPS5.map((publisher,index)=>{
  return <option label={publisher} key={index} value={publisher} >{publisher}</option>
})


return (
  <select    value={currentPlaystationPublisher} onChange={handleChange}  >
      <option value="All Publishers" >All Publishers</option>
        {currentPlaystationPlatform === "playstation 4" && displayPublishersPS4} 
       {currentPlaystationPlatform === "playstation 5" && displayPublishersPS5} 
</select>
);
};

export default Publisher;


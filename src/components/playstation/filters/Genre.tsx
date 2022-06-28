import React from 'react';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import  * as styles from './genre.module.scss';
interface Props{
    genresPS4: string[] ;
    genresPS5: string[] ;
}

const  Genre :React.FC<Props> = ({genresPS4,genresPS5}) => {
  const {state:{currentPlaystationGenre,currentPlaystationPlatform},dispatch}  = useGameContext();
  

const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
  
  dispatch({type:ActionTypes.CHANGE_PLAYSTATION_GENRE,payload: e.currentTarget.value})
}

let displayGenrePS4 = genresPS4.sort().map((genre,index)=>{
  return <option label={genre} key={index} value={genre} >{genre}</option>
})
let displayGenrePS5 = genresPS5.sort().map((gen,index)=>{
  return <option label={gen} key={index} value={gen} >{gen}</option>
})

return (
  <select    value={currentPlaystationGenre} onChange={handleChange}  >
      <option value="All Genres" >All Genres</option>
       {currentPlaystationPlatform === "playstation 4" && displayGenrePS4} 
       {currentPlaystationPlatform === "playstation 5" && displayGenrePS5} 
    
</select>
);
};

export default Genre;


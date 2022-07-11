import React from 'react';
import  * as styles from "./noGameModal.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { useGameContext } from '../../../context/game/GameContext';
import { ActionTypes } from '../../../context/Constants';

const  NoGameModal :React.FC = () => {
const {dispatch} = useGameContext()

const resetFilters = () => {
    dispatch({type:ActionTypes.RESET_PLAYSTATION_FILTERS})
}



  return (
<>
<div className={styles.modal}></div>
<div className={styles.textContainer}>
       <div className={styles.flexContainer}>
          <AiFillCloseCircle className={styles.iconClose} onClick={resetFilters}/>
            <h2> No  matching game found with your filter settings. Please try again</h2>
            <button className="btn-cta" onClick={resetFilters}>Try Again</button>
       </div>
</div>

</>

);
};

export default NoGameModal;


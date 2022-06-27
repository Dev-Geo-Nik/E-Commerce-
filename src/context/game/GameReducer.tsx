import { Action, ActionTypes } from "../Constants";
import { GameContextState } from "./GameContext";

type ReducerType = (state : GameContextState ,action:Action) => GameContextState;




export const reducer : ReducerType = (state,action) => {
switch (action.type) {
    
    case  ActionTypes.CHANGE_PLAYSTATION_PLATFORM:
        return ({
          ...state,
          currentPlaystationPlatform:action.payload,
          currentPlaystationGenre:"All Genres",
          currentPlaystationPublisher:"All Genres Publishers"
        }
      );
    case  ActionTypes.CHANGE_PLAYSTATION_PUBLISHER:
        return ({
          ...state,
          currentPlaystationPublisher:action.payload
        }
      );
    case  ActionTypes.CHANGE_PLAYSTATION_GENRE:
        return ({
          ...state,
          currentPlaystationGenre:action.payload
        }
      );


    default:
    return state;
}
}
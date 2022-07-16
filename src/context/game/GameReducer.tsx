import { Action, ActionTypes } from "../Constants";
import { GameContextState } from "./GameContext";

type ReducerType = (state : GameContextState ,action:Action) => GameContextState;




export const reducer : ReducerType = (state,action) => {
switch (action.type) {
    
    case  ActionTypes.SET_PLAYSTATION_GAMES_DATA:
        return ({
          ...state,
          playstationPlatforms:action.payload.platforms,
          playstationPS4Publishers:action.payload.publishersPS4,
          playstationPS5Publishers:action.payload.publishersPS5,
          playstationPS4Genre:action.payload.genresPS4,
          playstationPS5Genre:action.payload.genresPS5,
          gamesPS4:action.payload.gamesPS4,
          gamesPS5:action.payload.gamesPS5
       

        }
      );
    case  ActionTypes.CHANGE_PLAYSTATION_PLATFORM: 
        return ({
          ...state,
          currentPlaystationPlatform:action.payload,
          currentPlaystationPublisher:"All Publishers",
          currentPlaystationGenre:"All Genres"
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

    case  ActionTypes.RESET_PLAYSTATION_FILTERS:
        return ({
          ...state,
          currentPlaystationPublisher:"All Publishers",
          currentPlaystationGenre:"All Genres"
        }
      );
    case  ActionTypes.TOGGLE_LOADING:
        return ({
          ...state,
          isLoading:action.payload
        }
      );
    case  ActionTypes.LOGIN_USER:
        return ({
          ...state,
          userJWT:action.payload
        }
      );

    case  ActionTypes.DISPLAY_POPUP_WINDOW:
        return ({
          ...state,
          displayPopupWindow:action.payload
        }
      );

      // !CART


    // case  ActionTypes.INITIALIZE_CART:
    //     return ({
    //       ...state,
    //       cart:action.payload
    //     }
    //   );
  
    case  ActionTypes.ADD_PRODUCT_TO_CART:
      // console.log(action.payload.product)
        return ({
          ...state,
          gameSourceCart: [ action.payload.product] ,
          totalAmount: action.payload.totalAmount
          
        }
      );
    case  ActionTypes.REMOVE_ITEM_FROM_CART:
      // console.log(action.payload.product)
        return ({
          ...state,
          gameSourceCart: [ action.payload.product] ,
          totalAmount: action.payload.totalAmount
          
        }
      );
  



    default:
    return state;
}
}
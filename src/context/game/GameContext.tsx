import React,{createContext,Dispatch,ReactNode,useContext,useReducer} from 'react';
import { Action } from '../Constants';
import { reducer } from './GameReducer';


export interface GameContextState {
      currentPlaystationPlatform :string
      currentPlaystationPublisher: string
      currentPlaystationGenre: string
}

const initialState : GameContextState = {
    currentPlaystationPlatform:"playstation 4",
    currentPlaystationPublisher:"All Publishers",
    currentPlaystationGenre:"All Genres",

}



type ContextHook = () => { 
state:GameContextState,
dispatch:(action:Action)=>void
}


const GameContext = createContext<{
state:GameContextState;
dispatch:Dispatch<Action>;
}>({
state:initialState,
dispatch:()=>{}
})


//Provider name must start with capital letter
export const GameContextProvider = ({
children,
}:{
children: ReactNode;
}) => {
const [state, dispatch] = useReducer (reducer,initialState);






return(
<GameContext.Provider value = {{ state, dispatch }}>
{children}
</GameContext.Provider>
)};



//Capitalize the first character after the word use
export const useGameContext : ContextHook = () => {
const {state,dispatch} = useContext(GameContext);
return {state, dispatch};
};
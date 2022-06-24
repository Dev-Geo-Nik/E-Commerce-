import { Action, ActionTypes } from "../Constants";
import { GameContextState } from "./GameContext";

type ReducerType = (state : GameContextState ,action:Action) => GameContextState;




export const reducer : ReducerType = (state,action) => {
switch (action.type) {
case  ActionTypes.TEST:
return ({...state});
default:
return state;
}
}
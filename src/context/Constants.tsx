export enum ActionTypes { 
    CHANGE_PLAYSTATION_PLATFORM = "CHANGE_PLAYSTATION_PLATFORM",
    CHANGE_PLAYSTATION_PUBLISHER = "CHANGE_PLAYSTATION_PUBLISHER",
    CHANGE_PLAYSTATION_GENRE = "CHANGE_PLAYSTATION_GENRE"
 }


export enum PayloadTypes{}

export interface Action {
type:ActionTypes;
payload?: any;
}
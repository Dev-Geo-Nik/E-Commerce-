export enum ActionTypes { 
 TEST = 'TEST'
 }


export enum PayloadTypes{}

export interface Action {
type:ActionTypes;
payload?: PayloadTypes;
}
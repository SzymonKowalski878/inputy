import {ActionType,ReducerAction} from './actions'

export interface IdRoleState{
    id:string,
    role:string
}

const initialState = {
    id:"",
    role:""
}

export const IdRoleReducer = (state:IdRoleState=initialState,action:ReducerAction) =>{
    switch(action.type){
        case ActionType.SET_ID:{
            return {...state,id:action.payload}
        }
        case ActionType.SET_ROLE:{
            return {...state,role:action.payload}
        }
    }
}
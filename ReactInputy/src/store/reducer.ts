import {ActionType} from './actionTypes'
import {IState} from '../type'
import {ReducerAction} from './actionCreators'
import * as actions from "./actionCreators"


const InitialState:IState={
    id:null,
    role:null,
    //1 rozmiar mały 2 średni 3 duży
    fontSize:2,
    //dark mode light mode
    colorMode:"Light"
}




export default function Reducer(state:IState = InitialState,action : ReducerAction):IState{
    switch(action.type){
        case ActionType.SET_USER_ID:
            return{
                ...state,id:action.payload
            };
        case ActionType.SET_ROLE:
            return{
                ...state,role:action.payload
            }
        case ActionType.CHANGE_FONT_SIZE:
            return{
                ...state,fontSize:action.payload
            }
        case ActionType.CHANGE_COLOR_MODE:
            return{
                ...state,colorMode:action.payload
            }
    }
}

export function doSetUserId(count:number):actions.SetUserIdAction{
    return {
        type:ActionType.SET_USER_ID,
        payload:count
    };
}

export function doSetRole(role:string):actions.SetRoleAction{
    return{
        type:ActionType.SET_ROLE,
        payload:role
    };
}

export function doChangeColorMode(colorMode:string):actions.ChangeColorModeAction{
    return{
        type:ActionType.CHANGE_COLOR_MODE,
        payload:colorMode
    }
}

export function doChangeFontSize(fontSize:number):actions.ChangeFontSizeAction{
    return{
        type:ActionType.CHANGE_FONT_SIZE,
        payload:fontSize
    }
}
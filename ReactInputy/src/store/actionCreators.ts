import {ActionType} from "./actionTypes"

interface Action {
    type:ActionType;
    payload:unknown;
}

interface SetUserIdAction extends Action{
    type:ActionType.SET_USER_ID;
    payload:number;
}

interface SetRoleAction extends Action{
    type:ActionType.SET_ROLE;
    payload:string;
}

interface ChangeFontSizeAction extends Action{
    type:ActionType.CHANGE_FONT_SIZE;
    payload:number;
}

interface ChangeColorModeAction extends Action{
    type:ActionType.CHANGE_COLOR_MODE;
    payload:string;
}

export type ReducerAction = SetUserIdAction | SetRoleAction | ChangeFontSizeAction | ChangeColorModeAction;
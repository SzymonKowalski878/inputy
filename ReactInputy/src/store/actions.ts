export enum ActionType{
    SET_ROLE="SET_ROLE",
    SET_ID="SET_ID"
}

interface Action{
    type:ActionType;
    payload:unknown;
}

interface SetId extends Action{
    type:ActionType.SET_ID;
    payload:string;
}

interface SetRole extends Action{
    type:ActionType.SET_ROLE;
    payload:string;
}

export type ReducerAction = SetId | SetRole;

export const setId = (id:string):Action=>({
    type:ActionType.SET_ID,
    payload:id
})

export const setRole = (role:string):Action =>({
    type:ActionType.SET_ROLE,
    payload:role
})
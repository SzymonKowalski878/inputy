import React,{ChangeEvent} from 'react'; 
import { useQuery } from 'react-query';
import * as apis from '../api/generated/apis'
import {
    AddBloodDonatorDTO,
    AddBloodDonatorDTOFromJSON,
    AddBloodDonatorDTOToJSON,
    UpdateUserData,
    UpdateUserDataFromJSON,
    UpdateUserDataToJSON,
    UserEmailAndPassword,
    UserEmailAndPasswordFromJSON,
    UserEmailAndPasswordToJSON,
    UserIdAndPassword,
    UserIdAndPasswordFromJSON,
    UserIdAndPasswordToJSON,
} from '../api/generated/models'

interface userIdPasswordProps{
    dataProps(id:string,role:string):void;
}


type Token = {
    token:string;
}

export const LoginComponent:React.FC<userIdPasswordProps> =({dataProps})=>{

    const api = new apis.UserApi;
    const loginData:UserIdAndPassword={id:1,password:'zaq1@WSX'};

    const {status,error,data} = useQuery<Promise<void>,Error>(
        ['login',loginData],
        context=>api.apiUserLoginPost(context.queryKey[1])
    )
    console.log(data);
    if(status==="loading"){
        console.log("loading")
    }
    if(status==="error"){
        console.log(error.message);
        
    }

    data? 
    console.log({data})
    
    :null;

    return (
        <>

        </>
    )
}
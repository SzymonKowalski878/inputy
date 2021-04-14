import React from 'react'
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

export const RegisterAccountComponent:React.FC=()=>{

    const api = new apis.UserApi;
    const registerData:UserEmailAndPassword={email:"dodawaniedawcy@wp.pl",password:"zaq1@WSX"}

    const {status,error,data} = useQuery<Promise<void>,Error>(
        ['register',registerData],
        context=>api.apiUserRegisterAccountPost(context.queryKey[1])
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
    return(
        <>

        </>
    )
}
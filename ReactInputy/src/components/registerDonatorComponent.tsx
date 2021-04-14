import React from 'react'
import { useQuery } from 'react-query';
import * as apis from '../api/generated/apis'
import {
    AddBloodDonatorDTO,
    AddBloodDonatorDTOFromJSON,
    AddBloodDonatorDTOToJSON,
    AddUserDTO,
    BloodTypeNameDTO,
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

export const RegisterDonatorComponent:React.FC=()=>{
    const api = new apis.UserApi;
    const BloodType:BloodTypeNameDTO={bloodTypeName:'0Rh+'}
    const userData:AddUserDTO={
        email:'dodawaniedawcy@wp.pl',
        firstname:'Dodawanie',
        surname:'Dawcy',

    }
    const registerData:AddBloodDonatorDTO = {
        pesel:"73011834546",
        homeAdress:'Olsztyn',
        phoneNumber:'123456789',
        bloodType:BloodType,
        user:userData
    }

    const {status,error,data} = useQuery<Promise<void>,Error>(
        ['registerDonator',registerData],
        context=>api.apiUserRegisterDonatorPost(context.queryKey[1])
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
import React,{ChangeEvent} from 'react'; 
import { useQuery } from 'react-query';
import {UserApi} from '../api/generated/apis'


interface userIdPasswordProps{
    dataProps(id:string,role:string):void;
}



export const UserIdPasswordInput:React.FC<userIdPasswordProps> =({dataProps})=>{
    const [idState,setIdState] = React.useState("");
    const [passwordState,setPasswordState] = React.useState(""); 

    function onIdChange(event:ChangeEvent<HTMLInputElement>){
        if(parseInt(event.target.value)){
            setIdState(event.target.value);
        }else{
            setIdState("");
        }
    }

    function onPasswordChange(event:ChangeEvent<HTMLInputElement>){
        setPasswordState(event.target.value);
    }

    function checkIfValidLoginData(id:string,password:string):string | undefined{
        if(password=="gutgut"){
            return "donator"
        }
        return null;
    }
    
    type Token = {
        token:string;
    }

    type QueryKey = {
        queryKey:[string,{Id:number,Password:string}];
    }

    const onSubmit = () =>{
        refetch();
    }


    async function getToken(params:QueryKey){
        const[,loginData] = params.queryKey;
        var UserIdAndPassword ={
            Id:params.queryKey[1].Id,
            Password:params.queryKey[1].Password
        }
        const response = fetch(
            "https://localhost:44348/api/User/Login",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"},
                body:JSON.stringify(
                    UserIdAndPassword
                )
            });
            const {loginToken} = await (await response).json();
            console.log(loginToken);
            return loginToken;
    }

    var Id:number=parseInt(idState)
    var Password:string=passwordState.toString()
    const {status,error,data,refetch}=useQuery<Token,Error>(
        ["token",{Id,Password}],
        getToken,
        {
            refetchOnWindowFocus:false,
            enabled:false,
        }
    );

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
            <div>
                <input value={idState} onChange={onIdChange} type="text" name="idInput" id="idInput" placeholder="id"></input>
                <input value={passwordState} onChange={onPasswordChange} type="text" name="passwordInput" id="passwordInput" placeholder="password"></input>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </>
    )
}
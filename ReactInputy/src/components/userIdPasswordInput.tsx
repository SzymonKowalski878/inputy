import React,{ChangeEvent} from 'react'; 

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

    const onSubmitClick =()=>{
        var result = checkIfValidLoginData(idState,passwordState);
        if(result){
            dataProps(result,idState)
            setIdState("");
            setPasswordState("");
        }else{
            alert("Niepoprawne dane logowania");
            setIdState("");
            setPasswordState("");
        }
    }

    return(
        <>
            <div>
                <input value={idState} onChange={onIdChange} type="text" name="idInput" id="idInput" placeholder="id"></input>
                <input value={passwordState} onChange={onPasswordChange} type="text" name="passwordInput" id="passwordInput" placeholder="password"></input>
                <button onClick={onSubmitClick}>Submit</button>
            </div>
        </>
    )
}
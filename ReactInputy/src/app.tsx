import React from 'react'
import styled from '@emotion/styled'
import {useState} from 'react'
import {Provider,useDispatch} from 'react-redux'
import {store} from './store/store'
import {doSetUserId,doSetRole,doChangeColorMode,doChangeFontSize} from './store/reducer'

const Container = styled('div')`
    
`

const Input = styled`
    type:text;
`



const App= () =>{
    const [idState,setIdState] = useState(0);
    const [passwordState,setPasswordState] = useState("");

    const dispatch = useDispatch();
    
    function onIdChange(event){
        setIdState(event.target.value);
    }

    function onPasswordChange(event){
        setPasswordState(event.target.value);
    }

    function submit(){
        console.log(idState,passwordState);
    }


    return(
        <Provider store={store}>
        <div id="Container">
            <input type="text" id="idInput"value={idState} onChange={onIdChange} ></input>
            <input type="text" id="passwordInput" value={passwordState} onChange={onPasswordChange}></input>
            <button onClick={()=>dispatch(doSetUserId(idState))}>Submit</button>
        </div>
        </Provider>
    )
}

export default App;
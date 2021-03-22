import React from 'react'
import styled from '@emotion/styled'
import {UserIdPasswordInput} from './components/userIdPasswordInput'
import { useDispatch, useSelector } from 'react-redux'
import {setId,setRole} from './store/actions'
const Container = styled('div')`
    
`
function App(){

    const dispatch = useDispatch();

    const onIdRoleSubmit =(id:string,role:string)=>{
        dispatch((setId(id)))
        dispatch(setRole(role))
    }

    return(
        <>
            <UserIdPasswordInput dataProps={onIdRoleSubmit}/>

            


        </>
    )
}

export default App;
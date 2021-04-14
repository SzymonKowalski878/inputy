import React from 'react'
import styled from '@emotion/styled'
import {UserIdPasswordInput} from './components/userIdPasswordInput'
import { useDispatch, useSelector } from 'react-redux'
import {setId,setRole} from './store/actions'
import {QueryClient,QueryClientProvider} from 'react-query'
import {LoginComponent} from './components/loginComponent'
import {RegisterAccountComponent} from './components/registerAccountComponent'
import {RegisterDonatorComponent} from './components/registerDonatorComponent'
const Container = styled('div')`
    
`
function App(){

    const dispatch = useDispatch();

    const onIdRoleSubmit =(id:string,role:string)=>{
        dispatch((setId(id)))
        dispatch(setRole(role))
    }

    const queryClient = new QueryClient();

    return(
        <>
            <QueryClientProvider client={queryClient}>
            {/*<UserIdPasswordInput dataProps={onIdRoleSubmit}/>
            <LoginComponent dataProps={onIdRoleSubmit}/>
            <RegisterAccountComponent/>*/}
            <RegisterAccountComponent/>
            </QueryClientProvider>
        </>
    )
}

export default App;
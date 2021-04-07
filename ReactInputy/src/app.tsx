import React from 'react'
import styled from '@emotion/styled'
import {UserIdPasswordInput} from './components/userIdPasswordInput'
import { useDispatch, useSelector } from 'react-redux'
import {setId,setRole} from './store/actions'
import {QueryClient,QueryClientProvider} from 'react-query'
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
            <UserIdPasswordInput dataProps={onIdRoleSubmit}/>

            

            </QueryClientProvider>
        </>
    )
}

export default App;
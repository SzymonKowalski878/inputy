import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {Provider} from 'react-redux'
import {store} from './store/store'
import { QueryClient, QueryClientProvider } from 'react-query'
import {Logog} from './components/LoginFunction'
const queryClient= new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
            
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
)
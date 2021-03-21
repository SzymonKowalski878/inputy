import {createStore} from 'redux'
import {IdRoleReducer} from './idRoleReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(
    IdRoleReducer,
    composeWithDevTools()
);
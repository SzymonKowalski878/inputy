import {combineReducers,createStore} from 'redux';
import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import Reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    reducer:Reducer
});

//póki co nie wiem po co to ale wzorowałem się na podesłanym projekcie,będę szukał co to robi później lub gdy zajdzie potrzeba
type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    composeWithDevTools(),
);

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector


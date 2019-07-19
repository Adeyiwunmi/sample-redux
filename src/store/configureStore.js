import {createStore,applyMiddleware} from "redux";
import  thunk from 'redux-thunk';
import rootReducer from '../reducers/root-reducer';

export  default function configureStore(defaultState) {
    return createStore(rootReducer,defaultState,applyMiddleware(thunk))
}
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from './reducers/userReducer';
const initialState={
     userSignin:{
        userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    },
};
const reducer=combineReducers({
    userSignin:userSigninReducer,
    userDetails:userDetailsReducer,
    userRegister:userRegisterReducer,
    userUpdateProfile:userUpdateProfileReducer,

});

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;
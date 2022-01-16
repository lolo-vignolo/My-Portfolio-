import { applyMiddleware, combineReducers,  compose, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from 'redux-thunk';
import { commentsReducer } from "../reducers/commentsReducer";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers ({
    authReducer: authReducer,
    commentsReducer:commentsReducer,

})



export const store = createStore( reducers ,
    composeEnhancers(
        applyMiddleware(thunk)
    ) );
import { createStore,combineReducers,applyMiddleware } from "redux";
import { SignInReducers } from "./Reducers/SignInReducers";
import { thunk } from "redux-thunk";
let rootreducers=combineReducers({
    SignInReducers,
})
export const store= createStore(rootreducers,applyMiddleware(thunk));
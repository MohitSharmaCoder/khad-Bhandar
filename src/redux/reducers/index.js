import { combineReducers } from "redux";
import {createReducer} from "./createReducers";


const reducers = combineReducers({
    products:createReducer
})

export default reducers
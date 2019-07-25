import {combineReducers} from "redux";
import login from "./login";
import app from "./app";
import requestLists from './request-list'

export default combineReducers({
    app,
    login,
    requestLists
})
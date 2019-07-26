import {combineReducers} from "redux";
import login from "./login";
import app from "./app";
import requestLists from './request-list'
import resources from './resources';

export default combineReducers({
    app,
    login,
    requestLists,
    resources
})
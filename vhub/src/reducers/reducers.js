import {combineReducers} from "redux";
import login from "./login";
import app from "./app";
import resources from './resources';
import requestLists from './request-list';
import request from './request';

export default combineReducers({
    app,
    login,
    requestLists,
    resources
    request,
})
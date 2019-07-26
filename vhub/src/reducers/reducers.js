import {combineReducers} from "redux";
import login from "./login";
import app from "./app";
<<<<<<< HEAD
import requestLists from './request-list'
import resources from './resources';
=======
import requestLists from './request-list';
import request from './request';
>>>>>>> master

export default combineReducers({
    app,
    login,
    requestLists,
<<<<<<< HEAD
    resources
=======
    request,
>>>>>>> master
})
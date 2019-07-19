import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../home/home-connector";
import LoginPage from "../login/login-connector";
import Header from '../common/header';

function Routing(){
    return (
        <div>
        <Header/>
        <Router>
            <Route path="/home" component={Home}/>
            <Route path="/" exact component={LoginPage}/>
        </Router>
        </div>
    )
}

export default Routing;
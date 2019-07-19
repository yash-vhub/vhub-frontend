import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../home";
import LoginPage from "../login-page";

function Routing(){
    return (
        <Router>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={LoginPage}/>
            </div>
        </Router>
    )
}

export default Routing;
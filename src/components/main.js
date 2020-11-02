import React from 'react'

import {Route, Switch} from "react-router-dom"
import Landing from "./landing";
import About from "./about";
import Contacts from "./contacts";
import Projects from "./projects";

const Main = () => {
    return(
        <Switch>
            <Route exact path = "/" component={Landing}/>
            <Route path = "/landing" component={Landing}/>
            <Route path = "/aboutme" component={About}/>
            <Route path = "/contact" component={Contacts}/>
            <Route path = "/projects" component={Projects}/>

        </Switch>
    )
}
export default Main;
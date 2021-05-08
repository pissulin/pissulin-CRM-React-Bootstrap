import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from "../components/home/home"
import UserCadastro from '../components/user/userCadastro'

export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={UserCadastro}/>
        <Redirect from="*" to="/"/>
    </Switch>
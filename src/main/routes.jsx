import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import UserProfile from '../userProfile/userProfile'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/userProfile' component={UserProfile}/>
        <Redirect from='*' to='/'/>
    </Router>
)

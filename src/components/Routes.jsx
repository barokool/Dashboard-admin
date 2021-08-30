import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import Customers from '../pages/Customers'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={DashBoard} />
            <Route path='/customers' component={Customers} />

        </Switch>
    )
}

export default Routes

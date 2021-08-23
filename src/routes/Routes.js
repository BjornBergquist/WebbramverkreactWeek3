import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView/HomeView'
import { SignInView } from '../view/SignInView/SignInView'

export const Routes = ({children}) => {
    return (
        <BrowserRouter basename="/WebbramverkreactWeek3">
            {children}
            <Switch>
                <Route path={'/signin'} component={SignInView} />
                <Route path={'/'} component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}

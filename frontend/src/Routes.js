import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const Signin = lazy(() => import('./user/Signin'));
const Signup = lazy(() => import('./user/Signup'));

const Home = lazy(() => import('./core/Home'));
const NotFound = lazy(() => import('./core/Notfound'));

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div style={{ backgroundColor: '#001233' }}>
                <h1 style={{ color: '#EFE0CA' }}>Loading...</h1>
            </div>}>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/signin" exact component={Signin}></Route>
                    <Route path="/signup" exact component={Signup}></Route>
                    <Route component={NotFound} ></Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;
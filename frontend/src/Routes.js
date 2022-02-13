import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import Displayflow from './user/Displayflow';

const Signin = lazy(() => import('./user/Signin'));
const Signup = lazy(() => import('./user/Signup'));
const Dashboard = lazy(() => import('./core/Dashboard'));
const Displayflow = lazy(() => import('./user/Displayflow'));
const Home = lazy(() => import('./core/Home'));
const NotFound = lazy(() => import('./core/Notfound'));
const PrivateRoute = lazy(() => import('./auth/PrivateRoute'));
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
                    <PrivateRoute path="/display/:id" exact component={Displayflow}></PrivateRoute>
                    <Route path="/dashboard" exact component={Dashboard}></Route>
                    <Route component={NotFound} ></Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes;
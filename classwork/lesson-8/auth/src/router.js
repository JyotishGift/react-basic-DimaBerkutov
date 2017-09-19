import React from 'react';
import { Switch, Route } from 'react-router-dom';
/*
routes:
  /
  /signin
  /signup
  /secret
*/
import Main from './components/Main/Main';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
// MVC
// HMVC

const Router = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
  </Switch>
);

export default Router;

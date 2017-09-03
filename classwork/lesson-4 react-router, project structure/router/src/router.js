import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/auth/signin';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
const Home = props => <h1>Home</h1>;
const Home2 = props => <h1>Home !!!!</h1>;

class Counter extends React.Component {
  render() {
    return <button>Submit</button>;
  }
}

const NotFound = () => <h2>Not found 404! </h2>;

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home2} exact />
        <Route path="/signin" component={Signin} />
        <Route path="/counter" component={Counter} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Router;

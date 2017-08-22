import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import FirstPage from './components/Main/FirstPage/FirstPage';
import SecondPage from './components/Main/SecondPage/SecondPage';
import NotFound from './components/Main/NotFound/NotFound';

class Router extends Component {
  render() {
    return (
      <div>
          <Switch>
              <Route path="/" component={FirstPage} exact />
              <Route path="/page2" component={SecondPage} />
              <Route component={NotFound} />
          </Switch>
      </div>
    );
  }
}

export default Router;
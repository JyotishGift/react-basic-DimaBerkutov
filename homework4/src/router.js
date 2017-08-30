import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './components/Main/Login/SignIn/SignIn';
import SignUp from './components/Main/Login/SignUp/SignUp';
import SignOut from './components/Main/Login/SignOut/SignOut';
import NotFound from './components/Main/NotFound/NotFound';
import FirstPage from './components/Main/FirstPage/FirstPage';

class Router extends Component {
  render() {
    // const { signInConfirm } = this.props;
    return (
      <div>
          <Switch>
          {/* <Route exact path='/' render={(props) => (
  <PageContent {...props} pass_to_page_content='hi' />
)}/>
              <Route path="/signin" component={<SignIn signInConfirm = {this.signInConfirm}/>} exact />
              <Route path="/signin" render={(props) => (
                <SignIn {...props} pass_to_page_content='hi' />
              )} exact /> */}
              
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signout" component={SignOut} />
              <Route path="/" component={FirstPage} />
              <Route component={NotFound} />
          </Switch>
      </div>
    );
  }
}

export default Router;
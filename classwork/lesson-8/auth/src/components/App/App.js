import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import './Main.css';

import Header from '../Header/Header';
import Router from '../../router';

// import Signin from '../../containers/Signin/Signin';
// import Signup from '../../containers/Signup/Signup';

class App extends Component {
  render() {
    const user = this.props.authenticated ? 'залогинен' : 'не залогинен';
    return (
      <div className="App">
        
        <Header />

        <main className="Main">
        <pre>{user}</pre>
          <Router />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(App);

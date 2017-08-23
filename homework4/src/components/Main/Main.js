import React, { Component } from 'react';
import './Main.css';
import Router from '../../router';

class Main extends Component {
  render() {
    // const { signInUp } = this.props;
    return (
      <div className="Main">
        <Router />
        {/* <Router signInUp = {signInUp}/> */}
      </div>
    );
  }
}

export default Main;
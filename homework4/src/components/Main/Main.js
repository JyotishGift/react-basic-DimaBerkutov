import React, { Component } from 'react';
import './Main.css';
import Router from '../../router';

class Main extends Component {
  render() {
    const { signInConfirm  } = this.props;
    return (
      <div className="Main">
        {/* <Router /> */}
        <Router signInConfirm = {this.signInConfirm}/>
      </div>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import './SignOut.css';

class SignOut extends Component {
  logout(){
    console.log('logout');
  }
  render() {
    return (
      <div className="SignOut">
          <h1>SignOut</h1>
          <button type="button" onClick={this.logout}>SignOut</button>
      </div>
    );
  }
}

export default SignOut;
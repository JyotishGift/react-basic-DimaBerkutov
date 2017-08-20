import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from './request';
import Header from './Button';
import Tabs from './tabs';

const tabs = [
  {
    id: 0,
    component: <Header />
  },
  {
    id: 2,
    component: <Header />
  },
  {
    id: 3,
    component: <Header />
  }
];
class App extends Component {
  constructor(){
      super();
      this.state = {
          counter: 0,
          tabs: ''
      };
  }
  tabs(){}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Request />
        <button 
            onClick = {() => {
                this.setState({
                    counter: this.state.counter + 1
                })
            }}>
            INCREMENT
        </button>
        <Header counter = {this.state.counter} />
        <Tabs />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Button';
import Request from './request';
import MyGit from './git';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1
    };
  }

  update(val) {
    return this.setState(prevState => {
      return {activeTab: val}
    })

  }
  componentDidUpdate(){
    switch(this.state.activeTab){
      case 1:
      return <MyGit />
      case 2:
      return <Header />
      case 3:
      return <Request />
    }
  }
  render() {

    return (
      <div className="App">
        <button onClick={this.update.bind(this, 1)}>1</button>
        <button onClick={this.update.bind(this, 2)}>2</button>
        <button onClick={this.update.bind(this, 3)}>3</button>
        {this.componentDidUpdate()}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './theme/App.css';
import Api from './api.service';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    name: '',
    password: '',
    access: 'rejected',
    data: ''
  };
  updateState (){

  }
  render() {
    // console.log(<Api />)
    return (
      <div className="App">
        <Header />
        <Main signInConfirm = {this.signInConfirm} />
        {/* <Main signInUp = {this.signInUp}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;

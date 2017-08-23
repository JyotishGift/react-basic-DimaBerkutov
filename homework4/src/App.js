import React, { Component } from 'react';
import './theme/App.css';
import Api from './api.service';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(){
    super();
    // this.url = 'http://api.jyotish.gift/api/v1/auth/signup';
    this.state = {
      data: ''
    };
    // this.signInUp();
    console.log('this.state', this.state)
  }
  // componentWillMount(){
  //   fetch(this.url).then(data => data.json()).then(data => {
  //     this.setState({data: data});
  //     console.log('data', data)
  //   });
  // }
  // signInUp(name, lastName, email, phone){
  //   return fetch(`${this.url}`, 'POST').then(data=>data.json()).then(data=>console.log(data)).catch(e=>console.log(e));
  // }
  // signInUp(name, lastName, email, phone){
  //   return fetch(`${this.url}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         email: `dima@berkutov.com`,
  //         user: 'DimaBerkutov',
  //         password: 'dima'
  //       })
  //   }).then(response => {
  //       if(response.status === 200) alert('Successfully logged in!');
  //       else return alert('Error:', response);
  //   }).catch(e => {
  //       console.log(e);
  //   });
  // }
  // signInUp(name, lastName, email, phone){
  //   return fetch(`${this.url}`, {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded'
  //       },
  //       body: JSON.stringify({
  //         // email: `dima@berkutov.com`,
  //         user: 'sa',
  //         password: 'admin'
  //       })
  //   }).then(response => {
  //       if(response.status === 200) alert('Successfully logged in!');
  //       else return alert('Error:', response);
  //   }).catch(e => {
  //       console.log(e);
  //   });
  // }
  render() {
    // console.log(<Api />)
    return (
      <div className="App">
        <Header />
        <Main />
        {/* <Main signInUp = {this.signInUp}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;

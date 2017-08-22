import React, { Component } from 'react';
import './theme/App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(){
    super();
    this.url = 'http://api.jyotish.gift/api/v1/auth/Post/signup';
    this.state = {
      data: '',
      login: '',
      password: ''
    };
    this.signInUp();
  }
  // componentWillMount(){
  //   fetch(this.url).then(data => data.json()).then(data => {
  //     this.setState({data: data});
  //     console.log('data', data)
  //   });
  // }
  signInUp(name, lastName, email, phone){
    return fetch(`${this.url}`, {
        method: 'POST',
        body: JSON.stringify({
          email: `dima@berkutov.com`,
          name: `Dima`,
          password: 'dima'
        })
    }).then(response => {
        if(response.status == 200) alert('Information saved successfully');
        else return alert('Error, try again later!');
    }).catch(e => {
        console.log(e);
    });
}
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

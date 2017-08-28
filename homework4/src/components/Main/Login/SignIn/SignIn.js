import React, { Component } from 'react';
import api from '../../../../api.service';
import './SignIn.css';

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            password: ''
        };
        this.updateInput = this.updateInput.bind(this);
    }
    updateInput(e){
        const someName = e.target.name,
            someValue = e.target.value;
        return this.setState(prevState => {
            console.log('this.state:', this.state);
            return { [someName]: someValue };
        });
    }
    signInConfirm(name, password){
        // name.length !==0 && password.length !==0 ?
        // api.signIn(name, password, 'signin') :
        // alert('Enter correct login and password');
        api.signIn(name, password, 'login');
        // api.signIn.bind(this, this.state.name, this.state.password, 'signin');
        // console.log('qeqwrweqrqewytreqrewrqtreqterwqtyyreqewtwryqreyreyerqyr', SignInUp)
    }
  render() {
    return (        
      <div className="SignIn">
          <form>
              <label htmlFor="name">Name: </label>
              <input onChange={this.updateInput} type="text" id="name" name="name" required />
              <label htmlFor="password">Password: </label>
              <input onChange={this.updateInput} type="text" id="password" name="password" required />
              <button id="login" type="button" onClick={
                  this.signInConfirm.bind(this, this.state.name, this.state.password)
                  }>SignIn</button>
              {/* <button type="button" onClick={
                  api.signIn.bind(this, this.state.name, this.state.password, 'signin')
                  }>SignIn</button> */}
          </form>
      </div>
    );
  }
}

export default SignIn;
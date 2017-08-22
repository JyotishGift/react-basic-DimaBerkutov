import React, { Component } from 'react';
import './FirstPage.css';

class FirstPage extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            password: ''
        };
        this.updateInput = this.updateInput.bind(this);
    }
    updateInput(e){
        const someName = e.target;
        // console.log('e.target.name:', e.target.name);
        return this.setState(prevState => {
            console.log('this.state:', this.state);
            if(someName.name === 'name') return { name: someName.value };
            if(someName.name === 'password') return { password: someName.value };
        });
    }
  render() {
    return (
      <div className="FirstPage">
          <form>
              <label htmlFor="name">Name: </label>
              <input onChange={this.updateInput} type="text" id="name" name="name" />
              <label htmlFor="password">Password: </label>
              <input onChange={this.updateInput} type="text" id="password" name="password" />
          </form>
      </div>
    );
  }
}

export default FirstPage;
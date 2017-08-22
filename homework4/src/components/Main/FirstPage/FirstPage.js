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
        const someName = e.target.nameme,
            someValue = e.target.value;
        return this.setState(prevState => {
            console.log('this.state:', this.state);
            return { [someName]: someValue };
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
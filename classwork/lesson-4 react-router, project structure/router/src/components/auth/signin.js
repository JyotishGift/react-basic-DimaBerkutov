import React, { Component } from 'react';

class Signin extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: ''
    };
    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    console.log(this.props.history.push('/counter'));
  }

  updateInput(e) {
    let inputName = e.target.name;

    this.setState({
      [inputName]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.updateInput}
          />
          <label htmlFor="password">password:</label>
          <input
            type="text"
            id="name"
            name="password"
            onChange={this.updateInput}
          />
        </form>
      </div>
    );
  }
}

export default Signin;

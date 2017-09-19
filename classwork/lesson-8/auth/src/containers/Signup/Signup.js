import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <section className="Signup">
        <form>
          <div className="fieldset">
            <label>Name:</label>
            <input type="text" name="login" />
          </div>
          <div className="fieldset">
            <label>Email:</label>
            <input type="text" name="login" />
          </div>
          <div className="fieldset">
            <label>password:</label>
            <input type="password" name="login" />
          </div>
          <div className="fieldset">
            <label>password confirm:</label>
            <input type="password" name="login" />
          </div>
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

export default Signup;

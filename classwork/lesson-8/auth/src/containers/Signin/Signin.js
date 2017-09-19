import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

import './Signin.css';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

class Signin extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    this.props.signIn(values);
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    return (
      <section className="Signin">
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className="fieldset">
            <Field type="text" name="user" component="input" />
          </div>
          <div className="fieldset">
            <Field
              type="password"
              name="password"
              component="input"
              placeholder="Password"
            />
          </div>
          <div className="controls">
            <button>Sign in</button>
            <button>Sign up</button>
          </div>
        </form>
      </section>
    );
  }
}

Signin = connect(mapStateToProps, mapDispatchToProps)(Signin);

export default reduxForm({
  form: 'signin'
})(Signin);

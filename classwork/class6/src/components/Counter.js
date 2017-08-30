import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { increment, decrement } from '../actions/index';
import * as actions from '../actions';
import { bindActionCreators } from 'redux'

class Counter extends Component {
  render() {
      const { counter, increment, decrement } = this.props;
    return (
        <div>
            <div>
                Counter:
                <span>{counter}</span>
            </div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
  }
}

const mapStareToProps = state => {
    return {
        counter: state.counter
    };
};
const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(actions, dispatch)
        // increment() {
        //     dispatch(increment())
        // },
        // decrement() {
        //     dispatch(decrement())
        // }
    };
};

export default connect(mapStareToProps, mapDispatchToProps)(Counter);

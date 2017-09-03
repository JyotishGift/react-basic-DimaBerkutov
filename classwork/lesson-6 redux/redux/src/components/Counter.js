import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class Counter extends Component {
  showHistory(history) {
    return history.map(num =>
      <li key={num}>
        {num}
      </li>
    );
  }
  render() {
    const {
      counter,
      increment,
      decrement,
      prevCounters = [1000, 2000]
    } = this.props;
    const history = this.showHistory(prevCounters);
    return (
      <div>
        <div>
          Counter:
          <span>{counter}</span>
        </div>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <span style={{ float: 'right' }}>
          {history}
        </span>
      </div>
    );
  }
}

// history
const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.counterReducer.counter
  };
};

const mapDispatchToProps = dispatch => {
  // если мы решими передать события ниже по компонентам
  return {
    ...bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Counter
);

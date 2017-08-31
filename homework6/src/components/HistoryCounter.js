import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/history';
import { bindActionCreators } from 'redux'

class HistoryCounter extends Component {
  render() {      
    const { historyBlock, counter } = this.props;
    historyBlock.push(counter);
    return (
        <ul>
          {
            historyBlock.map((elem, index) => {
              return <li key={index}>{elem}</li>
            })
          }
        </ul>
    );
  }
}

const mapStareToProps = state => {
    return {
      historyBlock: state.historyReducer.historyBlock,
      counter: state.counterReducer.counter
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

export default connect(mapStareToProps, mapDispatchToProps)(HistoryCounter);
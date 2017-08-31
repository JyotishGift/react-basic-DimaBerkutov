import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStareToProps)(HistoryCounter);
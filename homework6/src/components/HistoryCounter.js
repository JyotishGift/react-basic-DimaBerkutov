import React, { Component } from 'react';
import { connect } from 'react-redux';

class HistoryCounter extends Component {
  render() {
    // const { counter } = this.props;
    //   console.log('counter', counter)
      
      const { historyBlock } = this.props;
      console.log('historyBlock', historyBlock)
    return (
        <div>{historyBlock}</div>
    );
  }
}

const mapStareToProps = state => {
  console.log('state', state)
    return {
        historyBlock: state.historyBlock
    };
};

export default connect(mapStareToProps)(HistoryCounter);
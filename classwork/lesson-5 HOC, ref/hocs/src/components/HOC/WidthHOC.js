import React, { Component } from 'react';

const WidthHOC = WrappedComponent => {
  return class WidthHOC extends Component {
    constructor() {
      super();
      this.state = {
        counter: 0
      };
    }
    updateCounter() {
      this.setState({ counter: this.state.counter + 1 });
    }
    render() {
      return (
        <main style={{ width: '600px' }}>
          <WrappedComponent
            {...this.props}
            counter={this.updateCounter}
          />
        </main>
      );
    }
  };
};

export default WidthHOC;

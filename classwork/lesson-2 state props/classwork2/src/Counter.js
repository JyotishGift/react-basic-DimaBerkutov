import React from 'react';

// Pure / Stateless / Dumb Component(Глупый компонент)

const Counter = props => {
  const { increment, counter, decrement } = props;

  return (
    <div>
      <h1>
        {counter}
      </h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
};
// class Counter extends Component {
//   render() {
//     const { increment, counter } = this.props;

//     return (
//       <div>
//         <h1>
//           {counter}
//         </h1>
//         <button onClick={increment}>INCREMENT</button>
//         <button onClick={this.decrement}>DECREMENT</button>
//       </div>
//     );
//   }
// }

export default Counter;

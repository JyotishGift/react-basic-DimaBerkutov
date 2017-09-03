import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  // render
  constructor() {
    super();
    // добавляю свойство с которым react взаимодействует
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  /*

  Нажимать в одном Counter
  и чтобы изменялось во всех !

  1. Сделать counter в App
  2. Передавать в необходимые компоненты - props
  ----
  3. Изменить state в App
   3.1 дать возможность Counter
                 , изменить состояние в App
  4... render у App 

  */
  increment() {
    this.setState(function(prevState) {
      return { counter: prevState.counter + 1 };
    });
  }

  decrement() {
    this.setState(function(prevState) {
      return { counter: prevState.counter - 1 };
    });
  }

  render() {
    /*
      данные идут вниз
      события идут наверх ^
    */
    return (
      <div>
        <Counter
          counter={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Counter
          counter={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Counter
          counter={this.state.counter}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}
/*
 то, что передается в атрибутах - это props

*/

export default App;

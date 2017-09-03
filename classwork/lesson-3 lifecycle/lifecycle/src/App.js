import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Notification from './Notification';

import GitHub from './Github';
import logo from './logo.svg';
import './App.css';

// если число кратно 3, тогда отображаем

/*

  children

*/

class Header extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('current props: ', this.props);
    console.log('next props: ', nextProps);
  }
  // true || false
  // предыдущий state и следующий
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.counter % 3 === 0;
  }

  componentWillUpdate() {
    // если shouldComponentUpdate -- true
    // инициализации
    // кешировать/мемозация
    /*
      в runtime -- реакт не торт
    */
    console.log('componentWIllUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    /*
      -> мы удаляем EventListener вот тут зачем ?
      -> Интервала
      -> Для того чтобы освободить память
    */
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <h1>
        {this.props.counter}
      </h1>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      activeTab: <GitHub />
    };
    console.log('constructor init');
  }

  componentWillMount() {
    console.log('componentWillMount');
    /*
      Server-side rendering
        1. Сервер подготовил HTML
        2. хранилище...
    */
  }

  // в данном методе мы делаем запросы к серверу
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    // на этапе инициализации это не вызывается
    console.log('componentWillReceiveProps');
  }
  /* Tabs  */
  render() {
    return (
      <div className="App">
        <Notification>
          <div style={{ background: 'blue' }} />
        </Notification>
        <Notification>
          <div style={{ background: 'red' }} />
        </Notification>
      </div>
    );
  }
}

export default App;

/*

Нам нужно сделать 1 компонент, 
который будет оборачивать каждый репозиторий с определенными стилями


*/

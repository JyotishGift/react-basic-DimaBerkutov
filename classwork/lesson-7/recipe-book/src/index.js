import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

// 1. rootReducer - главарь режбюсеров
// 2. initialState = initialState - начальный state
const initialState = {
  recipes: [
    {
      name: 'pizza',
      ingridients: [
        { name: 'cheeze', quanity: 2 },
        { name: 'milk', quanity: 1 }
      ]
    },
    { name: 'omelette' },
    { name: 'potato' }
  ]
};
const store = createStore(rootReducer, initialState);

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

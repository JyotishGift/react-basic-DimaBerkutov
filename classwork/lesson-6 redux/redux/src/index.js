import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers/index';

import logMiddleware from './middlewares/01-log';
import asyncMiddleware from './middlewares/02-async';
import addPrefix from './middlewares/03-addPrefix';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(asyncMiddleware, addPrefix, logMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

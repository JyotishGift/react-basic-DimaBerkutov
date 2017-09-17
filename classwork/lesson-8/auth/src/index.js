import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import './index.css';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers';
import logMiddleware from './middlewares/01-log';

const createStoreWithMiddleware = applyMiddleware(logMiddleware, reduxThunk)(
  createStore
);

const store = createStoreWithMiddleware(rootReducer);

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: 'auth_user', payload: { accesToken: token } });
}
/*
 HOC -> сonnect -> 
 componentDidMount() {
   if(!this.props.authenticated) {
     
   }
 }

*/

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

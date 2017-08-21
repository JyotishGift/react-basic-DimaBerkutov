import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap/dist/css/bootstrap.min.css';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

YTSearch({ key: API_KEY, term: 'matrix' }, data => {
    console.log(data);
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

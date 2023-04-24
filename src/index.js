import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk' ; 
import { reducer } from './Reducer/index';

import App from './App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ; 

const store = createStore( reducer, composeEnhancers( applyMiddleware (thunk) ) );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

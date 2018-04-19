import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import mainReducer from './reducers/mainReducer';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore)
//const store = createStoreWithMiddleware(mainReducer);

render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
  );
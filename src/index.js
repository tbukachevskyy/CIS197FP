import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import eventListReducer from './reducers/eventListReducer'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore)
const store = createStoreWithMiddleware(eventListReducer);

render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
  );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import hourReducer from './reducers/hourReducer';
const store = createStore(hourReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 

document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduceBlank from './reducers/index';
import App from './components/App';

let store = createStore(reduceBlank,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, app)
module.hot.accept();
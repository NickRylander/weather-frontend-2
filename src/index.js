import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/citiesReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// React: Build encapsulated components that manage their own state, then compose them to make complex UIs.
// ReactDom: Provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to
// Provider: Makes the Redux store available to any nested components that have been wrapped in the connect() function.
// thunk: With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store

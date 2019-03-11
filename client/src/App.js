import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index'

import SearchBar from './Components/SearchBar'
import Result from './Components/Result';

import { CookiesProvider } from 'react-cookie';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
  {},
  composeEnhancer(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
          <div>
            <SearchBar/>
            <Result/>
          </div>
        </Provider>
      </CookiesProvider>
    );
  }
}

export default App;

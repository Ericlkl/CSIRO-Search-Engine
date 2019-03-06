import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index'

import SearchBar from './Components/SearchBar'
import Result from './Components/Result';

import { CookiesProvider } from 'react-cookie';

const store = createStore(reducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
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

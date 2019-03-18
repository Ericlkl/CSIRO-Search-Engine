import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index'

import SearchBar from './Components/SearchBar'
import Content from './Components/Content';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, 
  composeEnhancer( applyMiddleware(thunk) )
);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <SearchBar/>
            <Content/>
          </div>
        </Provider>
    );
  }
}

export default App;

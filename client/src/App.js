import React, { Component } from 'react';
// Router Module
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// Redux Module
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers/index'

// Page Component
import SearchPage from './pages/SearchPage';
import XMLTagPage from './pages/XMLTagPage';
import LoginPage from './pages/LoginPage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, 
  composeEnhancer( applyMiddleware(thunk) )
);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={SearchPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/xml-result" component={XMLTagPage} />
            </Switch>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

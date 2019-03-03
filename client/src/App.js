import React, { Component } from 'react';
import SearchBar from './Components/SearchBar'
import Result from './Components/Result';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <Result/>
      </div>
    );
  }
}

export default App;

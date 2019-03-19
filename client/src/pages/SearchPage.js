import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar';
import FilterBox from '../Components/FilterBox';
import ResultList from '../Components/ResultList';

class SearchPage extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <div className="result-section">
          <div className="container">
              <FilterBox/>
              <ResultList/>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage;
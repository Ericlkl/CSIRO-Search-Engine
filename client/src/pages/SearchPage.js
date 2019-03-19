import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar';
import FilterBox from '../Components/FilterBox';
import ResultList from '../Components/ResultList';
import HelpPopUp from '../Components/HelpPopUp';

class SearchPage extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <HelpPopUp text="Step 1: Insert the search Term"/>
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
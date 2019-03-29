import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar';
import FilterBox from '../Components/FilterBox';
import ResultList from '../Components/ResultList';

class SearchPage extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
          <section className="result-section">
            <FilterBox/>
            <ResultList/>
          </section>
      </div>
    )
  }
}

export default SearchPage;
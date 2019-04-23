import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar';
import FilterBox from '../Components/FilterBox';
import ResultList from '../Components/ResultList';
import Body from '../Containers/Body';
import ResultSection from '../Containers/ResultSection'

class SearchPage extends Component {
  render() {
    return (
      <Body>
        <SearchBar/>
          <ResultSection>
            <FilterBox/>
            <ResultList/>
          </ResultSection>
      </Body>
    )
  }
}

export default SearchPage;
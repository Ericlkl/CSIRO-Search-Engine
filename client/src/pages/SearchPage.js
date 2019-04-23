import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar';
import FilterBox from '../Components/FilterBox';
import ResultList from '../Components/ResultList';
import Body from '../StyledComponents/Body';
import ResultSection from '../StyledComponents/ResultSection'

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
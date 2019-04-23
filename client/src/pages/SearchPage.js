import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar';
import Filter from '../Components/Filter';
import ResultList from '../Components/ResultList';
import Body from '../StyledComponents/Body';
import ResultSection from '../StyledComponents/ResultSection'

class SearchPage extends Component {
  render() {
    return (
      <Body>
        <SearchBar/>
          <ResultSection>
            <Filter/>
            <ResultList/>
          </ResultSection>
      </Body>
    )
  }
}

export default SearchPage;
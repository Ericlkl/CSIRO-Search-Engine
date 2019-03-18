import React, { Component } from 'react'
import ResultList from './ResultList'
import FilterBox from './FilterBox';

class Content extends Component {
  render() {
    return (
      <div className="result-section">
        <div className="container">
            <FilterBox/>
            <ResultList/>
        </div>
      </div>
    )
  }
}

export default Content;
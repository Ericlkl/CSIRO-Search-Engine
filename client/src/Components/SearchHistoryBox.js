import React from 'react'
import {connect} from 'react-redux';
import { 
    updateSearchKeyword, 
    fetchResults,
    fetchFilterValues,
    resetSearchHistory
} from '../actions/index';

import FilterBox from './FilterBox';

const SearchHistoryBox = ({searchHistory, updateSearchKeyword, fetchResults, fetchFilterValues, resetSearchHistory}) => {
  return (
    <FilterBox name="Search History">
      {
        searchHistory.map( keyword => (
            <div key = {keyword} 
                onClick = { e => {
                updateSearchKeyword(keyword)
                fetchResults()
                fetchFilterValues()
                }} className="ui purple horizontal large label">
                {keyword}
            </div>
            )
        )
      }
      <button onClick={resetSearchHistory} className="ui button fluid">Clean</button>
    </FilterBox>
  )
};

const mapStateToProps = ({searchHistory}) => ({searchHistory})

export default connect(mapStateToProps,{
    updateSearchKeyword,
    fetchResults,
    fetchFilterValues,
    resetSearchHistory
})(SearchHistoryBox);
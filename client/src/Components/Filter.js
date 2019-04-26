import React, { Component } from 'react'
import {connect} from 'react-redux';
import { 
  filterReset, 
  filterSelect, 
  fetchResults, 
  resetSearchHistory, 
  updateSearchKeyword
} from '../actions/index';

import PropTypes, { object } from 'prop-types';

import FilterBox from './FilterBox';
import FilterCheckbox from './FilterCheckbox';
import SearchHistoryBox from './SearchHistoryBox';
import {
  DividedList,
  DividedListItem,
  DividedListItemContent,
  DividedListItemTitle,
} from '../StyledComponents/DividedList'


class Filter extends Component {

  renderFilterItem = (optionsArray, tagName ,sectionName) => {
    // filterobj should be an array
    // it contains all the selectable fields
    // Render the second Layer
    // console.log(tagName);
    return (
        <DividedListItemContent>
          <DividedListItemTitle>{sectionName}</DividedListItemTitle>
          { optionsArray.map(selection => (
            <FilterCheckbox key={selection} 
              tagname={tagName}
              value={selection}
            />)
            ) 
          }
        </DividedListItemContent>
    )
  }

  renderFilterBoxForTag = (filterOptions, tagName) => {
    // Render The First Layer 
    // Which is a Tag Name

    // Get all the Second Layer options from the array
    return (
      <FilterBox key={tagName} name={tagName}>
        <DividedList>
          { Object.keys(filterOptions).map(optionName => <DividedListItem key={optionName}>{ this.renderFilterItem(filterOptions[optionName],tagName,optionName)}</DividedListItem> ) }
        </DividedList>
      </FilterBox>
    )
  }


  render() {
    // Extract all the filter information from redux store
    // First Layer
    const { filterValues } = this.props;

    return (
          <div className="ui styled fluid accordion">
            <SearchHistoryBox/>

            {  Object.keys(filterValues).map( tagName =>  this.renderFilterBoxForTag(filterValues[tagName], tagName) ) }

            <FilterBox name="Filter Tools">
              <button onClick={this.props.filterReset} className="ui button primary fluid">Reset</button>
            </FilterBox>
          </div>
    )
  }
}

// Filter.propTypes = {
//   // filter object for filter out result
//   // searchHistory array contains all the search history keywords in String
//   filter: PropTypes.object.isRequired,
//   searchHistory: PropTypes.array.isRequired
// }

const mapStateToProps = ({filter, filterValues}) => ({filter, filterValues})

export default connect(mapStateToProps, {
  filterSelect,
  filterReset,
  fetchResults,
  resetSearchHistory,
  updateSearchKeyword,
})(Filter);
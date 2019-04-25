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
import { FilterCategoryTitle } from '../StyledComponents/Filterbox';


class Filter extends Component {

  renderFilterItem = (optionsArray, sectionName) => {
    // filterobj should be an array
    // it contains all the selectable fields

    return (
        <DividedListItemContent>
          <DividedListItemTitle>{sectionName}</DividedListItemTitle>
          { optionsArray.map(selection => <FilterCheckbox name={selection} />) }
        </DividedListItemContent>
    )

  }
  render() {
    // Extract all the filter information from redux store
    // First Layer
    const { filterValues } = this.props;
    console.log(filterValues);
    return (
          <div className="ui styled fluid accordion">
            <SearchHistoryBox/>

            {
              filterValues.map(tag => {
                // Get all the filter options from the array
                // Get the Second Layer
                const options = Object.keys(tag.filterOptions);
                return (
                  <FilterBox name={tag.tagName}>
                    <DividedList>
                      { options.map(name => <DividedListItem>{ this.renderFilterItem(tag.filterOptions[name],name)}</DividedListItem> ) }
                    </DividedList>
                  </FilterBox>
                )
              })
            }

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
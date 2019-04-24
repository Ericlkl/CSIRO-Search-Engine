import React, { Component } from 'react'
import {connect} from 'react-redux';
import { 
  filterReset, 
  filterSelect, 
  fetchResults, 
  resetSearchHistory, 
  updateSearchKeyword
} from '../actions/index';

import PropTypes from 'prop-types';

import FilterBox from './FilterBox';
import FilterCheckbox from './FilterCheckbox';
import SearchHistoryBox from './SearchHistoryBox';
import HelpPopUp from '../Components/HelpPopUp';


class Filter extends Component {
  render() {
    console.log("From Filter...");
    console.log(this.props.filterValues);
    return (
      <div>
        <HelpPopUp text="Step 3 : Select the filter value you want" 
          sectionName="filter"
          pointing="below"/>

          <div className="ui styled fluid accordion">
            <SearchHistoryBox/>

            <FilterBox name="Filter Tools">
              <button onClick={this.props.filterReset} className="ui button primary fluid">Reset</button>
            </FilterBox>
          </div>
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
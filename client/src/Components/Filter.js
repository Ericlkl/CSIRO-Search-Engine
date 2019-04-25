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
import {FilterCategoryTitle} from '../StyledComponents/Filterbox';


class Filter extends Component {

  renderFilterItem = (optionsArray, sectionName) => {
    // filterobj should be an array
    // it contains all the selectable fields
    // if(optionsArray.length === 0) return

    return (
        <div className="content">
          <h4 className="header">{sectionName}</h4>
          { optionsArray.map(selection => <FilterCheckbox name={selection} />) }
        </div>
    )

  }
  render() {
    // Extract all the filter information from redux store
    const { filterValues } = this.props;
    console.log(filterValues);
    return (
          <div className="ui styled fluid accordion">
            <SearchHistoryBox/>

            {
              filterValues.map(tag => {
                const options = Object.keys(tag.filterOptions);
                return (
                  <FilterBox name={tag.tagName}>
                    <div className="ui relaxed divided list">
                      { options.map(name => this.renderFilterItem( tag.filterOptions[name] ,name) ) }
                    </div>
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
import React, { Component } from 'react'
import {connect} from 'react-redux';
import { 
  filterReset, 
  filterSelect, 
  fetchResults, 
  resetSearchHistory, 
  updateSearchKeyword
} from '../../actions/index';

import PropTypes, { object } from 'prop-types';

import FilterBox from './FilterBox';
import FilterCheckbox from './FilterCheckbox';
import SearchHistoryBox from './SearchHistoryBox';
import { DividedList, DividedListItem, DividedListItemContent,DividedListItemTitle } from '../../StyledComponents/DividedList'


class Filter extends Component {

  // Render The Expendable Box for Main Tag
  renderMainTagBox = (subTags, mainTagName) => {
    // Render The First Layer 
    // Which is a Tag Name

    // Get all the Second Layer options from the array
    return (
      <FilterBox active={false} key={mainTagName} name={mainTagName}>
        <DividedList>
          { Object.keys(subTags).map(subTagName => <DividedListItem key={subTagName}>{ this.renderSubTagItems(subTags[subTagName],mainTagName,subTagName)}</DividedListItem> ) }
        </DividedList>
      </FilterBox>
    )
  }

  renderSubTagItems = (subTags, mainTagName ,subTagName) => {
    // filterobj should be an array
    // it contains all the selectable fields
    // Render the second Layer
    return (
        <DividedListItemContent>
          <DividedListItemTitle>{subTagName}</DividedListItemTitle>
          { subTags.map(subTagValue => (
            <FilterCheckbox key={subTagValue} 
              mainTagName={mainTagName}
              subTagName={subTagName}
              value={subTagValue}/>
            )) 
          }
        </DividedListItemContent>
    )
  }

  render() {
    // Extract all the filter information from redux store
    // First Layer
    const { filterValues } = this.props;

    return (
          <div className="ui styled fluid accordion">
            <SearchHistoryBox/>
            {  Object.keys(filterValues).map(mainTagName => this.renderMainTagBox(filterValues[mainTagName], mainTagName) ) }
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

// Connecting To Redux Store, to put filter, filterValues to this component
const mapStateToProps = ({filter, filterValues}) => ({filter, filterValues})

export default connect(mapStateToProps, {
  filterSelect,
  filterReset,
  fetchResults,
  resetSearchHistory,
  updateSearchKeyword,
})(Filter);
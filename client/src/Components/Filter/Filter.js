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

import { FlexHorizontial } from '../../StyledComponents/Public';
import { DividedList, DividedListItem, DividedListItemContent,DividedListItemTitle } from '../../StyledComponents/DividedList'



class Filter extends Component {

  // Render The Expendable Box for Main Tag
  renderMainTagBox = (subTags, mainTagName) => {
    // Render The First Layer 
    // Which is a Tag Name

    // { Object.keys(subTags).map(subTagName => <DividedListItem key={subTagName}>{ this.renderSubTagItems(subTags[subTagName],mainTagName,subTagName)}</DividedListItem> ) }
    // Get all the Second Layer options from the array
    return (
      <FilterBox active={false} key={mainTagName} name={mainTagName}>
        <DividedList>
        {
          Object.keys(subTags).map(subTagName => {
            if (subTagName === "doc_count") return
            return this.renderSubTagItems(subTags[subTagName],mainTagName,subTagName)
          })
        }
        </DividedList>
      </FilterBox>
    )
  }

  renderSubTagItems = (subTags, mainTagName ,subTagName) => {
    // filterobj should be an array
    // it contains all the selectable fields
    // Render the second Layer
    console.log(subTags);
    return (
        <DividedListItemContent>
          <DividedListItemTitle>{subTagName}</DividedListItemTitle>
          { Object.keys(subTags).map(subTagValue => (
            <FlexHorizontial style={{ justifyContent: "space-between"}}>
              <FilterCheckbox key={subTagValue} 
                mainTagName={mainTagName}
                subTagName={subTagName}
                value={subTagValue}/>
              <p>{subTags[subTagValue]}</p>
            </FlexHorizontial>
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
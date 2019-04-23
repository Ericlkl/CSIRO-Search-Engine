import React, { Component } from 'react'
import {connect} from 'react-redux';
import { 
  filterTag,
  filterReset,
  filterTime,
  filterSortBy,
  filterIndicator,
  fetchResults,
  resetSearchHistory,
  updateSearchKeyword,
} from '../actions/index';
import PropTypes from 'prop-types';

import FilterBox from './FilterBox';
import FilterCheckbox from './FilterCheckbox';
import HelpPopUp from '../Components/HelpPopUp';


class Filter extends Component {

  renderSearchHistoryBox = () => (
    <FilterBox name="Search History">
      {
        this.props.searchHistory.map( keyword => (
          <div key={keyword} 
              onClick={e => {
                this.props.updateSearchKeyword(keyword)
                this.props.fetchResults()
              }}
              className="ui purple horizontal large label">
              {keyword}
          </div>
          )
        )
      }
      <button onClick={this.props.resetSearchHistory} 
              className="ui button fluid">Clean</button>
    </FilterBox>
  )

  renderSortByBox = () => (
    <FilterBox name="Sort By">
      <select className="ui dropdown fluid"
        onChange={e => this.props.filterSortBy(e.target.value)}
        value={this.props.filter.sortBy}
        name="sortBy">
        <option value="Revelance">Revelance</option>
        <option value="Most Recent">Most Recent</option>
        <option value="Earliest Registration">Earliest Registration</option>
      </select>
    </FilterBox>
  )

  renderTimeBox = () => (
    <FilterBox name="Time">
      <FilterCheckbox 
        name="time" 
        value="Before DCT"
        onChange={this.props.filterTime} 
        isChecked={this.props.filter.time.includes("Before DCT")} />
      <FilterCheckbox
        name="time"
        value="After DCT"
        onChange={this.props.filterTime} 
        isChecked={this.props.filter.time.includes("After DCT")} />
    </FilterBox>
  )

  renderIndicatorBox = () => (
    <FilterBox name="Indicator">
      <FilterCheckbox 
        name="indicator" 
        value="Mention" 
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.indicator.includes("Mention")}
      />
      <FilterCheckbox 
        name="indicator" 
        value="Test"
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.indicator.includes("Test")} />
      <FilterCheckbox 
        name="indicator" 
        value="Event" 
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.indicator.includes("Event")} />
      <FilterCheckbox 
        name="indicator" 
        value="Not Present"
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.indicator.includes("Not Present")} />
    </FilterBox>
  )

  renderTagBox = () => (
    <FilterBox name="Tag">
      <FilterCheckbox
        name="tag"
        value="Medication"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Medication")} />
      <FilterCheckbox 
        name="tag" 
        value="Hyperlipidemia"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Hyperlipidemia")} />
      <FilterCheckbox 
        name="tag" 
        value="Hypertension"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Hypertension")} />
      <FilterCheckbox 
        name="tag" 
        value="CAD"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("CAD")} />
      <FilterCheckbox 
        name="tag" 
        value="Family_Hist"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Family_Hist")} />
      <FilterCheckbox 
        name="tag" 
        value="Diabetes"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Diabetes")} />
    </FilterBox>
  )

  render() {
    return (
      <div>
        <HelpPopUp text="Step 3 : Select the filter value you want" 
          sectionName="filter"
          pointing="below"/>

        <div>
          <div className="ui styled fluid accordion">
            {this.renderSearchHistoryBox()}
            {this.renderTimeBox()}
            {this.renderIndicatorBox()}
            {this.renderTagBox()}
            <div className="active content">
              <button onClick={this.props.filterReset} className="ui button primary fluid">Reset</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Filter.propTypes = {
  // filter object for filter out result
  // searchHistory array contains all the search history keywords in String
  filter: PropTypes.object.isRequired,
  searchHistory: PropTypes.array.isRequired
}

const mapStateToProps = ({filter,searchHistory}) => ({filter, searchHistory})

export default connect(mapStateToProps, {
  filterTag,
  filterReset,
  filterTime,
  filterSortBy,
  filterIndicator,
  fetchResults,
  resetSearchHistory,
  updateSearchKeyword,
})(Filter);
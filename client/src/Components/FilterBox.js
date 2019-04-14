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

import HelpPopUp from '../Components/HelpPopUp';

const CheckBoxUnwrapped = ({name, value, isChecked, onChange, fetchResults}) => {
  return (
    <div className="field">
      <div className="ui checkbox">
        <input type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={e => {
            onChange({ checked: e.target.checked, value})
            fetchResults();
          }}
        />
        <label>{value}</label>
      </div>
    </div>
  )
}

const CheckBox = connect(null,{
  fetchResults
})(CheckBoxUnwrapped);

class BoxField extends Component{
  state = {
    active: true  // Value determine Expand The BoxField 
  }

  render() {
      return (
        <div>
          <div onClick={
            e => this.setState({ active: !this.state.active })
          } className={this.state.active ? "active title" : "title"} >
            <h2><i className="dropdown icon"></i>{this.props.name}</h2>
          </div>
          <div className={this.state.active ? "active content" : "content"}>
            {this.props.children}
          </div>
        </div>
  )
  }
}


class FilterBox extends Component {

  renderSearchHistoryBox = () => (
    <BoxField name="Search History">
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
    </BoxField>
  )

  renderSortByBox = () => (
    <BoxField name="Sort By">
      <select className="ui dropdown fluid"
        onChange={e => this.props.filterSortBy(e.target.value)}
        value={this.props.filter.sortBy}
        name="sortBy">
        <option value="Revelance">Revelance</option>
        <option value="Most Recent">Most Recent</option>
        <option value="Earliest Registration">Earliest Registration</option>
      </select>
    </BoxField>
  )

  renderTimeBox = () => (
    <BoxField name="Time">
      <CheckBox 
        name="time" 
        value="Before DCT"
        onChange={this.props.filterTime} 
        isChecked={this.props.filter.time.includes("Before DCT")} />
      <CheckBox
        name="time"
        value="After DCT"
        onChange={this.props.filterTime} 
        isChecked={this.props.filter.time.includes("After DCT")} />
    </BoxField>
  )

  renderIndicatorBox = () => (
    <BoxField name="Indicator">
      <CheckBox 
        name="indicator" 
        value="Mention" 
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.indicator.includes("Mention")}
      />
      <CheckBox 
        name="indicator" 
        value="Test"
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.indicator.includes("Test")} />
      <CheckBox 
        name="indicator" 
        value="Event" 
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.indicator.includes("Event")} />
      <CheckBox 
        name="indicator" 
        value="Not Present"
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.indicator.includes("Not Present")} />
    </BoxField>
  )

  renderTagBox = () => (
    <BoxField name="Tag">
      <CheckBox
        name="tag"
        value="Medication"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Medication")} />
      <CheckBox 
        name="tag" 
        value="Hyperlipidemia"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Hyperlipidemia")} />
      <CheckBox 
        name="tag" 
        value="Hypertension"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Hypertension")} />
      <CheckBox 
        name="tag" 
        value="CAD"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("CAD")} />
      <CheckBox 
        name="tag" 
        value="Family_Hist"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Family_Hist")} />
      <CheckBox 
        name="tag" 
        value="Diabetes"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.tag.includes("Diabetes")} />
    </BoxField>
  )

  render() {
    return (
      <div className="filterBox">
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

// PropTypes 
CheckBox.propTypes = {
  // name : checkbox property name
  // value : checkbox value
  // isChecked: determine checkbox ischecked or not
  // OnChange : Function that runs when the checkbox is check / uncheck
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

BoxField.propTypes = {
  // name for displaying the title on the box
  name: PropTypes.string.isRequired
}

FilterBox.propTypes = {
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
})(FilterBox);
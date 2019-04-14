import React, { Component } from 'react'
import {connect} from 'react-redux';
import { 
  filterReset,
  filterTime,
  filterSortBy,
  filterIndicator,
  filterTag,
  resetSearchHistory,
  updateSearchKeyword,
  fetchResults
} from '../actions/index';
import PropTypes from 'prop-types';

import HelpPopUp from '../Components/HelpPopUp';

const CheckBox = ({name, value, isChecked, onChange}) => {
  return (
    <div className="field">
      <div className="ui checkbox">
        <input type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={e => onChange({ checked: e.target.checked, value})}
        />
        <label>{value}</label>
      </div>
    </div>
  )
}

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
                this.props.fetchResults(keyword)
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
        name="Time" 
        value="Before DCT"
        onChange={this.props.filterTime} 
        isChecked={this.props.filter.Time.includes("Before DCT")} />
      <CheckBox
        name="Time"
        value="After DCT"
        onChange={this.props.filterTime} 
        isChecked={this.props.filter.Time.includes("After DCT")} />
    </BoxField>
  )

  renderIndicatorBox = () => (
    <BoxField name="Indicator">
      <CheckBox 
        name="Indicator" 
        value="Mention" 
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.Indicator.includes("Mention")}
      />
      <CheckBox 
        name="Indicator" 
        value="Test"
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.Indicator.includes("Test")} />
      <CheckBox 
        name="Indicator" 
        value="Event" 
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.Indicator.includes("Event")} />
      <CheckBox 
        name="Indicator" 
        value="Not Present"
        onChange={this.props.filterIndicator} 
        isChecked={this.props.filter.Indicator.includes("Not Present")} />
    </BoxField>
  )

  renderTagBox = () => (
    <BoxField name="Tag">
      <CheckBox
        name="Tag"
        value="medication"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.Tag.includes("medication")} />
      <CheckBox 
        name="Tag" 
        value="hyperlipidemia"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.Tag.includes("hyperlipidemia")} />
      <CheckBox 
        name="Tag" 
        value="hypertension"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.Tag.includes("hypertension")} />
      <CheckBox 
        name="Tag" 
        value="cad"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.Tag.includes("cad")} />
      <CheckBox 
        name="Tag" 
        value="family_hist"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.Tag.includes("family_hist")} />
      <CheckBox 
        name="Tag" 
        value="diabetes"
        onChange={this.props.filterTag} 
        isChecked={this.props.filter.Tag.includes("diabetes")} />
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
  filterReset,
  filterTime,
  filterSortBy,
  filterIndicator,
  filterTag,
  resetSearchHistory,
  updateSearchKeyword,
  fetchResults
})(FilterBox);
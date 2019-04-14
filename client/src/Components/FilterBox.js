import React, { Component } from 'react'
import {connect} from 'react-redux';
import { 
  filterGender, 
  filterContinent, 
  filterStatus,
  filterCountry,
  filterSortBy,
  filterReset,
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

  renderGenderBox = () => (
    <BoxField name="Gender">
      <CheckBox 
        name="Gender" 
        value="Male"
        onChange={this.props.filterGender} 
        isChecked={this.props.filter.gender.includes("Male")} />
      <CheckBox
        name="Gender"
        value="Female"
        onChange={this.props.filterGender} 
        isChecked={this.props.filter.gender.includes("Female")} />
      <CheckBox
        name="Gender"
        value="Unspecified"
        onChange={this.props.filterGender} 
        isChecked={this.props.filter.gender.includes("Unspecified")} />
    </BoxField>
  )

  renderCountryBox = () => (
    <BoxField name="Country">
      <select 
        className="ui dropdown fluid" 
        onChange={e => this.props.filterCountry(e.target.value)}
        value={this.props.filter.country}
        name="country">
        <option value="Australia">Australia</option>
        <option value="United State">United State</option>
        <option value="China">China</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="France">France</option>
      </select>
    </BoxField>
  )

  renderContinentBox = () => (
    <BoxField name="Continent">
      <CheckBox 
        name="Continent" 
        value="Europe" 
        onChange={this.props.filterContinent} 
        isChecked={this.props.filter.continent.includes("Europe")}
      />
      <CheckBox 
        name="Continent" 
        value="Asia"
        onChange={this.props.filterContinent} 
        isChecked={this.props.filter.continent.includes("Asia")} />
      <CheckBox 
        name="Continent" 
        value="North America" 
        onChange={this.props.filterContinent} 
        isChecked={this.props.filter.continent.includes("North America")} />
      <CheckBox 
        name="Continent" 
        value="Oceana"
        onChange={this.props.filterContinent} 
        isChecked={this.props.filter.continent.includes("Oceana")} />
      <CheckBox 
        name="Continent" 
        value="South America"
        onChange={this.props.filterContinent} 
        isChecked={this.props.filter.continent.includes("South America")} />
      <CheckBox 
        name="Continent" 
        value="Africa"
        onChange={this.props.filterContinent} 
        isChecked={this.props.filter.continent.includes("Africa")} />
    </BoxField>
  )

  renderStatusBox = () => (
    <BoxField name="Status">
      <CheckBox
        name="status"
        value="Completed"
        onChange={this.props.filterStatus} 
        isChecked={this.props.filter.status.includes("Completed")} />
      <CheckBox 
        name="status" 
        value="Incomplete"
        onChange={this.props.filterStatus} 
        isChecked={this.props.filter.status.includes("Incomplete")} />
      <CheckBox 
        name="status" 
        value="Terminated"
        onChange={this.props.filterStatus} 
        isChecked={this.props.filter.status.includes("Terminated")} />
      <CheckBox 
        name="status" 
        value="Active"
        onChange={this.props.filterStatus} 
        isChecked={this.props.filter.status.includes("Active")} />
      <CheckBox 
        name="status" 
        value="Unknown"
        onChange={this.props.filterStatus} 
        isChecked={this.props.filter.status.includes("Unknown")} />
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
            {this.renderSortByBox()}
            {this.renderGenderBox()}
            {this.renderCountryBox()}
            {this.renderContinentBox()}
            {this.renderStatusBox()}
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
  filterGender,
  filterContinent, 
  filterStatus,
  filterSortBy,
  filterCountry,
  filterReset,
  resetSearchHistory,
  updateSearchKeyword,
  fetchResults
})(FilterBox);
import React, { Component } from 'react'
import {connect} from 'react-redux';
import { 
  filterGender, 
  filterContinent, 
  filterStatus,
  filterCountry,
  filterSortBy
} from '../actions/index';

const CheckBox = props => {
  const {name, value, isChecked} = props;
  return (
    <div className="field">
      <div className="ui checkbox">
        <input type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={e => props.onChange({ checked: e.target.checked, value})}
        />
        <label>{value}</label>
      </div>
    </div>
  )
}

const BoxField = props => {
  return (
    <div>
      <div className="active title">
        <h2><i className="dropdown icon"></i>{props.name}</h2>
      </div>
      <div className="active content">
        {props.children}
      </div>
    </div>
  )
}

class FilterBox extends Component {

  render() {
    console.log(this.props.filter);
    return (
      <div className="filterBox">
        <div className="ui styled fluid accordion">

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

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({filter}) => ({filter})

export default connect(mapStateToProps, {
  filterGender,
  filterContinent, 
  filterStatus,
  filterSortBy,
  filterCountry
})(FilterBox);
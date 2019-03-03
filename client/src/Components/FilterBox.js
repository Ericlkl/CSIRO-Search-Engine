import React, { Component } from 'react'

const CheckBox = props => {
  return (
    <div className="field">
      <div className="ui checkbox">
        <input type="checkbox" name={props.name} value={props.value} />
        <label>{props.value}</label>
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
    return (
      <div className="filterBox">
        <div className="ui styled fluid accordion">

          <BoxField name="Sort By">
            <select className="ui dropdown fluid" name="sortBy">
              <option value="revelance">Revelance</option>
              <option value="most recent">Most Recent</option>
              <option value="earliest registration">Earliest Registration</option>
            </select>
          </BoxField>

          <BoxField name="Gender">
            <CheckBox name="Gender" value="Male"/>
            <CheckBox name="Gender" value="Female"/>
            <CheckBox name="Gender" value="Unspecified"/>
          </BoxField>

          <BoxField name="Country">
            <select className="ui dropdown fluid" name="country">
              <option value="au">Australia</option>
              <option value="us">United State</option>
              <option value="china">China</option>
              <option value="uk">United Kingdom</option>
              <option value="france">France</option>
            </select>
          </BoxField>

          <BoxField name="Continent">
            <CheckBox name="Continent" value="Europe"/>
            <CheckBox name="Continent" value="Asia"/>
            <CheckBox name="Continent" value="North America"/>
            <CheckBox name="Continent" value="Oceana"/>
            <CheckBox name="Continent" value="South America"/>
            <CheckBox name="Continent" value="Africa"/>
          </BoxField>

          <BoxField name="Status">
            <CheckBox name="status" value="Completed"/>
            <CheckBox name="status" value="Inomplete"/>
            <CheckBox name="status" value="Terminated"/>
            <CheckBox name="status" value="Active"/>
            <CheckBox name="status" value="Unknown"/>
          </BoxField>

        </div>
      </div>
    )
  }
}

export default FilterBox;
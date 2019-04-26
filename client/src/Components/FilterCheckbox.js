import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { fetchResults, filterSelect } from '../actions/index';

import { CheckBoxLabel } from '../StyledComponents/Filterbox'

class FilterCheckbox extends Component {
  onCheckboxChecked = () => {
    // Get tag name and this checkbox value from props
    const {tagname, value} = this.props;
    this.props.filterSelect({ [tagname]: value })
  }

  render(){

    const {tagname, value} = this.props;
    // console.log("tag Name is : " + tagname);
    // console.log("Value is : " + value);
    return (
      <div className="field">
        <div className="ui">
          <input type="checkbox" value={value} onChange={this.onCheckboxChecked}/>
          <CheckBoxLabel>{value}</CheckBoxLabel>
        </div>
      </div>
    )
  }
}

// // PropTypes 
// CheckBoxUnwrapped.propTypes = {
//     // name : checkbox property name
//     // value : checkbox value
//     // isChecked: determine checkbox ischecked or not
//     // OnChange : Function that runs when the checkbox is check / uncheck
//     name: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     isChecked: PropTypes.bool.isRequired,
//     onChange: PropTypes.func.isRequired
// }

export default connect(null,{
  fetchResults,
  filterSelect
})(FilterCheckbox);
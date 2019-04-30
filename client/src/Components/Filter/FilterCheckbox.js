import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { fetchResults, filterSelect } from '../../actions/index';

import { CheckBoxLabel } from '../../StyledComponents/Filterbox'

class FilterCheckbox extends Component {
  onCheckboxChecked = () => {
    // Get tag name and this checkbox value from props
    const { mainTagName, subTagName, value} = this.props;
    this.props.filterSelect([mainTagName, subTagName, value])
  }

  render(){
    const {mainTagName, subTagName, value, filter} = this.props;
    // determine the checkbox is checked or not
    // because the user might click the reset button
    // The value in redux store will remove, but the checkbox is still check if we don't have this statement
    let isChecked = filter[mainTagName] !== undefined && filter[mainTagName][subTagName].includes(value) ? true : false

    return (
      <div className="field">
        <div className="ui">
          <input type="checkbox" 
            value={value} 
            checked={isChecked}
            onChange={this.onCheckboxChecked}/>
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

const mapStateToProps = ({filter}) => ({filter})

export default connect(mapStateToProps,{
  fetchResults,
  filterSelect
})(FilterCheckbox);
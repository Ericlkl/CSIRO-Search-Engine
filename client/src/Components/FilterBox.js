import React, { Component } from 'react'
import PropTypes from 'prop-types';

class FilterBox extends Component{
    state = {
      active: true  // Value determine Expand The FilterBox 
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

FilterBox.propTypes = {
    // name for displaying the title on the box
    name: PropTypes.string.isRequired
}

export default FilterBox;
import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Box , BoxTitle } from '../../StyledComponents/Filterbox'

class FilterBox extends Component{
    state = {
      active: true  // Value determine Expand The FilterBox 
    }

    componentDidMount(){
      if(this.props.active === false) this.setState({ active: !this.state.active })
    }
    
    render() {
        return (
          <Box>
            <div onClick={
              e => this.setState({ active: !this.state.active })
            } className={this.state.active ? "active title" : "title"} >
              <BoxTitle><i className="dropdown icon"></i>{this.props.name}</BoxTitle>
            </div>
            <div className={this.state.active ? "active content" : "content"}>
              {this.props.children}
            </div>
          </Box>
    )
    }
}

FilterBox.propTypes = {
    // name for displaying the title on the box
    name: PropTypes.string.isRequired
}

export default FilterBox;
import React, { Component } from 'react'

class HelpPopUp extends Component {
  state ={
    show: true
  }

  render() {
    return (
        <div style={ this.state.show === false ? {display: "none"} : {display: "initial"}} 
            className="field fluid help"
            onClick={() => this.setState({show: false})}>
        
          <div className="ui pointing grey purple label">
            <h3 className="text-center">{this.props.text}</h3>
          </div>
      </div>
    )
  }
}

export default HelpPopUp;
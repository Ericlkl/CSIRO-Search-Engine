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
          <div className="text-center">
            <div className={"ui grey purple label pointing " + this.props.pointing}>
              <h3>{this.props.text}</h3>
            </div>
          </div>
      </div>
    )
  }
}

export default HelpPopUp;
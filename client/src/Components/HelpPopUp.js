import React, { Component } from 'react'

export default class HelpPopUp extends Component {
  render() {
    return (
        <div className="field help" placeholder="Last Name">
        <div className="container">
          <div className="ui pointing grey purple fluid label">
            <h3 className="text-center">Enter Your Search keyword here</h3>
          </div>
        </div>
      </div>
    )
  }
}

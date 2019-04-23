import React, { Component } from 'react'

class CustomizeBtn extends Component {
    state = {
        show: false
    }

    onCustomizeClick = () => this.setState({show: !this.state.show})

    render() {
        return (
        <div className={this.state.show ? "ui compact selection simple active dropdown" : "ui compact selection dropdown"}>
            Theme 
            <i onClick={this.onCustomizeClick} className="dropdown icon"></i>
            <div className="menu">
            <div onClick={this.onCustomizeClick} className="item">Default</div>
            <div onClick={this.onCustomizeClick} className="item">Dark</div>
            </div>
        </div>
        )
    }
}

export default CustomizeBtn;
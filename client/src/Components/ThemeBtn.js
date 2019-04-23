import React, { Component } from 'react'

class CustomizeBtn extends Component {
    state = {
        show: false
    }

    onCustomizeClick = () => this.setState({show: !this.state.show})

    render() {
        return (
        <div className={this.state.show ? "ui button teal simple dropdown active" : "ui button teal dropdown"}>
            <div onClick={this.onCustomizeClick} style={{ zIndex: 100}}>
                <i className="fa fa-cog" aria-hidden="true"></i>&nbsp;Theme 
                <i className="dropdown icon"></i>
            </div>
            <div className="menu">
            <div onClick={this.onCustomizeClick} className="item">Default</div>
            <div onClick={this.onCustomizeClick} className="item">Dark</div>
            </div>
        </div>
        )
    }
}

export default CustomizeBtn;
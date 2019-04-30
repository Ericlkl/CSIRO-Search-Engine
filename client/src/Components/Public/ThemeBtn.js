import React, { Component } from 'react'
import {connect} from 'react-redux'
import { useDarkModeTheme, useDefaultTheme } from '../../actions/themeActions';

class ThemeBtn extends Component {
    state = {
        show: false
    }

    onThemeBtnClicked = () => this.setState({show: !this.state.show})

    onDarkModeThemeClicked = () => {
        this.props.useDarkModeTheme();
        this.setState({show: !this.state.show});
    }

    onDefaultThemeClicked = () => {
        this.props.useDefaultTheme();
        this.setState({show: !this.state.show});
    }

    render() {
        return (
        <div className={this.state.show ? "ui button teal simple dropdown active" : "ui button teal dropdown"}>
            <div onClick={this.onThemeBtnClicked} style={{ zIndex: 100}}>
                <i className="fa fa-cog" aria-hidden="true"></i>&nbsp;Theme 
                <i className="dropdown icon"></i>
            </div>
            <div className="menu">
            <div onClick={this.onDefaultThemeClicked} className="item">Default</div>
            <div onClick={this.onDarkModeThemeClicked} className="item">Dark</div>
            </div>
        </div>
        )
    }
}

export default connect(null, { useDarkModeTheme, useDefaultTheme })(ThemeBtn);
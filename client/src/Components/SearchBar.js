import React, { Component } from 'react'
import logo from '../assets/img/logo.png'

class SearchBar extends Component {
  render() {
    return (
        <div className="search-bar">
            <div className="container">
                <div className="logo-section">
                    <img className="logo" src={logo} alt="logo"/>
                    <h1 className="title">Health Text Visualisation</h1>
                </div>

                <div className="ui icon input search-bar">
                    <input type="text" placeholder="Search..."/>
                    <i class="search icon"></i>
                </div>
            </div>
        </div>
    )
  }
}

export default SearchBar;
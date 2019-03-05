import React, { Component } from 'react'
import logo from '../assets/img/logo.png'
import {connect} from 'react-redux';
import {fetchItems, addSearchHistory} from '../actions/index'

class SearchBar extends Component {
    onInputChange = (e) => {
        // When User Insert the keyword, using redux to do something
        this.props.fetchItems(e.target.value)
        // Display Fetch Item Name
        console.log(this.props.searchItem);
    }

    // When User Clicked on the search icon
    onSearchData = () => {
        this.props.addSearchHistory(this.props.searchItem);
    }
    
    render() {
        return (
            <div className="search-bar">
                <div className="container">
                    <div className="logo-section">
                        <img className="logo" src={logo} alt="logo"/>
                        <h1 className="title">Health Text Visualisation</h1>
                    </div>

                    <div className="ui input search-bar">
                        <input onChange={this.onInputChange} type="text" placeholder="Search..."/>
                        <button onClick={this.onSearchData} className="ui mini button"><i className="search icon"></i>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({searchItem}) => ({searchItem});

export default connect(mapStateToProps, {
    fetchItems,
    addSearchHistory
})(SearchBar);
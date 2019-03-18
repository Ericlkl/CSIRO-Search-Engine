import React, { Component } from 'react'
import logo from '../assets/img/logo.png'
import {connect} from 'react-redux';
import {
    updateSearchKeywords,
    addSearchHistory,
    fetchResults
} from '../actions/index'

class SearchBar extends Component {

    onInputChange = (e) => {
        // When User Insert the keyword, using redux to do something
        this.props.updateSearchKeywords(e.target.value)
    }

    // When User Clicked on the search icon
    onSearchData = (e) => {
        e.preventDefault(); // Not allow Default Submit behavior
        const {fetchResults, addSearchHistory , searchKey } = this.props;
        fetchResults(searchKey.trim()); // Fetch data from backend server using keyword in searchField
        addSearchHistory(searchKey.trim()); // Add Search History to the result
    }
    
    render() {
        return (
            <form onSubmit={this.onSearchData}>
                <div className="search-bar">
                    <div className="container">
                        <div className="logo-section">
                            <img className="logo" src={logo} alt="logo"/>
                            <h1 className="title">Health Text Visualisation</h1>
                        </div>

                        <div className="ui input search-bar">
                            <input value={this.props.searchKey} onChange={this.onInputChange} type="text" placeholder="Search..."/>
                            <button onClick={this.onSearchData} className="ui mini button"><i className="search icon"></i>Search</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

// Map Redux store to this Class Component
// searchKey = Search Term in searchField
// searchHistory = Array contains all the searchHistory values
const mapStateToProps = ({searchKey, searchHistory}) => ({searchKey,searchHistory});

export default connect(mapStateToProps, {
    updateSearchKeywords,
    addSearchHistory,
    fetchResults
})(SearchBar);
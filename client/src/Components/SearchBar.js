import React, { Component } from 'react'
import logo from '../assets/img/logo.png'
import {connect} from 'react-redux';
import { updateSearchKeyword, addSearchHistory,fetchResults} from '../actions/index'
import PropTypes from 'prop-types';
import HelpPopUp from './HelpPopUp';

class SearchBar extends Component {

    onInputChange = (e) => {
        // When User Insert the keyword, using redux to do something
        this.props.updateSearchKeyword(e.target.value)
    }

    // When User Clicked on the search icon
    onSearchData = (e) => {
        e.preventDefault(); // Not allow Default Submit behavior
        const {fetchResults, addSearchHistory , searchKey } = this.props;

        // Fetch data from backend server using keyword in searchField
        fetchResults(searchKey.trim());
        // Add Search History to the result
        addSearchHistory(searchKey.trim());
    }
    
    render() {
        return (
            <section className="search-bar-section">
                <form className="search-bar" onSubmit={this.onSearchData}>
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
                </form>
                <HelpPopUp text="Step 1 : Enter the Search keyword on the input field"/>
            </section>
        )
    }
}

SearchBar.propTypes = {
    // SearchKey String for fetching Data and reading the search history tag event
    searchKey: PropTypes.string.isRequired
}

// Map Redux store to this Class Component
// searchKey = Search Term in searchField
const mapStateToProps = ({searchKey}) => ({searchKey});

export default connect(mapStateToProps, {
    updateSearchKeyword,
    addSearchHistory,
    fetchResults
})(SearchBar);
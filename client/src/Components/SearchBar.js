import React, { Component } from 'react'
import logo from '../assets/img/logo.png'
import {connect} from 'react-redux';
import { updateSearchKeyword, addSearchHistory, fetchResults, fetchSuggestion } from '../actions/index'
import PropTypes from 'prop-types';
import HelpPopUp from './HelpPopUp';
import SuggestionBox from './SuggestionBox';

class SearchBar extends Component {

    onInputChange = (e) => {
        const word = e.target.value;
        this.props.updateSearchKeyword(word)
        // When User Insert the keyword, using redux to do something
        this.props.fetchSuggestion(word)
    }

    // When User Clicked on the search icon
    onSearchData = (e) => {
        e.preventDefault(); // Not allow Default Submit behavior
        // Fetch data from backend server using keyword in searchField
        this.props.fetchResults();
        // Add Search History to the result
        this.props.addSearchHistory();
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

                        <div className="search-area">
                            <div className="search-box">
                                <input value={this.props.keyword} 
                                    onChange={this.onInputChange} 
                                    type="text"
                                    className="search-field" 
                                    placeholder="Search..."/>
                                <button onClick={this.onSearchData} 
                                    className="ui button">
                                    <i className="search icon"></i>Search
                                </button>
                            </div>
                           <SuggestionBox/>
                        </div>

                    </div>
                </form>
                <HelpPopUp sectionName="searchBar" text="Step 1 : Enter the Search keyword on the input field"/>
            </section>
        )
    }
}

SearchBar.propTypes = {
    // SearchKey String for fetching Data and reading the search history tag event
    keyword: PropTypes.string.isRequired
}

// Map Redux store to this Class Component
// searchKey = Search Term in searchField
const mapStateToProps = ({keyword}) => ({keyword});

export default connect(mapStateToProps, {
    updateSearchKeyword,
    addSearchHistory,
    fetchResults,
    fetchSuggestion
})(SearchBar);
import React, { Component } from 'react'
import logo from '../assets/img/logo.png'
import {connect} from 'react-redux';
import { updateSearchKeyword, addSearchHistory, fetchResults, fetchSuggestion } from '../actions/index'
import PropTypes from 'prop-types';
import HelpPopUp from './HelpPopUp';

class Suggestions extends Component {

    state = {
        show: true
    };

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = e => {
        if (this.node.contains(e.target)){
            // The click is inside, Continute to whatever you are doing
            return 
        }
        this.setState({show: false});
    }

    render(){
        const results = [];
        this.props.suggests.forEach(suggest => {
            if (results.length === 10) return 
            results.push(suggest);
        })

        return (
            <div style={ this.state.show ? {} : {display: "none"} }
                ref={node => this.node = node} 
                className="suggestions">
                {results.map(result=> <p key={result}>{result}</p>)}
            </div>
        )
    }
}

class SearchBar extends Component {

    onInputChange = (e) => {
        // When User Insert the keyword, using redux to do something
        this.props.updateSearchKeyword(e.target.value)
        this.props.fetchSuggestion(e.target.value)
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

                        <div className="search-area">
                            <div className="search-box">
                                <input value={this.props.searchKey} 
                                    onChange={this.onInputChange} 
                                    type="text"
                                    className="search-field" 
                                    placeholder="Search..."/>
                                <button onClick={this.onSearchData} 
                                    className="ui button">
                                    <i className="search icon"></i>Search
                                </button>
                            </div>
                           { this.props.suggestions.length !== 0 ? <Suggestions suggests={this.props.suggestions}/> : null}
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
    searchKey: PropTypes.string.isRequired
}

// Map Redux store to this Class Component
// searchKey = Search Term in searchField
const mapStateToProps = ({searchKey, suggestions}) => ({searchKey, suggestions});

export default connect(mapStateToProps, {
    updateSearchKeyword,
    addSearchHistory,
    fetchResults,
    fetchSuggestion
})(SearchBar);
import React, { Component } from 'react'
import logo from '../assets/img/logo.png'
import { withCookies } from 'react-cookie';
import {connect} from 'react-redux';
import {updateSearchKeywords, addSearchHistory, getSearchHistoryCookies} from '../actions/index'

class SearchBar extends Component {

    state = {
        history: this.props.cookies.get('searchHistory') || []
    }

    componentDidMount(){
        this.props.getSearchHistoryCookies(this.state.history);
    }

    onInputChange = (e) => {
        // When User Insert the keyword, using redux to do something
        this.props.updateSearchKeywords(e.target.value)
    }

    // When User Clicked on the search icon
    onSearchData = () => {
        if (this.props.searchKey !== "" && !this.props.searchHistory.includes(this.props.searchKey)) {
            this.props.addSearchHistory(this.props.searchKey);
            this.props.cookies.set('searchHistory', [...this.state.history, this.props.searchKey ] ) 
        } 
    }
    
    render() {
        console.log(this.state.history);
        return (
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
        )
    }
}

const mapStateToProps = ({searchKey, searchHistory}) => ({searchKey,searchHistory});

export default connect(mapStateToProps, {
    updateSearchKeywords,
    addSearchHistory,
    getSearchHistoryCookies
})(withCookies(SearchBar));
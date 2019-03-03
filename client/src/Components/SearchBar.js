import React, { Component } from 'react'
import logo from '../assets/img/logo.png'
import {connect} from 'react-redux';
import {fetchItems} from '../actions/index'

class SearchBar extends Component {
    onSearchData = (e) => {
        // When User Insert the keyword, using redux to do something
        this.props.fetchItems(e.target.value)
        // 
        console.log(this.props.searchItem);
    }
    
    render() {
        return (
            <div className="search-bar">
                <div className="container">
                    <div className="logo-section">
                        <img className="logo" src={logo} alt="logo"/>
                        <h1 className="title">Health Text Visualisation</h1>
                    </div>

                    <div className="ui icon input search-bar">
                        <input onChange={this.onSearchData} type="text" placeholder="Search..."/>
                        <i className="search icon"></i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({searchItem}) => ({searchItem});

export default connect(mapStateToProps, {
    fetchItems
})(SearchBar);
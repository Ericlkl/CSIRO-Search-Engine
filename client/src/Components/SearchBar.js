import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../img/logo.png';
import { 
    updateSearchKeyword, 
    fetchResults, 
    fetchFilterValues, 
    fetchSuggestion,
    filterReset
} from '../actions/index'

// Style Components
import { 
    Wrapper,
    SearchForm,
    Content,
    LogoSection,
    SearchBarLogo,
    Title,
    SearchFieldContainer,
    SearchField
} from '../StyledComponents/SearchBar'
import { FlexHorizontial } from '../StyledComponents/Public'

// Other Components
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
        this.props.fetchFilterValues();
    }
    
    render() {
        return (
            <SearchForm onSubmit={this.onSearchData}>
                <Content>
                    <LogoSection>
                        <SearchBarLogo src={logo} alt="logo"/>
                        <Title>Health Text Visualisation</Title>
                    </LogoSection>

                    <SearchFieldContainer>
                        <FlexHorizontial>

                            <SearchField value={this.props.keyword} 
                                onChange={this.onInputChange} 
                                type="text"
                                placeholder="Search..."/>

                            <button onClick={this.onSearchData} 
                                className="ui button">
                                <i className="search icon"></i>Search
                            </button>
                        </FlexHorizontial>
                        <SuggestionBox/>
                    </SearchFieldContainer>

                </Content>
            </SearchForm>
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
    fetchResults,
    fetchSuggestion,
    fetchFilterValues,
    filterReset
})(SearchBar);
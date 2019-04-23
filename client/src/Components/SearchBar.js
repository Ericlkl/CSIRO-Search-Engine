import React, { Component } from 'react'
import styled from 'styled-components';
import logo from '../assets/img/logo.png'
import {connect} from 'react-redux';
import { updateSearchKeyword, addSearchHistory, fetchResults, fetchSuggestion } from '../actions/index'
import PropTypes from 'prop-types';
import HelpPopUp from './HelpPopUp';
import SuggestionBox from './SuggestionBox';

const Wrapper = styled.section` text-align: center; `;

const SearchForm = styled.form`
    background-color: rgb(53, 189, 178);
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0 8px 6px -6px black;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 1rem;
`;

const LogoSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 20%;
`;

const SearchBarLogo = styled.img`
    width: 4rem;
    height: 100%;
    margin: 0 1.5rem;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    padding-bottom: 1rem;
`;

const SearchFieldContainer = styled.div`
    display: flex;
    position: relative;
    flex-basis: 70%;
    flex-direction: column;
`;

const FlexHorizontial = styled.div`
    display: flex;
`;

const SearchField = styled.input`
    width: 70%;
    height: 2.75rem;
    border-radius: 5px;
    padding-left: .5rem;
`;


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
            <Wrapper>
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
                <HelpPopUp sectionName="searchBar" text="Step 1 : Enter the Search keyword on the input field"/>
            </Wrapper>
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
import React, { Component } from 'react'
import {ThemeProvider} from "styled-components";
import {connect} from "react-redux";

import HelpPopUp from '../Components/Public/HelpPopUp';
import { HelpPopUpWrapper } from '../StyledComponents/HelpPopUp';
import SearchBar from '../Components/SearchBar/SearchBar';
import Filter from '../Components/Filter/Filter';
import ResultList from '../Components/Result/ResultList';
import Body from '../StyledComponents/Body';
import ResultSection from '../StyledComponents/ResultSection'


class SearchPage extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Body>
          <HelpPopUpWrapper>
            <SearchBar/>
            <HelpPopUp text="Step 1 : Enter the Search keyword on the input field"
            sectionName="searchBar" />
          </HelpPopUpWrapper>
      
          <ResultSection>
            <HelpPopUpWrapper>
              <HelpPopUp text="Step 3 : Select the filter value you want" 
                sectionName="filter" pointing="below"/>
              <Filter/>
            </HelpPopUpWrapper>

            <HelpPopUpWrapper>
              <HelpPopUp text="Step 2 : Check the search result here" 
                sectionName="resultList" pointing="below"/>
              <ResultList/>
            </HelpPopUpWrapper>

          </ResultSection>
        </Body>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = ({theme}) => ({theme})

export default connect(mapStateToProps,null)(SearchPage);
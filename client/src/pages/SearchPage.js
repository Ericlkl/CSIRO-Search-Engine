import React, { Component } from 'react'
import {ThemeProvider} from "styled-components";
import {connect} from "react-redux";
import SearchBar from '../Components/SearchBar';
import Filter from '../Components/Filter';
import ResultList from '../Components/ResultList';
import Body from '../StyledComponents/Body';
import ResultSection from '../StyledComponents/ResultSection'


class SearchPage extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Body>
          <SearchBar/>
            <ResultSection>
              <Filter/>
              <ResultList/>
            </ResultSection>
        </Body>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = ({theme}) => ({theme})

export default connect(mapStateToProps,null)(SearchPage);
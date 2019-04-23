import React, { Component } from 'react'
import ResultBox from './ResultBox';
import _ from 'lodash';
import HelpPopUp from '../Components/HelpPopUp';
import ThemeBtn from './ThemeBtn'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { showHelpSections } from '../actions/index'


class ResultList extends Component {

  onFileBtnClicked = (fileName) => {
    this.props.history.push(`/xml/${_.replace(fileName,'.xml','') }`)
  }

  render() {
    // total = Total result found by elastic search
    // results = array object that contain all the result about this keyword
    const {total, results} = this.props.searchResult;
    return (
      <div>
        <HelpPopUp 
          sectionName="resultList"
          text="Step 2 : Check the search result here" 
          pointing="below"/>
          <div style={{margin: 0}} className="ui raised segments result-list">
            <div className="ui secondary segment">

              <div className="result-list__toolsbar">
                <p> {total} result found</p>
                <div>
                  <button onClick={this.props.showHelpSections} className="ui button primary">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    &nbsp;Help
                  </button>
                  <ThemeBtn/>
                </div>
                

              </div>

              {
                // Generate result box by filling information by one result array item
                results.map(result => 
                  <div key={result.fileName}>
                    { <ResultBox result={result} onFileBtnClicked={this.onFileBtnClicked} /> }
                  </div>
                )
              }
            </div>
          </div>
      </div>
    )
  }
}

ResultList.propTypes = {
  searchResult: PropTypes.object.isRequired,  // Search Result / response from the backend server
};

// Maping Redux store to this class component
const mapStateToProps = ({searchResult}) => ({searchResult});

export default connect(mapStateToProps, { showHelpSections})(withRouter(ResultList));
// Third-Party Library
import _ from 'lodash';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

// Other Reuse Component
import ThemeBtn from '../Public/ThemeBtn'
import ResultBox from './ResultBox';
import TagChart from './TagChart';
// Styled Component
import { ToolsBar , List , ListContent } from '../../StyledComponents/ResultList'
import { showHelpSections } from '../../actions/index'

class ResultList extends Component {

  render() {
    // total = Total result found by elastic search
    // results = array object that contain all the result about this keyword
    const {total, results} = this.props.searchResult;
    return (
          <List>
            <ListContent>
              <ToolsBar>
                <div>
                  <h2> {total} result found</h2>
                </div>
                
                <div>
                  <button onClick={this.props.showHelpSections} className="ui button primary">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    &nbsp;Help
                  </button>
                  <ThemeBtn/>
                </div>
              </ToolsBar>

              <TagChart/>

              {
                // Generate result box by filling information by one result array item
                results.map(result => 
                  <div key={result.fileName}>
                    { <ResultBox result={result}/> }
                  </div>)
              }
            </ListContent>
          </List>
    )
  }
}

ResultList.propTypes = {
  searchResult: PropTypes.object.isRequired,  // Search Result / response from the backend server
};

// Maping Redux store to this class component
const mapStateToProps = ({searchResult}) => ({searchResult});

export default connect(mapStateToProps, { showHelpSections})(withRouter(ResultList));
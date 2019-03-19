import React, { Component } from 'react'
import HelpPopUp from '../Components/HelpPopUp';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { updateXMLTags } from '../actions/index'

class ResultList extends Component {

  renderResult = (fileName, tags, informations) => (
    <div className="ui segment">
      <button className="ui positive button" onClick={ e => {
        this.props.updateXMLTags(tags);
        this.props.history.push('/xml-result')
      }}>
        <i class="file icon"></i>{fileName}
      </button>
      {informations.map( (info, index) => <p key={index}>{info}</p>)}
    </div>
  )

  render() {
    // total = Total result found by elastic search
    // results = array object that contain all the result about this keyword
    const {total, results} = this.props.searchResult;
    return (
      <div>
        <HelpPopUp text="The Search Result will be display here"/>
        <div className="result-list">
          <div className="ui raised segments">
            <div className="ui secondary segment">
              <p> {total} result found</p>
              {
                // Generate result box by filling information by one result array item
                results.map(result => 
                  <div key={result.fileName}>{this.renderResult(result.fileName, result.tags, result.informations)}</div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ResultList.propTypes = {
  searchResult: PropTypes.object.isRequired,  // Search Result / response from the backend server
  updateXMLTags: PropTypes.func.isRequired,
};

// Maping Redux store to this class component
const mapStateToProps = ({searchResult}) => ({searchResult});

export default connect(mapStateToProps, { updateXMLTags})(withRouter(ResultList));
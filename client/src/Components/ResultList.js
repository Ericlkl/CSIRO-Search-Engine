import React, { Component } from 'react'
import HelpPopUp from '../Components/HelpPopUp';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { updateXMLResult } from '../actions/index'

class ResultBox extends Component{
  state = {
    expand: false
  }

  onExpandBtnClick = e => {
    this.setState({ expand: !this.state.expand})
  }

  render(){
    const { result, onFileBtnClicked } = this.props;
    return (
      <div style={ this.state.expand ? {} : {height: "300px"} }
          className="ui segment result-box">
        <button className="ui positive button" onClick={ e => onFileBtnClicked(result) } >
          <i className="file icon"></i>{result.fileName}
        </button>
        {result.informations.map( (info, index) => <p key={index}>{info}</p>)}
        <div onClick={this.onExpandBtnClick} className="expand-btn">
          { this.state.expand === false ? <h4><i class="fas fa-angle-double-down"></i> Expand</h4> : <h4><i class="fas fa-angle-double-up"></i> Close</h4>}
        </div>
      </div>
    )
  }
}

class ResultList extends Component {

  onFileBtnClicked = result => {
    this.props.updateXMLResult(result);
    this.props.history.push('/xml-result')
  }

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
                  <div key={result.fileName}>{
                    <ResultBox 
                      result={result} 
                      onFileBtnClicked={this.onFileBtnClicked}/>
                  }
                  </div>
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
  updateXMLResult: PropTypes.func.isRequired,
};

// Maping Redux store to this class component
const mapStateToProps = ({searchResult}) => ({searchResult});

export default connect(mapStateToProps, { updateXMLResult})(withRouter(ResultList));
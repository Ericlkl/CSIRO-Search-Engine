import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

const Post = ({ fileName, tags, informations }) => {
  return (
    <div className="ui segment">
      <a href="#">{fileName}</a>
      {informations.map( (info, index) => <p key={index}>{info}</p>)}
    </div>
  )
}

// PropTypes Requirement
Post.propTypes = {
  fileName: PropTypes.string, // XML File Name
  tags: PropTypes.array,  // Tags embedded in the XML Files
  informations: PropTypes.array   // Information saved in to the array to display on the result box
}

class ResultList extends Component {

  propTypes = {
    searchResult: PropTypes.object  // Search Result / response from the backend server
  };

  render() {
    // total = Total result found by elastic search
    // results = array object that contain all the result about this keyword
    const {total, results} = this.props.searchResult;
    return (
      <div className="result-list">
        <div className="ui raised segments">
          <div className="ui secondary segment">
            <p> {total} result found</p>
            {
              // Generate result box by filling information by one result array item
              results.map(result => 
                <Post 
                  key={result.fileName}
                  fileName={result.fileName}
                  tags={result.tags}
                  informations={result.informations} />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

// Maping Redux store to this class component
const mapStateToProps = ({searchResult}) => ({searchResult});

export default connect(mapStateToProps)(ResultList);
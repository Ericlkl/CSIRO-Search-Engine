import React, { Component } from 'react'
import {connect} from 'react-redux';

const Post = ({ fileName, tags, informations }) => {
  return (
    <div className="ui segment">
      <p>{fileName}</p>
      {informations.map( (info, index) => <p key={index}>{info}</p>)}
    </div>
  )
}

class ResultList extends Component {

  render() {
    const {total, results} = this.props.searchResult;
    return (
      <div className="result-list">
        <div className="ui raised segments">
          <div className="ui secondary segment">
            <p> {total} result found</p>
            {
              results.map(result => 
                <Post 
                  key={result.fileName}
                  fileName={result.fileName}
                  tags={result.tags}
                  informations={result.informations}
                />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({searchResult}) => ({searchResult});

export default connect(mapStateToProps)(ResultList);
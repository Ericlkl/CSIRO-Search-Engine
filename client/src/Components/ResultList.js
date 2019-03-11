import React, { Component } from 'react'
import {connect} from 'react-redux';

const Post = (props) => {
  const { id, text } = props;
  return (
    <div className="ui segment">
      <p>{id}</p>
      <p>{text}</p>
    </div>
  )
}

class ResultList extends Component {
  render() {
    const {total, hits} = this.props.result;
    return (
      <div className="result-list">
        <div className="ui raised segments">
          <div className="ui secondary segment">
            <p> {total} result found</p>
          </div>
          {
            hits.map(
              hit => <Post key={hit._id} id={hit._id} text={hit._source.text} /> 
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({result}) => ({result});

export default connect(mapStateToProps)(ResultList);
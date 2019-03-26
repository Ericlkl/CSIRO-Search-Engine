import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class XMLTagPage extends Component {

  renderTable = (tags) => {
    let columns = [];

    tags.forEach(tag => {
      for (const key of Object.keys(tag)) {
        if (!columns.includes(key)){
          columns.push(key)
        }
      }
    })

    return (
      <table className="ui celled table">
      <thead>
        <tr>{columns.map(column => <th key={column}>{column}</th>)}</tr>
      </thead>
      <tbody>
        {tags.map(tag => {
          const rows = [];
          columns.forEach(column => {
            rows.push(<td key={column} data-label={column}>{
              tag[column] === undefined || tag[column] === ""  ? "N/A" : tag[column] 
            }</td>)         
          })
          return <tr key={tag.id}>{rows}</tr>
        })}
      </tbody>
    </table>
    )
  }

  render() {
    const {fileName, informations, tags} = this.props.xml
    return (
      <div className="container">
        <Link className="ui primary button" to="/">Go Back</Link>
        <h1>{fileName}</h1>
        {informations.map( (info, index) => <p key={index}>{info}</p>)}
        {this.renderTable(tags)}
      </div>
    )
  }
}

const mapStateToProps = ({xml}) => ({xml})

export default connect(mapStateToProps, null)(XMLTagPage);
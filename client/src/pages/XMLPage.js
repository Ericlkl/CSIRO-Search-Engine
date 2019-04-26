import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {nodeServer} from '../api'
import {Container} from '../StyledComponents/Public'
import { Navbar } from '../StyledComponents/Narbar'

class XMLPage extends Component {

  state = {
    fileName: null,
    tags: null,
    informations: null
  }

  componentDidMount = async () => {
    console.log(this.props.match.params.xmlID);
    const result = await nodeServer.get(`xml/${this.props.match.params.xmlID}`)
    const {fileName, tags, informations } = result.data
    this.setState({fileName, tags, informations })
  }

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
    const {fileName, tags, informations } = this.state;

    if (fileName === null) {
      return <div>Loading</div>
    }

    return (
      <div className="page">
        <Navbar>
          <Link to="/"><i class="fas fa-chevron-circle-left"></i></Link>
          <h1>{fileName}</h1>
          <div></div>
        </Navbar>
        <Container>
          {informations.map( (info, index) => <p key={index}>{info}</p>)}
          {this.renderTable(tags)}
        </Container>
      </div>
    )
  }
}


export default XMLPage;
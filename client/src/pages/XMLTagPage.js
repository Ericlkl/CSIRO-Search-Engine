import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class XMLTagPage extends Component {

  renderTable = (tag) => {
    let row = [];

    for (const key of Object.keys(tag)) {
      row.push(
        <tr className="center aligned">
          <td>{key}</td>
          <td>{tag[key]}</td>
        </tr>
      )
    }

    return (
      <table className="ui green definition two column table">
        <tbody>
          {row}
        </tbody>
      </table>
    )
  }

  render() {
    const { xmlTags } = this.props;
    return (
      <div className="container">
        <Link className="ui primary button" to="/">Go Back</Link>

        { xmlTags.length !== 0 ? xmlTags.map(tag => this.renderTable(tag)) : <div className="ui text loader">Loading</div>  }
      </div>
    )
  }
}

const mapStateToProps = ({xmlTags}) => ({xmlTags})

export default connect(mapStateToProps, null)(XMLTagPage);
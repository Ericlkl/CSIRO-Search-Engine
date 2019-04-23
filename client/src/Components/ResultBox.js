import React, { Component } from 'react'
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

import _ from 'lodash';

class ResultBox extends Component{
    state = {
      expand: false
    }
  
    onExpandBtnClick = e => {
      this.setState({ expand: !this.state.expand})
    }
  
    render(){
        const { result, keyword, onFileBtnClicked } = this.props;
        console.log(keyword)
        return (
            <div style={ this.state.expand ? {} : {height: "300px"} }
                className="ui segment result-box">
            <button className="ui positive button" onClick={ e => onFileBtnClicked(result.fileName) } >
                <i className="file icon"></i>{result.fileName}
            </button>
            
            {
                result.informations.map( (info, index) => {
                    return <p key={index}>
                        { 
                            ReactHtmlParser(_.replace(info, keyword, `<span class="highlight">${keyword}</span>`) ) 
                        } 
                    </p>
                })
            }
            <div onClick={this.onExpandBtnClick} className="expand-btn">
                { this.state.expand === false ? <h4><i className="fas fa-angle-double-down"></i> Expand</h4> : <h4><i className="fas fa-angle-double-up"></i> Close</h4>}
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({keyword}) => ({keyword})

export default connect(mapStateToProps, null)(ResultBox)
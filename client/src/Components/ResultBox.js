import _ from 'lodash';
import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import {connect} from 'react-redux';

// Styled Component
import { ExpendBtn } from '../StyledComponents/ResultBox';

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
            <div style={{ 
                height:  this.state.expand ? "auto" : "300px",
                display: 'block',
                margin: '2rem 0',
                overflow: "hidden"
            }} className="ui segment">

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
                <ExpendBtn onClick={this.onExpandBtnClick} >
                    { this.state.expand === false ? <h4><i className="fas fa-angle-double-down"></i> Expand</h4> : <h4><i className="fas fa-angle-double-up"></i> Close</h4>}
                </ExpendBtn>`
            </div>
        )
    }
}

const mapStateToProps = ({keyword}) => ({keyword})

export default connect(mapStateToProps, null)(ResultBox)
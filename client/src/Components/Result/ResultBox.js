import _ from 'lodash';
import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import {connect} from 'react-redux';

// Styled Component
import { Box, BoxContent, ExpendBtn, XmlLink } from '../../StyledComponents/ResultBox';

// <button className="ui positive button" onClick={ e => onFileBtnClicked(result.fileName) } >
// <i className="file icon"></i>{result.fileName}
// </button>

class ResultBox extends Component{
    state = {
      expand: false
    }
  
    onExpandBtnClick = e => {
      this.setState({ expand: !this.state.expand})
    }
  
    render(){
        const { result, keyword } = this.props;
        const xmlNumber = _.replace(result.fileName, '.xml', '');

        return (
            <Box style={{ height:  this.state.expand ? "auto" : "300px" }}>
                <BoxContent>
                    <XmlLink to={`/xml/${xmlNumber}`} ><i className="file icon"/>[XML] {xmlNumber}</XmlLink>
                
                    {
                        result.informations.map( (info, index) => {
                            // Check all the paragraph, if there is contain the keyword, put span class betweem the keyword highlighting the text
                            return (<p key={index}>
                                { ReactHtmlParser(_.replace(info, keyword, `<span class="highlight">${keyword}</span>`) )} 
                            </p>)
                        })
                    }
                    <ExpendBtn onClick={this.onExpandBtnClick} >
                        { this.state.expand === false ? <h4><i className="fas fa-angle-double-down"></i> Expand</h4> : <h4><i className="fas fa-angle-double-up"></i> Close</h4>}
                    </ExpendBtn>`
                </BoxContent>
            </Box>
        )
    }
}

const mapStateToProps = ({keyword}) => ({keyword})

export default connect(mapStateToProps, null)(ResultBox)
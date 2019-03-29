import React, { Component } from 'react'
import {connect} from 'react-redux';
import { closeSuggestionBox, updateSearchKeyword } from '../actions/index'

class SuggestionBox extends Component {

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = e => {
        if (this.node.contains(e.target)){
            // The click is inside, Continute to whatever you are doing
            return 
        }
        // Click is outside
        this.props.closeSuggestionBox();
    }

    onSuggestKeywordClicked = (word) => {
        this.props.updateSearchKeyword(word);
        this.props.closeSuggestionBox();
    }

    render(){
        const results = [];
        if (this.props.suggestBox.suggestions.length === 0) return <div ref={node => this.node = node} ></div>

        this.props.suggestBox.suggestions.forEach(suggest => {
            if (results.length === 10) return 
            results.push(<p onClick={e => this.onSuggestKeywordClicked(suggest)} key={suggest}>{suggest}</p>);
        })

        return (
            <div style={ this.props.suggestBox.show ? {} : {display: "none"} }
                ref={node => this.node = node} 
                className="suggestions">
                {results}
            </div>
        )
    }
}

const mapStateToProps = ({suggestBox}) => ({suggestBox})

export default connect(mapStateToProps, { 
    closeSuggestionBox, 
    updateSearchKeyword 
})(SuggestionBox);
import React from 'react'
import {connect} from 'react-redux';
import {closeHelpSection} from '../../actions/index'

const HelpPopUp = ({help, sectionName, text, pointing, closeHelpSection}) => {
  return (
    <div style={ help[sectionName] === false ? {display: "none"} : {display: "initial"}} 
        className="field fluid help"
        onClick={() => closeHelpSection(sectionName)}>

      <div className="text-center">
        <div className={"ui grey purple label pointing " + pointing}>
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({help}) => ({help});

export default connect( mapStateToProps , {closeHelpSection})(HelpPopUp);
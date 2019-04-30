import React from 'react';
import {configure , shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import logo from '../../img/logo.png'

import {HelpPopUp} from '../Public/HelpPopUp';
import {Wrapper, Word} from '../../StyledComponents/SuggestionBox'

configure({ adapter: new Adapter() });

describe("<HelpPopUp/>", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<HelpPopUp help={"help"} sectionName={"help"} text={"Section1"} pointing="below" />);
    });

    it('Should Render the Help Content', () => {
        expect(wrapper.find("h3").text()).toEqual("Section1");
    })

    it('Should Able to pointing to another UI Element', () => {
        expect(wrapper.contains(        
            <div className={"ui grey purple label pointing below"}>
                <h3>Section1</h3>
            </div>
        )).toEqual(true);
    })

})
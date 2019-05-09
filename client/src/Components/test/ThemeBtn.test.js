import React from 'react';
import {configure , shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ThemeBtn} from '../Public/ThemeBtn';

configure({ adapter: new Adapter() });

describe("<ThemeBtn/>", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ThemeBtn help={"help"} sectionName={"help"} text={"Section1"} pointing="below" />);
    });

    it('Should Render Default Btn', () => {
        expect(wrapper.find("#dafault-btn").text()).toEqual("Default");
    })

    it('Should Render Dark Mode Btn', () => {
        expect(wrapper.find("#darkmode-btn").text()).toEqual("Dark");
    })
})
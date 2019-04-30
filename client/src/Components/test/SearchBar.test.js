import React from 'react';
import {configure , shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import logo from '../../img/logo.png'

import {SearchBar} from '../SearchBar/SearchBar';
import {SearchBarLogo, Title} from '../../StyledComponents/SearchBar'
import SuggestionBox from '../SearchBar/SuggestionBox'

configure({ adapter: new Adapter() });

describe("<SearchBar/>", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SearchBar keyword="disease"/>);
    });

    it('Should Render CSIRO Logo', () => {
        expect(wrapper.contains(<SearchBarLogo src={logo} alt="logo"/>)).toBe(true);
    })

    it('Should Render Project Title', () => {
        expect(wrapper.contains(<Title>Health Text Visualisation</Title>)).toBe(true);
    })

    it('Should Render Suggestion Box at the bottom of the search field', () => {
        expect(wrapper.contains(<SuggestionBox/>)).toBe(true);
    })
})
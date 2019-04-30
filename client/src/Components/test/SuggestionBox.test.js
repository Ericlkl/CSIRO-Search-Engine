import React from 'react';
import {configure , shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import logo from '../../img/logo.png'

import {SuggestionBox} from '../SearchBar/SuggestionBox';
import {Wrapper, Word} from '../../StyledComponents/SuggestionBox'

configure({ adapter: new Adapter() });

describe("<SuggestionBox/>", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SuggestionBox suggestBox={{suggestions:[]}}/>);
    });

    it('Should Render Suggestion Keyword', () => {
        wrapper.setProps({
            suggestBox:{
                suggestions:["Abc","abc","hello","dsjd"]
            }
        })
        expect(wrapper.find(Word)).toHaveLength(4);
    })

    it('Should Render no more than 10 Suggestion Keywords', () => {
        let suggestions = [];
        while (suggestions.length < 15){
            suggestions.push("a")
        };

        wrapper.setProps({ suggestBox: { suggestions } });

        expect(wrapper.find(Word)).toHaveLength(10);
    })
})
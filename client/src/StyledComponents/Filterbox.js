import styled from 'styled-components';

export const Box = styled.div`
    background: ${props => props.theme.filterBox.bgColor};
    margin: 0 auto;
`;

export const BoxTitle = styled.h2`
    color: ${props => props.theme.textColor};
`;

export const FilterCategoryTitle = styled.h3`
    color: rgba(0,0,0,0.8);
`;

export const CheckBoxLabel = styled.label`
    padding: 0 1rem;
    color: ${props => props.theme.filterBox.labelColor};
`;
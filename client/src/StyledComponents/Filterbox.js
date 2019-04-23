import styled from 'styled-components';

export const Box = styled.div`
    background: ${props => props.theme.filterBox.bgColor};
    margin: 0 auto;
`;

export const BoxTitle = styled.h2`
    color: ${props => props.theme.textColor};
`;

export const CheckBoxLabel = styled.label`
    padding: 0 1rem;
    color: ${props => props.theme.filterBox.labelColor};
`;
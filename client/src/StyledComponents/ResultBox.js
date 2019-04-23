import styled from 'styled-components';

export const ExpendBtn = styled.div`
    position: absolute;
    cursor: pointer;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: ${props => props.theme.filterBox.bgColor};
    bottom: 0;
    left: 0;
    >h4{
        position: relative;
    }
`;

export const Result = styled.div`
    position: relative;
    border: 1px solid rgba(0,0,0,0.06);
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15),0 0 0 1px rgba(34,36,38,.15);
    padding: 0 0.5rem;
    margin: 2rem 0;
    overflow: hidden;
    background: ${props => props.theme.filterBox.bgColor};
    color: ${props => props.theme.textColor};
`;
import styled from 'styled-components';

export const ToolsBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    >p{
        padding-top: 1rem;
    }
`;

export const List = styled.div`
    padding: 0 1rem;
    border: 1px solid rgba(0,0,0,0.06);
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15),0 0 0 1px rgba(34,36,38,.15);
    background: ${props => props.theme.resultListBgColor};
    color: ${props => props.theme.textColor};
    margin: 0;
`;

export const ListContent = styled.div`
    background: ${props => props.theme.resultListBgColor};
    color: ${props => props.theme.textColor};
`;
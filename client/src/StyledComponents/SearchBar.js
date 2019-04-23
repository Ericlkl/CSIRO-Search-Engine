import styled from 'styled-components';

export const Wrapper = styled.section` 
    text-align: center; 
`;

export const SearchForm = styled.form`
    background-color: ${props=> props.theme.navbarBgColor};
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0 8px 6px -6px black;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 1rem;
`;

export const LogoSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 20%;
`;

export const SearchBarLogo = styled.img`
    width: 4rem;
    height: 100%;
    margin: 0 1.5rem;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    padding-bottom: 1rem;
`;

export const SearchFieldContainer = styled.div`
    display: flex;
    position: relative;
    flex-basis: 70%;
    flex-direction: column;
`;

export const SearchField = styled.input`
    width: 70%;
    height: 2.75rem;
    border-radius: 5px;
    padding-left: .5rem;
`;
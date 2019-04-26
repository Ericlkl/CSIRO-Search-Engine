import styled from 'styled-components';

export const Navbar = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 0;
    margin-bottom: 1rem;
    background-color: rgb(53, 189, 178);
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0 8px 6px -6px black;
    color: white;
    position: sticky;
    top:0;

    >a{
        color: white;
    }
    i{
        font-size: 2.5rem;
        margin-left: 1.3rem;
    }
`;
import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 1.5rem;
    margin: 2.5rem 1rem;

    @media (min-width: 850px){
        margin: 2.5rem 8rem;
        grid-template-columns: 25% 75%;
    }

`;
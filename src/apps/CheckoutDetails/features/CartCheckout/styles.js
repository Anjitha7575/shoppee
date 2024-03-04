import styled from 'styled-components';

export const M1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    @media only screen and (max-width: 1024px){
        flex-wrap: wrap;
    }
`;

export const C1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export const VLine = styled.div`
    height: 100vh;
    border-left: 1px dashed #dcdcdc;
    @media only screen and (max-width: 1024px){
        display: none;
    }
`
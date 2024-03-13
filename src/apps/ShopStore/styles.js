import styled from 'styled-components';

var PADDING_VAL = 50;

export const Head = styled.header`
    width: calc(100% - ${2 * PADDING_VAL}px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 ${PADDING_VAL}px;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
    background-color: ${props => props.theme.palette.white};
    position: sticky;
    top: 0;
    z-index: 100;
`;

export const AppDv = styled.div`
    width: 50px;
    height: 50px;
    img{
        max-width: 100%;
        max-height: 100%;
    }
`

export const M1 = styled.main`
    margin: 40px auto;
    width: fit-content;
`
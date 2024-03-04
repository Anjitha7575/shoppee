import styled from 'styled-components';
var PADDING_VAL = 175;


export const M1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const C1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 40px;
    @media only screen and (max-width: 768px){
        margin-top: 50px;
    }
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    position: fixed;
    top: 0;
    z-index: 100;
    height: 80px;
    width: calc(100% - ${2 * PADDING_VAL}px);
    @media only screen and (max-width: 768px){
        width: 100%;
        top: 78px;
        background: #FFF;
        justify-content: center;
    }
    .cartbadge{
        position: fixed;
        top: 10px;
        right: 200px;
    }
`;

export const T2 = styled.div`
    position: relative;
    .searchP{
        position: absolute;
        top: 1px;
        right: 1px;
        height: calc(100% - 2px);
        background: #f5f6fa;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;
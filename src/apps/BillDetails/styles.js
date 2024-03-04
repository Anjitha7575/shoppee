import styled from 'styled-components';

export const M1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid #dcdcdc;
`;

export const H1 = styled.h1`
   margin: 20px 0;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    font-size: 15px;
    margin: 10px 0;
    .green{
        color: #49b149;
    }
    &.final{
        border-top: 1px solid #dcdcdc;
        padding-top: 20px;
    }
`;
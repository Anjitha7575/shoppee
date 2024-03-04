import styled from 'styled-components';

export const M1 = styled.div`
  width: 100%;
  height: 100%;
`;

export const D1 = styled.div`
  display : flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-around;
    align-items: flex-start;
    .subtitle{
        font-size: 30px;
    color: black;
    font-weight: lighter;
    background: #f1f2fa;
    text-align: center;
    }
`;

export const S1 = styled.div`
width: 50%;
  img{
    max-width: 100%;
  }
`;


export const H1 = styled.h1`
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

export const S2 = styled.div`
    .msg1{
        font-size: 30px;
        margin: 10px 0;
        color: #5b71d7;
        font-weight: 400;
    }
    .msg2{
        font-size: 18px;
        margin: 10px 0;
        color: #5b71d7;
        font-weight: 200;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px 0px;
    .err{
        text-align: left;
        display: inline-block;
        color: #f57575;
        font-size: 12px;
        margin: 5px 0;
    }

`;
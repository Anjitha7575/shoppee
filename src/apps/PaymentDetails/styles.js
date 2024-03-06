import styled from 'styled-components';

export const M1 = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 1024px){
        margin-top: 50px;
    }
`;

export const D1 = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid #dcdcdc;
    .payment-selection{
        .MuiTypography-root{
        background: #f7eff7cc;
        padding: 0 10px;
        border-radius: 20px;
        width: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
    }
`;

export const R1 = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  .txt{
    color: darkslategray;
    font-family: "Poppins", sans-serif;
    margin: 0 20px;
  }
  .icon{
    color: cadetblue;
    font-size: 20px;
  }
`;

export const VLine = styled.div`
    height: 100vh;
    border-left: 1px dashed #dcdcdc;
    margin: 0 50px;
    @media only screen and (max-width: 1024px){
        height: 20px;
    }
`;

export const D2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .main-title{
        font-weight: bold;
        font-size: 13px;
        margin: 10px 0;
    }
`;

export const PaymentErr = styled.div`
    border: 1px dashed #ae4c4b;
    background: #f2dedf;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 10px;
    color: #ae4c4b;
    font-size: 13px;
    font-weight: bold;
`;
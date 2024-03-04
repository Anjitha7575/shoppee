import styled from 'styled-components';

export const M1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    margin: auto;
    position: relative;
    width: 560px;
    .custom-backbtn{
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .MuiFormControlLabel-label{
        font-size: 13px;
    }
    @media only screen and (max-width: 768px){
        width: auto;
    }
    .address-selection {
        & .MuiFormControlLabel-root{
            margin: 0;
            position: relative;
            .MuiRadio-root{
                position: absolute;
            }
    }
}
    
`;

export const C1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #dcdcdc;
    width: 500px;
    font-size: 13px;
    @media only screen and (max-width: 1024px){
        width: 300px;
    }
`;

export const Txt = styled.div`
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;

export const FormSectionTitle = styled.div`
    padding: 5px 0 0 0;
    font-size: 12px;
    font-weight: 700;
    color: #282c3f;
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

export const CurrAddr = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    margin: auto;
    margin-left: 0;
    font-size: 13px;
    width: 80%;
    .r1{
        display: flex;
        gap: 10px;
    }
    .r2{
        overflow: hidden;
        width: 80%;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .t1{
        font-weight: bold;
        max-width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;
export const CC1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebecf680;
    padding: 20px;
    border-radius: 20px;
    border: 1px dashed #848ee8;
    margin: 0 auto 10px auto;
    width: 500px;
    @media only screen and (max-width: 768px){
        width: auto;
    }
`;

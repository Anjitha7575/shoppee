import styled  from 'styled-components';

export const Card = styled.div`
    
    width: 100%;
    position: relative;
    background: #dcdcdc3b;
    border-radius: 20px;
    padding: 0 20px;
    max-width: 500px;
    @media only screen and (max-width: 1024px){ 
        max-width: 300px;
    }
`;

export const Row =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0;
    .MuiStack-root{
        align-items: center;
        .MuiButton-root{
            min-width: unset;
        padding: 5px;
        font-size: 13px;
        }
    }
`;

export const ImgDv = styled.div`
    border-radius: 20px;
    width: 100px;
    height: 100px;
    img{
        max-width: 100%;
        max-height: 100%;
        height: 100px;
        border-radius: 20px;
    }
`;

export const H3 = styled.h3`
    font-size: 13px;
    font-weight: 700;
    color: #282c3f;
    margin-bottom: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
`;

export const H4 = styled.h4`
    color: #535766;
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    display: block;
    text-align: left;
`;

export const Price = styled.h3`
    font-size: 13px;
    font-weight: 700;
    color: #282c3f;
    margin: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    .actualprice{
        text-decoration: line-through;
        font-size: 12px;
        color: #778899cf;
        display: inline-block;
        margin: 0 5px;
    }
    .discount{
        color: darkorange;
        font-size: 10px;
    }
`;

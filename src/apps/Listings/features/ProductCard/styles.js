import styled, { css } from 'styled-components';

export const Card = styled.div`
    width: 210px;
    position: relative;
    background: #f9f9f9;
    border-radius: 20px;
    padding: 20px;
    @media only screen and (max-width: 500px){
        width: calc(50% - 45px);
    }
`;

export const ImgDv = styled.div`
    border-radius: 20px;
    width: 210px;
    height: 200px;
    img{
        max-width: 100%;
        max-height: 100%;
        height: 200px;
        border-radius: 20px;
    }
    @media only screen and (max-width: 500px){
        width: fit-content;
        height: 100px;
        img{
            height: 100px; 
        }
    }
`;

export const H3 = styled.h3`
    font-size: 15px;
    font-weight: 700;
    color: ${props => props.theme.palette.fontColor.main};
    margin-bottom: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
`;

export const H4 = styled.h4`
    color: #535766;
    font-size: 14px;
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
    font-size: 15px;
    font-weight: 700;
    color: ${props => props.theme.palette.fontColor.main};
    margin: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    @media only screen and (max-width: 500px){
        word-break: break-word;
        white-space: unset;
    }
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


export const Rating = styled.div`
    z-index: 1;
    position: absolute;
    right: 10px;
    top: 200px;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    padding: 5px;
    background-color: ${props => props.theme.palette.white};
    @media only screen and (max-width: 500px){
        top: 100px;
    }
    span{
        margin: 0 5px;
        ${(props) => {
        switch (props.ratetype) {
            case "green":
                return css`
                    color: green;
        `;
            case "yellow":
                return css`
                    color: yellow;
        `;
            case "orange":
                return css`
                    color: orange;
        `;
            case "red":
                return css`
                    color: red;
        `;
            default:
                return css`
                color: grey;
        `;
        }
    }}
    }
`;



    
export const Info = styled.div`
    background: ${props => props.theme.palette.primary.main};
    margin: 5px 0;
    font-size: 12px;
    border-radius: 20px;
    padding: 5px;
    color: ${props => props.theme.palette.white};
`;
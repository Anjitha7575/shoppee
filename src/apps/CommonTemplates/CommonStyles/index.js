import styled from 'styled-components';
import Button from '@mui/material/Button';

export const M1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon{
        font-size: 22px;
        height: 32px;
    }
    .txt{
        font-size: 13px;
        text-transform: capitalize;
    }
`;

export const M2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #dcdcdc;
    border-radius: 20px;
    max-width: 500px;
    margin: 20px auto;
    padding: 40px;
    .bag-icon{
        font-size: 120px;
        color: ${props => props.theme.palette.primary.main};
        transform: rotate(10deg);
        margin: 30px;
    }
    .bag-txt{
        font-size: 14px;
        text-transform: capitalize;
    }
`;


export const TxtButtonWithIcon = ({ txt, icon }) => {
    return <Button sx={{
        p: 0,
        minWidth: "unset",
    }}>
        <M1>
            <div className='icon'><i className={icon}></i></div>
            <div className='txt'>{txt}</div>
        </M1>
    </Button>

}

export const EmptyCartMsg = () => {
    return (<M2>
        <div className='bag-icon'>
            <i className="fa-solid fa-bag-shopping"></i></div>
        <div className='bag-txt'>Nothing in your bag. Let's add your favorites!</div>
    </M2>)
}

export const U1 = styled.div`
    font-size: 14px;
    font-weight: bold;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor:pointer;
    padding: 10px 0;
    border-radius: 20px;
    background: #ebecf680;
    &:hover{
        background: #ebecf680;
    }
    span{
        font-size: 20px;
    }
`

export const Top1 = styled.div`
    /* display: flex;
    margin-bottom: 10px; */
    display: flex;
    margin-bottom: 10px;
    position: fixed;
    top: 90px;
    z-index: 100;
    left: 50px;
    span{
        margin: 0 10px;
    }
    button{
        font-size: 12px;
    }
`

export const UserName = ({ name, func }) => {
    return (<U1 onClick={func}>
        {name} <span><i className="fa-regular fa-face-smile-beam"></i></span>
    </U1>)
}

export const BackBtn = ({ txt, func }) => {
    return (<Top1>
        <Button size='small' variant='outlined' onClick={func}><span><i className="fa-solid fa-arrow-left"></i></span>{txt}</Button>
    </Top1>)
}

export const ErrDv = styled.div`
    font-size: 13px;
    color: red;
`
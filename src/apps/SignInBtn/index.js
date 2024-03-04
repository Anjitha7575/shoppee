import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { persistor } from '../../configStore';
import { Link, useNavigate } from 'react-router-dom';
import { UserName } from '../CommonTemplates/CommonStyles';

const SignInBtn = (props) => {
    const { userProfileDetails } = props;
    const { status, data } = userProfileDetails;
    const loggedIn = status === "success" && data && data?.uid;
    let userDetails = loggedIn ? data[data?.uid] : {};
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const signOutFunc = () => {
        persistor.purge();
        navigate(0);
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            {loggedIn ? <UserName func={handleClick} name={userDetails?.displayName} /> :
                <Link to="/login">
                    <Button variant="contained">Sign In</Button>
                </Link>
            }
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Button variant="contained" onClick={signOutFunc}>Sign Out</Button>
            </Popover>
        </>
    )
}

const mapStateToProps = (state) => ({
    userProfileDetails: state.userProfileModel.userProfileDetails,
})

export default connect(mapStateToProps, {})(SignInBtn);
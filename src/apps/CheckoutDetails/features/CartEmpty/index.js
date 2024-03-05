import React from 'react';
import { connect } from 'react-redux';
import { EmptyCartMsg } from '../../../CommonTemplates/CommonStyles';
import Button from '@mui/material/Button';


const CartEmpty = (props) => {
    return (
        <>
            <EmptyCartMsg />
            <Button sx={{display:"flex", margin:"auto"}} variant="outlined" onClick={props.goToNextStage}>Add Items To Cart</Button>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextStage: () => dispatch({ type: "DECREMENT_USR_STAGE" })
    }
};

export default connect(null, mapDispatchToProps)(React.memo(CartEmpty));
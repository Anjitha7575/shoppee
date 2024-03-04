import React from 'react';
import Dialog from '@mui/material/Dialog';
import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    custom_dialog: {
        '& .MuiPaper-root':{
            width: '700px',
            maxWidth: '700px',
            '@media only screen and (max-width: 768px)':{
                width: 'auto',
                maxWidth: 'unset',
            }
        }
    },
}))

const SimpleDialog = (props) => {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };
    const classes = useStyles();

    return (
        <Dialog onClose={handleClose} open={open} className={classes.custom_dialog}>
            {props.children}
        </Dialog>
    );
}

export default SimpleDialog;
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import SimpleDialog from './templates/Dialog';
import { AddrsVals } from './templates/AddrsVals';
import { NewAddressForm } from './templates/NewAddressForm';
import { M1 } from './styles';
import { connect } from 'react-redux';
import AddressBox from './templates/AddressBox';
import { updateAddressList } from '../../actions';


function AddressInfo(props) {
    const { userProfileDetails, addNewAddressStore, deliveryAddress } = props;
    const { data: userProfileDate = {} } = userProfileDetails;
    const uid = userProfileDate?.uid;
    const { addrList: userAddressData = {} } = addNewAddressStore;
    let addressList = [];
    if (Array.isArray(userAddressData)) {
        addressList = userAddressData;
    } else if (userAddressData) {
        addressList = Object.values(userAddressData || {}) || [];
    }

    const addressNewid = addressList.length;
    const [open, setOpen] = React.useState(false);
    const [newAddressFormShow, setNewAddressFormShow] = React.useState(false);

    const handleClickOpen = () => {
        setNewAddressFormShow(false);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addNewAddressApiFunc = (payload) => {
        props.updateAddressList(uid, payload, addressNewid)
    }

    const addNewAddressAndOpenCombined = () => {
        handleClickOpen();
        setNewAddressFormShow(true);
    }

    const addressChangeAndCloseCombined = (item) => {
        props.setDeliveryAddress(item);
        setOpen(false);
    }

    return (
        <>

            <>{(addressList.length > 0) ? <AddressBox obj={deliveryAddress || {}}>
                <Button variant="outlined" size='small' onClick={handleClickOpen}>
                    Change Address
                </Button>
            </AddressBox> :
                <Button sx={{ width: "300px", marginBottom: '10px' }} size="large"
                    variant="outlined" onClick={() => addNewAddressAndOpenCombined()}>
                    <i className="fa-solid fa-plus"></i>&nbsp;
                    Add New Address
                </Button>
            }</>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            >
                <M1>
                    {newAddressFormShow ? <>
                        {(addressList.length > 0) && <Button className='custom-backbtn' variant="outlined" onClick={() => setNewAddressFormShow(false)}>
                            <i className="fa-solid fa-arrow-left-long"></i>
                        </Button>}
                    </> :
                        <Button sx={{ width: "300px" }} size="large"
                            variant="outlined" onClick={() => setNewAddressFormShow(true)}>
                            <i className="fa-solid fa-plus"></i>&nbsp;
                            Add New Address
                        </Button>
                    }
                    {newAddressFormShow ? <NewAddressForm addNewAddressApiFunc={addNewAddressApiFunc} handleClose={handleClose} /> :
                        <>{(addressList.length > 0) && <RadioGroup
                            className='address-selection'
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={addressList[0].id || ""}
                            name="radio-buttons-group"
                        >
                            {(addressList || []).map((item, index) => {
                                return <FormControlLabel onClick={() => addressChangeAndCloseCombined(item)} key={item.id} labelPlacement="start" value={item.id || index} control={<Radio />}
                                    label={<AddrsVals item={item} />} />

                            })}
                        </RadioGroup>}</>}
                </M1>
            </SimpleDialog>
        </>
    )
}

const mapStateToProps = (state) => ({
    userProfileDetails: state.userProfileModel.userProfileDetails,
    addNewAddressStore: state.checkoutModel.addNewAddressStore,
    deliveryAddress: state.checkoutModel.deliveryAddress
})

const mapDispatchToProps = dispatch => {
    return {
        updateAddressList: (uid, payload, addressNewid) => dispatch(updateAddressList(uid, payload, addressNewid)),
        setDeliveryAddress: (item) => dispatch({ type: "GET_DELIVERY_ADDRESS", payload: item })

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AddressInfo));
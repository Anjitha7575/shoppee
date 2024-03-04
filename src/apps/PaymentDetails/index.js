import React, { useState } from 'react';
import BillDetails from '../BillDetails';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { PaymentOptions } from '../../constants';
import { doPayment } from './actions';
import { connect } from 'react-redux';
import PaymentSuccess from './templates/PaymentSuccess';
import { BackBtn } from '../CommonTemplates/CommonStyles';
import { D1, M1, R1, VLine, D2, PaymentErr } from './styles';

const PaymentDetails = (props) => {
    const { productsCartItems, userProfileDetails, paymentDetails, deliveryAddress } = props;
    const { billDetails } = productsCartItems;
    const { data } = userProfileDetails;
    let userDetails = data ? data[data?.uid] : {};
    const { status: paymentStatus = "", data : paymentApiData } = paymentDetails;
    const [paymentMode, setPaymentMode] = useState("1001_111_cod");
    let BackBtntxt = "Go Back";
    let BackFunc = props.goToPrevpage;
    if (paymentStatus === "success") {
        BackBtntxt = "Do More Shopping";
        BackFunc = props.goToListingpage;
    }

    const showOptions = (obj) => {
        return (<R1 key={obj.id}>
            <div className='icon'><i className={obj.iconCls}></i></div>
            <div className='txt'>{obj.title}</div>
        </R1>)
    }

    const paymentFunc = () => {
        let payload = {
            paymentMode: paymentMode,
            paymentAmount: billDetails?.totalPrice || 0,
            userDetails: {
                emailId: userDetails?.emailId,
                phoneNumber: userDetails?.phoneNumber || deliveryAddress.mobile,
                name: userDetails?.displayName || deliveryAddress.name,
                deliveryAddress: deliveryAddress
            }
        }
        props.doPayment(payload);
    }

    return (
        <>
            <BackBtn txt={BackBtntxt} func={BackFunc} />
            {paymentStatus === "error" && <PaymentErr>{paymentApiData}</PaymentErr>}
            {paymentStatus === "success" ?
                <PaymentSuccess /> :
                <M1>
                    <D1>
                        <RadioGroup
                            className='payment-selection'
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="1001_111_cod"
                            name="radio-buttons-group"
                        >
                            {(Object.entries(PaymentOptions || {})).map(([key, value]) => {
                                const pOptions = value.options;
                                return (<D2 key={value.id} >
                                    <div className='main-title'>{value.title}</div>
                                    <>{pOptions.map((item) => {
                                        return (<FormControlLabel onClick={() => setPaymentMode(item.id)} key={item.id} labelPlacement="start" value={item.id} control={<Radio />}
                                            label={<>{showOptions(item)}</>} />)
                                    })}</>
                                </D2>)
                            })}
                        </RadioGroup>
                    </D1>
                    <VLine />
                    <BillDetails billDetails={billDetails} paymentStage={true} paymentFunc={paymentFunc} />
                </M1>}
        </>
    )
}

const mapStateToProps = (state) => ({
    productsCartItems: state.billingModel.productsCartItems,
    userProfileDetails: state.userProfileModel.userProfileDetails,
    paymentDetails: state.paymentModel.paymentDetails,
    deliveryAddress: state.checkoutModel.deliveryAddress
})

const mapDispatchToProps = dispatch => {
    return {
        doPayment: (payload) => dispatch(doPayment(payload)),
        goToListingpage: () => dispatch({ type: "RESET_STEP" }),
        goToPrevpage: () => dispatch({ type: "DECREMENT_USR_STAGE" })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PaymentDetails));
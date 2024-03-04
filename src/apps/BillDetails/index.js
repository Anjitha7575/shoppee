import React from 'react';
import { getIntlCurrency } from '../../constants'
import { M1, H1, Row } from './styles';
import { Button } from '@mui/material';
import { connect } from 'react-redux';


function BillDetails(props) {
    const { billDetails = {}, paymentStage = false, paymentFunc } = props;
    const { totalPriceWithoutDiscount, totalPrice, totalDiscount } = billDetails;
    const discountMrp = totalPriceWithoutDiscount - totalPrice;
    let btnTxt = "Continue";
    let btnAction = props.goToNextStage;
    if (paymentStage) {
        btnTxt = "Make Payment";
        btnAction = paymentFunc;
    }
    return (
        <M1>
            <H1>Price Details</H1>
            <div>
                <Row>
                    <div>Total MRP</div>
                    <div> {getIntlCurrency(totalPriceWithoutDiscount)}  </div>
                </Row>
                <Row>
                    <div>Discount on MRP:</div>
                    <div className='green'> -{getIntlCurrency(discountMrp)}  </div>
                </Row>
                <Row>
                    <div>Discount Got </div>
                    <div> {totalDiscount}%</div>
                </Row>

                <Row className='final'>
                    <div>Total Amount</div>
                    <div> {getIntlCurrency(totalPrice)} </div>
                </Row>
            </div>
            <Button onClick={() => btnAction()} sx={{ width: "100%" }} size="large" variant="contained">
                {btnTxt}
            </Button>
        </M1>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextStage: () => dispatch({ type: "INCREMENT_USR_STAGE" })
    }
};

export default connect(null, mapDispatchToProps)(React.memo(BillDetails));
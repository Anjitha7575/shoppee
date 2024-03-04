import React from 'react'
import { M1, S1, R1, C1 } from './styles';
import { connect } from 'react-redux';

function PaymentSuccess(props) {
    const { paymentDetails } = props;
    const { data = {} } = paymentDetails;
    const { name = "", payload = {} } = data;

    const goBack =() =>{
        props.goToListingpage();
    }

    return (<>
        <M1>
            <S1 className='r1'>
                <div className='icon'><i className="fa-solid fa-circle-check"></i></div>
                <div className='m1'>Payment Success</div>
                <div className='m1'>INR {payload.paymentAmount || 0}</div>
            </S1>
            <C1 className='r1'>
                <R1>
                    <div>Reference ID</div>
                    <div>{name}</div>
                </R1>
                <R1>
                    <div>Payment Method</div>
                    <div>{payload.paymentMode}</div>
                </R1>

            </C1>
            <C1 className='r1'>
                <R1>
                    <div>Payee Name</div>
                    <div>{payload?.userDetails?.name}</div>
                </R1>
                <R1>
                    <div>Payee EmailId</div>
                    <div>{payload?.userDetails?.emailId}</div>
                </R1>
                <R1>
                    <div>Payee Phone Number</div>
                    <div>{payload?.userDetails?.phoneNumber}</div>
                </R1>
            </C1>

        </M1>
    </>)
}

const mapStateToProps = (state) => ({
    paymentDetails: state.paymentModel.paymentDetails
})
const mapDispatchToProps = dispatch => {
    return {
        goToListingpage: () => dispatch({type : "RESET_STEP"})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PaymentSuccess));
import React from 'react';
import { connect } from 'react-redux';
import Listings from '../Listings';
import PaymentDetails from '../PaymentDetails';
import CheckoutDetails from '../CheckoutDetails';

const Home = (props) => {
    const { userShoppingStage } = props;
    const { activeStep } = userShoppingStage;

    return (
        <>
            {activeStep === 1 ? <Listings /> :
                activeStep === 2 ? <CheckoutDetails /> :
                    activeStep === 3 ? <PaymentDetails />
                        : null
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    userShoppingStage: state.homeModel.userShoppingStage,
})

export default connect(mapStateToProps, {})(Home);
import React from 'react';
import { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
// import Listings from '../Listings';
// import PaymentDetails from '../PaymentDetails';
// import CheckoutDetails from '../CheckoutDetails';

const Listings = lazy(() => import(/* webpackChunkName: 'Listings' */ '../Listings'));
const PaymentDetails = lazy(() => import(/* webpackChunkName: 'PaymentDetails' */ '../PaymentDetails'));
const CheckoutDetails = lazy(() => import(/* webpackChunkName: 'CheckoutDetails' */ '../CheckoutDetails'));

const Home = (props) => {
    const { userShoppingStage } = props;
    const { activeStep } = userShoppingStage;

    return (<div className='home-page' data-activestep={activeStep}>
        <Suspense fallback={<div>Loading...</div>}>
            <>
                {activeStep === 1 ? <Listings /> :
                    activeStep === 2 ? <CheckoutDetails /> :
                        activeStep === 3 ? <PaymentDetails />
                            : null
                }
            </>
        </Suspense>
    </div>)
}

const mapStateToProps = (state) => ({
    userShoppingStage: state.homeModel.userShoppingStage,
})

export default connect(mapStateToProps, {})(Home);
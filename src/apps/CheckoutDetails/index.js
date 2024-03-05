import React from 'react';
import { connect } from 'react-redux';

import CartEmpty from './features/CartEmpty';
import CartCheckout from './features/CartCheckout';
import { BackBtn } from '../CommonTemplates/CommonStyles';

const CheckoutDetails = (props) => {
    const { productsCartItems } = props;
    const { cartItems = [] } = productsCartItems;
    const noItems = cartItems.length || 0;

    const goBack = () => {
        props.goToListingpage();
    }

    return (
        <>
            {noItems > 0 ? <>
                <BackBtn txt="Back" func={goBack} />
                <CartCheckout />
            </> :
                <CartEmpty />}
        </>
    )
}

const mapStateToProps = (state) => ({
    productsCartItems: state.billingModel.productsCartItems,
})
const mapDispatchToProps = dispatch => {
    return {
        goToListingpage: () => dispatch({ type: "RESET_STEP" })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CheckoutDetails));
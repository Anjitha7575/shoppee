import { combineReducers } from 'redux';
import productsModel from './apps/Listings/reducer';
import billingModel from './apps/BillDetails/reducer';
import homeModel from './apps/Home/reducer';
import userProfileModel from './apps/Login/reducer';
import paymentModel from './apps/PaymentDetails/reducer';
import checkoutModel from './apps/CheckoutDetails/reducer';

export default combineReducers({
    productsModel,
    billingModel,
    homeModel,
    userProfileModel,
    checkoutModel,
    paymentModel
})
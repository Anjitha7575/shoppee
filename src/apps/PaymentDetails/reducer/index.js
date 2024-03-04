import { combineReducers } from 'redux';

const paymentDetails = (state = {}, action) => {
    switch (action.type) {
        case "PAYMENT_API_RESP":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    paymentDetails,
})
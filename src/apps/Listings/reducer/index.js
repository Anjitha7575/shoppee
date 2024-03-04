import { combineReducers } from 'redux';

const products = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_PRODUCT_LIST":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}


export default combineReducers({
    products
})
import { combineReducers } from 'redux';

const initialState = {
    addrList: [],
}
const addNewAddress_API_Resp = (state = {}, action) => {
    switch (action.type) {
        case "PUT_NEW_ADDRESS_API":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const addNewAddressStore = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USER_ADDRESS_LIST":
            return {
                ...state,
                addrList: [...state.addrList, ...action.payload] || []
            };
        default:
            return state;
    }
}

const deliveryAddress = (state = {}, action) => {
    switch (action.type) {
        case "GET_DELIVERY_ADDRESS":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    addNewAddressStore,
    deliveryAddress,
    addNewAddress_API_Resp
})
import { combineReducers } from 'redux';

const userProfileDetails = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_USER_PROFILE":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}


export default combineReducers({
    userProfileDetails
})
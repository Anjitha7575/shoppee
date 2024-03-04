import { combineReducers } from 'redux';

const initialState = {
    activeStep: 1,
}

const userShoppingStage = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_USR_STAGE":
            return { activeStep: state.activeStep + 1 };
        case "DECREMENT_USR_STAGE":
            return { activeStep: state.activeStep - 1 };
        case "RESET_STEP":
            return { activeStep: initialState.activeStep };
        default:
            return state;
    }
}

export default combineReducers({
    userShoppingStage,
})

export const apiResponseAction_forPUT = (status, data) => ({
    type: "PUT_NEW_ADDRESS_API",
    payload: { 'status': status, 'data': data }
});

export const globalAddressList = (data) => ({
    type: "UPDATE_USER_ADDRESS_LIST",
    payload: [data]
});

export const setDeliveryAddress = (data) => ({
    type: "GET_DELIVERY_ADDRESS",
    payload: data
});

export function updateAddressList(uid, payload, addressNewid) {
    return (dispatch) => {
        dispatch(apiResponseAction_forPUT("loading"));
        let options = {
            method: 'put',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(payload)
        };
        fetch(`https://anjiee-default-rtdb.firebaseio.com/users/${uid}/address/${addressNewid}/.json?`, options)
            .then((r1) => r1.json())
            .then((r2) => {
                dispatch(apiResponseAction_forPUT("success", r2));
                dispatch(globalAddressList(payload));
                dispatch(setDeliveryAddress(payload));
            }).catch((err) => {
                dispatch(apiResponseAction_forPUT("error", err));
            })
    }
}

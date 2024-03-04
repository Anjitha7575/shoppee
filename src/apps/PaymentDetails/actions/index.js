

export const doPayAction = (status, data) => ({
    type: "PAYMENT_API_RESP",
    payload: { 'status': status, 'data': data }
});

export const resetCartAction = (data) => ({
    type: "RESET_CART_ITEMS",
    payload: data
});

export function doPayment(payload) {
    return (dispatch) => {
        dispatch(doPayAction("loading"));
        let options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(payload)
        };
        fetch(`https://anjiee-default-rtdb.firebaseio.com/payment_list.json`, options).then((r1) => r1.json())
            .then((r2) => {
                r2["payload"] = payload;
                dispatch(doPayAction("success", r2));
                dispatch(resetCartAction({}));
            }).catch((err) => {
                let errMsg = err?.message || "Something went wrong! Please try again."
                dispatch(doPayAction("error", errMsg));
            })
    }
}

export const fireBaseApiKey = "AIzaSyD4hNST4PhtWJhqyOUcjSYHPAYKwnxKRx4";

export const userLoginAction = (status, data) => ({
    type: "UPDATE_USER_PROFILE",
    payload: { 'status': status, 'data': data }
});

export const userAddressAction = (data) => ({
    type: "UPDATE_USER_ADDRESS_LIST",
    payload: data
});

export const setDeliveryAddress = (data) => ({
    type: "GET_DELIVERY_ADDRESS",
    payload: data
});

export function userLogin(email, password) {
    return (dispatch) => {
        dispatch(userLoginAction('loading'));
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + fireBaseApiKey;
        let payload = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let options = {
            method: 'post',
            contentType: 'application/json',
            body: JSON.stringify(payload)
        };
        fetch(url, options).then((r1) => r1.json())
            .then((r2) => {
                const uId = r2?.localId;
                if (uId) {
                    (async () => {
                        try {
                            let u1 = await fetch(`https://anjiee-default-rtdb.firebaseio.com/users.json?orderBy="$key"&startAt="${uId}"&endAt="${uId}\uf8ff"`);
                            let userInfo = await u1.json();
                            userInfo["uid"] = uId;
                            const user = userInfo[uId];
                            const address = user?.address || [];
                            const firstAddress = address[0] || {};
                            dispatch(userLoginAction('success', userInfo));
                            dispatch(userAddressAction(address));
                            dispatch(setDeliveryAddress(firstAddress));
                        } catch (err) {
                            dispatch(userLoginAction('error', err));
                        }
                    })()
                } else if (r2["error"]) {
                    const err1 = r2["error"];
                    const errMsg = err1.message || "Something went wrong!";
                    dispatch(userLoginAction('error', errMsg));
                }
            }).catch((err) => {
                console.log(err);
                dispatch(userLoginAction('error', err));
            })
    }
}
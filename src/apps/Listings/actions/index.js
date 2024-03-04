

export const productListAction = (status, data) => ({
    type: "FETCH_PRODUCT_LIST",
    payload: { 'status': status, 'data': data }
});

export const addItemsToCartAction = (data) => ({
    type: "ADD_ITEM_TO_CART",
    payload: data
});

export function getProducts(pageNo, filterParam) {
    return (dispatch) => {
        dispatch(productListAction("loading"));
        fetch(`https://dummyjson.com/products`
            + `${(pageNo - 1 > 0) ? `?skip=${(pageNo - 1) * 30}` : ''}`
            + `${filterParam ? `/search?q=${filterParam}` : ''}`

        ).then((r1) => r1.json())
            .then((r2) => {
                dispatch(productListAction("success", r2));
            }).catch((err) => {
                dispatch(productListAction("error", err));

            })
    }
}

export function addItemsToCartFunc(item) {
    return (dispatch) => {
        dispatch(addItemsToCartAction(item));
    }
}
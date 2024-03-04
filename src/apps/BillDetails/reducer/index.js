import { combineReducers } from 'redux';

const initialState = {
    cartItems: [],
    cartItemsMapBasedOnId: {},
    billDetails: {
        totalPrice: 0,
        totalPriceWithoutDiscount: 0,
        totalDiscount: 0
    }
}

function addToMapCart(item, obj) {
    if (obj[item.id]) {
        obj[item.id] = {
            count: obj[item.id]["count"] + 1,
            details: obj[item.id]["details"]
        }
    } else {
        obj[item.id] = {
            count: 1,
            details: item
        }
    }
    return obj;
}

const removeItemsFromCartArr = (cartItems, item) => {
    let lastIndex = cartItems.findLastIndex(o => o.id === item.id);
    if (lastIndex > -1) {
        cartItems.splice(lastIndex, 1);
    }
    return cartItems
}

const removeItemsCountInCartObj = (cartObj, item = {}) => {
    let obj = cartObj[item.id];
    if (obj && obj.details && obj.details.id) {
        obj["count"] -= 1;
        if (obj["count"] <= 0) {
            delete cartObj[item.id];
        }
    }
    return cartObj;
}

const filterOutArr = (cartItems, item) => {
    return cartItems.filter(obj => obj.id !== item.id);
}

const filterOutAllObjs = (cartObj, item = {}) => {
    let obj = cartObj[item.id];
    if (obj && obj.details && obj.details.id) {
        delete cartObj[item.id];
    }
    return cartObj;
}

function findDiscountedVal(price = 0, discount = 0) {
    const discountAmount = price * (discount / 100);
    const newPrice = price - discountAmount;
    return newPrice;
}

function findTotalPrice(obj) {
    let discountedPriceSum = 0;
    let actualPriceSum = 0;
    let totalDiscountGot = 0;
    for (let [key, value] of Object.entries(obj)) {
        const { count, details } = value;
        ///////////////////////////
        let actualPossiblePrice = (count || 0) * Math.floor(details.price * 83);
        actualPriceSum += actualPossiblePrice; ///<------

        ///////// Discounted ////
        let discountPrice = findDiscountedVal(details.price, details.discountPercentage);
        let newPrice = (count || 0) * Math.floor(discountPrice * 83);
        discountedPriceSum += newPrice; ///<------

        /////////////////////////////
    }
    totalDiscountGot = Number(((actualPriceSum - discountedPriceSum) / actualPriceSum) * 100).toFixed(2);
    return {
        totalPrice: discountedPriceSum,
        totalPriceWithoutDiscount: actualPriceSum,
        totalDiscount: totalDiscountGot
    }
}

const productsCartItems = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload] || [],
                cartItemsMapBasedOnId: addToMapCart(action.payload, state.cartItemsMapBasedOnId),
                billDetails: findTotalPrice(state.cartItemsMapBasedOnId)
            };
        case "RESET_CART_ITEMS":
            return {
                ...state,
                cartItems: [],
                cartItemsMapBasedOnId: {},
                billDetails: null
            };
        case "MINUS_ITEM_FRM_CART":
            return {
                ...state,
                cartItems: removeItemsFromCartArr(state.cartItems, action.payload) || [],
                cartItemsMapBasedOnId: removeItemsCountInCartObj(state.cartItemsMapBasedOnId, action.payload),
                billDetails: findTotalPrice(state.cartItemsMapBasedOnId)
            };
        case "DELETE_ITEM_FRM_CART":
            return {
                ...state,
                cartItems: filterOutArr(state.cartItems, action.payload) || [],
                cartItemsMapBasedOnId: filterOutAllObjs(state.cartItemsMapBasedOnId, action.payload),
                billDetails: findTotalPrice(state.cartItemsMapBasedOnId)
            };
        default:
            return state;
    }
}

export default combineReducers({
    productsCartItems
})
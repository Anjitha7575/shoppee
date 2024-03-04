
import {
    required, mobileRegex, nameRegex, homeaddress,
    pincode, emailRegex, composeValidators
} from '../validations';

export const findRatingClr = (ratingVal) => {
    if (ratingVal >= 4) {
        return "green";
    } else if (ratingVal >= 3 && ratingVal < 4) {
        return "yellow";
    } else if (ratingVal >= 2 && ratingVal < 3) {
        return "orange";
    } else {
        return "red";
    }
}


export function getIntlCurrency(val) {
    return new Intl.NumberFormat('en-IN', { style: "currency", "currency": "INR", maximumFractionDigits: 0 }).format(val);
}

export const AppIconImgUrl = "https://firebasestorage.googleapis.com/v0/b/anjiee.appspot.com/o/shoppee-icon.png?alt=media&token=16712e18-7fc3-41ff-a3dc-dc496fcf271d"

export const getCorrectCurrencyVal = (val) => {
    let v1 = val ? val * 83 : "";
    return v1 ? getIntlCurrency(Math.floor(v1)) : "-";
}

export const getAfterDiscountPrice = (price, discount) => {
    const discountAmount = price * (discount / 100);
    const newPrice = price - discountAmount;
    const v1 = newPrice ? newPrice * 83 : "";
    return v1 ? getIntlCurrency(Math.floor(v1)) : "-";
}

export const AddNewAddressFields = {
    "contactinfo": {
        title: "Contact Details",
        fields: [
            { name: "name", inputType: "text", labeltxt: "Name", validation: composeValidators(required, nameRegex) },
            {
                name: "mobile", inputType: "number", labeltxt: "Mobile No.", validation: composeValidators(required, mobileRegex)
            }
        ]
    },
    "address": {
        title: "Address",
        fields: [
            { name: "pincode", inputType: "number", labeltxt: "Pincode", validation: composeValidators(required, pincode) },
            { name: "streetAddress", inputType: "text", labeltxt: "Address (House No, Building, Street, Area)*", validation: composeValidators(required, homeaddress) },
            { name: "locality", inputType: "text", labeltxt: "Locality/Town", validation: composeValidators(required, homeaddress) },
        ]
    },
    "addresstype": {
        title: "Save Address As",
        fields_type: "radio",
        groupName: "addressType",
        fields: [
            { name: "addressType", inputType: "radio", labeltxt: "Home", value: "HOME" },
            { name: "addressType", inputType: "radio", labeltxt: "Office", value: "OFFICE" }
        ]
    }
}

export const PaymentOptions = {
    "0": {
        title: "Cash On Delivery",
        id: "1001",
        options: [
            {
                title: "Pay using any mode",
                id: "1001_111_cod",
                iconCls: "fa-solid fa-money-check-dollar"
            }]
    },
    "1": {
        title: "UPI/Wallets",
        id: "1002",
        options: [{
            title: "Gpay",
            id: "1002_111_gpay",
            iconCls: "fa-brands fa-google-pay"
        }, {
            title: "Paypal",
            id: "1002_112_paypal",
            iconCls: "fa-brands fa-paypal"
        }, {
            title: "BHIM UPI",
            id: "1002_113_bhim",
            iconCls: "fa-solid fa-b"
        }]
    },
    "2": {
        title: "Net Banking",
        id: "1003",
        options: [{
            title: "SBI",
            id: "1003_111_sbi",
            iconCls: "fa-solid fa-s"
        }, {
            title: "HDFC",
            id: "1003_112_hdfc",
            iconCls: "fa-solid fa-h"
        }, {
            title: "ICICI",
            id: "1003_113_icici",
            iconCls: "fa-solid fa-i"
        }]
    }
}

export const LoginCreds = [
    { name: "email", "title": "Email ID", validation: composeValidators(required, emailRegex) },
    { name: "password", "title": "Password", validation: composeValidators(required) }
]

export const required = value => (value ? undefined : 'Required')
export const nameRegex = value =>
    value && !/^[ a-zA-Z\.\']+$/i.test(value) ?
        'Special characters like @,#,$ etc. are not valid for names' : undefined
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)
export const emailRegex = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
export const mobileRegex = value =>
    value && !/^[6-9]\d{9}$/i.test(value) ?
        'Invalid mobile number' : undefined
export const pincode = value =>
    value && !/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/i.test(value) ?
        'Invalid Pincode' : undefined
export const homeaddress = value =>
    value && !/^[a-zA-Z0-9#/^()_[\]{}|\\,.: -]*$/i.test(value) ?
        'Invalid Address format' : undefined
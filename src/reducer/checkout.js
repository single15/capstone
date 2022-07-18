const UPDATE_SHIPPING_INFO = 'UPDATE_SHIPPIN_INFO';
const UPDATE_SHIPPING_METHOD = 'UPDATE_SHIPPING_METHOD';
const PAYMENT_INFO = 'PAYMENT_INFO';
const EMPTY_CHECKOUT_DATA = 'EMPTY_CHECKOUT_DATA';

const initialState = {
    shippingInformation: {},
    shippingMethod: {},
    paymentInformation: {}
}

const checkout = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SHIPPING_INFO:
            return { ...state, shippingInformation: action.payload };
        case UPDATE_SHIPPING_METHOD:
            return { ...state, shippingMethod: action.payload };
        case PAYMENT_INFO:
            return { ...state, paymentInformation: action.payload };
        case EMPTY_CHECKOUT_DATA: 
            return initialState;
        default:
            return state;
    }
}


export const updateShippingInfo = data => ({
    type: UPDATE_SHIPPING_INFO,
    payload: data
})

export const updateShippingMethod = data => ({
    type: UPDATE_SHIPPING_METHOD,
    payload: data
})

export const updatePaymentInfo = data => ({
    type: PAYMENT_INFO,
    payload: data
})

export const emptyCheckoutData = () => ({
    type: EMPTY_CHECKOUT_DATA
})

export default checkout;
import { cloneDeep } from 'lodash';

const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART = 'UPDATE_CART';
const REMOVE_CART = 'REMOVE_CART';


const initialState = {
    cart: [],
    cartCount: 0
};


const addItemToCart = (state, action) => {
    let items = cloneDeep(state.cart);
    const itemInCart = items.find(item => item.id === action.payload.id);
    if (!itemInCart) {
        items = [...items, action.payload];
    } else {
        items.forEach(item => {
            if (item.id === action.payload.id) {
                item.quantity = item.quantity + action.payload.quantity;
            }
        });
    }
    return { ...state, cart: items, cartCount: items.length };
}

const removeItemFromCart = (state, action) => {
    let items =  cloneDeep(state.cart);
    items = items.filter(item => item.id !== action.payload.id);
    return { ...state, cart: items, cartCount: items.length };
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return addItemToCart(state, action);
        case REMOVE_CART:
            return removeItemFromCart(state, action);
        default:
            return state;
    }
}


export default cart;

export const addToCart = item => ({
    type: ADD_TO_CART,
    payload: item
})

export const updateCart = item => ({
    type: UPDATE_CART,
    payload: item
})

export const removeCart = item => ({
    type: REMOVE_CART,
    payload: item
})
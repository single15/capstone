import { cloneDeep } from "lodash";

const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';

const initialState = {
    list: []
};


const addItemToWishlist = (state, action) => {
    let items = cloneDeep(state.list);
    const itemInWishlist = items.find(item => item === action.payload);
    if (!itemInWishlist) {
        items = [...items, action.payload];
    } else {
        items = items.filter((item)=> item !== action.payload);
    }
    return { ...state, list: items };
  }

const wishlist = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_WISHLIST:
            return addItemToWishlist(state, action);
        default: 
        return state;
    }
}


export default wishlist;

export const addToWishList = id => ({
    type: ADD_TO_WISHLIST,
    payload: id
})

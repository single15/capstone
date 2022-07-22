import { cloneDeep } from "lodash";

const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';

const initialState = {
    list: [],
    itemsId: []
};


const addItemToWishlist = (state, action) => {
    let items = cloneDeep(state.list);
    let itemsId = cloneDeep(state.itemsId);
    const itemInWishlist = itemsId.find(item => item === action.payload.id);
    if (!itemInWishlist) {
        items = [...items, action.payload];
        itemsId = [...itemsId, action.payload.id];
    } else {
        items = items.filter((item)=> item.id !== action.payload.id);
        itemsId = itemsId.filter((id)=> id !== action.payload.id);
    }
    return { ...state, list: items, itemsId: itemsId };
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

export const addToWishList = item => ({
    type: ADD_TO_WISHLIST,
    payload: item
})

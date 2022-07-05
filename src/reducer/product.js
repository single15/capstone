const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


const initialState = {
    list: [],
    listCount: 0,
    currentPage: 1
};

const products = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_PRODUCTS:
            const list = action.payload;
            const listCount = action.payload.length;
            return {...state, list, listCount};

        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.payload};
            
        default: 
        return state;
    }
}


export default products;

export const updateProducts = list => ({
    type: UPDATE_PRODUCTS,
    payload: list
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
})
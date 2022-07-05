import { combineReducers } from "redux";
import cart from "reducer/cart";
import filterReducer from "reducer/filter";
import products from "reducer/product";
import wishlist from "reducer/wishlist";

const reducer = combineReducers({
    products,
    filterReducer,
    cart,
    wishlist
})

export default reducer;
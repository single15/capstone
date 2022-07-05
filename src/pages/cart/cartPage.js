import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "components/cart/cartItem/cartItem";
import Offers from "components/cart/offers/offersSection";
import HorizontalBar from "components/horizontalbar/horizontalbar";
import PriceSummary from "components/pricesummary/pricesummary";
import RecentlyViewed from "components/recentlyviewed/recently_viewed";
import 'pages/cart/cartpage.scss';


const CartPage = () => {
    const cartItems = useSelector(store => store.cart.cart);
    return (
        <div className="component-container cart-page-section">
            <center>
                <div className="display-l-36-">Your Shopping Bag</div>
                <HorizontalBar />
            </center>
            <div className="aem-Grid aem-Grid--12 ">
                {cartItems.length > 0 ?
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                                {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12"><Offers /></div>
                        </div>
                    </div>


                    :
                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 empty-cart">
                        <h2>Your Venia Cart is empty.</h2>
                        Check your Saved for later items below or <NavLink to="/venia">continue shopping</NavLink>.
                    </div>

                }
                {cartItems.length > 0 && <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <PriceSummary />
                </div>}
            </div>
            <div className="aem-Grid aem-Grid--12 recently-viewed-section">
                <RecentlyViewed />
            </div>
        </div>
    )
}

export default CartPage;
import React, { useState } from 'react';
import ShippingInfo from 'pages/checkout/shippingInfo/shippingInfo';
import { useSelector } from 'react-redux';
import PriceSummary from 'components/pricesummary/pricesummary';
import ShippingMethod from 'pages/checkout/shippingMethod/shippingMethod';
import PaymentInfo from 'pages/checkout/paymentInfo/paymentInfo';
import OrderItems from './orderItems/orderItems';
import Button from 'components/button/button';
import { NavLink, useNavigate } from 'react-router-dom';
import HorizontalBar from 'components/horizontalbar/horizontalbar';
import 'pages/checkout/checkoutPage.scss';

const SHIPPING_INFO = 'SHIPPING_INFO';
const SHIPPING_METHOD = 'SHIPPING_METHOD';
const PAYMENT_INFO = 'PAYMENT_INFO';

const ViewTab = ({ serialNumber, tabLabel }) => (
    <div className='checkout-tab inactive'>
        {`${serialNumber}. ${tabLabel}`}
    </div>
)

const CheckoutPage = () => {
    const [activeView, toggleView] = useState({
        [SHIPPING_INFO]: true,
        [SHIPPING_METHOD]: false,
        [PAYMENT_INFO]: false
    })
    const cartItems = useSelector(store => store.cart.cart);
    const navigate = useNavigate();

    const handleView = (view) => {
        const data = {
            ...activeView,
            [view]: true
        }
        toggleView(data);
    }

    return (
        <section className='component-container'>
            <div>
                <center>
                    <span className='display-l-36-'>
                        Checkout
                    </span>
                    <HorizontalBar />
                </center>
                <div className='aem-Grid aem-Grid--12'>
                    <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12'>
                        <h3>Guest Checkout</h3>
                        <div className='checkout-tab'>
                            <ShippingInfo clickContinue={() => handleView(SHIPPING_METHOD)} clickEditMode={() => handleView(SHIPPING_INFO)} />
                        </div>
                        {activeView[SHIPPING_METHOD] ? (
                            <div className='checkout-tab'>
                                <ShippingMethod clickContinue={() => handleView(PAYMENT_INFO)} clickEditMode={() => handleView(SHIPPING_METHOD)} />
                            </div>
                        ) : (
                            <ViewTab serialNumber={2} tabLabel="Shipping Method" />
                        )}
                        {activeView[PAYMENT_INFO] ? (
                            <div className='checkout-tab'>
                                <PaymentInfo clickEditMode={() => handleView(SHIPPING_METHOD)} />
                            </div>
                        ) : (
                            <ViewTab serialNumber={3} tabLabel="Payment Information" />
                        )}
                        {activeView[SHIPPING_METHOD] && activeView[SHIPPING_INFO] && activeView[PAYMENT_INFO] &&
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <OrderItems />
                            </div>
                        }
                    </div>


                    {cartItems.length > 0 &&
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <PriceSummary />
                        </div>
                    }

                    <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 place-order-button-section'>
                        <center>
                            <Button type="primary" width={280} onClick={() => navigate('/ordersummary')}>PLACE ORDER</Button>
                        </center>                        
                        <div>
                            By Clicking confirm order you agree to our&nbsp;&nbsp;
                            <NavLink to={'/capstone'}>Terms and Conditions</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}


export default CheckoutPage;
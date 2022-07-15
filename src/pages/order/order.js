import React from 'react';
import { useSelector } from 'react-redux';
import { CREDIT_CARD } from 'pages/checkout/paymentInfo/fields';
import OrderItems from 'pages/checkout/orderItems/orderItems';
import HorizontalBar from 'components/horizontalbar/horizontalbar';
import { ReactComponent as Instagram } from 'assets/instagram-white.svg';
import { ReactComponent as Facebook } from 'assets/facebook-white.svg';
import { ReactComponent as Twitter } from 'assets/twitter-white.svg';
import 'pages/order/order.scss';

const OrderSummary = () => {
    const checkout = useSelector(store => store.checkout)
    const { shippingInformation, shippingMethod, paymentInformation } = checkout;

    let ccNumber = [];
    if (paymentInformation.paymentType === CREDIT_CARD) {
        ccNumber = paymentInformation.creditCardNumber.split(' ');
    }

    return (
        <div className='component-container'>
            <div className='display-l-36-'>
                <center>
                    Order Successful!
                    <HorizontalBar />
                </center>
            </div>
            <h3>Order Number #orderID</h3>
            <div className='aem-Grid aem-Grid--12 order-summary-section'>
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--8'>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                            <p><b>Shipping Information</b></p>
                            <div className='aem-Grid aem-Grid--12 user-details-section'>
                                <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 user-contact-section'>
                                    <div>{shippingInformation.email}</div>
                                    <div>{shippingInformation.phoneNumber}</div>
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                                    <div>{`${shippingInformation.firstName} ${shippingInformation.lastName}`}</div>
                                    <div>{`${shippingInformation.streetAddress} ${shippingInformation.streetAddress2}`}</div>
                                    <div>{`${shippingInformation.city}, ${shippingInformation.state} ${shippingInformation.zip}`}</div>
                                    <div>{`${shippingInformation.country}`}</div>
                                </div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                            <div className='aem-Grid aem-Grid--12'>
                                <div className='aem-GridColumn aem-GridColumn--default--12'>
                                    <p><b>Shipping Method</b></p>
                                    <div className='aem-Grid aem-Grid--12 user-details-section'>
                                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                                            <div>{shippingMethod.label}</div>
                                            <div>Est. delivery in {shippingMethod.description}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--12'>
                                    <p><b>Payment Information</b></p>
                                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 user-details-section'>
                                        <div>{paymentInformation.label}</div>
                                        {paymentInformation.paymentType === CREDIT_CARD && (
                                            <div>
                                                Visa ending in {ccNumber[3]}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--hide aem-GridColumn--tablet--4 offer-banner-for-next-order'>
                    <div>
                        Give us a follow to SAVE 20% on your next order
                    </div>
                    <div className='social-icon-section'>
                        <Instagram />
                        <Facebook />
                        <Twitter />
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--12'>
                    <OrderItems />
                    <p>
                        You will also receive an email with the details and we will let you know when your order has shipped.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary;
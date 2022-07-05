import React, { useEffect, useState } from "react";
import Button from "components/button/button";
import paypal from 'assets/images/paypal-link.png';
import { ReactComponent as LockIcon } from 'assets/lock.svg'
import 'components/pricesummary/pricesummary.scss';
import { useSelector } from "react-redux";

const getPrice = (isFree, isDiscount, price) => isFree ? 'FREE' : isDiscount ? `- $ ${price?.toFixed(2)}` : `$ ${price?.toFixed(2)}`;

const  getPercentageValue = (discount, price) => {
    const discountedValue = price - (price * (discount/100));
    return discountedValue < 0 ? discountedValue : discountedValue;
 } 

const PriceSummaryItem = ({ label, price, isFree = false, isDiscount = false, isTotal = false }) => (
    <div className="aem-Grid aem-Grid--12">
        <div className="aem-GridColumn aem-GridColumn--default--8">
            {isTotal ? <b>{label}</b> : label}
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--4">
            {isTotal ? <b>{getPrice(isFree, isDiscount, price)}</b> : <>{getPrice(isFree, isDiscount, price)}</>}

        </div>
    </div>
)

const PriceSummary = () => {
    const [subTotal, setSubTotal] = useState(0);
    const [coupon, setCoupon] = useState(0);
    const [giftCard, setGiftCardValue] = useState(0);
    const [estimatedTax, setEstimatedTax] = useState(0);
    const [isFree, setIsFree] = useState(true);

    const cartItems = useSelector(store => store.cart.cart);


    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total = total + (item.price*item.quantity);
        });

        setSubTotal(total);
        setCoupon(total - getPercentageValue(20, total));
        setGiftCardValue(total > 150 ? 100 : 0);
        setEstimatedTax(total - getPercentageValue(5, total));
        setIsFree(total > 500);

    }, [cartItems]);


    const getEstimatedTotal = () => {
        const es = isFree ? 0 : 50;
        return subTotal - coupon - giftCard + estimatedTax + es;
    }

    return (
        <section className="price-summary-section">
            <div className="aem-Grid aem-Grid--12">
                <div className="section-header">Pricing Summary</div>
                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                    <PriceSummaryItem label='Subtotal' price={subTotal} />
                    <PriceSummaryItem label='Coupon' price={coupon} isDiscount={true} />
                    <PriceSummaryItem label='Gift Card' price={giftCard} isDiscount={true} />
                    <PriceSummaryItem label='Estimated tax' price={estimatedTax} />
                    <PriceSummaryItem label='Estimated shipping' isFree={isFree} price={50} />
                    <PriceSummaryItem label='Estimated Total' price={getEstimatedTotal()} isTotal={true} />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--12 button-section">
                    <Button type="primary"><LockIcon />&nbsp;&nbsp;CHECKOUT</Button>
                    <img src={paypal} alt="paypal_link" />
                </div>
            </div>
        </section>

    )
}

export default PriceSummary;
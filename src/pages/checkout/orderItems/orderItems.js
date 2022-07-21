import React from 'react';
import { useSelector } from 'react-redux';
import 'pages/checkout/orderItems/orderItems.scss';
import { CLOTHING_CATEGORIES } from 'pages/utils';

const OrderItems = () => {
    const orderItems = useSelector(store => store.checkout.orderItems);
    const itemLength = orderItems.length;
    return (
        <section className='order-items-section'>
            <b>
                {itemLength} {itemLength > 1 ? `items` : `item`} in your order
            </b>
            <div className='aem-Grid aem-Grid--12'>
                {orderItems.map((item) => (
                    <div key={item.id} className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 order-item">
                        <div className='aem-Grid aem-Grid--12'>
                            <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--4'>
                                <figure>
                                    <img src={item.image} alt={item.title} />
                                </figure>
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--8 aem-GridColumn--phone--8'>
                                <h4>{item.title}</h4>
                                {CLOTHING_CATEGORIES.includes(item.category) &&
                                    <>
                                        <div>Size: {item.size}</div>
                                        <div>Color: {item.color}</div>
                                    </>
                                }
                                <div>Quantity: {item.quantity}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}


export default OrderItems;
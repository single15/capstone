import React, { useState } from "react";
import { ReactComponent as ChevronDown } from 'assets/chevron-down.svg'
import { ReactComponent as ChevronUp } from 'assets/chevron-up.svg'
import 'components/cart/offers/offersSection.scss';

const LONG_DESC = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet mi nunc, quis commodo turpis consectetur et. Nam nec lacus et sapien elementum faucibus. Praesent in odio sit amet orci tempor ultrices quis et mi. Vestibulum sagittis urna in neque mollis, sed vehicula ex varius."

const OFFERS = () => [
    { id: 1, offerHeding: 'Estimate your Shipping', shortOfferDesc: 'Shipping to 91001', longOfferDesc: LONG_DESC, isOpen: false },
    { id: 2, offerHeding: 'Enter a Coupon Code', shortOfferDesc: '20% discount applied', longOfferDesc: LONG_DESC, isOpen: false },
    { id: 3, offerHeding: 'Apply Gift Card', shortOfferDesc: '', longOfferDesc: LONG_DESC, isOpen: false }
]

const Offers = () => {
    const [offerData, setOfferData] = useState(OFFERS);

    const toggleOfferSection = (offer) => {
        const offers = [...offerData];
        offers.forEach((o) => {
            if (o.id === offer.id) o.isOpen = !o.isOpen;
        })
        setOfferData(offers);
    }

    return (
        <section className="offers-section">
            {offerData.map((offer) => (
                <div key={offer.id} className="offer-item">
                    <div className=" aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--phone--10 aem-GridColumn--tablet--10 aem-GridColumn--default--10">
                            <div>{offer.offerHeding}</div>
                            <div className="desc">{offer.shortOfferDesc}</div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--phone--2 aem-GridColumn--tablet--2 aem-GridColumn--default--2"
                            onClick={() => toggleOfferSection(offer)}>
                            {offer.isOpen ? <ChevronUp /> : <ChevronDown />}
                        </div>
                        {offer.isOpen && <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                            <p>{offer.longOfferDesc}</p>
                        </div>}
                    </div>

                </div>
            ))}
        </section>
    )
}


export default Offers;
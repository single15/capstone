import React from "react";
import { ReactComponent as StarIcon } from 'assets/star.svg';
import { ReactComponent as FillStarIcon } from 'assets/fill-star.svg';
import 'components/product/header/productHeader.scss';


const Star = ({ rate }) => {
    const starArray = [1,2,3,4,5]
    const loop = Math.round(rate);
    return starArray.map((item, index) => index < loop ? <FillStarIcon key={item} /> : <StarIcon key={item} />);
}

const ProductHeader = ({ title, price, description, rating }) => {

    return (
        <div className="product-header-section">
            <div className="regular-heading-l-20-">
                <b>{title}</b>
            </div>
            <div className="price-tag">
                <b>${price}</b>
            </div>
            <div className="rating-section">
                <Star rate={rating?.rate} />({rating?.count})
            </div>
            <div>{description}</div>
        </div>
    )
}

export default ProductHeader;
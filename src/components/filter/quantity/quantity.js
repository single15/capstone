import React from "react";
import { ReactComponent as MinusIcon } from 'assets/minus.svg'
import { ReactComponent as PlusIcon } from 'assets/plus.svg'
import 'components/filter/quantity/quantity.scss';

const Quantity = ({ quantity, updateQuantity, showLabel, small }) => {
    
    const onChangeQuantity = (value) => {
        value = Math.round(value);
        value = value > 10 ? 10 : value;
        updateQuantity(value);
    }

    return (
        <div className={`quantity-section ${small ? 'sm' : ''}`}>
            {showLabel && <b>Quantity</b>}
            <div className="count-wrapper">
                <div className={`icon-wrapper`} onClick={() => quantity > 0 && onChangeQuantity(quantity-1)}>
                    <MinusIcon />
                </div>
                <div>
                    <input type="number" value={quantity} min="1" max="10" onChange={(e) => onChangeQuantity(e.target.value)}/>
                </div>
                <div className="icon-wrapper" onClick={() => onChangeQuantity(quantity+1)}>
                    <PlusIcon />
                </div>
            </div>

        </div>
    )
}

export default Quantity;
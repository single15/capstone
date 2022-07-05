import React from "react";
import { ReactComponent as MinusIcon } from 'assets/minus.svg'
import { ReactComponent as PlusIcon } from 'assets/plus.svg'
import 'components/filter/quantity/quantity.scss';

const Quantity = ({ quantity, updateQuantity, showLabel, small }) => {
    return (
        <div className={`quantity-section ${small ? 'sm' : ''}`}>
            {showLabel && <b>Quantity</b>}
            <div className="count-wrapper">
                <div className={`icon-wrapper`} onClick={() => quantity > 0 && updateQuantity(quantity-1)}>
                    <MinusIcon />
                </div>
                <div>
                    <input type="number" value={quantity}  onChange={(e) => updateQuantity(e.target.value)}/>
                </div>
                <div className="icon-wrapper" onClick={() => updateQuantity(quantity+1)}>
                    <PlusIcon />
                </div>
            </div>

        </div>
    )
}

export default Quantity;
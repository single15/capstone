import React, { useState } from "react";
import { ReactComponent as Chevrondown } from 'assets/chevron-down.svg';
import { ReactComponent as Chevronup } from 'assets/chevron-up.svg';
import Option from "components/dropdown/option";
import 'components/dropdown/dropdown.scss';

const Dropdown = ({ options, selectedItem,  setSelectedItem }) => {
    const [isOpen, toggleDropdown] = useState(false);
    const selectedValue = options.find((o) => o.id === selectedItem)?.value || options[0].value;
    return (
        <div className="dropdown-wrapper">
            <button className="selected-item" onClick={() =>  toggleDropdown(!isOpen)}>
                <div>Sort By {selectedValue}</div>
                <div>
                    {isOpen ? <Chevronup /> : <Chevrondown />}
                </div>
            </button>
            {isOpen && 
                <div className="option-wrapper">
                    {options.map(({ value, id }) => <Option key={id} value={value} setSelectedItem={() => {
                        toggleDropdown(false);
                        setSelectedItem(id)
                    }} />)}
                </div>
            }
        </div>

    )
}

export default Dropdown;
import React from "react";

const Option = ({ value, setSelectedItem }) => {
    return (
        <div className="option-item" onClick={setSelectedItem}>
            {value}
        </div>
    )
}

export default Option;
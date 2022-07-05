import React, { useState } from "react";
import { SIZE_FILTER } from "components/filter/utils";
import 'components/filter/sizeblock/filterSize.scss';


const Block = ({ size, onClick, selected }) => {
    return (
        <div className={`aem-GridColumn aem-GridColumn--default--2 size-block ${selected}`} 
            onClick={onClick}>
            <div>{size.smValue}</div>
        </div>
    )
}


const FilterSizeBlock = ({ selectSize }) => {
    const [selectedSize, setSize] = useState('');

    const selectItemSize = (label) => {
        selectSize(label);
        setSize(label);
    }

    return (
        <div className="filter-size-block">
            <b>Size</b>
            <div className="aem-Grid aem-Grid--12">
                {SIZE_FILTER?.map((size) => <Block  key={size.id} size={size} 
                    selected={selectedSize === size.value ? 'selected' : ''}  onClick={() => selectItemSize(size.value)} />)}
            </div>
        </div>
    )
}



export default FilterSizeBlock;
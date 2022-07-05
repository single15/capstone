import React, { useState } from "react";
import { ReactComponent as CheckIcon } from 'assets/check.svg';
import 'components/filter/colorblock/filterColorBlock.scss';

const COLOR_OPTIONS = [
    { label: 'Black', color: '#000000' },
    { label: 'Green', color: '#2D9D78' },
    { label: 'Yellow', color: '#FDBA5E' },
    { label: 'Blue', color: '#172BC4' },
    { label: 'Red', color: '#E34850' },
    { label: 'Purple', color: '#6408D3' },
    { label: 'Pink', color: '#F9009A' },
    { label: 'Orange', color: '#EB7327' }
]

const FilterColorBlock = (props) => {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');

    const selectColorFilter = (label) => {
        if (selectedColors.includes(label)) {
            let colors = selectedColors.filter(c => c !== label);
            setSelectedColors(colors)
        } else {
            setSelectedColors([...selectedColors, label])
        }
        setSelectedColor(label)
        props.selectColor && props.selectColor(label);
    }


    return (
        <div className="filter-color-block">
            <b>Color</b>
            <div className="options-section aem-Grid aem-Grid--12">
                {COLOR_OPTIONS?.map(({ label, color }) =>
                    <div key={label}
                        className="aem-GridColumn aem-GridColumn--default--3 color-option-wrapper"
                        onClick={() => selectColorFilter(label)}>
                        <div className="color-option" style={{ background: color }}></div>

                        {props.singleSelection ?
                            <div className={`check-icon ${selectedColor === label ? 'selected' : ''}`}>
                                <CheckIcon />
                            </div>
                            :
                            <div className={`check-icon ${selectedColors.includes(label) ? 'selected' : ''}`}>
                                <CheckIcon />
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}



export default FilterColorBlock;
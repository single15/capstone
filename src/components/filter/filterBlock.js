import React from "react";


const FilterBlock = ({ blockLabel, options, setFilterValue, selectedFilter = [] }) => {
    const [seeMoreToggle, setSeeMoreToggle] = React.useState(false);
    const showingOptions = seeMoreToggle ? options : options.slice(0, 5);

    return (
        <div className="filter-block">
            <b>{blockLabel}</b>
            <div className="options-section">
                {showingOptions?.map((option) =>
                    <React.Fragment key={option.id}>
                        <div className="option-checkbox">
                            <input type="checkbox" id={option.id} name={option.id} value={option.value} checked={selectedFilter?.includes(option.value)} onChange={() => setFilterValue(option.value)} />
                            <label htmlFor={option.id}>{option.value}</label>
                        </div>
                    </React.Fragment>
                )}

                {options.length > 5 && 
                    <div className="show-more-link" onClick={() => setSeeMoreToggle(!seeMoreToggle)}>{seeMoreToggle ? 'Show less' : 'Show more'}</div>}
            </div>
        </div>
    )
}



export default FilterBlock;
import React, { useState } from "react";
import FilterBlock from "components/filter/filterBlock";
import FilterTag from "components/filter/filterTag";
import { CATEGORIES_FILTER } from "components/filter/utils";


const FilterDesktop = (props) => {
    const [selectedFilter, setFilter] = useState();

    const setFilterValue = (value) => {
        let items = selectedFilter || [];
        const index = (selectedFilter || []).indexOf(value);
        if(index > -1) {
            items = selectedFilter.filter(f => f !== value);
        } else {
            items = [...items, value];
        }
        setFilter(items);
        props.setCategory(items);
    }

    return (
        <div className="filter-section-desktop">
            <div className="section-header">
                Filters
            </div>
            <FilterTag selectedFilter={selectedFilter} clearFilter={() => {
                setFilter([]);
                props.setCategory([]);
            }} />
            <FilterBlock blockLabel={"Categories"} options={CATEGORIES_FILTER} setFilterValue={setFilterValue} selectedFilter={selectedFilter} />
        </div>
    )
}



export default FilterDesktop;
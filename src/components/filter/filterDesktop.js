import React, { useState } from "react";
import FilterBlock from "components/filter/filterBlock";
import FilterColorBlock from "components/filter/colorblock/filterColorBlock";
import FilterTag from "components/filter/filterTag";
import { BRAND_FILTER, SIZE_FILTER, STYLE_FILTER } from "components/filter/utils";


const FilterDesktop = () => {
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
    }

    return (
        <div className="filter-section-desktop">
            <div className="section-header">
                Filters
            </div>
            <FilterTag selectedFilter={selectedFilter} clearFilter={() => setFilter([])} />
            <FilterBlock blockLabel={"Size"} options={SIZE_FILTER} setFilterValue={setFilterValue} selectedFilter={selectedFilter} />
            <FilterBlock blockLabel={"Style"} options={STYLE_FILTER} setFilterValue={setFilterValue} selectedFilter={selectedFilter} />
            <FilterColorBlock />
            <FilterBlock blockLabel={"Brand"} options={BRAND_FILTER} setFilterValue={setFilterValue} selectedFilter={selectedFilter}/>
        </div>
    )
}



export default FilterDesktop;
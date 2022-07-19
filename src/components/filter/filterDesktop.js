import React, { useEffect, useState } from "react";
import FilterBlock from "components/filter/filterBlock";
import FilterTag from "components/filter/filterTag";
import { CATEGORIES_FILTER } from "components/filter/utils";
import { useParams } from "react-router-dom";


const FilterDesktop = (props) => {
    const [selectedFilter, setFilter] = useState();
    const [categoryOption, setCategoryOption] = useState(CATEGORIES_FILTER);
    const { category } = useParams();

    const setFilterValue = (value) => {
        let items = selectedFilter || [];
        const index = (selectedFilter || []).indexOf(value);
        if (index > -1) {
            items = selectedFilter.filter(f => f !== value);
        } else {
            items = [...items, value];
        }
        setFilter(items);
        props.setCategory(items);
    }

    useEffect(() => {
        if (category && category !== 'shop') {
            let categories = CATEGORIES_FILTER.filter(cat => cat.id === category);
            setCategoryOption(categories);
            setFilter([categories[0].value]);
        } else {
            setFilter([]);
            setCategoryOption(CATEGORIES_FILTER);
        }
    }, [category]);

    return (
        <div className="filter-section-desktop">
            <div className="section-header">
                Filters
            </div>
            <FilterTag selectedFilter={selectedFilter} 
            setFilterValue={categoryOption.length > 1 && setFilterValue}
            clearFilter={() => {
                if(categoryOption.length > 1) {
                    setFilter([]);
                    props.setCategory([]);
                }
            }} />
            <FilterBlock blockLabel={"Categories"} options={categoryOption} setFilterValue={categoryOption.length > 1 && setFilterValue} selectedFilter={selectedFilter} />
        </div>
    )
}



export default FilterDesktop;
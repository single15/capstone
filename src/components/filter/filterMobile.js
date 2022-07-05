import React, { useState } from "react";
import { ReactComponent as FilterIcon } from 'assets/sliders.svg'
import { ReactComponent as ArrowUp } from 'assets/arrow-up.svg'
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg'
import 'components/filter/filter.scss';
import { useSelector } from "react-redux";
import FilterModal from "components/filter/modal/filterModal";



const FilterMobile = ({ setSelectedItem }) => {
    const [openModal, toggleModal] = useState(false);
    const resultCount = useSelector(store => store.products.listCount)

    return (
        <section className="filter-section-mb">
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--phone--6 aem-GridColumn--tablet--6" onClick={() => toggleModal(!openModal)}>
                    <FilterIcon />&nbsp;
                    <span>Filter Results</span>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--6 aem-GridColumn--tablet--6" onClick={setSelectedItem}>
                    <ArrowUp /><ArrowDown />&nbsp;
                    <span>Sort Products</span>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                    {resultCount} Results
                </div>
            </div>

            <FilterModal open={openModal} closeModal={() => toggleModal(false)} />            
        </section>
    );
}



export default FilterMobile;
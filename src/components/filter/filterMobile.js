import React, { useState } from "react";
import { ReactComponent as FilterIcon } from 'assets/sliders.svg';
import { ReactComponent as ArrowUp } from 'assets/arrow-up.svg';
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';
import FilterModal from "components/filter/modal/filterModal";
import 'components/filter/filter.scss';



const FilterMobile = ({ setSelectedItem, filteredProducts }) => {
    const [openModal, toggleModal] = useState(false);

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
                    <b>{filteredProducts?.length} Results</b>
                </div>
            </div>

            <FilterModal open={openModal} closeModal={() => toggleModal(false)} />            
        </section>
    );
}



export default FilterMobile;
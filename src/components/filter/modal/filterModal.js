import React, { useState } from "react";
import Modal from 'react-modal';
import FilterBlock from "components/filter/filterBlock";
import FilterColorBlock from "components/filter/colorblock/filterColorBlock";
import { BRAND_FILTER, SIZE_FILTER, STYLE_FILTER } from "components/filter/utils";
import {ReactComponent as Close} from 'assets/close.svg';
import FilterTag from "components/filter/filterTag"
import 'components/filter/modal/filterModal.scss';


const FilterModal = ({ open, closeModal }) => {
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
        <Modal isOpen={open} overlayClassName="filter-modal" ariaHideApp={false}>
            <div className="modal-header">
                <div>Filters</div>
                <div onClick={closeModal}>
                    <Close />
                </div>
            </div>
            <div className="modal-content">
                <FilterTag selectedFilter={selectedFilter} setFilterValue={setFilterValue} clearFilter={() => setFilter([])} />
                <FilterBlock blockLabel={"Size"} options={SIZE_FILTER} setFilterValue={setFilterValue} selectedFilter={selectedFilter} />
                <FilterBlock blockLabel={"Style"} options={STYLE_FILTER} setFilterValue={setFilterValue} selectedFilter={selectedFilter} />
                <FilterColorBlock />
                <FilterBlock blockLabel={"Brand"} options={BRAND_FILTER} setFilterValue={setFilterValue} selectedFilter={selectedFilter}/>
            </div>
        </Modal>
    )
}

export default FilterModal;
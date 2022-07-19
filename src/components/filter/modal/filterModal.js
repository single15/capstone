import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import FilterBlock from "components/filter/filterBlock";
import { CATEGORIES_FILTER } from "components/filter/utils";
import {ReactComponent as Close} from 'assets/close.svg';
import FilterTag from "components/filter/filterTag"
import 'components/filter/modal/filterModal.scss';
import { useParams } from "react-router-dom";


const FilterModal = ({ open, closeModal }) => {
    const [selectedFilter, setFilter] = useState();
    const [categoryOption, setCategoryOption] = useState(CATEGORIES_FILTER);
    const { category } = useParams();


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
        <Modal isOpen={open} overlayClassName="filter-modal" ariaHideApp={false}>
            <div className="modal-header">
                <div>Filters</div>
                <div onClick={closeModal}>
                    <Close />
                </div>
            </div>
            <div className="modal-content">
                <FilterTag selectedFilter={selectedFilter} setFilterValue={categoryOption.length > 1 && setFilterValue} clearFilter={() => {
                    if(categoryOption.length > 1){
                        setFilter([]);
                    }
                }} />
                <FilterBlock blockLabel={"Categories"} options={categoryOption} setFilterValue={categoryOption.length > 1 && setFilterValue} selectedFilter={selectedFilter} />
            </div>
        </Modal>
    )
}

export default FilterModal;
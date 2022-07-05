import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChevronLeftIcon } from 'assets/chevron-left.svg'
import { ReactComponent as ChevronRightIcon } from 'assets/chevron-right.svg'
import { setCurrentPage } from "reducer/product";
import 'components/pagination/pagination.scss';

export const RECORDS_PER_PAGE = 9;

const numPages = (length) => Math.ceil(length / RECORDS_PER_PAGE)

const RenderPageNumbers = ({ pages, currentPage, selectCurrentPage }) => {
    let pageArray = [];
    for(let num = 1; num <= pages; num++) {
        pageArray.push(num);
    }
    return <>{pageArray.map((page) => <div key={page} className={`page-num-block ${currentPage === page ? 'selected-page' : ''}`} onClick={() => selectCurrentPage(page)}>{page}</div>)}</>;
}

const Pagination = ({ products }) => {
    const [showPrev, togglePrev] = useState(false);
    const [showNext, toggleNext] = useState(false);
    const length = products.length;
    const currentPage = useSelector(store => store.products.currentPage);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const prev = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
            updateList(currentPage - 1);
        }
    }

    const next = () => {
        if (currentPage < numPages(length)) {
            dispatch(setCurrentPage(currentPage + 1));
            updateList(currentPage + 1);
        }
    }

    const updateList = (cPage) => {        
        if (cPage < 1) cPage = 1;
        if (cPage > numPages(length)) cPage = numPages(length);

        if (cPage === 1) {
            togglePrev(false)
        } else {
            togglePrev(true)
        }

        if (cPage === numPages(length)) {
            toggleNext(false)
        } else {
            toggleNext(true)
        }
    }

    const selectCurrentPage = (page) => {
        dispatch(setCurrentPage(page));
        updateList(page);
    }

    useEffect(() => {
        navigate(`/venia?pageNumber=${currentPage}`, { replace: true });
    }, [currentPage, navigate]);

    useEffect(() => {
        toggleNext(length > 9);
    }, [length])

    return (
        <section className="pagination-section">
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--2 action-button" onClick={prev}>
                    {showPrev && <ChevronLeftIcon />}
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--8 page-num-section">
                    <RenderPageNumbers pages={numPages(length)} currentPage={currentPage} selectCurrentPage={selectCurrentPage} />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--2 action-button" onClick={next}>
                    {showNext && <ChevronRightIcon />}
                </div>
            </div>
        </section>

    )
}



export default Pagination;
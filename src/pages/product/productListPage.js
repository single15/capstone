import React, { useEffect, useState } from 'react';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import Banner from 'components/banner/banner';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import FilterMobile from 'components/filter/filterMobile';
import ProductList from 'components/product/list';
import { BREADCRUMB_LINKS } from 'pages/utils';
import { updateProducts } from 'reducer/product';
import FilterDesktop from 'components/filter/filterDesktop';
import Dropdown from 'components/dropdown/dropdown';
import { useLocation } from 'react-router-dom';
import { RECORDS_PER_PAGE } from 'components/pagination/pagination';
import 'pages/product/listPage.scss';
import { cloneDeep } from 'lodash';

const PRICEHIGHTOLOW = "priceHighToLow";
const PRICELOWTOHIGHT = "priceLowToHigh";

const SORT_OPTION = [ 
    { id: PRICEHIGHTOLOW, value: 'Price: High to Low' },
    { id: PRICELOWTOHIGHT, value: 'Price: Low to High' },
]

const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


const sortByEntity = (value, products) => {
    let items = cloneDeep(products);
    if(value === PRICEHIGHTOLOW) {
        items = items.sort((product1, product2) => { return product2.price - product1.price })
    } else {
        items = items.sort((product1, product2) => { return product1.price - product2.price })
    }

    return items;
}


export default function ProductListPage() {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState(PRICEHIGHTOLOW);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const cacheProducts = useSelector(store => store.products.list);
    const dispatch = useDispatch();
    const query = useQuery();

    useEffect(() => {
        const category = query.get("category");
        const page = query.get("pageNumber") || 1;
        if (cacheProducts.length > 0) {
            let filterProducts = category ? cacheProducts.filter((product) => product.category === category) : cacheProducts;
            filterProducts = sortByEntity(sortBy, filterProducts);
            setProducts(getPageData(page, filterProducts));
            setFilteredProducts(filterProducts);
        } else {
            fetch(`https://fakestoreapi.com/products`)
                .then(res => res.json())
                .then((data) => {
                    dispatch(updateProducts(data));
                });
        }
    }, [dispatch, cacheProducts, query, sortBy])


    const getPageData = (pageNumber, products) => {
        let productArray = [];
        for(let i = (pageNumber-1) * RECORDS_PER_PAGE; i < (pageNumber * RECORDS_PER_PAGE) && i < products.length; i++) {
            productArray.push(products[i]);
        };
        return productArray;
    }

    const sortProducts = (value) => {
        setSortBy(value);       
    }

    return (
        <article className='list-page'>
            <Banner label="Women's" />
            <Media query="(max-width: 1023px)">
                {matche => (
                    <>
                        {matche ?
                            <>
                                <div className='component-container'>
                                    <Breadcrumb links={BREADCRUMB_LINKS} />
                                    <FilterMobile setSelectedItem={() => sortProducts(sortBy === PRICEHIGHTOLOW ? PRICELOWTOHIGHT : PRICEHIGHTOLOW)} />
                                    <ProductList products={products} filteredProducts={filteredProducts} />
                                </div>
                            </>
                            :
                            <div className='aem-Grid aem-Grid--12'>
                                <div className='aem-Grid aem-Grid--12 sort-section'>
                                    <div className='aem-GridColumn aem-GridColumn--default--3'>
                                        <Breadcrumb links={BREADCRUMB_LINKS} />
                                    </div>
                                    <div className='aem-Grid aem-Grid--12 aem-GridColumn aem-GridColumn--default--9'>
                                        <div className='aem-GridColumn aem-GridColumn--default--6'>
                                            <b>{filteredProducts.length} Results</b>                                            
                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--6 sorting-filter'>
                                            <Dropdown options={SORT_OPTION} selectedItem={sortBy}  setSelectedItem={(value) => sortProducts(value)} />
                                        </div>
                                    </div>
                                </div>

                                <div className='aem-Grid aem-Grid--12'>
                                    <div className='aem-GridColumn aem-GridColumn--default--3'>
                                        <FilterDesktop />
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--9'>
                                        <ProductList products={products} filteredProducts={filteredProducts} />
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                )}
            </Media>
        </article>
    )
}

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
import { useLocation, useParams } from 'react-router-dom';
import { RECORDS_PER_PAGE } from 'components/pagination/pagination';
import { cloneDeep } from 'lodash';
import 'pages/product/listPage.scss';

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

const getCategory = (category) => {
    switch (category) {
        case 'women':
            return 'women\'s clothing';
        case 'men':
            return 'men\'s clothing';
        case 'jewelery': 
            return 'jewelery';
        case 'shop': 
            return '';
        default:
            return category;
    }
}

const sortByEntity = (value, products) => {
    let items = cloneDeep(products);
    if (value === PRICEHIGHTOLOW) {
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
    let { category } = useParams();

    useEffect(() => {
        const categoryId = getCategory(category);
        const page = query.get("pageNumber") || 1;
        if (cacheProducts.length > 0) {
            let filterProducts = categoryId ? cacheProducts.filter((product) => product.category === categoryId) : cacheProducts;
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
    }, [dispatch, cacheProducts, query, sortBy, category])


    const getPageData = (pageNumber, products) => {
        let productArray = [];
        for (let i = (pageNumber - 1) * RECORDS_PER_PAGE; i < (pageNumber * RECORDS_PER_PAGE) && i < products.length; i++) {
            productArray.push(products[i]);
        };
        return productArray;
    }

    const sortProducts = (value) => {
        setSortBy(value);
    }


    const setCategory = (categories) => {
        let cat = categories.map(cat => cat.toLowerCase());
        let filterProducts = cat.length ? cacheProducts.filter((product) => cat.includes(product.category)) : cacheProducts;
        filterProducts = sortByEntity(sortBy, filterProducts);
        setProducts(getPageData(1, filterProducts));
        setFilteredProducts(filterProducts);
    }

    return (
        <article className='list-page'>
            <Banner>
                <h2>
                    {['men', 'women'].includes(category) ? <>
                        <span>{`${category[0].toUpperCase()}${category.slice(1)}'s`}</span><br />
                        <span>Outwear</span>
                    </> : 
                    <span>{`${category[0].toUpperCase()}${category.slice(1)}`}</span>
                    }
                </h2>
            </Banner>
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
                                            <Dropdown options={SORT_OPTION} selectedItem={sortBy} setSelectedItem={(value) => sortProducts(value)} />
                                        </div>
                                    </div>
                                </div>

                                <div className='aem-Grid aem-Grid--12'>
                                    <div className='aem-GridColumn aem-GridColumn--default--3'>
                                        <FilterDesktop setCategory={setCategory} />
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

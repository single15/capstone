import React from "react";
import Loader from "components/loader/loader";
import Pagination from "components/pagination/pagination";
import ProductItem from "components/product/listItem";

const ProductList = ({ products, filteredProducts }) => (
    <section className="product-list">
        {products.length ?
            <div className="aem-Grid aem-Grid--12">
                {products.map((item) => <ProductItem key={item?.id} {...item} />)}
            </div>
            : <Loader />
        }
        <Pagination products={filteredProducts}/>
    </section>
)


export default ProductList;
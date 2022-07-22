import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import HorizontalBar from 'components/horizontalbar/horizontalbar';
import ProductItem from 'components/product/listItem';
import 'pages/whishlist/whishlist.scss';



const Whishlist = () => {
    const whishlist = useSelector((store) => store.wishlist.list);
    return (
        <section className="component-container whishlist-page-section">
            <center>
                <div className="display-l-36-">Your Whishlist Bag</div>
                <HorizontalBar />
            </center>
            <div className="aem-Grid aem-Grid--12">
                {whishlist.length > 0 ?
                        whishlist.map((item) => <ProductItem key={item.id} {...item} />)
                    :
                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 empty-cart">
                        <h2>Your Venia Whishlist is empty.</h2>
                        <NavLink to="/capstone">Continue Shopping</NavLink>
                    </div>
                }
            </div>
        </section>
    )
}


export default Whishlist;
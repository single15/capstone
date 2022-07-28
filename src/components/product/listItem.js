import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import { ReactComponent as WishlistIcon } from 'assets/heart.svg';
import { ReactComponent as RedWishlistIcon } from 'assets/red-heart.svg';
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "reducer/wishlist";
import 'components/product/listItem.scss';

const ProductItem = (props) => {
    const { id, title, image, price } = props;
    const wishlistItems = useSelector(store => store.wishlist.itemsId) || [];
    const dispatch = useDispatch();
    const whishlistPage = useMatch('/whishlist');
    const defaultGridColumn = whishlistPage ? 'aem-GridColumn--default--3' : 'aem-GridColumn--default--4';
    const addToItemWishList = () => {
        dispatch(addToWishList(props));
    }

    return (
        <div className={`aem-GridColumn ${defaultGridColumn} aem-GridColumn--tablet--4 aem-GridColumn--phone--6 item-card`}>
            <div className="card">
                <NavLink to={`/product/${id}`}>
                    <figure>
                        <img src={image} alt={title} width={100} />
                    </figure>
                    <div className="title">
                        <b>{title}</b>
                    </div>
                    <div>
                        <b>$ {price.toFixed(2)}</b>
                    </div>
                </NavLink>
                <div onClick={addToItemWishList}>
                    {wishlistItems?.includes(id) ? <RedWishlistIcon /> : <WishlistIcon />}
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
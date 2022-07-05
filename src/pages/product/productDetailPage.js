import React, { useEffect, useState } from "react";
import Media from "react-media";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "components/breadcrumb/breadcrumb";
import FilterColorBlock from "components/filter/colorblock/filterColorBlock";
import Quantity from "components/filter/quantity/quantity";
import FilterSizeBlock from "components/filter/sizeblock/filterSize";
import ProductHeader from "components/product/header/productHeader";
import { BREADCRUMB_LINKS } from "pages/utils";
import Loader from 'components/loader/loader';
import { ReactComponent as WhishlistIcon } from 'assets/heart.svg';
import { ReactComponent as RedWhishlistIcon } from 'assets/red-heart.svg';
import { ReactComponent as ShareIcon } from 'assets/share-2.svg';
import Button from "components/button/button";
import ButtonLink from "components/button/buttonLink";
import ProductInfo from "components/product/productInfo";
import { addToCart } from "reducer/cart";
import { useDispatch, useSelector } from "react-redux";
import Gallery from "components/product/gallery/gallery";
import 'pages/product/productDetailPage.scss';
import { addToWishList } from "reducer/wishlist";



const ButtonSection = ({ itemId, handleClick, disabled, addItemToWishlist }) => {
    const wishListItems = useSelector((store) => store.wishlist.list)
    return (
        <div className="aem-Grid aem-Grid--12 button-section">
            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                <Button type="primary" onClick={handleClick} disabled={disabled}>Add To Cart</Button>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                <ButtonLink onClick={addItemToWishlist}>
                    {wishListItems.includes(itemId) 
                        ? <><RedWhishlistIcon />&nbsp;&nbsp;Saved</> 
                        : <><WhishlistIcon />&nbsp;&nbsp;Save</>}
                </ButtonLink>
                <ButtonLink>
                    <ShareIcon />&nbsp;&nbsp;Share
                </ButtonLink>
            </div>
        </div>
    )
}


const ProductDetailPage = () => {
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { id } = useParams();


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])


    const addItemToCart = () => {
        const quantityCount = quantity < 1 ? 1 : quantity
        setQuantity(quantityCount)

        if(size && color) {
            dispatch(addToCart({ ...item, quantity: quantityCount, size, color }));
            navigate('/cart');
        } else {
            alert(`Please select ${(!size && !color) ? 'Size and Color' : !size ? 'Size ' : 'Color'}.`)
        }
    }

    const updateQuantity = (value) => {
        setQuantity(value);
    }

    const addItemToWishlist = () => {
        dispatch(addToWishList(item.id));
    }

    return (
        item?.id ?
            <section className="component-container product-details-page">
                <Media query={"(max-width: 1023px)"}>
                    {matche => (
                        <>
                            {matche ?
                                <>
                                    <Breadcrumb links={BREADCRUMB_LINKS} />
                                    <div className="aem-Grid aem-Grid--12">
                                        <Gallery source={item.image} title={item.title} />
                                    </div>                                    
                                    <ProductHeader {...item} />
                                    <FilterColorBlock selectColor={(value) => setColor(value)} singleSelection={true} />
                                    <FilterSizeBlock selectSize={(value) => setSize(value)} />
                                    <Quantity quantity={quantity} updateQuantity={value => updateQuantity(value)} />
                                    <ButtonSection itemId={item.id} handleClick={addItemToCart} addItemToWishlist={addItemToWishlist} />
                                </>
                                :
                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--7">
                                       <Gallery source={item.image} title={item.title} />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--5">
                                        <Breadcrumb links={BREADCRUMB_LINKS} />
                                        <ProductHeader {...item} />
                                        <FilterColorBlock selectColor={(value) => setColor(value)} singleSelection={true} />
                                        <FilterSizeBlock selectSize={(value) => setSize(value)} />
                                        <Quantity quantity={quantity} updateQuantity={value => updateQuantity(value)} />
                                        <ButtonSection itemId={item.id} handleClick={addItemToCart} addItemToWishlist={addItemToWishlist} />
                                    </div>

                                </div>
                            }
                        </>
                    )}
                </Media>
                <ProductInfo item={item} />
            </section>
            : <Loader />
    )
}



export default ProductDetailPage;

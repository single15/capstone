import React from 'react';
import Banner from 'components/banner/banner';
import { CATEGORIES, HEROBANNERITEMS } from './utils'
import CategoryItem from 'components/category/categoryItem/categoryItem';
import Button from 'components/button/button';
import HorizontalBar from 'components/horizontalbar/horizontalbar';
import { ReactComponent as MapPinIcon } from 'assets/map-pin.svg';
import HeroBanner from 'components/herobanner/heroBanner';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';
import 'pages/home/homePage.scss';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function HomePage() {
    const navigate = useNavigate();

    const navigateToShop = () => {
        navigate('/product/list/shop')
    }
    return (
        <article className='home-page'>
            <Carousel responsive={responsive}>
                {HEROBANNERITEMS.map(item => <HeroBanner key={`banner_key_${item.id}`} label={item.label} description={item.description} source={item.source} shopNow={navigateToShop} />)}
            </Carousel>
            <div className='container'>
                <div className='categories'>
                    <div className='aem-Grid aem-Grid--12'>
                        {CATEGORIES.map((category) =>
                            <CategoryItem key={category.id} item={category} />
                        )}
                    </div>
                </div>

                <section className='home-page-feature-banner'>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 aem-GridColumn--tablet--5 banner-image-section'>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 aem-GridColumn--tablet--7 banner-content-section'>
                            <div>
                                <div className='regular-heading-xl-24-'>
                                    <b>
                                        <div>Take off in the new</div>
                                        <div>Signature Legging</div>
                                    </b>
                                </div>
                                <span>Browse & buy from a wide range of women's, men's clothing</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    labore dolore magna lorem ipsum dolor sit dolore magna.
                                </p>
                                <div className='button-section'>
                                    <Button type="secondary" onClick={navigateToShop}>SHOP COLLECTION</Button>&nbsp;&nbsp;
                                    <Button type="primary" onClick={navigateToShop}>SHOP NOW</Button>
                                </div>
                                <HorizontalBar />
                            </div>
                        </div>
                    </div>
                </section>

                <Banner posterPosition='left'>
                    <h1>
                        <span>Conquer your</span><br />
                        <span>next adventure</span>
                    </h1>
                    <p>Shop for Home Appliances, Laptops & Accessories</p>
                    <Button type="secondary" onClick={() => navigate('/product/list/electronics')}>SHOP DEVICES</Button>
                    <div className='marker-section'>
                        <MapPinIcon />
                        <HorizontalBar />
                    </div>
                </Banner>
            </div>
        </article>
    )
}
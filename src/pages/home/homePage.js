import React from 'react';
import Banner from 'components/banner/banner';
import { CATEGORIES } from './categories';
import CategoryItem from 'components/category/categoryItem/categoryItem';
import Button from 'components/button/button';
import HorizontalBar from 'components/horizontalbar/horizontalbar';
import { ReactComponent as MapPinIcon } from 'assets/map-pin.svg';
import 'pages/home/homePage.scss';

export default function HomePage() {
    return (
        <article className='home-page'>
            <div style={{ height: 100 }}></div>
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
                            <span>Lorem Ipsum Dolor Tempor</span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                labore dolore magna lorem ipsum dolor sit dolore magna.
                            </p>
                            <div className='button-section'>
                                <Button type="secondary">SHOP COLLECTION</Button>&nbsp;&nbsp;
                                <Button type="primary">SHOP NOW</Button>
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
                <p>Lorem Ipsum Dolor Tempor</p>
                <div className='marker-section'>
                    <MapPinIcon />
                    <HorizontalBar />
                </div>
            </Banner>

        </article>
    )
}
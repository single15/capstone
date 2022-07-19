import Button from 'components/button/button';
import React from 'react';
import 'components/herobanner/heroBanner.scss';

const HeroBanner = (props) => {
    return (
        <section className="hero-banner-section">
            <div className='aem-Grid aem-Grid--12'>
                <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 image-content'
                    style={{ backgroundImage: `url(${props.source})` }}>
                    <div className='text-content'>
                        <div>
                            <div className='display-m-24-'>{props.label}</div>
                            <p>
                                {props.description}
                            </p>
                            <center>
                                <Button type="primary" width={180} onClick={props.navigateToShop}>SHOP NOW</Button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeroBanner;
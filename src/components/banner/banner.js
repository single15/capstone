import React from 'react';
import Media from 'react-media';
import 'components/banner/banner.scss';

const Banner = ({ label }) => {

    return (

        <Media query={'(max-width: 1023px)'}>
            {matches => (
                <>
                    {matches ? (
                        <div className='home-banner-section-mb'>
                            <div className='home-banner-image'></div>
                            <div className='home-banner-content'>
                                <h2>
                                    <span>{label}</span><br />
                                    <span>Outerwear</span>
                                </h2>
                            </div>
                        </div>
                    ) : (
                        <div className='home-banner-section'>
                            <div className='home-banner-content'>
                                <div>
                                    <h2>
                                        <span>{label}</span><br />
                                        <span>Outerwear</span>
                                    </h2>
                                </div>
                            </div>
                            <div className='home-banner-image'></div>
                        </div>
                    )}
                </>
            )}

        </Media>

    )
}


export default Banner;
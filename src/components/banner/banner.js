import React from 'react';
import Media from 'react-media';
import 'components/banner/banner.scss';

const Banner = ({ children, label, posterPosition = 'right' }) => {

    return (
        <Media query={'(max-width: 1023px)'}>
            {matches => (
                <>
                    {matches ? (
                        <div className='home-banner-section-mb'>
                            <div className='home-banner-image'></div>
                            <div className='home-banner-content'>
                                <div>
                                    {children}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={`home-banner-section ${posterPosition}`}>
                            <div className='home-banner-image'></div>
                            <div className='home-banner-content'>
                                <div>
                                    {children}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </Media>
    )
}


export default Banner;
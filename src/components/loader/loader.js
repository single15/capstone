import React, { useEffect } from "react";
import { BallTriangle } from 'react-loader-spinner'
import 'components/loader/loader.scss'

const Loader = () => {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => document.body.style.overflowY = 'scroll';
    }, [])

    return (
        <div className="loader-section">
            <div className="loader">
                <BallTriangle
                    height="180"
                    width="180"
                    color='#172BC4'
                    ariaLabel='loading'
                />
            </div>
        </div>
    )
}

export default Loader;
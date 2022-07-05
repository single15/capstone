import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from 'components/banner/banner';

export default function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/venia')
        }, 8000)
    })

    return (
        <article className='home-page'>
            <Banner />
            <center>
                <h2>
                    HOME PAGE
                </h2>
                <p>
                    You will be navigating to Women's Outerwear page...
                </p>
            </center>
            
        </article>
    )
}
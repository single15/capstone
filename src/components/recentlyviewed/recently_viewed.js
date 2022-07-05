import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import Loader from 'components/loader/loader';
import 'components/recentlyviewed/recently_viewed.scss';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const RecentlyViewed = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then((res) => res.json())
            .then((res) => setItems(res));

    })


    return (
        items.length ?
            <section className="recently-viewed-section">
                <div>
                    <h1>
                        <center>Recently Viewed</center>
                    </h1>
                </div>
                <div className="aem-Grid aem-Grid--12 carousel-section">
                    <Carousel responsive={responsive}>
                        {items.map((item) =>
                            <NavLink key={item.id} to={`/product/${item.id}`} style={{ color: '#000', textDecoration: 'none' }}>
                                <div>
                                    <img src={item.image} alt={item.title} height={180} />
                                </div>
                                <div style={{ marginTop: 8 }}>
                                    <b>{item.title}</b>
                                </div>
                                <div style={{ marginTop: 8 }}>
                                    $ {item.price}
                                </div>
                            </NavLink>
                        )}
                    </Carousel>
                </div>
            </section>
            : <Loader />

    )
}



export default RecentlyViewed;
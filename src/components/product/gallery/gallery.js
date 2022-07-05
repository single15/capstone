import React, { useEffect, useState } from "react";
import Media from "react-media";
import { ReactComponent as Chevrondown } from 'assets/chevron-down.svg';
import 'components/product/gallery/gallery.scss';

const ImagesOption = ({ source, title, selected, handleClick }) => (
    <div className="option-img-block" onClick={handleClick}>
        <div className={`option ${selected ? 'selected' : ''}`}>
            <img src={source} alt={title} width={60} />
        </div>
        <div className={`option-overlay ${selected ? 'selected' : ''}`}></div>
    </div>
)

const DUMMY_ARRAY = [
    { id: 1, source: '', title: '', backgroundColor: "white" },
    { id: 2, source: '', title: '', backgroundColor: "black" },
    { id: 3, source: '', title: '', backgroundColor: "yellow" },
    { id: 4, source: '', title: '', backgroundColor: "green" },
    { id: 5, source: '', title: '', backgroundColor: "red" },
]

const Gallery = ({ source, title }) => {
    const [selectedImg, setImage] = useState(1);
    const [images, setImagesOptions] = useState(DUMMY_ARRAY);

    useEffect(() => {
        let dummyArray = DUMMY_ARRAY.map((item) => {
            return {
                ...item,
                source: source,
                title: title
            }
        });
        setImagesOptions(dummyArray);
    }, [source, title])

    const prev = () => {
        if (selectedImg <= 1) setImage(1);
        else setImage(selectedImg - 1);
    }

    const next = () => {
        if (selectedImg === images.length) setImage(1);
        else setImage(selectedImg + 1);
    }

    return (
        <Media query={'(max-width: 1023px)'}>
            {
                matches => (
                    <>
                        {
                            matches ?
                                <div className="gallery-slider-section">
                                    <figure className="gallery-section">
                                        {images.map((item) => (
                                            <div key={item.id} className={`image-block ${selectedImg === item.id ? 'selected' : ''}`} style={{backgroundColor: item.backgroundColor}}>
                                                <center>
                                                    <img src={item.source} alt={item.title} width={300} />
                                                </center>
                                            </div>
                                        ))}
                                    </figure>
                                    <div className="action-wrapper prev" onClick={prev}></div>
                                    <div className="action-wrapper next" onClick={next}></div>
                                    <div className="dot-section">
                                        {images.map(({ id }) =>
                                            <span key={id} className={`${selectedImg === id ? 'selected' : ''}`} onClick={() => setImage(id)}></span>
                                        )}
                                    </div>
                                </div>
                                :
                                <figure className="gallery-section">
                                    <div className="image-options">
                                        {images.map((item) => (
                                            <ImagesOption key={item.id} source={item.source} title={item.title} selected={selectedImg === item.id} handleClick={() => setImage(item.id)} />
                                        ))}
                                        <div className="action-wrapper next" onClick={next}>
                                            <center>
                                                <Chevrondown />
                                            </center>
                                        </div>
                                    </div>
                                    <div>
                                        <center>
                                            <img className="main-image" src={source} alt={title} width="80%"  />
                                        </center>
                                    </div>
                                </figure>
                        }
                    </>
                )
            }

        </Media>
    )
}

export default Gallery;
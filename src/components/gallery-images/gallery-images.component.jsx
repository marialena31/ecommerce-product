import React from "react";

import IconCloseWhite from '../../assets/icon-close-white.svg'
import IconCloseOrange from '../../assets/icon-close-orange.svg'

import MiniImage from "../mini-image/mini-image.component";
import MainImage from "../main-image/main-image.component";

import {getAllProductThumbnailUrl} from "../../data/product";
import { getRandomKey } from "../../utils/utils";


import './gallery-images.styles.scss'

const GalleryImages = ({overlay, setOverlay, galleryHidden, setGalleryHidden, handleClick, handleClickMain, handleClickPrev, handleClickNext, mainImageShow, setMainImageShow}) => {
    const closeGallery = () => {
        setOverlay(false)
        setGalleryHidden(true)
    }
    
    const toggleIconColor = (event) => {
        const elt = event.target;
        event.target.src.includes('icon-close-white') ? elt.setAttribute('src', IconCloseOrange) : elt.setAttribute('src', IconCloseWhite)
    }

    return (
        <div className="images-gallery">
            <img src={IconCloseWhite} className="images-gallery__icon__close" alt="close gallery" onClick={closeGallery} onMouseEnter={toggleIconColor} onMouseLeave={toggleIconColor}/>
            <MainImage  
                img={mainImageShow} 
                id="mainGalleryImage" 
                className="images-gallery" 
                alt="product" 
                handleClickPrev={handleClickPrev} 
                handleClickNext={handleClickNext}
            />
            <div className="images-gallery__mini">
                {getAllProductThumbnailUrl().map(img => (<MiniImage key={getRandomKey()} img={img} className="images-gallery__mini" alt="product" handleClick={handleClick}/>))}
            </div>
        </div>
    )
}

export default GalleryImages;
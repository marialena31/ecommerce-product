import React from "react";

import MiniImage from "../mini-image/mini-image.component";
import MainImage from "../main-image/main-image.component";
import {getAllProductThumbnailUrl} from "../../data/product";
import { getRandomKey } from "../../utils/utils";

import './product-images.styles.scss'

const ProductImages = ({overlay, setOverlay, galleryHidden, setGalleryHidden, handleClick, handleClickMain, handleClickPrev, handleClickNext, mainImageShow, setMainImageShow}) => {
    return (
        <div className="images-box">
            <MainImage  
                img={mainImageShow} 
                id="mainImage" 
                className="" 
                handleClickMain={handleClickMain} 
                handleClickPrev={handleClickPrev} 
                handleClickNext={handleClickNext}
            />
            <div className="images-box__mini">
                {getAllProductThumbnailUrl().map(img => (<MiniImage key={getRandomKey()} img={img} className="" alt="product" handleClick={handleClick}/>))}
            </div>
        </div>
    )
}

export default ProductImages;
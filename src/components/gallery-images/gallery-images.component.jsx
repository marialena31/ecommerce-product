import React from "react";

import  IconNext from '../../assets/icon-next.svg'
import IconPrevious from '../../assets/icon-previous.svg'
import IconCloseOrange from '../../assets/icon-close-orange.svg'

import {getAllProductThumbnailUrl, getProductMainImageUrl, getMainImageFromThumbnail} from "../../data/product";
import { getRandomKey, getFileUrlMedia } from "../../utils/utils";

import './gallery-images.styles.scss'

const GalleryImages = ({overlay, setOverlay, galleryHidden, setGalleryHidden}) => {
    const closeGallery = () => {
        setOverlay(false)
        setGalleryHidden(true)
    }
    
    const setAsMainImage = (event) => {
        const img = event.target.src.substring(29);
        document.getElementById("mainGalleryImage").setAttribute('src', getFileUrlMedia(getMainImageFromThumbnail(img)));
    }

    return (
        <div className="images-gallery">
            <img src={IconCloseOrange} className="images__gallery__icon__close" alt="close gallery" onClick={closeGallery}/>
            <div className="images-gallery__main">
                <img src={IconPrevious} className="images-gallery__main__btn__prev" alt="previous product"/>
                <img id="mainGalleryImage" className="images-gallery__main__img" src={getProductMainImageUrl()} alt="product"/>
                <img src={IconNext} className="images-gallery__main__btn__next" alt="next product"/>
            </div>
            <div className="images-gallery__mini">
                {getAllProductThumbnailUrl().map(img => 
                    (<div className="images-gallery__mini__item" key={getRandomKey(1,100)}>
                        <img className="images-gallery__mini__item__img" src={img} alt="product" onClick={setAsMainImage}/>
                    </div>)
                )}
            </div>
        </div>
    )
}

export default GalleryImages;
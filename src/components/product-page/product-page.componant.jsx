import React from "react";

import ProductImages from "../product-images/product-images.component";
import ProductDetails from "../product-details/product-details.component";
import GalleryImages from "../gallery-images/gallery-images.component";

import {getAllProductThumbnailUrl, getAllProductNormalFilename, getProductMainImageUrl, getMainImageFromThumbnail} from "../../data/product";
import { getRandomKey, getFileUrlMedia } from "../../utils/utils";

import './product-page.styles.scss'

const ProductPage = ({quantity, setQuantity, overlay, setOverlay}) => {
    const [galleryHidden, setGalleryHidden] = React.useState(true)
    const [mainImageShow, setMainImageShow] = React.useState(getProductMainImageUrl());

    const setAsMainImage = (event) => {
        const img = event.target.src.substring(29);
        const newMainImageUrl = getFileUrlMedia(getMainImageFromThumbnail(img));
        document.getElementById("mainImage").setAttribute('src', newMainImageUrl);
        setMainImageShow(newMainImageUrl)
    }

    const displayGallery = () => {
        setOverlay(true)
        setGalleryHidden(false)
    }

    const getCurrentImage = () => {
        const mainImg = mainImageShow;
        const listImages = getAllProductNormalFilename();
        const mainImgFilename = mainImg.substring(mainImg.lastIndexOf('/')+1);
        const indexCurrentImage = listImages.indexOf(mainImgFilename);
        return [indexCurrentImage, listImages];
    }

    const getNextImage = () => {
        const [indexCurrentImage, listImages] = getCurrentImage();
        const newIndexImg = indexCurrentImage < (listImages.length - 1) ? indexCurrentImage + 1 : 0;
        return listImages[newIndexImg];
    }

    const getPrevImage = () => {
        const [indexCurrentImage, listImages] = getCurrentImage();
        const newIndexImg = indexCurrentImage > 0 ? indexCurrentImage - 1 : listImages.length - 1;
        return listImages[newIndexImg];
    }

    const displayNewMainImage = (img) => {
        setMainImageShow(getFileUrlMedia(img))
    }

    const displayNextImage = () => {
        displayNewMainImage(getNextImage());
    }

    const displayPrevImage = () => {
        displayNewMainImage(getPrevImage());
    }

    return (
        <div className="product-page">
            <ProductImages 
                overlay={overlay} 
                setOverlay={setOverlay} 
                galleryHidden={galleryHidden} 
                setGalleryHidden={setGalleryHidden}
                handleClick={setAsMainImage}
                handleClickMain={displayGallery} 
                handleClickPrev={displayPrevImage} 
                handleClickNext={displayNextImage}
                mainImageShow={mainImageShow}
                setMainImageShow={setMainImageShow}
            />
            {galleryHidden ? 
            null : 
            <GalleryImages 
                overlay={overlay} 
                setOverlay={setOverlay} 
                galleryHidden={galleryHidden} 
                setGalleryHidden={setGalleryHidden}
                handleClick={setAsMainImage}
                handleClickMain={displayGallery} 
                handleClickPrev={displayPrevImage} 
                handleClickNext={displayNextImage}
                mainImageShow={mainImageShow}
                setMainImageShow={setMainImageShow}
            />}
            <ProductDetails quantity={quantity} setQuantity={setQuantity}/>
        </div>
    )
}

export default ProductPage;
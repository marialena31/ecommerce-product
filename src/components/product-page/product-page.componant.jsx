import React from "react";

import ProductImages from "../product-images/product-images.component";
import ProductDetails from "../product-details/product-details.component";

import './product-page.styles.scss'
import GalleryImages from "../gallery-images/gallery-images.component";

const ProductPage = ({quantity, setQuantity, overlay, setOverlay}) => {
    const [galleryHidden, setGalleryHidden] = React.useState(true)
    return (
        <div className="product-page">
            <ProductImages overlay={overlay} setOverlay={setOverlay} galleryHidden={galleryHidden} setGalleryHidden={setGalleryHidden}/>
            {galleryHidden ? null : <GalleryImages overlay={overlay} setOverlay={setOverlay} galleryHidden={galleryHidden} setGalleryHidden={setGalleryHidden}/>}
            <ProductDetails quantity={quantity} setQuantity={setQuantity}/>
        </div>
    )
}

export default ProductPage;
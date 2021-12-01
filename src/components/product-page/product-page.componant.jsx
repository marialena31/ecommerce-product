import React from "react";

import ProductImages from "../product-images/product-images.component";
import ProductDetails from "../product-details/product-details.component";

import './product-page.styles.scss'

const ProductPage = () => {
    return (
        <div className="product-page">
            <ProductImages/>
            <ProductDetails/>
        </div>
    )
}

export default ProductPage;
import React from "react";

import ButtonQuantity from "../button-quantity/button-quantity.component";
import CustomButton from "../custom-button/custom-button.component";
import  IconCartWhite from '../../assets/icon-cart-white.svg'

import product from "../../data/product";

import './product-details.styles.scss'

const ProductDetails = () => {
    
    return (
        <div className="product-details">
            <div className="product-details__category">{product.category}</div>
            <h1 className="product-details__name">{product.name}</h1>
            <div className="product-details__description">{product.description}</div>
            <div className="product-details__price-discount">
                <span className="product-details__net_price">{product.currency}{product.net_price}</span>
                <div className="product-details__discount">
                    <span className="product-details__discount__text">{product.discount}</span>
                </div>
            </div>
            <div className="product-details__base_price">{product.currency}{product.base_price}</div>
            <div className="product-details__actions">
                <ButtonQuantity/>
                <CustomButton title="Add to cart" img={IconCartWhite}/>
            </div>
        </div>
    )
}

export default ProductDetails;
import React from "react";
import  IconCartWhite from '../../assets/icon-cart-white.svg'
import { ReactComponent as IconMinus } from '../../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg'

import ProductImages from "../product-images/product-images.component";

import product from "../../data/product";

import '../custom-button/custom-button.styles.scss'
import './product-page.styles.scss'

const ProductPage = () => {
    const quantity = 3;
    return (
        <div className="product-page">
            <ProductImages/>
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
                    <div className="product-details__actions__qty">
                        <button className="product-details__actions__qty__minus btn"><IconMinus/></button>
                        <span className="product-details__actions__qty__number">{quantity}</span>
                        <button className="product-details__actions__qty__plus btn"><IconPlus/></button>
                    </div>
                    <button className="product-details__addToCart custom__btn">
                        <img src={IconCartWhite} className="product-details__addToCart__icon" alt="add to cart"/>
                        <span className="product-details__addToCart__title">Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;
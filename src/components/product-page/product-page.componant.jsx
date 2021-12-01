import React from "react";
import { ReactComponent as IconCartWhite } from '../../assets/icon-cart-white.svg'
import { ReactComponent as IconMinus } from '../../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg'
import imgProduct1 from '../../assets/image-product-1.jpg';
import imgProduct1Thumb from '../../assets/image-product-1-thumbnail.jpg';
// import imgProduct2 from '../../assets/image-product-2.jpg';
import imgProduct2Thumb from '../../assets/image-product-2-thumbnail.jpg';
// import imgProduct3 from '../../assets/image-product-3.jpg';
import imgProduct3Thumb from '../../assets/image-product-3-thumbnail.jpg';
// import imgProduct4 from '../../assets/image-product-4.jpg';
import imgProduct4Thumb from '../../assets/image-product-4-thumbnail.jpg';
import product from "../../data/product";

import '../custom-button/custom-button.styles.scss'
import './product-page.styles.scss'

const ProductPage = () => {
    const quantity = 3;
    return (
        <div className="product-page">
            <div className="images-box">
                <img className="images-box__main" src={imgProduct1} alt="product" />
                <div className="images-box__mini">
                    <img className="images-box__mini__item" src={imgProduct1Thumb} alt="product" />
                    <img className="images-box__mini__item" src={imgProduct2Thumb} alt="product" />
                    <img className="images-box__mini__item" src={imgProduct3Thumb} alt="product" />
                    <img className="images-box__mini__item" src={imgProduct4Thumb} alt="product" />
                </div>
            </div>
            <div className="product-details">
                <div className="product-details__category">{product.category}</div>
                <h1 className="product-details__name">{product.name}</h1>
                <div className="product-details__description">{product.description}</div>
                <div className="product-details__price-discount">
                    <div className="product-details__net_price">{product.currency}{product.net_price}</div>
                    <div className="product-details__discount">{product.discount}</div>
                </div>
                <div className="product-details__base_price">{product.currency}{product.base_price}</div>
                <div className="product-details__actions">
                    <button className="product-details__qty btn minus"><IconMinus/></button>
                    <span className="product-details__qty">{quantity}</span>
                    <button className="product-details__qty btn plus"><IconPlus/></button>
                    <button className="product-details__addToCart custom__btn"><span><IconCartWhite/></span>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;
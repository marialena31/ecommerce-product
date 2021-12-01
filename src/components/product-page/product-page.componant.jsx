import React from "react";
import  IconCartWhite from '../../assets/icon-cart-white.svg'
import { ReactComponent as IconMinus } from '../../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg'
import  IconNext from '../../assets/icon-next.svg'
import IconPrevious from '../../assets/icon-previous.svg'
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
                <div className="images-box__main">
                    <img src={IconPrevious} className="images-box__main__btn__prev"/>
                    <img className="images-box__main__img" src={imgProduct1} alt="product" />
                    <img src={IconNext} className="images-box__main__btn__next"/>
                </div>
                <div className="images-box__mini">
                    <div className="images-box__mini__item">
                        <img className="images-box__mini__item__img" src={imgProduct1Thumb} alt="product" />
                    </div>
                    <div className="images-box__mini__item">
                        <img className="images-box__mini__item__img" src={imgProduct2Thumb} alt="product" />
                    </div>
                    <div className="images-box__mini__item">
                        <img className="images-box__mini__item__img" src={imgProduct3Thumb} alt="product" />
                    </div>
                    <div className="images-box__mini__item">
                        <img className="images-box__mini__item__img" src={imgProduct4Thumb} alt="product" />
                    </div>
                </div>
            </div>
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
                        <img src={IconCartWhite} className="product-details__addToCart__icon"/>
                        <span className="product-details__addToCart__title">Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;
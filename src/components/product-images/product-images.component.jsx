import React from "react";

import  IconNext from '../../assets/icon-next.svg'
import IconPrevious from '../../assets/icon-previous.svg'

import {getAllProductThumbnailUrl, getProductMainImageUrl} from "../../data/product";
import { getRandomKey } from "../../utils/utils";

import './product-images.styles.scss'

const ProductImages = () => {
    return (
        <div className="images-box">
            <div className="images-box__main">
                <img src={IconPrevious} className="images-box__main__btn__prev" alt="previous product"/>
                <img className="images-box__main__img" src={getProductMainImageUrl()} alt="product" />
                <img src={IconNext} className="images-box__main__btn__next" alt="next product"/>
            </div>
            <div className="images-box__mini">
                {getAllProductThumbnailUrl().map(img => 
                    (<div className="images-box__mini__item" key={getRandomKey(1,100)}>
                        <img className="images-box__mini__item__img" src={img} alt="product" />
                    </div>)
                )}
            </div>
        </div>
    )
}

export default ProductImages;
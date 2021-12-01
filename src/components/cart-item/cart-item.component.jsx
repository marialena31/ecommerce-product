import React from "react";

import { ReactComponent as IconDelete } from '../../assets/icon-delete.svg'

import './cart-item.styles.scss'

import product, { getProductMainThumbnailUrl } from '../../data/product'

const CartItem = () => {
    const quantity = 0;
    const totalPrice = parseInt(product.net_price)*quantity;
    return (
        <div className="cart-item">
            <img className='cart-item__img' src={getProductMainThumbnailUrl()} alt='cart item' />
            <div className='cart-item__details'>
                <span className='cart-item__details__name'>{product.name}</span>
                <span className='cart-item__details__price'>{product.currency}{product.net_price} x {quantity} <span className="cart-item__details__price__total">{product.currency}{totalPrice}</span></span>
            </div>
            <IconDelete className="cart-item__delete-icon" /> 
        </div>
    )
}

export default CartItem;
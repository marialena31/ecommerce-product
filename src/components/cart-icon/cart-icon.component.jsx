import React from "react";

import { ReactComponent as IconCart } from '../../assets/icon-cart.svg'

import './cart-icon.styles.scss'

const CartIcon = ({hiddenCart, setHiddenCart, quantity, setQuantity}) => {
    const toggleCartHidden = () => {
        setHiddenCart(!hiddenCart);
    }

    return (
        <div className="cart-icon__cta" onClick={toggleCartHidden}>
           <IconCart className="cart-icon" /> 
            {quantity ? <span className="item-count">{quantity}</span> : null}
        </div>
    )
}

export default CartIcon;
import React from "react";

import { ReactComponent as IconCart } from '../../assets/icon-cart.svg'

import './cart-icon.styles.scss'

const CartIcon = ({hiddenCart, setHiddenCart}) => {
    const itemCount = 0;

    const toggleCartHidden = () => {
        setHiddenCart(!hiddenCart);
    }

    return (
        <div className="cart-icon__cta" onClick={toggleCartHidden}>
           <IconCart className="cart-icon" /> 
            {itemCount ? <span className="item-count">{itemCount}</span> : null}
        </div>
    )
}

export default CartIcon;
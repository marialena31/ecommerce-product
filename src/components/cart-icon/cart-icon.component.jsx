import React from "react";

import { ReactComponent as IconCart } from '../../assets/icon-cart.svg'

import './cart-icon.styles.scss'

const CartIcon = ({hidden, setHidden}) => {
    const itemCount = 0;

    const toggleCartHidden = () => {
        setHidden(!hidden);
    }

    return (
        <div className="header__cart-icon__cta" onClick={toggleCartHidden}>
           <IconCart className="header__cart-icon" /> 
            {itemCount ? <span className="item-count">{itemCount}</span> : null}
        </div>
    )
}

export default CartIcon;
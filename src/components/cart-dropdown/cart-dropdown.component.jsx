import React from "react";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const itemCount = 5;
    return(
        <div className="cart-dropdown">
            <div className="cart-dropdown__header">Cart</div>
           {itemCount ?
           <>
            <CartItem/> 
            <CustomButton title="Checkout" />
           </> :
           <div className="cart-dropdown__content">Your cart is empty.</div> 
           }
           
        </div>
    )
}

export default CartDropdown;
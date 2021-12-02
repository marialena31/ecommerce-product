import React from "react";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss'

const CartDropdown = ({quantity, setQuantity}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-dropdown__header">Cart</div>
           {quantity ?
           <>
            <CartItem quantity={quantity} setQuantity={setQuantity}/> 
            <CustomButton title="Checkout" />
           </> :
           <div className="cart-dropdown__content">Your cart is empty.</div> 
           }
           
        </div>
    )
}

export default CartDropdown;
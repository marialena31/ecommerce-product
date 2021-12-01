import React from "react";

import './custom-button.styles.scss'

const CustomButton = ({title}) => {
    return (
        <button className="cart-dropdown__btn custom__btn">{title}</button>
    )
}

export default CustomButton;
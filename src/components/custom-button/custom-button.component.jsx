import React from "react";

import './custom-button.styles.scss'

const CustomButton = ({title, img}) => {
    return (
        <button className="custom__btn">
            {img ? <img src={img} className="custom__btn__icon" alt={title}/> : null}
            <span className="custom__btn__title">{title}</span>
        </button>
    )
}

export default CustomButton;
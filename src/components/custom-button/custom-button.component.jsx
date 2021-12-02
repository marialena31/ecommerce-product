import React from "react";

import './custom-button.styles.scss'

const CustomButton = ({title, img, handleClick}) => {
    return (
        <button className="custom__btn" onClick={handleClick}>
            {img ? <img src={img} className="custom__btn__icon" alt={title}/> : null}
            <span className="custom__btn__title">{title}</span>
        </button>
    )
}

export default CustomButton;
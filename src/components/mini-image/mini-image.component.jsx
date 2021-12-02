import React from "react";

import './mini-image.styles.scss'

const MiniImage = ({img, className='', alt, handleClick}) => {
    return (
        <div className={`images-box__mini__item ${className}`} >
            <img className={`images-box__mini__item__img ${className}`} src={img} alt={alt} onClick={handleClick} />
        </div>
    )
}

export default MiniImage;
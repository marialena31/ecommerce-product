import React from "react";

import IconNext from '../../assets/icon-next.svg'
import IconPrevious from '../../assets/icon-previous.svg'

import './main-image.styles.scss'

const MainImage = ({img, id, className='', handleClickMain, handleClickPrev, handleClickNext}) => {
    return (
        <div className={`images-box__main ${className}`}>
            <img src={IconPrevious} className={`images-box__main__btn__prev ${className}`} alt="previous product" onClick={handleClickPrev}/>
            <img id={id} className={`images-box__main__img ${className}`} src={img} alt="product" onClick={handleClickMain}/>
            <img src={IconNext} className={`images-box__main__btn__next ${className}`} alt="next product" onClick={handleClickNext}/>
        </div>
    )
}

export default MainImage;
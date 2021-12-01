import React from "react";

import './button-quantity.styles.scss'

import { ReactComponent as IconMinus } from '../../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg'

const ButtonQuantity = () => {
    const quantity = 3;
    return (
        <div className="btn__qty">
            <button className="btn__qty__minus btn"><IconMinus/></button>
            <span className="btn__qty__number">{quantity}</span>
            <button className="btn__qty__plus btn"><IconPlus/></button>
        </div>
    )
}

export default ButtonQuantity;
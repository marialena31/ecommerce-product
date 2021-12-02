import React from "react";

import './button-quantity.styles.scss'

import { ReactComponent as IconMinus } from '../../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../../assets/icon-plus.svg'

const ButtonQuantity = ({qtySelected, setQtySelected}) => {
    const increaseQuantity = () => {
        setQtySelected(qtySelected + 1)
    }

    const decreaseQuantity = () => {
        (qtySelected > 0) && setQtySelected(qtySelected - 1) 
    }

    return (
        <div className="btn__qty">
            <button className="btn__qty__minus btn" onClick={decreaseQuantity}><IconMinus/></button>
            <span className="btn__qty__number">{qtySelected}</span>
            <button className="btn__qty__plus btn" onClick={increaseQuantity}><IconPlus/></button>
        </div>
    )
}

export default ButtonQuantity;
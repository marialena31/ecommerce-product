import React from "react";

import { ReactComponent as IconMenu } from '../../assets/icon-menu.svg'
import { ReactComponent as IconClose } from '../../assets/icon-close.svg'

import './menu-mobile.styles.scss'

const MenuMobile = ({hiddenMenuMobile, setHiddenMenuMobile}) => {
    const openMenuMobile = () => {
        setHiddenMenuMobile(false)
        document.getElementById('menu').style.display = 'flex';
    }

    const closeMenuMobile = () => {
        setHiddenMenuMobile(true)
        document.getElementById('menu').style.display = 'none';
    }

    return (
        <>
            <IconMenu className="menu-mobile__open" onClick={openMenuMobile}/>
            {hiddenMenuMobile ? null : <IconClose className="menu-mobile__close" onClick={closeMenuMobile}/>}
        </>
    )
}

export default MenuMobile;
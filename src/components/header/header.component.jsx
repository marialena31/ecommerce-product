import React from 'react'
import { Link } from 'react-router-dom'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import ProfileImage from '../profile-image/profile-image.component'
import CartIcon from '../cart-icon/cart-icon.component'
import MenuMobile from '../menu-mobile/menu-mobile.component'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss';

const Header = ({quantity, setQuantity, overlay, setOverlay}) => {  
    const [hiddenCart, setHiddenCart] = React.useState(true);
    const [hiddenMenuMobile, setHiddenMenuMobile] = React.useState(true);

    return (
        <header id="header" className="header">
            <MenuMobile hiddenMenuMobile={hiddenMenuMobile} setHiddenMenuMobile={setHiddenMenuMobile} overlay={overlay} setOverlay={setOverlay}/>
            <Link className="header__logo" to="/">
                <Logo className="header__logo__img" />
            </Link>
            <nav id="menu" className="header__nav">
                <Link className="header__nav__item" to='/collections'>
                    Collections
                </Link>
                <Link className="header__nav__item" to='/men'>
                    Men
                </Link>
                <Link className="header__nav__item" to='/women'>
                    Women
                </Link>
                <Link className="header__nav__item" to='/about'>
                    About
                </Link>
                <Link className="header__nav__item" to='/contact'>
                    Contact
                </Link>
            </nav>
            <div className="header__right-box">
                <CartIcon hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} quantity={quantity} setQuantity={setQuantity}/>
                { hiddenCart ? null :  <CartDropdown quantity={quantity} setQuantity={setQuantity}/> }
                <ProfileImage/> 
            </div>
        </header>
    )
};

export default Header;


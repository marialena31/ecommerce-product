import React from 'react'
import { Link } from 'react-router-dom'

import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import ProfileImage from '../profile-image/profile-image.component'
import CartIcon from '../cart-icon/cart-icon.component'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as IconMenu } from '../../assets/icon-menu.svg'
import { ReactComponent as IconClose } from '../../assets/icon-close.svg'

import './header.styles.scss';
import '../custom-button/custom-button.styles.scss'

const Header = () => {  
    const [hidden, setHidden] = React.useState(true);

    return (
        <header id="header" className="header">
            <IconMenu className="header__menu-mobile"/>
            <IconClose className="header__menu-mobile__close"/>
            <Link className="header__logo" to="/">
                <Logo className="header__logo__img" />
            </Link>
            <nav className="header__nav">
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
                <CartIcon hidden={hidden} setHidden={setHidden}/>
                { hidden ? null :  <CartDropdown/> }
                <ProfileImage/> 
            </div>
        </header>
    )
};

export default Header;


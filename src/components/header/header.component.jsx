import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as IconCart } from '../../assets/icon-cart.svg'
import './header.styles.scss';

const Header = () => {
   
    const CartIcon = () => {
        return (
            <IconCart className="shopping-icon" />
        )
    }

    const ProfileImage = () => {
        return (
            <img src="../../assets/image-avatar.png" alt="profile" name="profile image" />
        )
    }

    return (
        <header id="header" className="header">
            <Link to="/">
                <Logo className="header__nav__logo" />
            </Link>
            <nav className="header__nav">
                <Link className="header" to='/collections'>
                    Collections
                </Link>
                <Link className="header" to='/men'>
                    Men
                </Link>
                <Link className="header" to='/women'>
                    Women
                </Link>
                <Link className="header" to='/about'>
                    About
                </Link>
                <Link className="header" to='/contact'>
                    Contact
                </Link>
            </nav>
             <CartIcon />
            <ProfileImage/> 
        </header>
    )
};

export default Header;


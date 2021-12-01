import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as IconCart } from '../../assets/icon-cart.svg'
import { ReactComponent as IconDelete } from '../../assets/icon-delete.svg'
import product from '../../data/product'
import profileImg from '../../assets/image-avatar.png';
import imgProductThumb from '../../assets/image-product-1-thumbnail.jpg';
import './header.styles.scss';
import '../custom-button/custom-button.styles.scss'

const Header = () => {
    const itemCount = 5;
    const quantity = 3;
    const [hidden, setHidden] = React.useState(true);

    const toggleCartHidden = () => {
        setHidden(!hidden);
    }

    const CartIcon = () => {
        return (
            <div className="header__cart-icon__cta" onClick={toggleCartHidden}>
               <IconCart className="header__cart-icon" /> 
                {itemCount ? <span className="item-count">{itemCount}</span> : null}
            </div>
        )
    }

    const ProfileImage = () => {
        return (
            <img className="header__profile" src={profileImg} alt="profile" />
        )
    }

    const CartItem = () => {
        const totalPrice = parseInt(product.net_price)*quantity;
        return (
            <div className="cart-item">
                <img className='cart-item__img' src={imgProductThumb} alt='cart item' />
                <div className='cart-item__details'>
                    <span className='cart-item__details__name'>{product.name}</span>
                    <span className='cart-item__details__price'>{product.currency}{product.net_price} x {quantity} <span className="cart-item__details__price__total">{product.currency}{totalPrice}</span></span>
                </div>
                <IconDelete className="cart-item__delete-icon" /> 
            </div>
        )
    }

    const CartDropdown = () => {
        return(
            <div className="cart-dropdown">
                <div className="cart-dropdown__header">Cart</div>
               {itemCount ?
               <>
                <CartItem/> 
                <button className="cart-dropdown__btn custom__btn">Checkout</button>
               </> :
               <div className="cart-dropdown__content">Your cart is empty.</div> 
               }
               
            </div>
        )
    }

    return (
        <header id="header" className="header">
            <Link to="/">
                <Logo className="header__logo" />
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
                <CartIcon />
                { hidden ? null :  <CartDropdown/> }
                <ProfileImage/> 
            </div>
        </header>
    )
};

export default Header;


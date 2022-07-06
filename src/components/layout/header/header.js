import React, { useState } from 'react';
import { ReactComponent as Logo } from 'assets/venia-logo-white.svg'
import { ReactComponent as Hamburger } from 'assets/hamburger-white.svg'
import { ReactComponent as ShoppingBag } from 'assets/shopping-bag-white.svg'
import { ReactComponent as Close } from 'assets/close.svg';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import 'components/layout/header/header.scss';
import { useSelector } from 'react-redux';

let activeClassName = "underline";

const Menus = ({ toggleMenu }) => (
    <ul>
        <li>
            <NavLink to="/capstone"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                onClick={toggleMenu}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/product/list/women"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                onClick={toggleMenu}>
                Women
            </NavLink>
        </li>
        <li>
            <NavLink to="/product/list/men"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                onClick={toggleMenu}>
                Men
            </NavLink>
        </li>
        <li>
            <NavLink to="/product/list/electronics"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                onClick={toggleMenu}>
                Electronics
            </NavLink>
        </li>
        <li>
            <NavLink to="/product/list/jewellery"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                onClick={toggleMenu}>
                Jewellery
            </NavLink>
        </li>
    </ul>
)

const Header = () => {
    const [showMenu, toggleMenu] = useState(false);
    const cartItems = useSelector(store => store.cart.cart);

    return (
        <header className='header-section'>
            <Media query={'(max-width: 1023px)'}>
                {matches => (
                    <>
                        {matches ? (
                            <div className='mobile'>
                                <div className='aem-Grid aem-Grid--12'>
                                    <div className='aem-GridColumn aem-GridColumn--phone--2 aem-GridColumn--tablet--4' onClick={() => toggleMenu(!showMenu)}>
                                        <Hamburger />
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--phone--8 aem-GridColumn--tablet--4'>
                                        <NavLink to="/capstone">
                                            <Logo />
                                        </NavLink>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--phone--2 aem-GridColumn--tablet--4 shopping-bag'>
                                        <NavLink to="/cart"><ShoppingBag /></NavLink>
                                        <div className='shopping-bag-count'>{cartItems.length}</div>
                                    </div>
                                    {showMenu &&
                                        <div className='aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 menus'>
                                            <Menus toggleMenu={() => toggleMenu(false)} />
                                            <div className='close' onClick={() => toggleMenu(false)}><Close /></div>
                                        </div>
                                    }
                                </div>
                            </div>

                        ) : (
                            <div className='desktop'>
                                <div className='aem-Grid aem-Grid--12'>
                                    <div className='aem-GridColumn aem-GridColumn--default--2'>
                                        <NavLink to="/capstone">
                                            <Logo />
                                        </NavLink>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--8'>
                                        <Menus />
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--2 shopping-bag'>
                                        <div><NavLink to="/cart"><ShoppingBag /></NavLink></div>
                                        <div className='shopping-bag-count'>{cartItems.length}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}

            </Media>
        </header>
    )
}



export default Header;
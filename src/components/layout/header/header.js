import React, { useState } from 'react';
import { ReactComponent as Logo } from 'assets/venia_logo.svg'
import { ReactComponent as Hamburger } from 'assets/hamburger.svg'
import { ReactComponent as Search } from 'assets/search.svg'
import { ReactComponent as ShoppingBag } from 'assets/shopping-bag.svg'
import { ReactComponent as User } from 'assets/user.svg'
import {ReactComponent as Close} from 'assets/close.svg';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import 'components/layout/header/header.scss';


const Menus = ({ toggleMenu }) => (
    <ul>
        <li>
            <NavLink to="/venia?category=women's clothing" onClick={toggleMenu}>
                Women
            </NavLink>
        </li>
        <li>
            <NavLink to="/venia?category=men's clothing" onClick={toggleMenu}>
                Men
            </NavLink>
        </li>
        <li>
            <NavLink to="/venia?category=electronics" onClick={toggleMenu}>
                Smart Gear
            </NavLink>
        </li>
        <li>
            <NavLink to="/venia?category=jewelery" onClick={toggleMenu}>
                Accessories
            </NavLink>
        </li>
    </ul>
)

const Header = () => {
    const [showMenu, toggleMenu] = useState(false);

    return (
        <header className='header-section component-container'>
            <Media query={'(max-width: 1023px)'}>
                {matches => (
                    <>
                        {matches ? (
                            <div className='aem-Grid aem-Grid--12 mobile'>
                                <div className='aem-GridColumn aem-GridColumn--phone--2 aem-GridColumn--tablet--4' onClick={() => toggleMenu(!showMenu)}>
                                    <Hamburger />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--phone--6 aem-GridColumn--tablet--4'>
                                    <NavLink to="/venia">
                                        <Logo />
                                    </NavLink>
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--phone--4 aem-GridColumn--tablet--4'>
                                    <Search />
                                    <NavLink to="/cart"><ShoppingBag /></NavLink>
                                </div>
                                {showMenu && 
                                    <div className='aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--12 menus'>
                                        <Menus toggleMenu={() => toggleMenu(false)} />
                                        <div className='close' onClick={() => toggleMenu(false)}><Close /></div>
                                    </div>
                                }
                            </div>
                        ) : (
                            <div className='aem-Grid aem-Grid--12 desktop'>
                                <div className='aem-GridColumn aem-GridColumn--default--2'>
                                    <NavLink to="/venia">
                                        <Logo />
                                    </NavLink>
                                </div>

                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                    <Menus />
                                </div>

                                <div className='aem-GridColumn aem-GridColumn--default--4'>
                                    <div><Search /> Search</div>
                                    <div><User /> Sign In</div>
                                    <div><NavLink to="/cart"><ShoppingBag /></NavLink></div>
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
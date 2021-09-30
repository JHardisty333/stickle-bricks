import React, { useState } from 'react';
import '../../style.css';
import searchIcon from '../../assets/img/searchIcon.png';
import customerIcon from '../../assets/img/customerIcon.png';
import shoppingIcon from '../../assets/img/shoppingCartIcon.png';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <div>
            {/* ***** Navigation Bar ***** */}
            <header>
                <div className="navigator__row">
                    <nav className="navigator" role="navigation">
                        {/* <div class="navigator__link navigator__link-toggle">
                            <i class="fas fa-bars"></i>
                            </div> */}
                        <ul className="navigator__items">
                            <li className="navigator__item"><a href="/shop" className="navigator__link">Shop</a></li>
                            
                            <li className="navigator__item"><a href="/about" className="navigator__link">About</a></li>
                            
                            <li className="navigator__item"><a href="/search">
                                <img src={searchIcon} title="Search" className="navigator__icon" alt="Search" /></a>
                            </li>
                        </ul>
                        
                        <h1><a href="/">Stickle Brick's</a></h1>
                        
                        <ul className="navigator__items">
                            <li className="navigator__item"><a href="/deal" className="navigator__link">Deals</a></li>
                            
                            <li className="navigator__item"><a href="/login">
                                <img src={customerIcon} title="Account" className="navigator__icon" alt="Customer Account" /></a>
                            </li>

                            <li className="navigator__item"><a href="/cart">
                                <img src={shoppingIcon} title="Shopping Cart" className="navigator__icon" alt="Shopping Cart" /></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    );
}

export default NavBar;
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
                <div className="row">
                    <nav className="nav" role="navigation">
                        {/* <div class="nav__link nav__link-toggle">
                            <i class="fas fa-bars"></i>
                            </div> */}
                        <ul className="nav__items">
                            <li className="nav__item"><a href="#shop" className="nav__link">Shop</a></li>
                            <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                            <li className="nav__item"><a href="#search">
                                <img src= {searchIcon} title="Search" className="nav__icon" alt="Search" /></a>
                            </li>
                        </ul>
                        <h1><a href="#landing-page">Stickle Brick's</a></h1>
                        <ul className="nav__items">
                            <li className="nav__item"><a href="#deal" className="nav__link">Deals</a></li>
                            <li className="nav__item"><a href="#login">
                                <img src= {customerIcon} title="Account" className="nav__icon" alt="Customer Account" /></a>
                            </li>
                            <li className="nav__item"><a href="#cart">
                                <img src={shoppingIcon} title="Shopping Cart" className="nav__icon" alt="Shopping Cart" /></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    );
}

export default NavBar;
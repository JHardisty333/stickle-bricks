import React, { useState } from 'react';
import '../../style.css';
// import searchIcon from '../../assets/img/searchIcon.png';
import customerIcon from '../../assets/img/customerIcon.png';
import shoppingIcon from '../../assets/img/shoppingCartIcon.png';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <div>
            {/* ***** Navigation Bar ***** */}
            <header>
                <div className="navigator-row">
                    <nav className="navigator" role="navigation">
                        
                        <ul className="navigator-items">
                            <li className="navigator-item"><a href="/shop" className="navigator-link">Shop</a></li>
                            
                            <li className="navigator-item"><a href="/about" className="navigator-link">About</a></li>
                            
                            {/* <li className="navigator-item"><a href="/search">
                                <img src={searchIcon} title="Search" className="navigator-icon" alt="Search" /></a>
                            </li> */}
                        </ul>
                        
                        <h1><a href="/">Stickle Brick's</a></h1>
                        
                        <ul className="navigator-items">
                            {/* <li className="navigator-item"><a href="/deal" className="navigator-link">Deals</a></li> */}
                            
                            <li className="navigator-item"><a href="/login">
                                <img src={customerIcon} title="Account" className="navigator-icon" alt="Customer Account" /></a>
                            </li>

                            <li className="navigator-item"><a href="/cart">
                                <img src={shoppingIcon} title="Shopping Cart" className="navigator-icon" alt="Shopping Cart" /></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    );
}

export default NavBar;
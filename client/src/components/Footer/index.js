import React, { useState } from 'react';
import '../../style.css';

const Footer = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* ***** Footer ***** */}
            <footer>
                <div className="foot__row">
                    <nav className="footer" role="navigation">
                        <ul className="foot__items">
                            <li className="foot__item"><a href="#contactUs" className="foot__link">Contact Us</a></li>
                            <li className="foot__item"><a href="#FAQ" className="foot__link">FAQ</a></li>
                            <li className="foot__item"><a href="#shipping" className="foot__link">Terms and Conditions</a></li>
                        </ul>
                    </nav>
                    <div className="foot__logo">
                        <h1 className="logo">Logo</h1>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
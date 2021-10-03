import React, { useState } from 'react';
import '../../style.css';

const Footer = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* ***** Footer ***** */}
            <footer>
                <div className="foot-row">
                    <nav className="footer" role="navigation">
                        <ul className="foot-items">
                            <li className="foot-item"><a href="#contactUs" className="foot-link">Contact Us</a></li>
                            <li className="foot-item"><a href="#FAQ" className="foot-link">FAQ</a></li>
                            <li className="foot-item"><a href="#shipping" className="foot-link">Terms and Conditions</a></li>
                        </ul>
                    </nav>
                    <div>
                        <h1 className="foot-logo">Created by WTF</h1>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
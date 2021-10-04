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
                            <li className="foot-item"><a href="./Contact" className="foot-link">Contact Us</a></li>
                            <li className="foot-item"><a href="./Terms" className="foot-link">Terms and Conditions</a></li>
                            <li className="foot-item"><a href="./Shipping" className="foot-link">Shipping</a></li>
                        </ul>
                    </nav>
                    <div>
                        <h1 className="foot-logo">Created by WTF &copy; 2021</h1>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
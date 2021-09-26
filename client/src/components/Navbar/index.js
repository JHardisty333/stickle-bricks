import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/About' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/Contact' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/Deals' activeStyle>
                        Deals
                    </NavLink>
                    <NavLink to='/Landing' activeStyle>
                        StickleBricks
                    </NavLink>
                    <NavLink to='/Login' activeStyle>
                        Login
                    </NavLink>
                    <NavLink to='/Signup' activeStyle>
                        Sign Up
                    </NavLink>
                    <NavLink to='/Shop' activeStyle>
                        Shop
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;

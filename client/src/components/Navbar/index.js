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
                    <NavLink to='/Shop' activeStyle>
                        Shop
                    </NavLink>
                    <NavLink to='/About' activeStyle>
                        About
                    </NavLink>

                    {/* search button will go here? */}
                    
                    <NavLink to='/Landing' activeStyle>
                        StickleBricks
                    </NavLink>
                    <NavLink to='/Deals' activeStyle>
                        Deals
                    </NavLink>
                   

                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to='/cart'>Cart</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;

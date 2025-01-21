import React from 'react';

import udemy_logo from "../assets/udemy_logo.png";



const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Mobile Navbar */}
            <div className="nav__for__mobile">
                <i className="fa-solid fa-bars hand-burger" style={{ color: '#000000' }}></i>
                <img src={udemy_logo} alt="udemy_logo" className="navbar__logo" />
                <i className="fa-solid fa-cart-shopping cart cart__mobile" style={{ color: '#000000' }}></i>
            </div>

            {/* Desktop Navbar Section 1 */}
            <div className="navbar__s1">
                <i className="fa-solid fa-bars hand-burger" style={{ color: '#000000' }}></i>
                <img src={udemy_logo} alt="udemy_logo" className="navbar__logo" />
            </div>

            {/* Search Bar */}
            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass" id="search" style={{ color: '#585858' }}></i>
                <input
                    type="text"
                    placeholder="Search for anything here. Tech, Business, Art ..."
                    className="navbar__search"
                />
            </div>

            {/* My Learning and Cart */}
            <div className="navbar__s4">
                <p className="navbar__s4__title">My learning</p>
                <div className="navbar__s4__learning_popup">
                    <p>You didn't purchase anything</p>
                </div>
                <i className="fa-solid fa-cart-shopping cart" style={{ color: '#000000' }}></i>
            </div>

            {/* Buttons and Global Icon */}
            <div className="navbar__s3">
                <button className="navbar__s3__btn navbar__s3__btn--padding">Log in</button>
                <button className="navbar__s3__btn navbar__s3__btn--padding navbar__s3__btn--background-black">
                    Sign in
                </button>
                <button className="navbar__s3__btn navbar__s3__btn--internet">
                    <svg
                        width="25px"
                        height="29px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 12C21 10.3431 16.9706 9 12 9C7.02944 9 3 10.3431 3 12M12 21C7.02944 21 3 16.9706 3 12M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

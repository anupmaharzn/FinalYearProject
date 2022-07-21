/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import './header.scss';
import logo from '../../../assets/images/logo3.png';
import loginicon from '../../../assets/images/icon-person.png';
import carticon from '../../../assets/images/icon-shopping.png';
import searchicon from '../../../assets/images/search-icon.png'

const Header = () => {

    const [Header, setHeader] = useState(false);

    const handleHeader = () => {
        if (window.scrollY >= 80) {
            setHeader(true);
        }
        else {
            setHeader(false);
        }
    }
    window.addEventListener('scroll', handleHeader);

    return (
        <header className={Header ? `header scroll-header` : `header`}>
            <nav className="nav ">
                <a href="/#" className="nav__logo"><img alt="logo" src={logo} /></a>

                <div className="nav__searchbar">
                    <span className="searchicon"><img alt="iconimg" className="iconimg" src={searchicon}></img></span>
                    <input className="searchfield" type="text" placeholder="Searching for ..."></input>

                </div>
                <div className="nav__menu">
                    <ul className="nav__menu__list">
                        <li className="nav__items"><a href="/#">Home</a></li>
                        <li className="nav__items"><a href="/#">Products</a></li>
                    </ul>
                </div>

                <div className="nav__icons">
                    <button type="button" className="icon__btn">
                        <img className="iconimg" alt="iconimg" src={loginicon}></img>
                    </button>
                    <button type="button" className="icon__btn">
                        <img className="iconimg" alt="iconimg" src={carticon}></img>
                    </button>
                </div>

            </nav>
        </header>



    )

}


export default Header;
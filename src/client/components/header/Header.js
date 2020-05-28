import React from "react";
import { socials, menuItems } from "./header-data";
import Logo from "../../svg/Logo";
import menuDots from "../../images/nav/menu-dots-opt.svg";
import menuClose from "../../images/nav/menu-close-opt.svg";
import "./header.css";

const Header = ({ mobileMenuOpen, toggleState }) => (
    <header className="header">
        <div className="content-wrap nav">
            <div className="nav-left">
                <div className="logo">
                    <Logo />
                </div>
            </div>
            <div id="navRight" className="nav-right">
                <ul className="social-links">
                    {socials.map((item) => (
                        <li key={item.name}>
                            <img src={item.src} alt={item.name} />
                        </li>
                    ))}
                </ul>
                <button className="menu-toggle" onClick={() => toggleState("mobileMenuOpen")}>
                    <img
                        src={mobileMenuOpen ? menuClose : menuDots}
                        alt={`${mobileMenuOpen ? "close" : "open"} menu`}
                    />
                </button>
                <div className={`menu-pane ${mobileMenuOpen ? "active" : ""}`}>
                    {menuItems.map((item) => (
                        <button key={item.name} className="button has-shadow is-menu-item">
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </header>
);

export default Header;

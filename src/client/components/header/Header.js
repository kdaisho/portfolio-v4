import React from "react";
import { socials, menuItems } from "./headerData";
import Logo from "../../images/nav/Logo";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="app-wrapper nav">
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
                    <div className="menu-pane">
                        {menuItems.map((item) => (
                            <button key={item.name} className="button is-medium has-shadow">
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

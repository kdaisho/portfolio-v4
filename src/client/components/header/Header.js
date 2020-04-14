import React from "react";
import "./header.css";

const Header = props => {
    return (
        <header>
            <div className="app-wrapper nav">
                <div className="nav-left">
                    <div className="logo">logo</div>
                </div>

                <div id="navRight" className="nav-right">
                    <ul className="social-links">
                        {props.socials.map(item => (
                            <li key={item.name}>
                                <img
                                    src={`images/nav/${item.name}.svg`}
                                    alt={item.name}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="menu-pane">
                        {props.menuItems.map(item => (
                            <button key={item.name} className="button">
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

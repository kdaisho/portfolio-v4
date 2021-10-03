import React, { useEffect } from "react";
import { connect } from "react-redux";
import { socials, menuItems } from "./header-data";
import { Logo } from "../../svg/Icons";
import menuDots from "../../images/nav/menu-dots-opt.svg";
import menuClose from "../../images/nav/menu-close-opt.svg";
import changeTheme from "../../actionCreators/changeTheme";
import "./header.css";

const Header = ({ togglePane, openPane, scrollTo, theme, changeTheme }) => {
  useEffect(() => {
    const siteTheme = localStorage.getItem("siteTheme");
    if (siteTheme && siteTheme !== theme) {
      changeTheme(siteTheme);
    }
  }, []);

  const handleTheme = () => {
    const newTheme = theme === "bright" ? "dark" : "bright";
    changeTheme(newTheme);
    localStorage.setItem("siteTheme", newTheme);
  };

  return (
    <header className={`header ${openPane === "menu" ? "high-z-index" : ""}`}>
      <div className="content-wrap nav">
        <div className="nav-left">
          <button className="logo" onClick={() => scrollTo("pageTop")}>
            <Logo />
          </button>
        </div>
        <div id="navRight" className="nav-right">
          <ul className="social-links">
            {socials.map((item) => (
              <li key={item.name} className="social-each">
                <a href={item.url} title={item.name} target="_blank" rel="noopener noreferrer">
                  <img src={item.src} alt={item.name} />
                </a>
              </li>
            ))}
          </ul>
          <button className="menu-toggle outline-button" onClick={() => togglePane("menu")}>
            <img
              src={openPane === "menu" ? menuClose : menuDots}
              alt={`${openPane === "menu" ? "close" : "open"} menu`}
            />
          </button>
          <div className={`menu-pane ${openPane === "menu" ? "active" : ""}`}>
            {menuItems.map((item) => (
              <button
                key={item.name}
                className="button has-shadow is-menu-item"
                onClick={() => scrollTo(item.id)}
              >
                {item.name}
              </button>
            ))}
            <div className="theme-button">
              <button onClick={handleTheme}>{theme === "bright" ? "🌙" : "☀️"}</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ theme }) => ({
  theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (theme) => dispatch(changeTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

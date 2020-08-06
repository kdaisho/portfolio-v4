import React, { useEffect, useRef } from "react";
import { Logo } from "../../svg/Icons";
import { socials } from "../header/header-data";
import "./footer.css";

const Footer = () => {
    const refFooter = useRef();

    useEffect(() => {
        document.addEventListener("scroll", drawLogo, {
            passive: true
        });
    });

    const drawLogo = () => {
        if (refFooter.current.getBoundingClientRect().top + 100 <= window.innerHeight) {
            refFooter.current.classList.add("draw");
            document.removeEventListener("scroll", drawLogo);
        }
    };

    const getCurrentYear = () => {
        const d = new Date();
        return d.getFullYear();
    };

    return (
        <footer className="is-footer" ref={refFooter}>
            <div className="content-wrap">
                <div className="left">
                    <p className="copyright">
                        {" "}
                        &copy; Copyright {getCurrentYear()} daishodesign.com
                    </p>
                    <p>Montreal, QC</p>
                </div>
                <div className="right">
                    <div className="sns">
                        {socials.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                title={item.name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={item.src} className={item.name} alt={item.name} />
                            </a>
                        ))}
                    </div>
                    <Logo />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

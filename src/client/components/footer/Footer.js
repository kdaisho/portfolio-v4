import React, { Component, createRef } from "react";
import { Logo } from "../../svg/Icons";
import { socials } from "../header/header-data";
import "./footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.refFooter = createRef();
    }

    componentDidMount() {
        document.addEventListener("scroll", this.drawLogo, {
            passive: true
        });
    }

    drawLogo = () => {
        if (this.refFooter.current.getBoundingClientRect().top + 100 <= window.innerHeight) {
            this.refFooter.current.classList.add("draw");
            document.removeEventListener("scroll", this.drawLogo);
        }
    };

    getCurrentYear = () => {
        const d = new Date();
        return d.getFullYear();
    };

    render() {
        return (
            <footer className="is-footer" ref={this.refFooter}>
                <div className="content-wrap">
                    <div className="left">
                        <p className="copyright">
                            {" "}
                            &copy; Copyright {this.getCurrentYear()} daishodesign.com
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
    }
}

export default Footer;

import React, { Component, createRef } from "react";
import { Logo } from "../../svg/Icons";
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
                    <div className="logo right">
                        <Logo />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

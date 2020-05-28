import React, { Component } from "react";
import Logo from "../../svg/Logo";
import "./footer.css";

class Footer extends Component {
    state = {};

    getCurrentYear = () => {
        const d = new Date();
        return d.getFullYear();
    };

    render() {
        return (
            <footer className="is-footer">
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

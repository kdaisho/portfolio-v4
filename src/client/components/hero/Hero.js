import React, { Component } from "react";
import { Link } from "@reach/router";
import cat from "../../images/hero/cat-body-opt.svg";
import catAction from "../../images/hero/cat-actions-opt.svg";

class Hero extends Component {
    state = {
        animation: true
    };

    options = {
        passive: true,
        capture: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ animation: false }), 5000);
        window.addEventListener("load", this.handleResize, this.options);
        window.addEventListener("resize", this.handleResize, this.options);
    }

    componentWillUnmount() {
        window.removeEventListener("load", this.handleResize, this.options);
        window.removeEventListener("resize", this.handleResize, this.options);
    }

    handleResize = () =>
        this.setState({
            h: window.innerHeight,
            w: window.innerWidth
        });

    renderGreetings = () => {
        return (
            <div className={`greetings-wrap ${this.state.animation ? "slide" : ""}`}>
                <div className="clip-path"></div>
                <p className="greetings">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                    volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                    viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
                    malesuada erat ut turpis.
                </p>
            </div>
        );
    };

    render() {
        return (
            <section className="is-hero">
                <div className="content-wrap is-side-by-side">
                    <div className="left-side">
                        <div className="typewriter">
                            <h1>Who am I?</h1>
                        </div>
                        <div className="cta-match">
                            <Link to="/match" className="button has-shadow is-large">
                                See Our Match
                            </Link>
                        </div>
                    </div>
                    <div className="right-side" style={{ backgroundImage: `url(${cat})` }}>
                        <div
                            className="sequence"
                            style={{ background: `url(${catAction}) 0 0 no-repeat` }}
                        ></div>
                        {this.state.w >= 769 && this.renderGreetings("red")}
                    </div>
                    {this.state.w <= 768 && this.renderGreetings("green")}
                </div>
            </section>
        );
    }
}

export default Hero;

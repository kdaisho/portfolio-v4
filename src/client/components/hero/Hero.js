import React, { Component } from "react";
import cat from "../../images/hero/cat-body-opt.svg";
import catAction from "../../images/hero/cat-actions-opt.svg";
import "./hero.css";

class Hero extends Component {
    state = {
        animation: true,
        w: window.innerWidth
    };

    options = {
        passive: true,
        capture: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ animation: false }), 5000);
        addEventListener("load", this.handleResize, this.options);
        addEventListener("resize", this.handleResize, this.options);
    }

    componentWillUnmount() {
        window.removeEventListener("load", this.handleResize, this.options);
        window.removeEventListener("resize", this.handleResize, this.options);
    }

    handleResize = () => {
        this.setState({ w: window.innerWidth });
    };

    renderGreetings = () => {
        const years = new Date().getFullYear() - 2014;
        return (
            <div className={`greetings-wrap ${this.state.animation ? "slide" : ""}`}>
                <div className="clip-path"></div>
                <p className="greetings">
                    Hi, my name’s Daisho Komiyama, front-end developer based in Montreal. I’ve been
                    a developer for about 6 years. Passionate about solving problems and building
                    tools that makes our lives easier. I'm not the best coder but I'm an effective
                    developer who ships code regularly.
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
                    </div>
                    <div className="right-side" style={{ backgroundImage: `url(${cat})` }}>
                        <div
                            className="sequence"
                            style={{ background: `url(${catAction}) 0 0 no-repeat` }}
                        ></div>
                        {this.state.w >= 769 && this.renderGreetings()}
                    </div>
                    {this.state.w <= 768 && this.renderGreetings()}
                </div>
            </section>
        );
    }
}

export default Hero;

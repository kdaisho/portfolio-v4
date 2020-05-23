import React, { Component } from "react";
import { Link } from "@reach/router";
import cat from "../../images/hero/cat-single-041.svg";
import catAction from "../../images/hero/cat-action-export-051.svg";
import "./hero.css";

class Hero extends Component {
    state = {
        animation: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ animation: false }), 5000);
    }

    render() {
        return (
            <section className="is-hero">
                <div className="content-wrap is-side-by-side">
                    <div className="left-side">
                        <div className="typewriter">
                            <h1 className="is-text-grey">Who am I?</h1>
                        </div>
                        <div className="cta-match m-t-20 m-b-20">
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
                        <div className={`greetings-wrap ${this.state.animation ? "slide" : ""}`}>
                            <div className="clip-path"></div>
                            <p className="greetings is-text-grey">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                                pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                                turpis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;

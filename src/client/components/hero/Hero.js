import React from "react";
import { Link } from "@reach/router";
import cat from "../../images/hero/cat-single-041.svg";
import catAction from "../../images/hero/cat-action-export-051.svg";
import "./hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="typewriter">
                <h1 className="is-text-grey">Who am I?</h1>
            </div>

            <div
                className="animation-container"
                style={{ background: `url(${cat}) center no-repeat` }}
            >
                <div
                    className="sequence"
                    style={{ background: `url(${catAction}) 0 0 no-repeat` }}
                ></div>
                <div className="greetings-wrap">
                    <div className="clip-path"></div>
                    <p className="greetings is-text-grey">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
                        urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </p>
                </div>
            </div>

            <div className="cta-match m-t-20 m-b-20">
                <Link to="/match" className="button has-shadow is-large">
                    See Our Match
                </Link>
            </div>
        </section>
    );
};

export default Hero;

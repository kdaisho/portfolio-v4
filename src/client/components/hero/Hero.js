import React from "react";
import { Link } from "@reach/router";
import cat from "../../images/hero/cat-single-041.svg";
import catAction from "../../images/hero/cat-action-export-051.svg";
import "./hero.css";

const Hero = () => {
    return (
        <section className="hero-component">
            <div className="typewriter">
                <h1>Who am I?</h1>
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
                    <p className="greetings">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna nibh, viverra
                        non, semper suscipit, posuere a, pede.
                    </p>
                </div>
            </div>

            <div className="matchSection">
                <Link to="/match">See Our Match</Link>
            </div>
        </section>
    );
};

export default Hero;

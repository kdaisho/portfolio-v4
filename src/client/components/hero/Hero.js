import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import cat from "../../images/hero/cat-body-opt.svg";
import catAction from "../../images/hero/cat-actions-opt.svg";
import "./hero.css";

const Hero = ({ theme }) => {
  const [animation, setAnimation] = useState(true);
  const [innerWidth, setInnerWidth] = useState(0);
  const options = {
    passive: true,
    capture: true,
  };

  useEffect(() => {
    setTimeout(() => setAnimation(false), 5000);
    addEventListener("load", handleResize, options);
    addEventListener("resize", handleResize, options);

    return () => {
      window.removeEventListener("load", handleResize, options);
      window.removeEventListener("resize", handleResize, options);
    };
  }, [window.innerWidth]);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  const renderGreetings = () => {
    return (
      <div className={`greetings-wrap ${animation ? "slide" : ""}`}>
        <div className="clip-path"></div>
        <p className="greetings">
          Hi, my name’s Daisho Komiyama and I'm a front-end developer based in Montreal. I’ve been a
          developer for about {new Date().getFullYear() - 2014} years. Passionate about solving
          problems and building tools that makes our lives easier. I'm an effective developer who
          ships code regularly.
        </p>
      </div>
    );
  };

  return (
    <section id="pageTop" className={`is-hero ${theme}`}>
      <div className={`content-wrap is-side-by-side ${theme}`}>
        <div className="left-side">
          <div className="typewriter">
            <h1>Who am I?</h1>
          </div>
        </div>
        <div className="right-side" style={{ backgroundImage: `url(${cat})` }}>
          <div className="sequence" style={{ background: `url(${catAction}) 0 0 no-repeat` }}></div>
          {innerWidth >= 769 && renderGreetings()}
        </div>
        {innerWidth <= 768 && renderGreetings()}
      </div>
    </section>
  );
};

const mapStateToProps = ({ theme }) => ({
  theme,
});

export default connect(mapStateToProps)(Hero);

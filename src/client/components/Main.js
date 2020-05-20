import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Education from "./education/Education";
import Technologies from "./technologies/Technologies";
import Projects from "./projects/Projects";

const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Education />
            <Technologies />
            <Projects />
        </React.Fragment>
    );
};

export default Main;

import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Education from "./education/Education";
import Technologies from "./technologies/Technologies";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Education />
            <Technologies />
            <Projects />
            <Contact />
        </React.Fragment>
    );
};

export default Main;

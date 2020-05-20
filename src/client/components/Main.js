import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Education from "./education/Education";
import Technologies from "./technologies/Technologies";

const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Education />
            <Technologies />
        </React.Fragment>
    );
};

export default Main;

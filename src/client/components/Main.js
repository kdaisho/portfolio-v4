import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Education from "./education/Education";
import "./main.css";

const Main = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Hero />
            <Education />
        </div>
    );
};

export default Main;

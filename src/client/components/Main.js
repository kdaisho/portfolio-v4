import React, { Component } from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Education from "./education/Education";
import Technologies from "./technologies/Technologies";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import "./main.css";

class Main extends Component {
    state = {
        mobileMenuOpen: false
    };

    toggleState = (state) => {
        this.setState((prevState) => ({
            [state]: !prevState[state]
        }));
    };

    render() {
        return (
            <React.Fragment>
                {this.state.mobileMenuOpen && (
                    <div
                        className={`backdrop ${this.state.mobileMenuOpen ? "active" : ""}`}
                        onClick={() => this.toggleState("mobileMenuOpen")}
                    ></div>
                )}
                <Header toggleState={this.toggleState} mobileMenuOpen={this.state.mobileMenuOpen} />
                <Hero />
                <Education />
                <Technologies />
                <Projects />
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;

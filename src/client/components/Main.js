import React, { Component } from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Education from "./education/Education";
import Technologies from "./technologies/Technologies";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

class Main extends Component {
    state = {
        mobileMenuOpen: false
    };

    toggleState = (state) => {
        console.log("ST", state);
        this.setState((prevState) => ({
            [state]: !prevState[state]
        }));
    };

    render() {
        return (
            <React.Fragment>
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

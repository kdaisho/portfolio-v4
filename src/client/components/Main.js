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
        openPane: ""
    };

    togglePane = (name) => {
        this.setState({ openPane: this.state.openPane ? "" : name }, () =>
            console.log("TOO::", this.state.openPane)
        );
    };

    render() {
        return (
            <div className="component-wrap">
                {this.state.openPane && (
                    <div
                        className="backdrop"
                        onClick={() => this.togglePane(this.state.openPane)}
                    ></div>
                )}
                <Header togglePane={this.togglePane} openPane={this.state.openPane} />
                <Hero />
                <Education />
                <Technologies togglePane={this.togglePane} openPane={this.state.openPane} />
                <Projects togglePane={this.togglePane} openPane={this.state.openPane} />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Main;
